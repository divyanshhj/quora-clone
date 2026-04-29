import { useParams } from "react-router-dom";
import { getQuestions, type Question } from "../utils/storage";
import TitleBar from "../components/TitleBar";

const QuestionDetail = () => {
  const { id } = useParams();
  const questions = getQuestions();

  const question = questions.find((q) => q.id === Number(id)) as Question;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <TitleBar title={question.title} />

      <p className="mb-4">{question.description}</p>

      <h3 className="font-semibold mb-2">Answers</h3>

      <div className="space-y-2 mb-4">
        {question.answers.length > 0 ? (
          question.answers.map((a, index) => (
            <p key={a.id} className="p-2">
              {index + 1}. {a.text}
            </p>
          ))
        ) : (
          <p className="text-gray-500">No answers yet.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionDetail;
