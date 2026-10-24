import { useState, useRef, useCallback, useEffect } from 'react';

export default function useSpeechRecognition({ lang = 'en-US' } = {}) {
  const [isListening, setIsListening] = useState(false);
  const [result, setResult] = useState({ text: '', seq: 0 });
  const [error, setError] = useState(null);
  const recognitionRef = useRef(null);

  const isSupported =
    typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  const start = useCallback(() => {
    if (!isSupported) {
      setError('Speech recognition is not supported in this browser.');
      return;
    }

    setError(null);

    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SR();
    recognition.lang = lang;
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event) => {
      const text = event.results[0]?.[0]?.transcript || '';
      if (text.trim()) {
        setResult((prev) => ({ text, seq: prev.seq + 1 }));
      }
    };

    recognition.onerror = (event) => {
      setIsListening(false);
      const messages = {
        'not-allowed': 'Microphone permission denied. Please allow access in browser settings.',
        'no-speech': 'No speech detected. Please try again.',
        'network': 'Network error. Check your internet connection.',
        'audio-capture': 'No microphone found. Please connect a microphone.',
        'service-not-allowed': 'Speech service not available.',
      };
      if (event.error !== 'aborted') {
        setError(messages[event.error] || `Recognition error: ${event.error}`);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      setIsListening(false);
      setError('Failed to start speech recognition.');
    }
  }, [lang, isSupported]);

  const stop = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
        recognitionRef.current = null;
      }
    };
  }, []);

  return { isListening, result, error, isSupported, start, stop, clearError };
}
