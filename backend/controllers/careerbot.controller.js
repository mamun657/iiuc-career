const { GoogleGenAI } = require('@google/genai');
const ChatSession = require('../models/ChatSession');
const ChatMessage = require('../models/ChatMessage');
const User = require('../models/User');
const config = require('../config/env');
const { getBotResponse } = require('../utils/careerBot');

const gemini = config.geminiApiKey
  ? new GoogleGenAI({ apiKey: config.geminiApiKey })
  : null;
const GEMINI_TIMEOUT_MS = 30_000;

/**
 * Generate system prompt with user context
 */
const generateSystemPrompt = (user) => {
  const skills = user.skills?.map(s => s.name).join(', ') || 'Not specified';
  
  return `You are CareerBot, an AI-powered career guidance assistant for NextCareer platform.

User profile:
- Name: ${user.name || 'User'}
- Track: ${user.preferredTrack || 'Not specified'}
- Experience level: ${user.experienceLevel || 'Fresher'}
- Skills: ${skills}
- Education: ${user.education || 'Not specified'}

Rules:
1. Respond in BOTH English and Bengali.
2. English response first.
3. Bengali response under a 'বাংলা:' heading.
4. Be practical, concise, and supportive.
5. Use step-by-step guidance when relevant.
6. Never guarantee job placement or outcomes.
7. Remember previous messages in this conversation.
8. Tailor advice strictly to the user profile.
9. If asked about jobs or skills, relate it to their current track and level.
10. Provide actionable advice that can be implemented immediately.

Tone:
Friendly, professional, mentor-like. Be encouraging but realistic.`;
};

/**
 * Create or get active chat session
 */
exports.getOrCreateSession = async (req, res) => {
  try {
    const userId = req.user._id;
    
    // Find active session or create new one
    let session = await ChatSession.findOne({ userId, isActive: true })
      .sort({ createdAt: -1 });
    
    if (!session) {
      session = await ChatSession.create({ userId });
    }
    
    res.json({ sessionId: session._id });
  } catch (error) {
    console.error('Session error:', error);
    res.status(500).json({ message: 'Failed to create session' });
  }
};

/**
 * Get all sessions for a user
 */
exports.getSessions = async (req, res) => {
  try {
    const userId = req.user._id;
    
    const sessions = await ChatSession.find({ userId })
      .sort({ createdAt: -1 })
      .limit(20);
    
    res.json(sessions);
  } catch (error) {
    console.error('Get sessions error:', error);
    res.status(500).json({ message: 'Failed to fetch sessions' });
  }
};

/**
 * Create new chat session
 */
exports.createSession = async (req, res) => {
  try {
    const userId = req.user._id;
    
    // Mark previous sessions as inactive
    await ChatSession.updateMany(
      { userId, isActive: true },
      { isActive: false }
    );
    
    const session = await ChatSession.create({ userId });
    
    res.json({ sessionId: session._id });
  } catch (error) {
    console.error('Create session error:', error);
    res.status(500).json({ message: 'Failed to create session' });
  }
};

/**
 * Get chat history for a session
 */
exports.getHistory = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const userId = req.user._id;
    
    // Verify session belongs to user
    const session = await ChatSession.findOne({ _id: sessionId, userId });
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
    
    const messages = await ChatMessage.find({ sessionId })
      .sort({ createdAt: 1 })
      .select('role content createdAt');
    
    res.json({ messages, session });
  } catch (error) {
    console.error('History error:', error);
    res.status(500).json({ message: 'Failed to fetch history' });
  }
};

/**
 * Send message and get AI response
 */
exports.chat = async (req, res) => {
  try {
    const { message, sessionId } = req.body;
    const userId = req.user._id;
    
    if (!message?.trim()) {
      return res.status(400).json({ message: 'Message is required' });
    }
    
    // Get or create session
    let session;
    if (sessionId) {
      session = await ChatSession.findOne({ _id: sessionId, userId });
    }
    
    if (!session) {
      session = await ChatSession.create({ userId });
    }
    
    // Get user profile for context
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Save user message
    const userMessage = await ChatMessage.create({
      sessionId: session._id,
      role: 'user',
      content: message.trim(),
    });
    
    // Get conversation history (last 20 messages for context)
    const history = await ChatMessage.find({ sessionId: session._id })
      .sort({ createdAt: 1 })
      .limit(20)
      .select('role content');
    
    // Build contents array for Gemini
    const systemPrompt = generateSystemPrompt(user);
    const contents = [
      ...history.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }],
      })),
    ];
    
    let assistantContent;
    if (gemini) {
      const responsePromise = gemini.models.generateContent({
        model: config.geminiModel,
        contents,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
          maxOutputTokens: 2048,
          topP: 0.9,
        },
      });
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(Object.assign(new Error('Gemini request timed out.'), {
          code: 'GEMINI_TIMEOUT',
        })), GEMINI_TIMEOUT_MS);
      });
      const completion = await Promise.race([responsePromise, timeoutPromise]);
      assistantContent = completion.text;
    } else {
      assistantContent = getBotResponse(message).answer;
    }

    assistantContent = assistantContent ||
      'I apologize, but I was unable to generate a response. Please try again.';
    
    // Save assistant message
    const assistantMessage = await ChatMessage.create({
      sessionId: session._id,
      role: 'assistant',
      content: assistantContent,
    });
    
    // Update session title if it's the first message
    if (history.length <= 1) {
      const title = message.trim().slice(0, 50) + (message.length > 50 ? '...' : '');
      await ChatSession.findByIdAndUpdate(session._id, { title });
    }
    
    res.json({
      sessionId: session._id,
      userMessage: {
        _id: userMessage._id,
        role: 'user',
        content: userMessage.content,
        createdAt: userMessage.createdAt,
      },
      assistantMessage: {
        _id: assistantMessage._id,
        role: 'assistant',
        content: assistantMessage.content,
        createdAt: assistantMessage.createdAt,
      },
    });
  } catch (error) {
    console.error('Chat error:', error);
    
    if (error.status === 429) {
      return res.status(429).json({ message: 'Rate limit exceeded. Please try again in a moment.' });
    }
    if (error.code === 'GEMINI_TIMEOUT') {
      return res.status(504).json({ message: 'The AI service took too long to respond. Please try again.' });
    }
    if (error.status === 401 || error.status === 403) {
      return res.status(503).json({ message: 'Gemini authentication failed. Check GEMINI_API_KEY in backend/.env.' });
    }

    res.status(502).json({ message: 'The AI service is temporarily unavailable. Please try again.' });
  }
};

/**
 * Delete a chat session
 */
exports.deleteSession = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const userId = req.user._id;
    
    const session = await ChatSession.findOneAndDelete({ _id: sessionId, userId });
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
    
    // Delete all messages in the session
    await ChatMessage.deleteMany({ sessionId });
    
    res.json({ message: 'Session deleted' });
  } catch (error) {
    console.error('Delete session error:', error);
    res.status(500).json({ message: 'Failed to delete session' });
  }
};
