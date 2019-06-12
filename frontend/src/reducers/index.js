import { combineReducers } from "redux";

// Bring in reducers.
import general from "./general";
import navigation from "./navigation";
import pages from "./pages";

// Combine all of our reducers.
export default combineReducers({ general, navigation, pages });
