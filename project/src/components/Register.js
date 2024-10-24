import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name,
          email,
          password,
          age,
          gender,
          location,
          educationLevel,
          fieldOfStudy,
        }
      );

      console.log(response.data);
      setSuccessMessage("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error.response.data);
      setErrorMessage("Registration failed: " + error.response.data.message);
    }
  };

  return (
    <section
      id="register"
      className="max-w-md mx-auto my-10 p-8 bg-blue-200 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Registration Page</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="educationLevel" className="block text-sm font-medium">
            Education Level:
          </label>
          <select
            id="educationLevel"
            name="educationLevel"
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          >
            <option value="">Select Education Level</option>
            <option value="highSchool">High School</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
            <option value="phd">PhD</option>
          </select>
        </div>

        <div>
          <label htmlFor="fieldOfStudy" className="block text-sm font-medium">
            Field of Study/Interest:
          </label>
          <input
            type="text"
            id="fieldOfStudy"
            name="fieldOfStudy"
            value={fieldOfStudy}
            onChange={(e) => setFieldOfStudy(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>

        <input
          type="submit"
          value="Register"
          className="w-full bg-black text-white py-2 rounded cursor-pointer"
        />
      </form>

      {successMessage && (
        <p className="mt-4 text-green-500">{successMessage}</p>
      )}
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
    </section>
  );
};

export default Register;
