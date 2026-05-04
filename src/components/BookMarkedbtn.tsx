import { useState } from "react";
import { getQuestions, saveQuestions, type Question } from "../utils/storage";

const BookMarkedbtn = ({ question }: { question: Question }) => {
  const [isBookmarked, setIsBookmarked] = useState(
    question.isBookmarked || false,
  );

  // with array storage
  // const toggleBookmark = () => {
  //   const questions = getQuestions() as Question[];

  //   const updated = questions.map((ques) => {
  //     if (ques.id === question.id) {
  //       return { ...ques, isBookmarked: !ques.isBookmarked };
  //     }
  //     return ques;
  //   });
  //   saveQuestions(updated);
  //   setIsBookmarked(!isBookmarked);
  // };

  // with hash storage

  const toggleBookmark = () => {
    const data = getQuestions();

    if (data[question.id]) {
      data[question.id].isBookmarked = !data[question.id].isBookmarked;
    }

    saveQuestions(data);

    setIsBookmarked(!isBookmarked);
  };

  return (
    <button
      className={`border px-2 py-1 text-xs ml-2 rounded ${
        isBookmarked ? "bg-yellow-200" : ""
      }`}
      type="button"
      onClick={toggleBookmark}
    >
      {isBookmarked ? "Bookmarked" : "Bookmark"}
    </button>
  );
};

export default BookMarkedbtn;
