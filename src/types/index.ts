export type Language = 'en' | 'ar';

export type AppScreen = 'language' | 'welcome' | 'topics' | 'quiz' | 'result';

export interface Option {
  id: string;
  textEnglish: string;
  textArabic: string;
}

export interface Question {
  id: string;
  topicId: string;
  questionEnglish: string;
  questionArabic: string;
  options: Option[];
  correctOptionId: string;
  explanationEnglish: string;
  explanationArabic: string;
}

export interface Topic {
  id: string;
  titleEnglish: string;
  titleArabic: string;
  icon: string;
  gradient: string;
  border: string;
}

export interface QuizSession {
  topicId: string;
  topicTitleEnglish: string;
  topicTitleArabic: string;
  isFullChallenge: boolean;
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<string, string>;
}

export interface Badge {
  titleEnglish: string;
  titleArabic: string;
  icon: string;
  colorClass: string;
}

export interface AppStats {
  totalSessions: number;
  topicCounts: Record<string, number>;
  totalCorrect: number;
  totalIncorrect: number;
  totalQuestionsAnswered: number;
  lastUpdated: string;
}

export interface ContactInfo {
  departmentEnglish: string;
  departmentArabic: string;
  hospitalEnglish: string;
  hospitalArabic: string;
  phone: string;
  email: string;
  locationEnglish: string;
  locationArabic: string;
}
