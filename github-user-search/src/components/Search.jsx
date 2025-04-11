import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 p-4"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-style"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input-style"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="input-style"
        />
        <button type="submit" className="btn-style">
          Search
        </button>
      </form>

      {/* Conditional rendering based on API state */}
      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {userData && (
          <div className="flex flex-col items-center mt-4">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-24 h-24 rounded-full mb-2"
            />
            <h2 className="text-xl font-semibold">
              {userData.name || userData.login}
            </h2>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
