import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function HomePage() {
  const [recioes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe List</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} className="block">
            <div
              key={recipe.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
