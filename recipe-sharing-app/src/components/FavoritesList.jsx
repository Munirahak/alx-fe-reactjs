// Import the Zustand store
import { useRecipeStore } from "../store/recipeStore";

const FavoritesList = () => {
  // Get favorite recipes by mapping favorite IDs to recipe objects
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((recipe) => (
          <div key={recipe.id} className="mb-4 p-4 border rounded-lg shadow">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">You have no favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
