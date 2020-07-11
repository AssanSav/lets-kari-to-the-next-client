import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import messagesReducer from "./messagesReducer";
import interestsReducer from "./interestsReducer";
import matchesReducer from "./matchesReducer";

export const rootReducer = combineReducers({
  usersReducer,
  messagesReducer,
  interestsReducer,
  matchesReducer,
});
