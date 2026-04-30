import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import QuestionDetail from "./pages/QuestionDetail";
import AddAnswer from "./pages/AddAnswer";
import AskQuestion from "./pages/AskQuestion";
import Bookmark from "./pages/Bookmark";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/:id" element={<QuestionDetail />} />
        <Route path="/answer/:id" element={<AddAnswer />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
