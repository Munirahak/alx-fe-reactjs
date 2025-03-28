import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded"
        />
        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-600">{recipe.summary}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
