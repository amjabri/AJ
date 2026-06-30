import { useState, useCallback } from 'react';
import type { AppStats } from '../types';

const STATS_KEY = 'kfafh_lab_quiz_stats_v1';

const DEFAULT_STATS: AppStats = {
  totalSessions: 0,
  topicCounts: {},
  totalCorrect: 0,
  totalIncorrect: 0,
  totalQuestionsAnswered: 0,
  lastUpdated: '',
};

function loadStats(): AppStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    return raw ? { ...DEFAULT_STATS, ...JSON.parse(raw) } : { ...DEFAULT_STATS };
  } catch {
    return { ...DEFAULT_STATS };
  }
}

function saveStats(stats: AppStats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // Storage may be full or unavailable — silently ignore
  }
}

export function useStats() {
  const [stats, setStats] = useState<AppStats>(loadStats);

  const recordSession = useCallback(
    (topicId: string, correct: number, incorrect: number) => {
      setStats((prev) => {
        const updated: AppStats = {
          totalSessions: prev.totalSessions + 1,
          topicCounts: {
            ...prev.topicCounts,
            [topicId]: (prev.topicCounts[topicId] ?? 0) + 1,
          },
          totalCorrect: prev.totalCorrect + correct,
          totalIncorrect: prev.totalIncorrect + incorrect,
          totalQuestionsAnswered: prev.totalQuestionsAnswered + correct + incorrect,
          lastUpdated: new Date().toISOString(),
        };
        saveStats(updated);
        return updated;
      });
    },
    [],
  );

  const clearStats = useCallback(() => {
    const fresh = { ...DEFAULT_STATS };
    saveStats(fresh);
    setStats(fresh);
  }, []);

  return { stats, recordSession, clearStats };
}
