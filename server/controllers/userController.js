const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config()

// Register User Function
const registerUser = async (req, res) => {
    try {
        const { name, password, email } = req.body;

        const existUsername = await UserModel.findOne({ name });
        if (existUsername) {
            return res.status(400).json({ message: "Username taken" });
        }

        const existEmail = await UserModel.findOne({ email });
        if (existEmail) {
            return res.status(400).json({ message: "Email taken" });
        }

        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({
            name,
            password: hashedPassword,
            email
        });

        await user.save();
        return res.status(201).json({ msg: "User Registered Successfully" });
    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Login User Function
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Get User Profile Function
const getUserProfile = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming req.user is set by auth middleware
        const user = await UserModel.findById(userId).select('-password'); // Exclude password from response

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update User Profile Function
const updateUserProfile = async (req, res) => {
    const { name, academicRecords, skills, interests } = req.body;

    try {
        const userId = req.user.id; // Assuming req.user is set by auth middleware
        const user = await UserModel.findByIdAndUpdate(
            userId,
            { name, academicRecords, skills, interests },
            { new: true } // Return the updated document
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Error updating profile', error });
    }
};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };