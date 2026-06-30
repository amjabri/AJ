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
  APP_NAME_EN,
  APP_NAME_AR,
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
    <header
      className="bg-navy-900 hex-pattern shadow-xl"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className={`flex items-center gap-3 sm:gap-4 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>

          {/* Logo — tap 5 times to open stats PIN entry */}
          <button
            onClick={onLogoTap}
            className="flex-shrink-0 focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1 transition-opacity hover:opacity-90 active:opacity-75"
            aria-label={isAr ? 'شعار المستشفى' : 'Hospital logo'}
            tabIndex={0}
          >
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-14 sm:h-16 md:h-20 w-auto object-contain select-none"
              onError={handleLogoError}
              draggable={false}
            />
          </button>

          {/* Hospital identity */}
          <div className={`flex-1 min-w-0 ${isAr ? 'text-right' : 'text-left'}`}>
            <p className="text-white font-semibold text-sm sm:text-base md:text-lg leading-tight truncate">
              {isAr ? HOSPITAL_NAME_AR : HOSPITAL_NAME_EN}
            </p>
            <p className="text-navy-200 text-xs sm:text-sm leading-tight truncate">
              {isAr ? DEPARTMENT_NAME_AR : DEPARTMENT_NAME_EN}
            </p>
            <p className="text-navy-300 text-xs leading-tight mt-0.5 hidden sm:block truncate">
              {isAr ? APP_NAME_AR : APP_NAME_EN}
            </p>
          </div>

          {/* Controls */}
          <div className={`flex items-center gap-2 flex-shrink-0 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>

            {/* Language toggle */}
            <div className="flex rounded-lg overflow-hidden border border-navy-600" role="group" aria-label={isAr ? 'اختيار اللغة' : 'Language selection'}>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                  !isAr
                    ? 'bg-forest-600 text-white'
                    : 'bg-navy-800 text-navy-200 hover:bg-navy-700'
                }`}
                aria-pressed={!isAr}
                aria-label="English"
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                  isAr
                    ? 'bg-forest-600 text-white'
                    : 'bg-navy-800 text-navy-200 hover:bg-navy-700'
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
                className="px-3 py-1.5 rounded-lg border border-navy-600 bg-navy-800 text-navy-200 hover:bg-navy-700 hover:text-white transition-colors text-xs sm:text-sm font-medium"
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
