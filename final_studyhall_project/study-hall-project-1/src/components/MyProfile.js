import React, { useState, useEffect } from "react";
import axios from "axios";

const MyProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    mobile: "",
    email: "",
    // Add other fields as required
  });

  const [isUpdated, setIsUpdated] = useState(false);

  // Fetch the user's current data on component load
  useEffect(() => {
    axios.get("/api/profile") // Replace with the correct API endpoint to fetch profile data
      .then((response) => {
        setProfileData(response.data); // Assuming the API returns the user's current profile data
      })
      .catch((error) => {
        console.error("Error fetching profile data", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.put("/api/profile", profileData) // This API will handle updating the profile
      .then((response) => {
        setIsUpdated(true); // Show a message that the profile was updated
      })
      .catch((error) => {
        console.error("Error updating profile", error);
      });
  };

  return (
    <div>
      <h2>My Profile</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={profileData.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
          />
        </div>
        {/* Add other fields if needed */}
        <button type="submit">Update Profile</button>
      </form>

      {isUpdated && <p>Profile updated successfully!</p>}
    </div>
  );
};

export default MyProfile;