// src/services/githubService.js
import axios from "axios";

export const fetchUsers = async ({ username, location, minRepos }) => {
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const headers = apiKey ? { Authorization: `token ${apiKey}` } : {};

  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`,
    {
      headers,
    }
  );

  return response.data;
};
