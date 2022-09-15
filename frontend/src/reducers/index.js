import { combineReducers } from "redux";
import { auth } from "./authReducer";
import { recipe } from "./recipeReducer";

const rootReducer = combineReducers({
  auth,
  recipe,
});

export default rootReducer;
