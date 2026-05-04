import { useNavigate, useParams } from "react-router-dom";
import { getQuestions, saveQuestions, type Question } from "../utils/storage";
import AnswerForm from "../components/AnswerForm";
import TitleBar from "../components/TitleBar";

const AddAnswer = () => {
  const { id } = useParams();
  const data = getQuestions();
  // with array storage
  // const question = data.find((q) => q.id === Number(id)) as Question;

  const question = data[Number(id)] as Question; // direct access

  const navigate = useNavigate();

  const addAnswer = (text: string) => {
    if (!text.trim()) {
      alert("Answer cannot be empty");
      return;
    }

    // with array storage
    // const updatedQuestions = questions.map((ques) => {
    //   if (ques.id === question.id) {
    //     const newAnswer = { id: Date.now(), text };
    //     return { ...ques, answers: [...ques.answers, newAnswer] };
    //   }
    //   return ques;
    // });

    // saveQuestions(updatedQuestions);

    // with hash storage
    if (data[Number(id)]) {
      const newAnswer = {
        id: Date.now(),
        text,
      };

      // direct update (O(1))
      data[Number(id)].answers.push(newAnswer);
    }

    saveQuestions(data);

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
