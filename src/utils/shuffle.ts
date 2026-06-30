import type { Question } from '../types';

/** Fisher-Yates in-place shuffle — returns a new array. */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Returns `count` randomly selected questions from `questions`,
 * each with its options independently shuffled.
 * The correctOptionId stays linked via the option's id, not its position.
 */
export function prepareQuestions(questions: Question[], count: number): Question[] {
  return shuffleArray(questions)
    .slice(0, count)
    .map((q) => ({ ...q, options: shuffleArray(q.options) }));
}
