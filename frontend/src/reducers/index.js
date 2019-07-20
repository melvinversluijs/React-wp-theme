import { combineReducers } from "redux";

// Bring in reducers.
import general from "./general";
import navigation from "./navigation";
import pages from "./pages";
import posts from "./posts";
import loading from "./loading";

// Combine all of our reducers.
export default combineReducers({ loading, general, navigation, pages, posts });
