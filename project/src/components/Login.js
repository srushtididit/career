import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Login failed:", error.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center mt-16">
      <div className="flex flex-col items-center justify-center bg-blue-200 rounded-lg shadow-lg w-[30%] mt-10 p-20 space-y-7">
        <h2 className="text-4xl font-bold text-gray-800">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 w-full"
        >
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-lg font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-black transition duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col space-y-1 pb-5">
            <label
              htmlFor="password"
              className="text-lg font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-black transition duration-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md shadow transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
