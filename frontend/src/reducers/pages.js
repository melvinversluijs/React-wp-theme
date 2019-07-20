import { GET_HOME_PAGE, GET_PAGE, PAGES_ERROR } from "../actions/types";

// Set initial state.
const initialState = {
  home: null,
  page: null,
  loading: true
};

// Export reducer function.
export default function(state = initialState, action) {
  // Get type and payload from action.
  const { type, payload } = action;

  // Set state based on type.
  switch (type) {
    case GET_HOME_PAGE:
      return {
        ...state,
        home: payload,
        loading: false
      };
    case GET_PAGE: {
      return {
        ...state,
        page: payload,
        loading: false
      };
    }
    case PAGES_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
