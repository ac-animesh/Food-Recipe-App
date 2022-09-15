import axios from "axios";
import {
  GET_ALL_RECIPES,
  GET_A_RECIPE,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
} from "./types";

// Get All Recipes
export const getAllRecipes = () => async (dispatch) => {
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
    const res = await axios.get("/api/recipes/", config);

    dispatch({
      type: GET_ALL_RECIPES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get a Recipes
export const getRecipe = (id) => async (dispatch) => {
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
    const res = await axios.get(`/api/recipes/${id}`, config);

    dispatch({
      type: GET_A_RECIPE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Create a Recipe
export const createRecipe = (newRecipe) => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    // const body = JSON.stringify(newRecipe);
    if (user) {
      config.headers["x-auth"] = user.token;
    }
    const res = await axios.post("/api/recipes/", newRecipe, config);

    dispatch({
      type: CREATE_RECIPE,
      payload: res.data,
    });

    dispatch(getAllRecipes());
  } catch (error) {
    console.log(error);
  }
};

// Delete a recipe
export const deleteRecipe =
  ({ id }) =>
  async (dispatch) => {
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

      const res = await axios.delete(`/api/recipes/${id}`, config);

      dispatch({
        type: DELETE_RECIPE,
        payload: res.data,
      });

      dispatch(getAllRecipes());
    } catch (error) {
      console.log(error);
    }
  };

// Update a Recipe
export const updateRecipe = (editRecipe, id) => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(editRecipe);
    if (user) {
      config.headers["x-auth"] = user.token;
    }
    const res = await axios.put(`/api/recipes/${id}`, body, config);

    dispatch({
      type: UPDATE_RECIPE,
      payload: res.data,
    });

    dispatch(getAllRecipes());
  } catch (error) {
    console.log(error);
  }
};
