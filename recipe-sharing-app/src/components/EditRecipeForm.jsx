// src/components/EditRecipeForm.jsx
import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Edit Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Edit Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
