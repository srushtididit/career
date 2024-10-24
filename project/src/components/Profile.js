import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [userData, setUserData] = useState({
        name: '',
        academicRecords: [],
        skills: [],
        interests: []
    });

    useEffect(() => {
        // Fetch user data when component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you store token in localStorage
                    }
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };
        
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await axios.put('http://localhost:5000/api/users/profile', userData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('Profile updated successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
      <form onSubmit={handleSubmit}>
          <h2>Edit Profile</h2>
          <label>Name:</label>
          <input type="text" name="name" value={userData.name} onChange={handleChange} required />

          {/* Add fields for academic records */}
          <h3>Academic Records</h3>
          {/* You can add input fields for academic records here */}

          {/* Add fields for skills */}
          <h3>Skills</h3>
          {/* You can add input fields for skills here */}

          {/* Add fields for interests */}
          <h3>Interests</h3>
          {/* You can add input fields for interests here */}

          <button type="submit">Update Profile</button>
      </form>
  );
};

export default Profile;