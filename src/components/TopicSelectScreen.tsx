import type { Language } from '../types';
import { TOPICS } from '../config/appConfig';

interface Props {
  language: Language;
  onSelectTopic: (topicId: string) => void;
  onFullChallenge: () => void;
}

// Tailwind gradient classes must be complete strings (not constructed dynamically)
const TOPIC_STYLES = [
  { bg: 'bg-navy-800',   hover: 'hover:bg-navy-700',   border: 'border-navy-600'   },
  { bg: 'bg-teal-800',   hover: 'hover:bg-teal-700',   border: 'border-teal-600'   },
  { bg: 'bg-indigo-800', hover: 'hover:bg-indigo-700', border: 'border-indigo-600' },
  { bg: 'bg-amber-800',  hover: 'hover:bg-amber-700',  border: 'border-amber-600'  },
  { bg: 'bg-green-900',  hover: 'hover:bg-green-800',  border: 'border-green-700'  },
  { bg: 'bg-rose-900',   hover: 'hover:bg-rose-800',   border: 'border-rose-700'   },
];

export default function TopicSelectScreen({ language, onSelectTopic, onFullChallenge }: Props) {
  const isAr = language === 'ar';

  return (
    <main
      className="flex-1 bg-gradient-to-b from-navy-50 to-white hex-pattern-light screen-enter py-8 sm:py-10 px-4"
      id="main-content"
      lang={language}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className={`text-center mb-8 ${isAr ? 'font-arabic' : ''}`}>
          <h1 className="font-bold text-navy-900 text-2xl sm:text-3xl mb-2">
            {isAr ? 'اختر موضوعاً' : 'Choose a Topic'}
          </h1>
          <p className="text-navy-500 text-sm sm:text-base">
            {isAr
              ? 'اختر موضوعاً لبدء التحدي، أو اختر التحدي الكامل'
              : 'Select a topic to begin the challenge, or take the Full Challenge'}
          </p>
        </div>

        {/* Topic grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6">
          {TOPICS.map((topic, index) => {
            const style = TOPIC_STYLES[index] ?? TOPIC_STYLES[0];
            return (
              <button
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className={`
                  ${style.bg} ${style.hover} ${style.border}
                  border text-white rounded-2xl p-5 sm:p-6
                  flex flex-col items-start gap-3
                  shadow-lg hover:shadow-xl
                  transition-all hover:scale-[1.02] active:scale-[0.97]
                  focus-visible:ring-4 focus-visible:ring-white/40
                  text-left rtl:text-right
                `}
                aria-label={isAr ? topic.titleArabic : topic.titleEnglish}
              >
                <span className="text-3xl sm:text-4xl" aria-hidden="true">{topic.icon}</span>
                <div className={`flex-1 ${isAr ? 'font-arabic text-right w-full' : ''}`}>
                  <p className="font-semibold text-base sm:text-lg leading-snug">
                    {isAr ? topic.titleArabic : topic.titleEnglish}
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm mt-1 leading-snug">
                    {isAr ? topic.titleEnglish : topic.titleArabic}
                  </p>
                </div>
                <div className={`text-white/50 text-xs ${isAr ? 'self-start' : 'self-end'}`}>
                  {isAr ? '5 أسئلة' : '5 questions'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Full Challenge card */}
        <button
          onClick={onFullChallenge}
          className="w-full bg-gradient-to-r from-navy-800 to-forest-800 hover:from-navy-700 hover:to-forest-700 border border-white/20 text-white rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.01] active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-forest-400"
          aria-label={isAr ? 'التحدي الكامل' : 'Full Challenge'}
        >
          <div className={`flex items-center gap-4 ${isAr ? 'flex-row-reverse font-arabic' : 'flex-row'}`}>
            <span className="text-4xl sm:text-5xl" aria-hidden="true">🏆</span>
            <div className={isAr ? 'text-right' : 'text-left'}>
              <p className="font-bold text-xl sm:text-2xl">
                {isAr ? 'التحدي الكامل' : 'Full Challenge'}
              </p>
              <p className="text-white/70 text-sm sm:text-base mt-1">
                {isAr
                  ? '10 أسئلة عشوائية من جميع المواضيع'
                  : '10 random questions across all topics'}
              </p>
            </div>
          </div>
        </button>
      </div>
    </main>
  );
}
