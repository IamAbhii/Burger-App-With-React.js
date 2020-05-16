import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const intialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7,
};

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIn = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngs = updateObject(state.ingredients, updatedIn);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      cheese: action.ingredients.cheese,
      bacon: action.ingredients.bacon,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
    building: false,
  });
};

const fectchIngredientsFailed = (state) => {
  return updateObject(state, { error: true });
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);

    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);

    case actionTypes.SET_INGREDIENT:
      return setIngredients(state, action);

    case actionTypes.FETCH_INGREDIENT_FAILED:
      return fectchIngredientsFailed(state);

    default:
      return state;
  }
};

export default reducer;
