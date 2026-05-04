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

// Using an array to store questions, which is simpler for listing and ordering

// export const getQuestions = (): Question[] => {
//   return JSON.parse(localStorage.getItem("questions") || "[]");
// };

// export const saveQuestions = (data: Question[]) => {
//   localStorage.setItem("questions", JSON.stringify(data));
// };

// Using a Record to store questions by their ID for faster access

export const getQuestions = (): Record<number, Question> => {
  return JSON.parse(localStorage.getItem("questions") || "{}");
};

export const saveQuestions = (data: Record<number, Question>) => {
  localStorage.setItem("questions", JSON.stringify(data));
};
