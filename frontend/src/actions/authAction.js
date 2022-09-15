import axios from "axios";
import {
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_USER,
  RESET,
} from "./types";

// Login User
export const loginUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post("api/login", user);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({
      type: LOGIN_FAILED,
      payload: message,
    });
  }
};

// Register User
export const registerUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post("api/register", user);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({
      type: REGISTER_FAILED,
      payload: message,
    });
  }
};

// Loading User
export const loadUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (user) {
      config.headers["x-auth"] = user.token;
    }
    const res = await axios.get("api/getuser", config);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//Logout User
export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  dispatch({
    type: LOGOUT_USER,
  });
};

// reset
export const reset = () => async (dispatch) => {
  dispatch({
    type: RESET,
  });
};
