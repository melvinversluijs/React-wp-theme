import { NAVIGATION_ERROR, GET_MAIN_MENU } from "../actions/types";

// Initial state.
const initialState = {
  main_menu: null,
  loading: true
};

// Handle different actions.
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MAIN_MENU:
      return {
        ...state,
        main_menu: payload,
        loading: false
      };
    case NAVIGATION_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
