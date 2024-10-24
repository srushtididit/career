import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-white bg-blue-950 shadow-xl h-24 flex items-center px-14 justify-between">
      <Link to="/">
        <h1 className="text-4xl">Career Recommendation System</h1>
      </Link>
      <div className="space-x-10">
        <Link to="/login">
          <button className="rounded-md text-black bg-white py-2 px-8">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="rounded-md text-black bg-white py-2 px-8">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
