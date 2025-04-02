import useRecipeStore from "./recipeStore";
import { useEffect } from "react";

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        <ul>
          {recommendations.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.name}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendationsList;
