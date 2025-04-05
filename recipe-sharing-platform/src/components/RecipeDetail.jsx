import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID from the mock data
    const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-4">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc pl-6">
            {/* Example ingredients list */}
            <li>1 lb Spaghetti</li>
            <li>4 large eggs</li>
            <li>100g Pancetta</li>
            <li>1 cup Parmesan Cheese</li>
            <li>Black pepper, to taste</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Cooking Steps</h2>
          <ol className="list-decimal pl-6">
            {/* Example steps */}
            <li>Boil spaghetti in salted water until al dente.</li>
            <li>
              Fry pancetta until crispy, then mix with the eggs and cheese.
            </li>
            <li>
              Combine spaghetti with pancetta mixture, adding pasta water as
              needed.
            </li>
            <li>Serve with freshly cracked black pepper.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
