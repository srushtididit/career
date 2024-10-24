// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            console.log(response.data); // Handle successful login (e.g., store token)
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };

    return (
        <section id="login">
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}> {/* Use onSubmit handler */}
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="submit" value="Login" />
            </form>
        </section>
    );
};

export default Login;