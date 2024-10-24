const express = require('express');
const { registerUser, loginUser, updateUserProfile, getUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Ensure this path is correct
const router = express.Router();

router.route("/register").post(registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getUserProfile); // New route for getting user profile
router.put('/profile', authMiddleware, updateUserProfile); // New route for updating user profile

module.exports = router;