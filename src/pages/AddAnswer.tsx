import { useNavigate, useParams } from "react-router-dom";
import { getQuestions, saveQuestions, type Question } from "../utils/storage";
import AnswerForm from "../components/AnswerForm";
import TitleBar from "../components/TitleBar";

const AddAnswer = () => {
  const { id } = useParams();
  const questions = getQuestions();
  const question = questions.find((q) => q.id === Number(id)) as Question;

  const navigate = useNavigate();

  const addAnswer = (text: string) => {
    if (!text.trim()) {
      alert("Answer cannot be empty");
      return;
    }

    const updatedQuestions = questions.map((ques) => {
      if (ques.id === question.id) {
        const newAnswer = { id: Date.now(), text };
        return { ...ques, answers: [...ques.answers, newAnswer] };
      }
      return ques;
    });

    saveQuestions(updatedQuestions);
    alert("Answer added successfully!");
    navigate(`/question/${id}`);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <TitleBar title={question.title} />

      <p className="mb-4">{question.description}</p>

      <h3 className="font-semibold mb-2">Add Answer</h3>

      <AnswerForm onAdd={addAnswer} />
    </div>
  );
};

export default AddAnswer;
