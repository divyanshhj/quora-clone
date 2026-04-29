import { Link } from "react-router-dom";
import { type Question } from "../utils/storage";

interface QuestionCardProps {
  question: Question;
  index: number;
}

const QuestionCard = ({ question, index }: QuestionCardProps) => {
  return (
    <div className="border p-3 rounded">
      <div className="flex justify-between text-sm text-gray-500 mb-1">
        <h3 className="font-medium">
          {index + 1}. {question.title}
        </h3>
        <div>
          <Link
            to={`/question/${question.id}`}
            className="border px-2 py-1 text-xs rounded"
          >
            View
          </Link>
          <Link
            to={`/answer/${question.id}`}
            className="border px-2 py-1 text-xs ml-2 rounded"
          >
            Add Answer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
