import React from "react";
import useRecipeStore from "../stores/recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Recipes</h1>
      <SearchBar />

      {filteredRecipes.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredRecipes.map((recipe) => (
            <li
              key={recipe.id}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found. Try a different search term!</p>
      )}
    </div>
  );
};

export default RecipeList;
