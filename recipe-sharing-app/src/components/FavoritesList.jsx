import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const { favorites, removeFromFavorites } = useRecipeStore();

  return (
    <div>
      <h2>Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.name}</h3>
              <button onClick={() => removeFromFavorites(recipe.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
