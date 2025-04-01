import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      name: "Spaghetti",
      ingredients: ["Pasta", "Tomato Sauce"],
      time: 30,
    },
    {
      id: 2,
      name: "Pancakes",
      ingredients: ["Flour", "Milk", "Eggs"],
      time: 15,
    },
    {
      id: 3,
      name: "Salad",
      ingredients: ["Lettuce", "Tomatoes", "Cucumber"],
      time: 10,
    },
  ],

  searchQuery: "",

  setSearchQuery: (query) => set({ searchQuery: query }),

  filteredRecipes: (state) =>
    state.recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
    ),

  favorites: [],

  addToFavorites: (recipe) => {
    set((state) => ({
      favorites: state.favorites.some((fav) => fav.id === recipe.id)
        ? state.favorites // Already in favorites
        : [...state.favorites, recipe], // Add to favorites
    }));
  },

  removeFromFavorites: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.id !== recipeId),
    }));
  },

  recommendations: [],

  generateRecommendations: () => {
    const { favorites, recipes } = get();

    if (favorites.length === 0) {
      set({ recommendations: [] });
      return;
    }

    const recommended = recipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        favorites.some((fav) => fav.ingredients.includes(ingredient))
      )
    );

    set({ recommendations: recommended });
  },

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;
