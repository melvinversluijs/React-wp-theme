import { GET_HOME_PAGE_SUCCESS, GET_PAGE_SUCCESS } from '../actions/types';

// Set initial state.
const initialState = {
  staticPages: null,
  home: null,
  blog: null,
  page: null,
};

// Export reducer function.
export default function(state = initialState, action) {
  // Get type and payload from action.
  const { type, payload } = action;

  // Set state based on type.
  switch (type) {
    case GET_HOME_PAGE_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case GET_PAGE_SUCCESS:
      return {
        ...state,
        page: payload,
      };
    default:
      return state;
  }
}
