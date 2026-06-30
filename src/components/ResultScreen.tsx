import type { Language, QuizSession } from '../types';
import { calculateScore, getBadge } from '../utils/scoring';
import { DEPARTMENT_NAME_EN, DEPARTMENT_NAME_AR } from '../config/appConfig';

interface Props {
  session: QuizSession;
  language: Language;
  onRetry: () => void;
  onTryAnotherTopic: () => void;
  onFullChallenge: () => void;
  onHome: () => void;
  onShowContact: () => void;
}

export default function ResultScreen({
  session,
  language,
  onRetry,
  onTryAnotherTopic,
  onFullChallenge,
  onHome,
  onShowContact,
}: Props) {
  const isAr = language === 'ar';
  const score = calculateScore(session.userAnswers, session.questions);
  const total = session.questions.length;
  const percentage = Math.round((score / total) * 100);
  const badge = getBadge(score, total, session.isFullChallenge);

  const finalMessage = isAr
    ? 'يبدأ البحث الموثوق بسؤال صحيح، وعينة مناسبة، ومنهجية دقيقة، وتعاون مبكر مع إدارة المختبرات الطبية.'
    : 'Reliable research begins with the right question, the right specimen, the right method and early collaboration with the Medical Laboratory Department.';

  return (
    <main
      className="flex-1 bg-gradient-to-b from-navy-50 to-white hex-pattern-light py-8 sm:py-10 px-4 screen-enter"
      id="main-content"
      lang={language}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Score card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-r from-navy-800 to-navy-900 px-6 py-5 text-center ${isAr ? 'font-arabic' : ''}`}>
            <p className="text-navy-200 text-sm mb-1">
              {isAr
                ? (session.isFullChallenge ? 'التحدي الكامل' : session.topicTitleArabic)
                : (session.isFullChallenge ? 'Full Challenge' : session.topicTitleEnglish)}
            </p>
            <h1 className="text-white font-bold text-xl sm:text-2xl">
              {isAr ? 'نتيجتك' : 'Your Result'}
            </h1>
          </div>

          <div className="p-6 sm:p-8 text-center">
            {/* Badge */}
            <div className={`inline-flex flex-col items-center gap-2 bg-gradient-to-br ${badge.colorClass} rounded-2xl px-6 sm:px-10 py-4 sm:py-5 mb-6 shadow-lg animate-bounce-in`}>
              <span className="text-4xl sm:text-5xl" aria-hidden="true">{badge.icon}</span>
              <p className={`text-white font-bold text-base sm:text-xl ${isAr ? 'font-arabic' : ''}`}>
                {isAr ? badge.titleArabic : badge.titleEnglish}
              </p>
            </div>

            {/* Score numbers */}
            <div className="flex items-center justify-center gap-6 sm:gap-10 mb-6">
              <div>
                <p className="text-4xl sm:text-6xl font-bold text-navy-800">
                  {score}<span className="text-2xl sm:text-3xl text-navy-400">/{total}</span>
                </p>
                <p className={`text-navy-500 text-sm mt-1 ${isAr ? 'font-arabic' : ''}`}>
                  {isAr ? 'إجابات صحيحة' : 'Correct answers'}
                </p>
              </div>
              <div className="w-px h-14 bg-navy-200" aria-hidden="true" />
              <div>
                <p className="text-4xl sm:text-6xl font-bold text-navy-800">{percentage}<span className="text-2xl sm:text-3xl text-navy-400">%</span></p>
                <p className={`text-navy-500 text-sm mt-1 ${isAr ? 'font-arabic' : ''}`}>
                  {isAr ? 'النسبة المئوية' : 'Percentage'}
                </p>
              </div>
            </div>

            {/* Score bar */}
            <div className="bg-navy-100 rounded-full h-3 mb-6" role="img" aria-label={`${percentage}%`}>
              <div
                className="bg-gradient-to-r from-forest-500 to-forest-400 h-3 rounded-full progress-bar-fill"
                style={{ width: `${percentage}%` }}
              />
            </div>

            {/* Final message */}
            <blockquote className={`bg-navy-50 border-l-4 border-navy-600 rounded-xl p-4 text-navy-700 text-sm sm:text-base leading-relaxed italic ${isAr ? 'font-arabic text-right border-l-0 border-r-4 border-r-navy-600' : ''}`}>
              {finalMessage}
            </blockquote>
          </div>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={onRetry}
            className={`bg-navy-100 hover:bg-navy-200 text-navy-800 font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.97] focus-visible:ring-4 focus-visible:ring-navy-400 flex items-center justify-center gap-2 ${isAr ? 'flex-row-reverse font-arabic' : ''}`}
          >
            <span aria-hidden="true">🔄</span>
            {isAr ? 'أعد هذا الموضوع' : 'Replay This Topic'}
          </button>

          <button
            onClick={onTryAnotherTopic}
            className={`bg-navy-700 hover:bg-navy-600 text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.97] focus-visible:ring-4 focus-visible:ring-navy-400 flex items-center justify-center gap-2 ${isAr ? 'flex-row-reverse font-arabic' : ''}`}
          >
            <span aria-hidden="true">📋</span>
            {isAr ? 'اختر موضوعاً آخر' : 'Try Another Topic'}
          </button>

          <button
            onClick={onFullChallenge}
            className={`bg-forest-700 hover:bg-forest-600 text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.97] focus-visible:ring-4 focus-visible:ring-forest-400 flex items-center justify-center gap-2 ${isAr ? 'flex-row-reverse font-arabic' : ''}`}
          >
            <span aria-hidden="true">🏆</span>
            {isAr ? 'التحدي الكامل' : 'Full Challenge'}
          </button>

          <button
            onClick={onHome}
            className={`bg-white border-2 border-navy-200 hover:border-navy-400 text-navy-700 font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.97] focus-visible:ring-4 focus-visible:ring-navy-400 flex items-center justify-center gap-2 ${isAr ? 'flex-row-reverse font-arabic' : ''}`}
          >
            <span aria-hidden="true">🏠</span>
            {isAr ? 'العودة للرئيسية' : 'Return to Home'}
          </button>
        </div>

        {/* Call to Action */}
        <div className={`bg-gradient-to-br from-navy-800 to-forest-900 rounded-2xl p-6 text-white ${isAr ? 'text-right font-arabic' : ''}`}>
          <h2 className="font-bold text-lg sm:text-xl mb-2">
            {isAr
              ? 'هل تخطط لمشروع بحثي يتضمن فحوصات أو عينات مخبرية؟'
              : 'Planning a Research Project Involving Laboratory Tests or Specimens?'}
          </h2>
          <p className="text-navy-200 text-sm sm:text-base leading-relaxed mb-4">
            {isAr
              ? 'تعاون مع إدارة المختبرات الطبية في مرحلة مبكرة لتحسين إمكانية تنفيذ البحث وجودة العينات وموثوقية النتائج والقيمة العلمية.'
              : 'Collaborate with the Medical Laboratory Department early to improve feasibility, specimen quality, result reliability and scientific value.'}
          </p>
          <button
            onClick={onShowContact}
            className={`inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-400 text-white font-semibold px-5 py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.97] focus-visible:ring-4 focus-visible:ring-white ${isAr ? 'flex-row-reverse' : ''}`}
          >
            <span aria-hidden="true">📞</span>
            {isAr
              ? `تواصل مع ${DEPARTMENT_NAME_AR}`
              : `Contact the ${DEPARTMENT_NAME_EN}`}
          </button>
        </div>
      </div>
    </main>
  );
}
