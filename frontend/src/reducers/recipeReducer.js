import {
  GET_ALL_RECIPES,
  GET_A_RECIPE,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
} from "../actions/types";

const initialState = {
  recipe: {},
  recipes: [],
  isloading: true,
  isSuccess: false,
  isError: false,
  message: "",
};

export const recipe = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_RECIPE:
      return {
        ...state,
        isloading: false,
        isSuccess: true,
        message: payload,
      };
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: payload,
        isloading: false,
        isSuccess: true,
      };
    case GET_A_RECIPE:
    case UPDATE_RECIPE:
      return {
        ...state,
        recipe: payload,
        isloading: false,
        isSuccess: true,
      };
    case DELETE_RECIPE:
      return {
        ...state,
        message: payload,
        isloading: false,
        isSuccess: true,
      };
    default:
      return {
        ...state,
      };
  }
};
