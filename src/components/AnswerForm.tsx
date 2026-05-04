import { useState } from "react";

interface AnswerFormProps {
  onAdd: (text: string) => void;
}

const AnswerForm = ({ onAdd }: AnswerFormProps) => {
  const [text, setText] = useState("");

  return (
    <div className="mt-3">
      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Write answer"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="border px-3 py-1 rounded"
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        Add Answer
      </button>
    </div>
  );
};

export default AnswerForm;
