import { useState, useCallback, useEffect } from 'react';
import type { Language, AppScreen, QuizSession } from './types';
import { TOPICS, QUESTIONS_PER_TOPIC, FULL_CHALLENGE_QUESTIONS, INACTIVITY_TIMEOUT_SECONDS, COUNTDOWN_SECONDS } from './config/appConfig';
import { ALL_QUESTIONS, getQuestionsByTopic } from './data/questions';
import { prepareQuestions } from './utils/shuffle';
import { calculateScore } from './utils/scoring';
import { useStats } from './hooks/useStats';
import { useInactivity } from './hooks/useInactivity';

import Header from './components/Header';
import LanguageSelectScreen from './components/LanguageSelectScreen';
import WelcomeScreen from './components/WelcomeScreen';
import TopicSelectScreen from './components/TopicSelectScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import ContactModal from './components/ContactModal';
import PinModal from './components/PinModal';
import StatsModal from './components/StatsModal';
import InactivityOverlay from './components/InactivityOverlay';

const LOGO_TAP_THRESHOLD = 5;

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [screen, setScreen] = useState<AppScreen>('language');
  const [session, setSession] = useState<QuizSession | null>(null);

  // Modal states
  const [showContact, setShowContact] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [showStats, setShowStats] = useState(false);

  // Logo tap counter for stats access
  const [logoTaps, setLogoTaps] = useState(0);
  const logoTapTimerRef = { current: 0 as ReturnType<typeof setTimeout> };

  // Inactivity
  const [countdown, setCountdown] = useState(-1);
  const isInactivityActive = screen !== 'language';

  const { stats, recordSession, clearStats } = useStats();

  // ─── Inactivity handling ──────────────────────────────────────────────────
  const handleReset = useCallback(() => {
    setCountdown(-1);
    setSession(null);
    setScreen('welcome');
    setShowContact(false);
    setShowPin(false);
    setShowStats(false);
  }, []);

  const handleCountdown = useCallback((remaining: number) => {
    setCountdown(remaining);
  }, []);

  const { cancel: cancelInactivity } = useInactivity({
    timeoutMs: INACTIVITY_TIMEOUT_SECONDS * 1000,
    countdownMs: COUNTDOWN_SECONDS * 1000,
    onCountdown: handleCountdown,
    onReset: handleReset,
    enabled: isInactivityActive && !showContact && !showPin && !showStats,
  });

  // Hide overlay when user acts
  const handleStayActive = useCallback(() => {
    setCountdown(-1);
    cancelInactivity();
  }, [cancelInactivity]);

  // ─── Logo tap handler ─────────────────────────────────────────────────────
  const handleLogoTap = useCallback(() => {
    clearTimeout(logoTapTimerRef.current);
    setLogoTaps((prev) => {
      const next = prev + 1;
      if (next >= LOGO_TAP_THRESHOLD) {
        setShowPin(true);
        return 0;
      }
      logoTapTimerRef.current = setTimeout(() => setLogoTaps(0), 3000);
      return next;
    });
  }, []);

  // Clean up timer on unmount
  useEffect(() => {
    return () => clearTimeout(logoTapTimerRef.current);
  }, []);

  // Update document lang + dir
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // ─── Language selection ───────────────────────────────────────────────────
  const handleLanguageSelect = useCallback((lang: Language) => {
    setLanguage(lang);
    setScreen('welcome');
  }, []);

  // ─── Navigation helpers ───────────────────────────────────────────────────
  const goHome = useCallback(() => {
    setSession(null);
    setScreen('welcome');
  }, []);

  const goTopics = useCallback(() => {
    setSession(null);
    setScreen('topics');
  }, []);

  // ─── Start quiz for a topic ───────────────────────────────────────────────
  const startTopic = useCallback(
    (topicId: string) => {
      const topic = TOPICS.find((t) => t.id === topicId);
      if (!topic) return;

      const rawQuestions = getQuestionsByTopic(topicId);
      const prepared = prepareQuestions(rawQuestions, QUESTIONS_PER_TOPIC);

      const newSession: QuizSession = {
        topicId,
        topicTitleEnglish: topic.titleEnglish,
        topicTitleArabic: topic.titleArabic,
        isFullChallenge: false,
        questions: prepared,
        currentIndex: 0,
        userAnswers: {},
      };

      setSession(newSession);
      setScreen('quiz');

      // Record topic selection
      recordSession(topicId, 0, 0);
    },
    [recordSession],
  );

  // ─── Start full challenge ─────────────────────────────────────────────────
  const startFullChallenge = useCallback(() => {
    const prepared = prepareQuestions(ALL_QUESTIONS, FULL_CHALLENGE_QUESTIONS);

    const newSession: QuizSession = {
      topicId: 'full',
      topicTitleEnglish: 'Full Challenge',
      topicTitleArabic: 'التحدي الكامل',
      isFullChallenge: true,
      questions: prepared,
      currentIndex: 0,
      userAnswers: {},
    };

    setSession(newSession);
    setScreen('quiz');
    recordSession('full', 0, 0);
  }, [recordSession]);

  // ─── Quiz answer handler ──────────────────────────────────────────────────
  const handleAnswer = useCallback((questionId: string, optionId: string) => {
    setSession((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        userAnswers: { ...prev.userAnswers, [questionId]: optionId },
      };
    });
  }, []);

  // ─── Advance to next question ─────────────────────────────────────────────
  const handleNextQuestion = useCallback(() => {
    setSession((prev) => {
      if (!prev) return prev;
      return { ...prev, currentIndex: prev.currentIndex + 1 };
    });
  }, []);

  // ─── Finish quiz → record stats then go to result ─────────────────────────
  const handleFinishQuiz = useCallback(() => {
    if (!session) return;

    const correct = calculateScore(session.userAnswers, session.questions);
    const incorrect = session.questions.length - correct;

    // Overwrite the initial placeholder session record with real scores
    recordSession(session.topicId, correct, incorrect);

    setScreen('result');
  }, [session, recordSession]);

  // ─── Retry same quiz ──────────────────────────────────────────────────────
  const handleRetry = useCallback(() => {
    if (!session) return;
    if (session.isFullChallenge) {
      startFullChallenge();
    } else {
      startTopic(session.topicId);
    }
  }, [session, startFullChallenge, startTopic]);

  // ─── Render ───────────────────────────────────────────────────────────────
  const showHeader = screen !== 'language';

  return (
    <div
      className={`min-h-screen flex flex-col bg-slate-50 ${language === 'ar' ? 'font-tajawal' : 'font-poppins'}`}
      lang={language}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {showHeader && (
        <Header
          language={language}
          onLanguageChange={setLanguage}
          onReset={goHome}
          onLogoTap={handleLogoTap}
          currentScreen={screen}
        />
      )}

      {/* Logo tap hint */}
      {logoTaps > 0 && logoTaps < LOGO_TAP_THRESHOLD && (
        <div
          className="fixed top-20 left-1/2 -translate-x-1/2 bg-navy-800 text-white text-xs px-3 py-1.5 rounded-full z-30 opacity-80"
          aria-live="polite"
        >
          {LOGO_TAP_THRESHOLD - logoTaps} more {language === 'ar' ? 'نقرات' : 'taps'}
        </div>
      )}

      {/* Screens */}
      {screen === 'language' && (
        <LanguageSelectScreen onSelect={handleLanguageSelect} />
      )}

      {screen === 'welcome' && (
        <WelcomeScreen language={language} onStart={goTopics} />
      )}

      {screen === 'topics' && (
        <TopicSelectScreen
          language={language}
          onSelectTopic={startTopic}
          onFullChallenge={startFullChallenge}
        />
      )}

      {screen === 'quiz' && session && (
        <QuizScreen
          session={session}
          language={language}
          onAnswer={handleAnswer}
          onNext={handleNextQuestion}
          onFinish={handleFinishQuiz}
        />
      )}

      {screen === 'result' && session && (
        <ResultScreen
          session={session}
          language={language}
          onRetry={handleRetry}
          onTryAnotherTopic={goTopics}
          onFullChallenge={startFullChallenge}
          onHome={goHome}
          onShowContact={() => setShowContact(true)}
        />
      )}

      {/* Footer */}
      {showHeader && (
        <footer className="bg-navy-900 text-navy-400 text-center py-2 text-xs">
          <p className={language === 'ar' ? 'font-arabic' : ''}>
            {language === 'ar'
              ? 'إدارة المختبرات الطبية — مستشفى الملك فهد للقوات المسلحة — جدة، المملكة العربية السعودية'
              : 'Medical Laboratory Department — King Fahd Armed Forces Hospital — Jeddah, Saudi Arabia'}
          </p>
        </footer>
      )}

      {/* Modals */}
      {showContact && (
        <ContactModal language={language} onClose={() => setShowContact(false)} />
      )}

      {showPin && (
        <PinModal
          language={language}
          onSuccess={() => { setShowPin(false); setShowStats(true); }}
          onClose={() => setShowPin(false)}
        />
      )}

      {showStats && (
        <StatsModal
          language={language}
          stats={stats}
          onClear={clearStats}
          onClose={() => setShowStats(false)}
        />
      )}

      {/* Inactivity overlay */}
      {countdown > 0 && (
        <InactivityOverlay
          language={language}
          countdown={countdown}
          onStay={handleStayActive}
        />
      )}
    </div>
  );
}
