/**
 * CENTRAL CONFIGURATION FILE
 * Edit this file to update hospital branding, event details,
 * quiz settings, contact information, and kiosk behaviour.
 */

import type { ContactInfo, Topic } from '../types';

// ─── Organisation ────────────────────────────────────────────────────────────
export const HOSPITAL_NAME_EN = 'King Fahd Armed Forces Hospital';
export const HOSPITAL_NAME_AR = 'مستشفى الملك فهد للقوات المسلحة';
export const DEPARTMENT_NAME_EN = 'Medical Laboratory Department';
export const DEPARTMENT_NAME_AR = 'إدارة المختبرات الطبية';
export const LOCATION_EN = 'Jeddah, Saudi Arabia';
export const LOCATION_AR = 'جدة، المملكة العربية السعودية';

// ─── Application ─────────────────────────────────────────────────────────────
export const APP_NAME_EN = 'Lab Research Flip Challenge';
export const APP_NAME_AR = 'تحدي المختبر والبحث العلمي';
export const APP_SUBTITLE_EN = 'From Specimen to Scientific Evidence';
export const APP_SUBTITLE_AR = 'من العينة إلى الدليل العلمي';

// ─── Event ───────────────────────────────────────────────────────────────────
export const EVENT_THEME_EN = "Research Rising — Today's Research, Tomorrow's Care";
export const EVENT_THEME_AR = 'البحث يرتقي — أبحاث اليوم، رعاية الغد';

// ─── Logo ────────────────────────────────────────────────────────────────────
// Replace /kfafh-logo.png with the official hospital logo file.
// Supported formats: PNG, SVG, JPEG.
export const LOGO_PATH = '/kfafh-logo.png';
export const LOGO_PLACEHOLDER_PATH = '/kfafh-logo-placeholder.svg';
export const LOGO_ALT_EN = 'King Fahd Armed Forces Hospital Logo';
export const LOGO_ALT_AR = 'شعار مستشفى الملك فهد للقوات المسلحة';

// ─── Quiz Settings ───────────────────────────────────────────────────────────
export const QUESTIONS_PER_TOPIC = 5;
export const FULL_CHALLENGE_QUESTIONS = 10;

// ─── Kiosk Behaviour ─────────────────────────────────────────────────────────
// Seconds of inactivity before countdown begins
export const INACTIVITY_TIMEOUT_SECONDS = 120;
// Seconds of countdown before screen resets
export const COUNTDOWN_SECONDS = 10;

// ─── Features ────────────────────────────────────────────────────────────────
export const ENABLE_SOUND = false;
export const ENABLE_CONFETTI = true;

// ─── Admin / Statistics ──────────────────────────────────────────────────────
// PIN to access the anonymous booth statistics screen.
// Change this before deploying.
export const STATS_PIN = '1234';

// ─── Topics ──────────────────────────────────────────────────────────────────
export const TOPICS: Topic[] = [
  {
    id: 'topic1',
    titleEnglish: "The Laboratory's Role in Research",
    titleArabic: 'دور المختبر في البحث العلمي',
    icon: '🔬',
    gradient: 'from-navy-700 to-navy-900',
    border: 'border-navy-600',
  },
  {
    id: 'topic2',
    titleEnglish: 'Retrospective Research',
    titleArabic: 'البحوث الاستعادية',
    icon: '🗂️',
    gradient: 'from-teal-700 to-teal-900',
    border: 'border-teal-600',
  },
  {
    id: 'topic3',
    titleEnglish: 'Prospective Research',
    titleArabic: 'البحوث المستقبلية',
    icon: '🔭',
    gradient: 'from-indigo-700 to-indigo-900',
    border: 'border-indigo-600',
  },
  {
    id: 'topic4',
    titleEnglish: 'Specimens and Pre-analytical Quality',
    titleArabic: 'العينات وجودة مرحلة ما قبل التحليل',
    icon: '🧪',
    gradient: 'from-amber-700 to-amber-900',
    border: 'border-amber-600',
  },
  {
    id: 'topic5',
    titleEnglish: 'Laboratory Quality and Reliable Results',
    titleArabic: 'جودة المختبر وموثوقية النتائج',
    icon: '✅',
    gradient: 'from-forest-700 to-forest-900',
    border: 'border-forest-600',
  },
  {
    id: 'topic6',
    titleEnglish: 'Ethics and Research Collaboration',
    titleArabic: 'أخلاقيات البحث والتعاون البحثي',
    icon: '⚖️',
    gradient: 'from-rose-700 to-rose-900',
    border: 'border-rose-600',
  },
];

// ─── Contact Information ─────────────────────────────────────────────────────
// Update these details before deployment.
export const CONTACT_INFO: ContactInfo = {
  departmentEnglish: 'Medical Laboratory Department',
  departmentArabic: 'إدارة المختبرات الطبية',
  hospitalEnglish: 'King Fahd Armed Forces Hospital',
  hospitalArabic: 'مستشفى الملك فهد للقوات المسلحة',
  phone: '+966-12-XXX-XXXX',
  email: 'laboratory@kfafh.med.sa',
  locationEnglish: 'Medical Laboratory Department, Ground Floor, King Fahd Armed Forces Hospital, Jeddah',
  locationArabic: 'إدارة المختبرات الطبية، الطابق الأرضي، مستشفى الملك فهد للقوات المسلحة، جدة',
};

// ─── Welcome Screen Research Pathway ────────────────────────────────────────
export const RESEARCH_PATHWAY_EN = [
  'Research Question',
  'Study Design',
  'Specimen or Laboratory Data',
  'Laboratory Testing',
  'Quality Control',
  'Scientific Evidence',
  'Better Patient Care',
];

export const RESEARCH_PATHWAY_AR = [
  'سؤال بحثي',
  'تصميم الدراسة',
  'العينة أو بيانات المختبر',
  'الفحوصات المخبرية',
  'ضبط الجودة',
  'الدليل العلمي',
  'تحسين رعاية المرضى',
];
