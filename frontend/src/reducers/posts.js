import { GET_POSTS_SUCCESS, GET_POST_SUCCESS } from "../actions/types";

// Set initial state.
const initialState = {
  posts: [],
  currentPage: 1,
  post: null
};

// Export reducer function.
export default function(state = initialState, action) {
  // Get type and payload from action.
  const { type, payload } = action;

  // Set new state.
  switch (type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...payload],
        currentPage: state.currentPage + 1
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: payload
      };
    default:
      return state;
  }
}
