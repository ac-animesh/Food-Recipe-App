import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  RESET,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_USER,
  USER_LOADED,
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: true,
  isSuccess: false,
  isAdmin: false,
  isError: false,
  message: "",
};

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        message: payload,
        isLoading: false,
        isSuccess: true,
      };
    case LOGIN_SUCCESS:
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        isAdmin: payload.isAdmin,
        isLoading: false,
        isSuccess: true,
      };
    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isLoading: false,
        isError: true,
        message: payload,
        isSuccess: true,
      };
    case RESET:
      return {
        ...state,
        message: "",
        isSuccess: false,
        isError: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
