import React from "react";
import useRecipeStore from "../store/recipeStore";

const RecipeCard = ({ recipe }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore();

  const isFavorite = favorites.includes(recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div className="p-4 border rounded shadow relative">
      <h2 className="text-xl font-semibold">{recipe.title}</h2>
      <p>{recipe.description}</p>

      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 text-2xl"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default RecipeCard;
