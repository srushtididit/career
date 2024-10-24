import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [educationLevel, setEducationLevel] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // New state for success message
    const [errorMessage, setErrorMessage] = useState(''); // New state for error message

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage(''); // Clear previous messages
        setErrorMessage('');

        try {
            const response = await axios.post('http://localhost:5000/api/users/register', {
                name,
                email,
                password,
                age,
                gender,
                location,
                educationLevel,
                fieldOfStudy
            });

            console.log(response.data);
            // Set success message upon successful registration
            setSuccessMessage('Registration successful!');
        } catch (error) {
            console.error('Registration failed:', error.response.data);
            // Set error message if registration fails
            setErrorMessage('Registration failed: ' + error.response.data.message);
        }
    };

    return (
        <section id="login">
            <h2>Registration Page</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />

                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required />

                <label htmlFor="educationLevel">Education Level:</label>
                <select id="educationLevel" name="educationLevel" value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)} required>
                    <option value="">Select Education Level</option>
                    <option value="highSchool">High School</option>
                    <option value="bachelor">Bachelor's</option>
                    <option value="master">Master's</option>
                    <option value="phd">PhD</option>
                </select>

                <label htmlFor="fieldOfStudy">Field of Study/Interest:</label>
                <input type="text" id="fieldOfStudy" name="fieldOfStudy" value={fieldOfStudy} onChange={(e) => setFieldOfStudy(e.target.value)} required />

                <input type="submit" value="Register" />
            </form>

            {/* Display success or error messages */}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </section>
    );
};

export default Register;