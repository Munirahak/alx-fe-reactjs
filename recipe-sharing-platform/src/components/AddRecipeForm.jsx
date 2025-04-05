import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientsArray = ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item);
      if (ingredientsArray.length < 2) {
        newErrors.ingredients = "At least two ingredients are required.";
      }
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        steps,
      };
      console.log("Recipe submitted:", newRecipe);

      // Clear form fields after successful submission
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="title"
          >
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Textarea */}
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="ingredients"
          >
            Ingredients (separate with commas)
          </label>
          <textarea
            id="ingredients"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps Textarea */}
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="steps"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="6"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
