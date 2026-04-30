export interface Answer {
  id: number;
  text: string;
}

export interface Question {
  id: number;
  title: string;
  description: string;
  answers: Answer[];
  isBookmarked?: boolean;
}

export const getQuestions = (): Question[] => {
  return JSON.parse(localStorage.getItem("questions") || "[]");
};

export const saveQuestions = (data: Question[]) => {
  localStorage.setItem("questions", JSON.stringify(data));
};
