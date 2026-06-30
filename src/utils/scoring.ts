import type { Badge, Question } from '../types';

const BADGES: Record<string, Badge> = {
  champion: {
    titleEnglish: 'Laboratory Research Champion',
    titleArabic: 'بطل أبحاث المختبر',
    icon: '🏆',
    colorClass: 'from-yellow-400 to-amber-500',
  },
  investigator: {
    titleEnglish: 'Research Investigator',
    titleArabic: 'باحث متميز',
    icon: '🔬',
    colorClass: 'from-blue-500 to-navy-700',
  },
  explorer: {
    titleEnglish: 'Research Explorer',
    titleArabic: 'مستكشف بحثي',
    icon: '🧪',
    colorClass: 'from-forest-500 to-forest-700',
  },
  beginner: {
    titleEnglish: 'Research Beginner',
    titleArabic: 'باحث مبتدئ',
    icon: '🌱',
    colorClass: 'from-slate-400 to-slate-600',
  },
};

export function calculateScore(
  userAnswers: Record<string, string>,
  questions: Question[],
): number {
  return questions.filter((q) => userAnswers[q.id] === q.correctOptionId).length;
}

export function getBadge(score: number, total: number, isFullChallenge: boolean): Badge {
  if (isFullChallenge) {
    const pct = (score / total) * 100;
    if (pct >= 90) return BADGES.champion;
    if (pct >= 70) return BADGES.investigator;
    if (pct >= 50) return BADGES.explorer;
    return BADGES.beginner;
  }
  // Per-topic (5 questions)
  if (score === 5) return BADGES.champion;
  if (score === 4) return BADGES.investigator;
  if (score === 3) return BADGES.explorer;
  return BADGES.beginner;
}
