import { useState } from "react";
import { getQuestions, saveQuestions, type Question } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import TitleBar from "../components/TitleBar";

const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both fields");
      return;
    }
    const questions = getQuestions();

    const newQuestion: Question = {
      id: Date.now(),
      title,
      description,
      answers: [],
    };

    saveQuestions([...questions, newQuestion]);
    alert("Question added successfully!");
    navigate("/");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <TitleBar title="Ask Question" />

      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-3 rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="border px-4 py-2 rounded" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AskQuestion;
