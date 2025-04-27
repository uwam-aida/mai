import React, { useState, useEffect } from "react";

const Display = () => {
  const [display, setDisplay] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDisplay = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setDisplay(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDisplay(); // 
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <ul>
          {display.map((user) => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name} <br />
              <strong>Username:</strong> {user.username} <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Display;
