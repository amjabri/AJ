import { useEffect, useRef } from 'react';
import type { Language, AppStats } from '../types';
import { TOPICS } from '../config/appConfig';

interface Props {
  language: Language;
  stats: AppStats;
  onClear: () => void;
  onClose: () => void;
}

export default function StatsModal({ language, stats, onClear, onClose }: Props) {
  const isAr = language === 'ar';
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const accuracy =
    stats.totalQuestionsAnswered > 0
      ? Math.round((stats.totalCorrect / stats.totalQuestionsAnswered) * 100)
      : 0;

  const formatDate = (iso: string) => {
    if (!iso) return isAr ? 'لا يوجد' : 'None';
    try {
      return new Date(iso).toLocaleString(isAr ? 'ar-SA' : 'en-GB');
    } catch {
      return iso;
    }
  };

  const handleClear = () => {
    if (window.confirm(isAr ? 'هل تريد مسح جميع الإحصائيات؟' : 'Clear all statistics?')) {
      onClear();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="stats-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden screen-enter max-h-[90vh] flex flex-col"
        dir={isAr ? 'rtl' : 'ltr'}
        lang={language}
      >
        {/* Header */}
        <div className="bg-navy-900 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <h2
            id="stats-modal-title"
            className={`text-white font-bold text-lg ${isAr ? 'font-arabic' : ''}`}
          >
            {isAr ? 'إحصائيات الجناح (داخلية)' : 'Booth Statistics (Internal)'}
          </h2>
          <button
            ref={closeRef}
            onClick={onClose}
            className="text-white/70 hover:text-white text-2xl focus-visible:ring-2 focus-visible:ring-white rounded p-1"
            aria-label={isAr ? 'إغلاق' : 'Close'}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className={`flex-1 overflow-y-auto p-6 space-y-5 ${isAr ? 'font-arabic text-right' : ''}`}>

          {/* Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: isAr ? 'الجلسات' : 'Sessions', value: stats.totalSessions },
              { label: isAr ? 'الأسئلة' : 'Questions', value: stats.totalQuestionsAnswered },
              { label: isAr ? 'الصحيح' : 'Correct', value: stats.totalCorrect },
              { label: isAr ? 'الدقة' : 'Accuracy', value: `${accuracy}%` },
            ].map((item) => (
              <div key={item.label} className="bg-navy-50 rounded-xl p-3 text-center border border-navy-100">
                <p className="text-2xl font-bold text-navy-800">{item.value}</p>
                <p className="text-xs text-navy-500 mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Topic breakdown */}
          <div>
            <h3 className="font-semibold text-navy-700 text-sm mb-3">
              {isAr ? 'اختيار المواضيع' : 'Topic Selection Count'}
            </h3>
            <div className="space-y-2">
              {[...TOPICS, { id: 'full', titleEnglish: 'Full Challenge', titleArabic: 'التحدي الكامل', icon: '🏆', gradient: '', border: '' }].map(
                (topic) => {
                  const count = stats.topicCounts[topic.id] ?? 0;
                  const pct = stats.totalSessions > 0 ? Math.round((count / stats.totalSessions) * 100) : 0;
                  return (
                    <div key={topic.id} className="flex items-center gap-2">
                      <span className="text-base flex-shrink-0" aria-hidden="true">{topic.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className={`flex justify-between items-baseline mb-0.5 ${isAr ? 'flex-row-reverse' : ''}`}>
                          <span className="text-xs text-navy-600 truncate max-w-[70%]">
                            {isAr ? topic.titleArabic : topic.titleEnglish}
                          </span>
                          <span className="text-xs font-semibold text-navy-700 flex-shrink-0">{count}</span>
                        </div>
                        <div className="bg-navy-100 rounded-full h-1.5">
                          <div
                            className="bg-navy-600 h-1.5 rounded-full progress-bar-fill"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          </div>

          {/* Last updated */}
          <p className="text-xs text-navy-400 text-center">
            {isAr ? 'آخر تحديث:' : 'Last updated:'} {formatDate(stats.lastUpdated)}
          </p>

          <p className="text-xs text-navy-400 text-center border-t border-navy-100 pt-4 leading-relaxed">
            {isAr
              ? 'هذه الإحصائيات مجهولة المصدر ومخزنة محلياً على هذا الجهاز فقط. لا تُرسل أي بيانات خارجياً.'
              : 'These anonymous statistics are stored locally on this device only. No data is transmitted externally.'}
          </p>
        </div>

        {/* Footer */}
        <div className={`flex gap-3 px-6 py-4 border-t border-navy-100 flex-shrink-0 ${isAr ? 'flex-row-reverse' : ''}`}>
          <button
            onClick={handleClear}
            className={`flex-1 border-2 border-red-200 text-red-600 font-semibold py-2.5 rounded-xl hover:bg-red-50 transition-all focus-visible:ring-4 focus-visible:ring-red-300 ${isAr ? 'font-arabic' : ''}`}
          >
            {isAr ? 'مسح الإحصائيات' : 'Clear Stats'}
          </button>
          <button
            onClick={onClose}
            className={`flex-1 bg-navy-800 hover:bg-navy-700 text-white font-semibold py-2.5 rounded-xl transition-all focus-visible:ring-4 focus-visible:ring-navy-400 ${isAr ? 'font-arabic' : ''}`}
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
