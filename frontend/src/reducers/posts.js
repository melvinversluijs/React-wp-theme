import { GET_POSTS, POSTS_ERROR } from "../actions/types";

// Set initial state.
const initialState = {
  posts: [],
  currentPage: 1,
  currentPost: {},
  loading: true
};

// Export reducer function.
export default function(state = initialState, action) {
  // Get type and payload from action.
  const { type, payload } = action;

  // Set new state.
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...payload],
        currentPage: state.currentPage + 1,
        loading: false
      };
    case POSTS_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
