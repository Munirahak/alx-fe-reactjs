import React from "react";
import useRecipeStore from "../store/recipeStore";

const SearchBar = () => {
  const { setSearchTerm, filterRecipes } = useRecipeStore();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // Make sure to trigger filtering every time user types
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      className="p-2 border rounded w-full mb-4"
    />
  );
};

export default SearchBar;
