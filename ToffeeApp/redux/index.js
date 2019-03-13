import { combineReducers } from "redux";
import nav from "./modules/nav";
import user from "./modules/user";

export default function getRootReducer() {
  return combineReducers({
    nav,
    user
  });
}
