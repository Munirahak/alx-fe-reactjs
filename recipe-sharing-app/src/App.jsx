// --- ALL imports must be at the top ---
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import useRecipeStore from "../stores/recipeStore"; // adjust path as needed

// --- then your components ---

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

const Home = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const toggleFavorite = (id) => {
    favorites.includes(id) ? removeFavorite(id) : addFavorite(id);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Recipe Sharing App</h1>

      {/* Recipes Section */}
      <section>
        <h2>All Recipes</h2>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "1rem" }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => toggleFavorite(recipe.id)}>
              {favorites.includes(recipe.id)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </div>
        ))}
      </section>

      {/* Favorites Section */}
      <section style={{ marginTop: "2rem" }}>
        <FavoritesList />
      </section>

      {/* Recommendations Section */}
      <section style={{ marginTop: "2rem" }}>
        <RecommendationsList />
        <RecipeList />
      </section>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page: show list of recipes + favorites + recommendations */}
        <Route path="/" element={<Home />} />

        {/* Recipe Details Page */}
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
