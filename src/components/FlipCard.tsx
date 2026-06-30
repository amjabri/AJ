import { useState, useRef, useEffect } from 'react';
import type { Language, Question } from '../types';

interface Props {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  topicTitle: string;
  language: Language;
  onAnswer: (optionId: string) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

export default function FlipCard({
  question,
  questionNumber,
  totalQuestions,
  topicTitle,
  language,
  onAnswer,
  onNext,
  isLastQuestion,
}: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [minHeight, setMinHeight] = useState(0);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const isAr = language === 'ar';
  const isCorrect = selectedId === question.correctOptionId;
  const progressPct = ((questionNumber - 1) / totalQuestions) * 100;

  // Reset state when question changes
  useEffect(() => {
    setSelectedId(null);
    setIsFlipped(false);
    setMinHeight(0);
  }, [question.id]);

  // Ensure card is tall enough to show both faces after mount
  useEffect(() => {
    const h1 = frontRef.current?.scrollHeight ?? 0;
    const h2 = backRef.current?.scrollHeight ?? 0;
    setMinHeight(Math.max(h1, h2, 300));
  }, [question.id, selectedId, isFlipped]);

  const handleOptionClick = (optionId: string) => {
    if (selectedId) return; // locked after first answer
    setSelectedId(optionId);
    onAnswer(optionId);
    // Small delay so user sees button press before flip
    setTimeout(() => setIsFlipped(true), 300);
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div
      className="flip-card-perspective w-full"
      style={{ minHeight: minHeight || 340 }}
      role="region"
      aria-label={isAr ? `سؤال ${questionNumber} من ${totalQuestions}` : `Question ${questionNumber} of ${totalQuestions}`}
    >
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`} style={{ minHeight: minHeight || 340 }}>

        {/* ── FRONT: Question ─────────────────────────────────────────────── */}
        <div
          ref={frontRef}
          className="flip-card-face bg-white rounded-3xl shadow-2xl overflow-hidden"
          aria-hidden={isFlipped}
        >
          {/* Progress */}
          <div className="bg-navy-800 px-5 pt-4 pb-3">
            <div className={`flex items-center justify-between mb-2 ${isAr ? 'flex-row-reverse font-arabic' : ''}`}>
              <span className="text-navy-200 text-xs font-medium">{topicTitle}</span>
              <span className="text-white text-xs font-semibold">
                {isAr ? `${questionNumber} من ${totalQuestions}` : `${questionNumber} of ${totalQuestions}`}
              </span>
            </div>
            {/* Progress bar */}
            <div className="bg-navy-700 rounded-full h-2" role="progressbar" aria-valuenow={questionNumber - 1} aria-valuemin={0} aria-valuemax={totalQuestions}>
              <div
                className="bg-forest-400 h-2 rounded-full progress-bar-fill"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Question body */}
          <div className="p-5 sm:p-6">
            <div className={`mb-5 ${isAr ? 'text-right font-arabic' : ''}`}>
              <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-700 rounded-full px-3 py-1 text-xs font-semibold mb-3">
                <span>❓</span>
                <span>{isAr ? `السؤال ${questionNumber}` : `Question ${questionNumber}`}</span>
              </div>
              <p className="text-navy-900 font-semibold text-base sm:text-lg leading-relaxed">
                {isAr ? question.questionArabic : question.questionEnglish}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3" role="group" aria-label={isAr ? 'خيارات الإجابة' : 'Answer options'}>
              {question.options.map((option, idx) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  disabled={!!selectedId}
                  className={`
                    w-full flex items-start gap-3 rounded-xl border-2 px-4 py-3 sm:py-4
                    text-left rtl:text-right transition-all
                    focus-visible:ring-4 focus-visible:ring-navy-400
                    ${isAr ? 'flex-row-reverse font-arabic' : ''}
                    ${selectedId
                      ? 'cursor-default opacity-60 border-navy-200 bg-navy-50 text-navy-500'
                      : 'border-navy-200 bg-white text-navy-800 hover:border-navy-500 hover:bg-navy-50 hover:shadow-md active:scale-[0.98] cursor-pointer'
                    }
                  `}
                  aria-label={`${optionLabels[idx]}: ${isAr ? option.textArabic : option.textEnglish}`}
                >
                  <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold border-2 mt-0.5
                    ${selectedId ? 'border-navy-300 bg-navy-100 text-navy-500' : 'border-navy-400 bg-navy-100 text-navy-700'}`}>
                    {optionLabels[idx]}
                  </span>
                  <span className="leading-snug text-sm sm:text-base">
                    {isAr ? option.textArabic : option.textEnglish}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── BACK: Result ─────────────────────────────────────────────────── */}
        <div
          ref={backRef}
          className={`flip-card-face flip-card-back rounded-3xl shadow-2xl overflow-hidden ${
            isCorrect
              ? 'bg-gradient-to-b from-forest-50 to-white'
              : 'bg-gradient-to-b from-blue-50 to-white'
          }`}
          aria-hidden={!isFlipped}
        >
          {/* Result header */}
          <div className={`px-5 pt-5 pb-4 ${isCorrect ? 'bg-forest-600' : 'bg-navy-700'}`}>
            <div className={`flex items-center gap-3 ${isAr ? 'flex-row-reverse font-arabic' : ''}`}>
              <span className="text-3xl" aria-hidden="true">{isCorrect ? '✅' : 'ℹ️'}</span>
              <div className={isAr ? 'text-right' : ''}>
                <p className="text-white font-bold text-base sm:text-lg">
                  {isCorrect
                    ? (isAr ? 'إجابة صحيحة! تفكير بحثي ممتاز.' : 'Correct! Excellent research thinking.')
                    : (isAr ? 'ليست الإجابة الصحيحة. دعنا نتعرف على الإجابة الصحيحة.' : 'Not quite. Let us review the correct answer.')}
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6 space-y-4">
            {/* Selected answer */}
            {selectedId && (
              <div className={`${isAr ? 'text-right font-arabic' : ''}`}>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-400 mb-1">
                  {isAr ? 'إجابتك' : 'Your answer'}
                </p>
                <div className={`flex items-start gap-2 rounded-xl border-2 px-3 py-2.5
                  ${isCorrect ? 'border-forest-400 bg-forest-50' : 'border-red-300 bg-red-50'}
                  ${isAr ? 'flex-row-reverse' : ''}`}>
                  <span className="text-base mt-0.5" aria-hidden="true">{isCorrect ? '✅' : '❌'}</span>
                  <p className={`text-sm font-medium ${isCorrect ? 'text-forest-800' : 'text-red-800'}`}>
                    {isAr
                      ? question.options.find((o) => o.id === selectedId)?.textArabic
                      : question.options.find((o) => o.id === selectedId)?.textEnglish}
                  </p>
                </div>
              </div>
            )}

            {/* Correct answer (if wrong) */}
            {!isCorrect && (
              <div className={`${isAr ? 'text-right font-arabic' : ''}`}>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-400 mb-1">
                  {isAr ? 'الإجابة الصحيحة' : 'Correct answer'}
                </p>
                <div className={`flex items-start gap-2 rounded-xl border-2 border-forest-400 bg-forest-50 px-3 py-2.5 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <span className="text-base mt-0.5" aria-hidden="true">✅</span>
                  <p className="text-sm font-medium text-forest-800">
                    {isAr
                      ? question.options.find((o) => o.id === question.correctOptionId)?.textArabic
                      : question.options.find((o) => o.id === question.correctOptionId)?.textEnglish}
                  </p>
                </div>
              </div>
            )}

            {/* Explanation */}
            <div className={`bg-navy-50 border border-navy-200 rounded-xl p-4 ${isAr ? 'text-right font-arabic' : ''}`}>
              <div className={`flex items-start gap-2 ${isAr ? 'flex-row-reverse' : ''}`}>
                <span className="text-base flex-shrink-0 mt-0.5" aria-hidden="true">💡</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-500 mb-1">
                    {isAr ? 'التفسير' : 'Explanation'}
                  </p>
                  <p className="text-navy-800 text-sm sm:text-base leading-relaxed">
                    {isAr ? question.explanationArabic : question.explanationEnglish}
                  </p>
                </div>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={onNext}
              className={`w-full bg-navy-800 hover:bg-navy-700 text-white font-semibold text-base sm:text-lg py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-navy-400 flex items-center justify-center gap-2 ${isAr ? 'flex-row-reverse font-arabic' : ''}`}
              aria-label={isAr ? (isLastQuestion ? 'عرض النتائج' : 'السؤال التالي') : (isLastQuestion ? 'Show Results' : 'Next Question')}
            >
              {isLastQuestion
                ? (isAr ? '🏁 عرض النتائج' : '🏁 Show Results')
                : (isAr ? 'السؤال التالي ←' : 'Next Question →')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
