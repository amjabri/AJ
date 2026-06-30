import { useState } from 'react';
import type { Language } from '../types';
import {
  HOSPITAL_NAME_EN, HOSPITAL_NAME_AR,
  DEPARTMENT_NAME_EN, DEPARTMENT_NAME_AR,
  APP_NAME_EN, APP_NAME_AR,
  APP_SUBTITLE_EN, APP_SUBTITLE_AR,
  EVENT_THEME_EN, EVENT_THEME_AR,
  LOGO_PATH, LOGO_PLACEHOLDER_PATH, LOGO_ALT_EN,
} from '../config/appConfig';

interface Props {
  onSelect: (lang: Language) => void;
}

export default function LanguageSelectScreen({ onSelect }: Props) {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-forest-900 hex-pattern flex flex-col items-center justify-center p-6 screen-enter">

      {/* Logo */}
      <div className="mb-6 sm:mb-8">
        <img
          src={logoError ? LOGO_PLACEHOLDER_PATH : LOGO_PATH}
          alt={LOGO_ALT_EN}
          className="h-24 sm:h-32 w-auto object-contain mx-auto"
          onError={() => setLogoError(true)}
        />
      </div>

      {/* Hospital identity */}
      <div className="text-center mb-8 sm:mb-10">
        <p className="text-white font-semibold text-lg sm:text-xl">{HOSPITAL_NAME_EN}</p>
        <p className="text-navy-200 text-base sm:text-lg mt-1" dir="rtl" lang="ar">{HOSPITAL_NAME_AR}</p>
        <p className="text-forest-300 text-sm sm:text-base mt-1">{DEPARTMENT_NAME_EN}</p>
        <p className="text-forest-300 text-sm sm:text-base" dir="rtl" lang="ar">{DEPARTMENT_NAME_AR}</p>
      </div>

      {/* App title */}
      <div className="text-center mb-3">
        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">{APP_NAME_EN}</h1>
        <p className="text-navy-200 text-base sm:text-xl mt-1 font-arabic" dir="rtl" lang="ar">{APP_NAME_AR}</p>
        <p className="text-forest-300 text-sm sm:text-base mt-2">{APP_SUBTITLE_EN}</p>
        <p className="text-forest-300 text-xs sm:text-sm font-arabic" dir="rtl" lang="ar">{APP_SUBTITLE_AR}</p>
      </div>

      {/* Event theme */}
      <div className="text-center mb-10 sm:mb-12 px-4 max-w-xl">
        <p className="text-navy-200 text-xs sm:text-sm italic">{EVENT_THEME_EN}</p>
        <p className="text-navy-200 text-xs sm:text-sm font-arabic" dir="rtl" lang="ar">{EVENT_THEME_AR}</p>
      </div>

      {/* Language selection */}
      <div className="w-full max-w-sm sm:max-w-md space-y-4">
        <p className="text-center text-white text-sm font-medium mb-6 opacity-80">
          Select your language &nbsp;|&nbsp;{' '}
          <span dir="rtl" lang="ar" className="font-arabic">اختر لغتك</span>
        </p>

        <button
          onClick={() => onSelect('en')}
          className="w-full flex items-center justify-between bg-white hover:bg-navy-50 text-navy-900 font-semibold text-lg sm:text-xl rounded-2xl px-6 py-5 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-forest-400 group"
          aria-label="Continue in English"
        >
          <span>🇬🇧</span>
          <span>English</span>
          <span className="text-navy-400 group-hover:translate-x-1 transition-transform">→</span>
        </button>

        <button
          onClick={() => onSelect('ar')}
          dir="rtl"
          lang="ar"
          className="w-full flex items-center justify-between bg-forest-600 hover:bg-forest-500 text-white font-semibold text-lg sm:text-xl rounded-2xl px-6 py-5 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-white font-arabic group"
          aria-label="المتابعة باللغة العربية"
        >
          <span>🇸🇦</span>
          <span>العربية</span>
          <span className="opacity-70 group-hover:-translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
}
