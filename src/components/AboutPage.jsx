import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AboutPage() {
  const [mentor, setMentor] = useState(null);  
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Retrieve the logged-in user from localStorage
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user);

    if (user) {
      fetchMentorDetails(user);
    }
  }, []);

  async function fetchMentorDetails(user) {
    try {
      const result = await axios.get("http://localhost:3490/users");
      // Assuming you can identify mentor based on a condition
      const foundMentor = result.data.find(user => user.role === 'mentor'); 
      setMentor(foundMentor);  
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  if (!loggedInUser) {
    return <p>Please log in to see the mentor details.</p>;
  }

  return (
    <div className="text-center mt-5">
      <h2>About Us</h2>

      {mentor ? (
        <div>
          <h3>Mentor Found:</h3>
          <p>Name: {mentor.name}</p>
          <p>Email: {mentor.email}</p> 
        </div>
      ) : (
        <p>No mentor found.</p>
      )}
    </div>
  );
}

export default AboutPage;
