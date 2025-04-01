import useRecipeStore from "../stores/recipeStore.js";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useRecipeStore();

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
        fontSize: "16px",
      }}
    />
  );
};

export default SearchBar;
