const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
const geminiApiKey = process.env.GEMINI_API_KEY;
const hasGeminiApiKey = Boolean(
  geminiApiKey && !['your-real-key-here', 'your-gemini-api-key'].includes(geminiApiKey.trim())
);

if (isProduction && !process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is required in production.');
}

if (isProduction && !process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI is required in production.');
}

module.exports = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'local-dev-jwt-secret',
  mongodbUri: process.env.MONGODB_URI,
  nodeEnv,
  geminiApiKey: hasGeminiApiKey ? geminiApiKey.trim() : null,
  geminiModel: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
};
