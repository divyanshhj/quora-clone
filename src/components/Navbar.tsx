import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-b border-gray-300 p-3">
      <div className="mx-auto flex justify-between px-5">
        <Link to="/" className="font-bold">
          Quora Clone
        </Link>

        <div className="space-x-3">
          <Link to="/">Home</Link>
          <Link to="/ask">Ask</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
