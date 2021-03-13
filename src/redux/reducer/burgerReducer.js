const initialState = {
  ingredients: {
    cheese: 0,
    meat: 0,
    bacon: 0,
    salad: 0,
  },
  totalPrice: 1000,
  purchasing: false,
  ingredientNames: {
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Мах",
    salad: "Салад",
  },
};
const INGREDIENT_PRICES = {
  salad: 1000,
  bacon: 2000,
  cheese: 3000,
  meat: 4000,
};
const reducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ortsNer],
      purchasing: true,
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    const newPrice = state.totalPrice - INGREDIENT_PRICES[action.ortsNer];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] - 1,
      },
      totalPrice: newPrice,
      purchasing: newPrice > 1000,
    };
  }
  return state;
};
export default reducer;
