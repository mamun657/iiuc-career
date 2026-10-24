import { useState, useRef, useCallback, useEffect } from 'react';

function stripMarkdown(text) {
  return (text || '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/#{1,6}\s/g, '')
    .replace(/[`~_]/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^[-*•]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/\n{2,}/g, '. ')
    .replace(/\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export default function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const resumeTimerRef = useRef(null);

  const isSupported =
    typeof window !== 'undefined' && 'speechSynthesis' in window;

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current) {
      clearInterval(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const startResumeTimer = useCallback(() => {
    clearResumeTimer();
    resumeTimerRef.current = setInterval(() => {
      if (speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.pause();
        speechSynthesis.resume();
      }
    }, 10000);
  }, [clearResumeTimer]);

  const findVoice = useCallback((lang = 'en-US') => {
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return null;
    const langPrefix = lang.split('-')[0];
    return (
      voices.find((v) => v.lang === lang) ||
      voices.find((v) => v.lang.startsWith(langPrefix)) ||
      voices.find((v) => v.default) ||
      voices[0]
    );
  }, []);

  const resetState = useCallback(() => {
    setIsSpeaking(false);
    setIsPaused(false);
    setActiveId(null);
    clearResumeTimer();
  }, [clearResumeTimer]);

  const speak = useCallback(
    (text, id, lang = 'en-US') => {
      if (!isSupported) return;

      speechSynthesis.cancel();
      clearResumeTimer();

      const cleanText = stripMarkdown(text);
      if (!cleanText) return;

      const utterance = new SpeechSynthesisUtterance(cleanText);
      const voice = findVoice(lang);
      if (voice) utterance.voice = voice;
      utterance.lang = lang;
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      utterance.onstart = () => {
        setIsSpeaking(true);
        setIsPaused(false);
        setActiveId(id);
      };

      utterance.onend = resetState;
      utterance.onerror = (e) => {
        if (e.error !== 'canceled') resetState();
      };

      startResumeTimer();
      speechSynthesis.speak(utterance);
    },
    [isSupported, findVoice, clearResumeTimer, resetState, startResumeTimer]
  );

  const pause = useCallback(() => {
    if (isSupported && speechSynthesis.speaking) {
      speechSynthesis.pause();
      setIsPaused(true);
      clearResumeTimer();
    }
  }, [isSupported, clearResumeTimer]);

  const resume = useCallback(() => {
    if (isSupported && speechSynthesis.paused) {
      speechSynthesis.resume();
      setIsPaused(false);
      startResumeTimer();
    }
  }, [isSupported, startResumeTimer]);

  const stop = useCallback(() => {
    if (isSupported) {
      speechSynthesis.cancel();
      resetState();
    }
  }, [isSupported, resetState]);

  useEffect(() => {
    return () => {
      if (isSupported) speechSynthesis.cancel();
      clearResumeTimer();
    };
  }, [isSupported, clearResumeTimer]);

  return { isSpeaking, isPaused, activeId, isSupported, speak, pause, resume, stop };
}
