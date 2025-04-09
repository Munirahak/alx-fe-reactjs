import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
};

export default App;
