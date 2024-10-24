// src/App.js
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

const App = () => {
    return (
        <>
            <Header />
            <Navigation />
            <div className="container">
                <Overview />
                <Login />
                <Register />
            </div>
        </>
    );
};

export default App;