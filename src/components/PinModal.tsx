import { useState, useEffect, useRef } from 'react';
import type { Language } from '../types';
import { STATS_PIN } from '../config/appConfig';

interface Props {
  language: Language;
  onSuccess: () => void;
  onClose: () => void;
}

export default function PinModal({ language, onSuccess, onClose }: Props) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isAr = language === 'ar';

  useEffect(() => {
    inputRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === STATS_PIN) {
      setError(false);
      onSuccess();
    } else {
      setError(true);
      setPin('');
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pin-modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 screen-enter"
        dir={isAr ? 'rtl' : 'ltr'}
        lang={language}
      >
        <h2
          id="pin-modal-title"
          className={`font-bold text-navy-900 text-lg mb-1 ${isAr ? 'font-arabic text-right' : ''}`}
        >
          {isAr ? 'الإحصائيات — إدخال الرمز' : 'Statistics — Enter PIN'}
        </h2>
        <p className={`text-navy-500 text-sm mb-5 ${isAr ? 'font-arabic text-right' : ''}`}>
          {isAr ? 'هذه الشاشة للاستخدام الداخلي فقط.' : 'This screen is for internal booth use only.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            ref={inputRef}
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder={isAr ? 'أدخل الرمز' : 'Enter PIN'}
            className={`w-full border-2 rounded-xl px-4 py-3 text-center text-xl tracking-widest font-mono focus:outline-none focus:border-navy-500 transition-colors
              ${error ? 'border-red-400 bg-red-50 animate-shake' : 'border-navy-200 bg-navy-50'}`}
            maxLength={8}
            autoComplete="off"
            aria-label={isAr ? 'الرمز السري' : 'PIN'}
            aria-describedby={error ? 'pin-error' : undefined}
          />
          {error && (
            <p id="pin-error" className={`text-red-600 text-sm text-center ${isAr ? 'font-arabic' : ''}`} role="alert">
              {isAr ? 'رمز غير صحيح' : 'Incorrect PIN'}
            </p>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className={`flex-1 border-2 border-navy-200 text-navy-600 font-semibold py-3 rounded-xl hover:bg-navy-50 transition-all focus-visible:ring-4 focus-visible:ring-navy-400 ${isAr ? 'font-arabic' : ''}`}
            >
              {isAr ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              className={`flex-1 bg-navy-800 hover:bg-navy-700 text-white font-semibold py-3 rounded-xl transition-all focus-visible:ring-4 focus-visible:ring-navy-400 ${isAr ? 'font-arabic' : ''}`}
            >
              {isAr ? 'دخول' : 'Enter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
