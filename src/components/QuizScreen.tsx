import { useState, useCallback } from 'react';
import type { Language, QuizSession } from '../types';
import FlipCard from './FlipCard';
import Confetti from './Confetti';

interface Props {
  session: QuizSession;
  language: Language;
  onAnswer: (questionId: string, optionId: string) => void;
  onNext: () => void;
  onFinish: () => void;
}

export default function QuizScreen({ session, language, onAnswer, onNext, onFinish }: Props) {
  const isAr = language === 'ar';
  const [showConfetti, setShowConfetti] = useState(false);

  const currentQuestion = session.questions[session.currentIndex];
  const isLastQuestion = session.currentIndex === session.questions.length - 1;

  const topicTitle = isAr ? session.topicTitleArabic : session.topicTitleEnglish;

  const handleAnswer = useCallback(
    (optionId: string) => {
      onAnswer(currentQuestion.id, optionId);
      if (optionId === currentQuestion.correctOptionId) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2800);
      }
    },
    [currentQuestion, onAnswer],
  );

  const handleNext = useCallback(() => {
    if (isLastQuestion) {
      onFinish();
    } else {
      onNext();
    }
  }, [isLastQuestion, onFinish, onNext]);

  return (
    <main
      className="flex-1 bg-gradient-to-b from-navy-50 to-slate-100 hex-pattern-light py-6 sm:py-8 px-4 screen-enter"
      id="main-content"
      lang={language}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <Confetti active={showConfetti} />

      <div className="max-w-2xl mx-auto">
        {/* Topic bar */}
        <div className={`flex items-center gap-2 mb-4 ${isAr ? 'flex-row-reverse font-arabic' : ''}`}>
          <span className="bg-navy-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {topicTitle}
          </span>
          {session.isFullChallenge && (
            <span className="bg-forest-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              {isAr ? 'التحدي الكامل' : 'Full Challenge'}
            </span>
          )}
        </div>

        {/* Flip card */}
        <FlipCard
          key={currentQuestion.id}
          question={currentQuestion}
          questionNumber={session.currentIndex + 1}
          totalQuestions={session.questions.length}
          topicTitle={topicTitle}
          language={language}
          onAnswer={handleAnswer}
          onNext={handleNext}
          isLastQuestion={isLastQuestion}
        />
      </div>
    </main>
  );
}
