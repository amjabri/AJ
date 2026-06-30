import type { Language } from '../types';
import {
  APP_NAME_EN, APP_NAME_AR,
  APP_SUBTITLE_EN, APP_SUBTITLE_AR,
  EVENT_THEME_EN, EVENT_THEME_AR,
  RESEARCH_PATHWAY_EN, RESEARCH_PATHWAY_AR,
} from '../config/appConfig';

interface Props {
  language: Language;
  onStart: () => void;
}

export default function WelcomeScreen({ language, onStart }: Props) {
  const isAr = language === 'ar';

  const pathway = isAr ? RESEARCH_PATHWAY_AR : RESEARCH_PATHWAY_EN;
  const arrow = isAr ? '←' : '→';

  return (
    <main
      className="flex-1 bg-gradient-to-b from-navy-50 to-white hex-pattern-light screen-enter"
      id="main-content"
      lang={language}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-forest-900 hex-pattern text-white py-10 sm:py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-forest-600/30 border border-forest-500/40 rounded-full px-4 py-1.5 mb-4 text-forest-200 text-xs sm:text-sm">
            <span>🔬</span>
            <span>{isAr ? EVENT_THEME_AR : EVENT_THEME_EN}</span>
          </div>

          <h1 className={`font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-3 ${isAr ? 'font-arabic' : ''}`}>
            {isAr ? `مرحباً بكم في ${APP_NAME_AR}` : `Welcome to the ${APP_NAME_EN}`}
          </h1>

          <p className={`text-navy-200 text-base sm:text-lg mb-2 ${isAr ? 'font-arabic' : ''}`}>
            {isAr ? APP_SUBTITLE_AR : APP_SUBTITLE_EN}
          </p>

          <p className={`text-navy-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${isAr ? 'font-arabic' : ''}`}>
            {isAr
              ? 'اكتشف كيف تسهم إدارة المختبرات الطبية في تحويل الأسئلة السريرية والعينات وبيانات المختبر إلى أدلة علمية موثوقة.'
              : 'Discover how the Medical Laboratory Department transforms clinical questions, patient specimens and laboratory data into reliable scientific evidence.'}
          </p>
        </div>
      </section>

      {/* Research Pathway */}
      <section className="py-8 sm:py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-center font-semibold text-navy-700 text-base sm:text-lg mb-6 ${isAr ? 'font-arabic' : ''}`}>
            {isAr ? 'مسار البحث العلمي' : 'The Research Pathway'}
          </h2>

          {/* Horizontal scroll on small screens */}
          <div className="overflow-x-auto pb-2">
            <div className={`flex items-center gap-1 sm:gap-2 min-w-max mx-auto ${isAr ? 'flex-row-reverse' : 'flex-row'}`} style={{ width: 'fit-content' }}>
              {pathway.map((step, index) => (
                <div key={index} className={`flex items-center gap-1 sm:gap-2 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="flex flex-col items-center">
                    <div
                      className="bg-navy-700 text-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-center shadow-md min-w-[80px] sm:min-w-[100px] max-w-[110px] sm:max-w-[130px] leading-tight"
                      style={{ wordBreak: 'break-word' }}
                    >
                      {step}
                    </div>
                    <div className={`w-0.5 h-0 sm:h-0`} />
                  </div>
                  {index < pathway.length - 1 && (
                    <span className="text-forest-600 font-bold text-base sm:text-lg select-none">
                      {arrow}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final step highlight */}
          <div className="mt-4 flex justify-center">
            <div className="bg-forest-600 text-white rounded-xl px-5 py-3 text-sm sm:text-base font-semibold shadow-lg text-center max-w-xs">
              {isAr ? '🏥 تحسين رعاية المرضى' : '🏥 Better Patient Care'}
            </div>
          </div>
        </div>
      </section>

      {/* Who should play */}
      <section className="py-4 px-4 border-t border-navy-100">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-center font-semibold text-navy-700 text-sm sm:text-base mb-4 ${isAr ? 'font-arabic' : ''}`}>
            {isAr ? 'لمن هذا التحدي؟' : 'Who should take this challenge?'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm text-center">
            {(isAr
              ? ['الأطباء', 'الممرضون', 'اختصاصيو المختبرات', 'الباحثون', 'الطلاب', 'القيادة', 'الزوار', 'كل الكوادر الصحية']
              : ['Physicians', 'Nurses', 'Lab Professionals', 'Researchers', 'Students', 'Leadership', 'Visitors', 'All Healthcare Staff']
            ).map((role) => (
              <div key={role} className={`bg-navy-50 border border-navy-200 rounded-lg px-2 py-2 text-navy-700 font-medium ${isAr ? 'font-arabic' : ''}`}>
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start button */}
      <section className="py-8 sm:py-10 px-4 text-center">
        <button
          onClick={onStart}
          className={`inline-flex items-center gap-3 bg-navy-800 hover:bg-navy-700 text-white font-bold text-lg sm:text-xl px-10 sm:px-14 py-4 sm:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.03] active:scale-[0.97] focus-visible:ring-4 focus-visible:ring-navy-400 ${isAr ? 'font-arabic flex-row-reverse' : ''}`}
          aria-label={isAr ? 'ابدأ التحدي' : 'Start the Challenge'}
        >
          <span className="text-2xl">🚀</span>
          <span>{isAr ? 'ابدأ التحدي' : 'Start the Challenge'}</span>
        </button>
      </section>
    </main>
  );
}
