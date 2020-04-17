const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0
  },
  ingredient_names: {
    salad: "Салад",
    cheese: "Баяслаг",
    bacon: "Гахайн мах",
    meat: "Үхрийн мах"
  },
  totalPrice: 1000,
  purchasing: false
};
const reducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      purchasing: true
    };
  }
  if (action.type === "MIN_INGREDIENT") {
    const newPrice =
      state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
      },
      totalPrice: newPrice,
      purchasing: newPrice > 1000
    };
  }
  return state;
};
export default reducer;
