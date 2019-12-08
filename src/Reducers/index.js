import { combineReducers } from "redux";
import listReducer from "./listReducer";

const mainReducer = combineReducers({
  lists: listReducer
});

export default mainReducer;
