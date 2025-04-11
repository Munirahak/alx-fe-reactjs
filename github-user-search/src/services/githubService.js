import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(
        query.trim()
      )}`
    );
    return response.data; // Contains .items (array of users) and .total_count
  } catch (error) {
    throw error;
  }
};
