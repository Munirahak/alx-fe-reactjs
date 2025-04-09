// Import the Zustand store
import { useRecipeStore } from "../store/recipeStore";

const RecommendationsList = () => {
  // Get the list of recommended recipes
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="mb-4 p-4 border rounded-lg shadow">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">
          No recommendations yet. Add some favorites!
        </p>
      )}
    </div>
  );
};

export default RecommendationsList;
