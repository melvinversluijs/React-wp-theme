import { combineReducers } from "redux";

// Bring in reducers.
import general from "./general";
import navigation from "./navigation";

// Combine all of our reducers.
export default combineReducers({ general, navigation });
