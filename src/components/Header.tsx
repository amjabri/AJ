import { useState, useCallback } from 'react';
import type { Language } from '../types';
import {
  LOGO_PATH,
  LOGO_PLACEHOLDER_PATH,
  LOGO_ALT_EN,
  LOGO_ALT_AR,
  HOSPITAL_NAME_EN,
  HOSPITAL_NAME_AR,
  DEPARTMENT_NAME_EN,
  DEPARTMENT_NAME_AR,
} from '../config/appConfig';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onReset: () => void;
  onLogoTap: () => void;
  currentScreen: string;
}

export default function Header({
  language,
  onLanguageChange,
  onReset,
  onLogoTap,
  currentScreen,
}: HeaderProps) {
  const [logoError, setLogoError] = useState(false);
  const isAr = language === 'ar';

  const logoAlt = isAr ? LOGO_ALT_AR : LOGO_ALT_EN;
  const logoSrc = logoError ? LOGO_PLACEHOLDER_PATH : LOGO_PATH;

  const handleLogoError = useCallback(() => setLogoError(true), []);

  const showReset = currentScreen !== 'language' && currentScreen !== 'welcome';

  return (
    <header className="bg-white border-b border-gray-200 shadow-md" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className={`flex items-center gap-4 sm:gap-6 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>

          {/* Logo — tap 5 times to open stats PIN entry */}
          <button
            onClick={onLogoTap}
            className="flex-shrink-0 focus-visible:ring-2 focus-visible:ring-navy-500 rounded-lg transition-opacity hover:opacity-90 active:opacity-70"
            aria-label={isAr ? 'شعار المستشفى' : 'Hospital logo'}
            tabIndex={0}
          >
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain select-none"
              onError={handleLogoError}
              draggable={false}
            />
          </button>

          {/* Divider */}
          <div className="h-10 w-px bg-gray-300 flex-shrink-0 hidden sm:block" aria-hidden="true" />

          {/* Department identity */}
          <div className={`flex-1 min-w-0 ${isAr ? 'text-right' : 'text-left'}`}>
            <p className={`font-bold text-navy-800 text-base sm:text-xl md:text-2xl leading-tight ${isAr ? 'font-arabic' : ''}`}>
              {isAr ? DEPARTMENT_NAME_AR : DEPARTMENT_NAME_EN}
            </p>
            <p className={`text-navy-500 text-xs sm:text-sm leading-tight mt-0.5 ${isAr ? 'font-arabic' : ''}`}>
              {isAr ? HOSPITAL_NAME_AR : HOSPITAL_NAME_EN}
            </p>
          </div>

          {/* Controls */}
          <div className={`flex items-center gap-2 flex-shrink-0 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>

            {/* Language toggle */}
            <div
              className="flex rounded-lg overflow-hidden border border-navy-300"
              role="group"
              aria-label={isAr ? 'اختيار اللغة' : 'Language selection'}
            >
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors ${
                  !isAr
                    ? 'bg-navy-800 text-white'
                    : 'bg-white text-navy-600 hover:bg-navy-50'
                }`}
                aria-pressed={!isAr}
                aria-label="English"
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors ${
                  isAr
                    ? 'bg-navy-800 text-white'
                    : 'bg-white text-navy-600 hover:bg-navy-50'
                }`}
                aria-pressed={isAr}
                aria-label="العربية"
              >
                ع
              </button>
            </div>

            {/* Reset button */}
            {showReset && (
              <button
                onClick={onReset}
                className={`px-3 py-1.5 rounded-lg border border-navy-300 bg-white text-navy-700 hover:bg-navy-50 transition-colors text-xs sm:text-sm font-medium ${isAr ? 'font-arabic' : ''}`}
                aria-label={isAr ? 'إعادة تعيين' : 'Reset'}
                title={isAr ? 'العودة للرئيسية' : 'Return to home'}
              >
                {isAr ? '⟲ إعادة' : '⟲ Reset'}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
