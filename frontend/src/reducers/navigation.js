import { GET_MAIN_MENU_SUCCESS } from "../actions/types";

// Initial state.
const initialState = {
  main_menu: null
};

// Handle different actions.
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MAIN_MENU_SUCCESS:
      return {
        ...state,
        main_menu: payload
      };
    default:
      return state;
  }
}
