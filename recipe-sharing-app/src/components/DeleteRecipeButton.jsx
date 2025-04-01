import useRecipeStore from "../stores/recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const { deleteRecipe } = useRecipeStore();

  return (
    <button onClick={() => deleteRecipe(id)} style={{ color: "red" }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
