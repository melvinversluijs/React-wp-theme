import { GET_LOGO_SUCCESS } from "../actions/types";

// Set initial state.
const initialState = {
  logo: null
};

// Modify state based on dispatched action.
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LOGO_SUCCESS:
      return {
        ...state,
        logo: payload
      };
    default:
      return state;
  }
}
