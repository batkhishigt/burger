export const addIngredient = ingredientName => {
  return {
    type: "ADD_INGREDIENT",
    ingredientName: ingredientName
  };
};

export const minIngredient = ingredientName => {
  return {
    type: "MIN_INGREDIENT",
    ingredientName: ingredientName
  };
};
