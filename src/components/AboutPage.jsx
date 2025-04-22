import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AboutPage() {
  const [mentor, setMentor] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user);

    if (user) {
      fetchMentorDetails(user.mentor); 
    }
  }, []);

  async function fetchMentorDetails(mentorName) {
    try {
      const result = await axios.get("http://localhost:3490/users");
      const foundMentor = result.data.find(user => user.mentor === mentorName); 
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

      {mentor ? (
        <div>
          <h3>Mentor Found:</h3>
          <p>Name: {mentor.mentor}</p>  
        </div>
      ) : (
        <p>No mentor found.</p>
      )}
    </div>
  );
}

export default AboutPage;
