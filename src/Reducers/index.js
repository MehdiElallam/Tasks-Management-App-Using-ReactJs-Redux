import { combineReducers } from "redux";
import listReducer from "./listsReducer";

const mainReducer = combineReducers({
  lists: listReducer
});

export default mainReducer;
