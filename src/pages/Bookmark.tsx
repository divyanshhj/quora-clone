import { useEffect, useState } from "react";
import type { Question } from "../utils/storage";

const Bookmark = () => {
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Question[]>(
    [],
  );

  useEffect(() => {
    const questions = JSON.parse(
      localStorage.getItem("questions") || "[]",
    ) as Question[];
    const bookmarked = questions.filter((q) => q.isBookmarked);
    setBookmarkedQuestions(bookmarked);
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Bookmarked Questions</h2>
      </div>
      <div className="space-y-3">
        {bookmarkedQuestions.length === 0 ? (
          <p>No bookmarked questions yet.</p>
        ) : (
          bookmarkedQuestions.map((q, index) => (
            <div key={q.id} className="border p-3 rounded">
              <h3 className="font-medium">
                {index + 1}. {q.title}
              </h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Bookmark;
