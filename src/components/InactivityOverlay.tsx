import type { Language } from '../types';
import { COUNTDOWN_SECONDS } from '../config/appConfig';

interface Props {
  language: Language;
  countdown: number;
  onStay: () => void;
}

export default function InactivityOverlay({ language, countdown, onStay }: Props) {
  const isAr = language === 'ar';
  const pct = (countdown / COUNTDOWN_SECONDS) * 100;

  return (
    <div
      className="fixed inset-0 bg-navy-900/90 backdrop-blur-sm z-40 flex items-center justify-center p-4"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="inactivity-title"
      aria-live="assertive"
      dir={isAr ? 'rtl' : 'ltr'}
      lang={language}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm text-center p-8 screen-enter">
        {/* Icon */}
        <div className="text-5xl mb-4" aria-hidden="true">⏱️</div>

        {/* Countdown number */}
        <div className="text-7xl font-bold text-navy-800 mb-3 tabular-nums">{countdown}</div>

        {/* Message */}
        <p
          id="inactivity-title"
          className={`text-navy-600 text-base mb-2 leading-relaxed ${isAr ? 'font-arabic' : ''}`}
        >
          {isAr
            ? 'سيعود التطبيق إلى الشاشة الرئيسية.'
            : 'The application will return to the welcome screen.'}
        </p>

        {/* Countdown bar */}
        <div className="bg-navy-100 rounded-full h-2 mb-6 overflow-hidden" aria-hidden="true">
          <div
            className="bg-navy-700 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${pct}%` }}
          />
        </div>

        {/* Stay button */}
        <button
          onClick={onStay}
          autoFocus
          className={`w-full bg-navy-800 hover:bg-navy-700 text-white font-bold text-base py-4 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-navy-400 ${isAr ? 'font-arabic' : ''}`}
        >
          {isAr ? 'استمر في التصفح' : 'Continue Browsing'}
        </button>
      </div>
    </div>
  );
}
