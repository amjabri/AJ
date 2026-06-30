import { useEffect, useRef } from 'react';
import type { Language } from '../types';
import { CONTACT_INFO } from '../config/appConfig';

interface Props {
  language: Language;
  onClose: () => void;
}

export default function ContactModal({ language, onClose }: Props) {
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

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden screen-enter"
        dir={isAr ? 'rtl' : 'ltr'}
        lang={language}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-800 to-forest-800 px-6 py-5 flex items-center justify-between">
          <h2
            id="contact-modal-title"
            className={`text-white font-bold text-lg ${isAr ? 'font-arabic' : ''}`}
          >
            {isAr ? 'تواصل مع فريق أبحاث المختبرات' : 'Contact the Lab Research Team'}
          </h2>
          <button
            ref={closeRef}
            onClick={onClose}
            className="text-white/70 hover:text-white text-2xl leading-none focus-visible:ring-2 focus-visible:ring-white rounded p-1"
            aria-label={isAr ? 'إغلاق' : 'Close'}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className={`p-6 space-y-4 ${isAr ? 'text-right font-arabic' : ''}`}>
          <div>
            <p className="text-navy-500 text-xs font-semibold uppercase tracking-wide mb-1">
              {isAr ? 'القسم' : 'Department'}
            </p>
            <p className="text-navy-900 font-semibold">
              {isAr ? CONTACT_INFO.departmentArabic : CONTACT_INFO.departmentEnglish}
            </p>
            <p className="text-navy-600 text-sm">
              {isAr ? CONTACT_INFO.hospitalArabic : CONTACT_INFO.hospitalEnglish}
            </p>
          </div>

          <hr className="border-navy-100" />

          <div className="grid grid-cols-1 gap-3">
            <div className={`flex items-start gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
              <span className="text-forest-600 text-xl mt-0.5" aria-hidden="true">📞</span>
              <div>
                <p className="text-navy-500 text-xs font-semibold uppercase mb-0.5">
                  {isAr ? 'الهاتف' : 'Phone'}
                </p>
                <p className="text-navy-800 font-medium" dir="ltr">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className={`flex items-start gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
              <span className="text-forest-600 text-xl mt-0.5" aria-hidden="true">✉️</span>
              <div>
                <p className="text-navy-500 text-xs font-semibold uppercase mb-0.5">
                  {isAr ? 'البريد الإلكتروني' : 'Email'}
                </p>
                <p className="text-navy-800 font-medium break-all" dir="ltr">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className={`flex items-start gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
              <span className="text-forest-600 text-xl mt-0.5" aria-hidden="true">📍</span>
              <div>
                <p className="text-navy-500 text-xs font-semibold uppercase mb-0.5">
                  {isAr ? 'الموقع' : 'Location'}
                </p>
                <p className="text-navy-800 font-medium leading-snug">
                  {isAr ? CONTACT_INFO.locationArabic : CONTACT_INFO.locationEnglish}
                </p>
              </div>
            </div>
          </div>

          <hr className="border-navy-100" />

          <p className={`text-xs text-navy-400 leading-relaxed ${isAr ? 'font-arabic' : ''}`}>
            {isAr
              ? 'هذه المعلومات للأغراض التعريفية فقط. بيانات الزوار لا تُجمع ولا تُرسل.'
              : 'This information is for reference only. No visitor data is collected or transmitted.'}
          </p>

          <button
            onClick={onClose}
            className={`w-full bg-navy-800 hover:bg-navy-700 text-white font-semibold py-3 rounded-xl transition-all focus-visible:ring-4 focus-visible:ring-navy-400 ${isAr ? 'font-arabic' : ''}`}
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
