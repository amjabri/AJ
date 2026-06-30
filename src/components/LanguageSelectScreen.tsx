import { useState } from 'react';
import type { Language } from '../types';
import {
  HOSPITAL_NAME_EN, HOSPITAL_NAME_AR,
  DEPARTMENT_NAME_EN, DEPARTMENT_NAME_AR,
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

      {/* Main white card */}
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl px-6 py-8 sm:px-8 sm:py-10 flex flex-col items-center mb-4">

        {/* Logo */}
        <div className="mb-5">
          <img
            src={logoError ? LOGO_PLACEHOLDER_PATH : LOGO_PATH}
            alt={LOGO_ALT_EN}
            className="h-16 sm:h-20 w-auto object-contain mx-auto"
            onError={() => setLogoError(true)}
          />
        </div>

        {/* Hospital name */}
        <div className="text-center mb-3 space-y-0.5">
          <p className="font-bold text-navy-900 text-lg sm:text-xl leading-tight">
            {HOSPITAL_NAME_EN}
          </p>
          <p className="font-bold text-navy-900 text-base sm:text-lg leading-tight font-arabic" dir="rtl" lang="ar">
            {HOSPITAL_NAME_AR}
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-forest-500 rounded-full my-3" />

        {/* Department name */}
        <div className="text-center mb-4 space-y-0.5">
          <p className="font-semibold text-forest-700 text-base sm:text-lg">
            {DEPARTMENT_NAME_EN}
          </p>
          <p className="font-semibold text-forest-700 text-sm sm:text-base font-arabic" dir="rtl" lang="ar">
            {DEPARTMENT_NAME_AR}
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-3 space-y-0.5">
          <p className="text-navy-700 text-sm sm:text-base font-medium">{APP_SUBTITLE_EN}</p>
          <p className="text-navy-700 text-sm sm:text-base font-medium font-arabic" dir="rtl" lang="ar">{APP_SUBTITLE_AR}</p>
        </div>

        {/* Event theme */}
        <div className="text-center mb-5 px-2 max-w-xs">
          <div className="inline-flex flex-col items-center gap-1 bg-navy-50 border border-navy-200 rounded-xl px-4 py-2">
            <p className="text-navy-600 text-xs sm:text-sm italic">{EVENT_THEME_EN}</p>
            <p className="text-navy-600 text-xs sm:text-sm font-arabic" dir="rtl" lang="ar">{EVENT_THEME_AR}</p>
          </div>
        </div>

        {/* Language prompt */}
        <p className="text-center text-gray-600 text-sm font-medium mb-4">
          Select your language &nbsp;|&nbsp;{' '}
          <span dir="rtl" lang="ar" className="font-arabic">اختر لغتك</span>
        </p>

        {/* Language buttons */}
        <div className="w-full space-y-3">
          <button
            onClick={() => onSelect('en')}
            className="w-full flex items-center justify-between bg-navy-800 hover:bg-navy-700 text-white font-semibold text-lg sm:text-xl rounded-2xl px-6 py-4 shadow-md transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-navy-400 group"
            aria-label="Continue in English"
          >
            <span>🇬🇧</span>
            <span>English</span>
            <span className="opacity-70 group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <button
            onClick={() => onSelect('ar')}
            dir="rtl"
            lang="ar"
            className="w-full flex items-center justify-between bg-forest-600 hover:bg-forest-500 text-white font-semibold text-lg sm:text-xl rounded-2xl px-6 py-4 shadow-md transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-white font-arabic group"
            aria-label="المتابعة باللغة العربية"
          >
            <span>🇸🇦</span>
            <span>العربية</span>
            <span className="opacity-70 group-hover:-translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
