import React from "react";
import useRecipeStore from "../store/recipeStore";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
