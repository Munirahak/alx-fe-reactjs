import useRecipeStore from "../stores/recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) =>
    state.filteredRecipes(state)
  );
  const { addToFavorites } = useRecipeStore();

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.name}</h3>
              <button onClick={() => addToFavorites(recipe)}>
                ❤️ Favorite
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
