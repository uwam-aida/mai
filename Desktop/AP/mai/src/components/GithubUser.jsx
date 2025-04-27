import React, { useState } from "react";

const GithubUser = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const fetchUserData = async () => {
    if (!username) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found!");
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-100 text-gray-900"}>
      <div className="flex justify-end p-4">
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="flex flex-col items-center px-4 py-8">
        <p className="mb-4 text-gray-500 dark:text-gray-400 text-center">
        
        </p>

        <form onSubmit={handleSubmit} className="mb-6 w-full max-w-md flex">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="flex-grow p-2 border rounded-l focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r"
          >
            Search
          </button>
        </form>

        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {userData && (
          <div className="border p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full max-w-md mt-6">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="text-2xl font-semibold text-center mt-4">{userData.name || "No Name"}</h2>
            <p className="text-center text-gray-500 dark:text-gray-400">{userData.login}</p>
            <ul className="mt-4 space-y-2 text-center">
              <li><strong>Public Repos:</strong> {userData.public_repos}</li>
              <li><strong>Public Gists:</strong> {userData.public_gists}</li>
              <li><strong>Created At:</strong> {new Date(userData.created_at).toLocaleDateString()}</li>
              {/* Added Location */}
              {userData.location && <li><strong>Location:</strong> {userData.location}</li>}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default GithubUser;

