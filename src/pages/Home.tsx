import { useEffect, useState } from "react";
import { getQuestions, type Question } from "../utils/storage";
import QuestionCard from "../components/QuestionCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    setQuestions(getQuestions());
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Questions</h2>
        <Link to="/ask" className="border px-3 py-1 inline-block rounded">
          Ask Question
        </Link>
      </div>

      <div className="space-y-3">
        {questions.map((q, index) => (
          <QuestionCard key={q.id} question={q} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
