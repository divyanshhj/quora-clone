import { useNavigate } from "react-router-dom";

const TitleBar = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <button
        className="border px-3 py-1 rounded"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default TitleBar;
