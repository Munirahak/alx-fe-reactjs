import React from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import Recommendations from './Recommendations';

const RecipesPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Recipe Finder 🍽️</h1>
      <SearchBar />
      <RecipeList />
      <Recommendations />
    </div>
  );
};

export default RecipesPage;
