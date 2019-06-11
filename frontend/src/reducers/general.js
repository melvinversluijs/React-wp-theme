import { GET_LOGO, GENERAL_ERROR } from "../actions/types";

// Set initial state.
const initialState = {
  logo: null,
  loading: true
};

// Modify state based on dispatched action.
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LOGO:
      return {
        ...state,
        logo: payload,
        loading: false
      };
    case GENERAL_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
