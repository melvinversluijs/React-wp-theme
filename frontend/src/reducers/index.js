import { combineReducers } from "redux";

// Bring in reducers.
import general from "./general";
import navigation from "./navigation";
import pages from "./pages";
import posts from "./posts";
import loading from "./loading";
import errors from "./errors";

// Combine all of our reducers.
export default combineReducers({
  loading,
  errors,
  general,
  navigation,
  pages,
  posts
});
