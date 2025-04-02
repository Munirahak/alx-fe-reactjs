import { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ id, onClose }) => {
  const { updateRecipe, recipes } = useRecipeStore();
  const recipe = recipes.find((r) => r.id === id);

  const [name, setName] = useState(recipe?.name || "");
  const [description, setDescription] = useState(recipe?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(id, { name, description });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
