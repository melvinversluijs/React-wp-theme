import axios from "axios";
import { GET_LOGO_REQUEST, GET_LOGO_SUCCESS, GET_LOGO_FAILURE } from "./types";

/**
 * Get logo.
 */
export const getLogo = () => async dispatch => {
  try {
    dispatch({
      type: GET_LOGO_REQUEST
    });

    // Send request.
    const res = await axios.get("/react-theme/v1/general/logo");

    // Dispatch action.
    dispatch({
      type: GET_LOGO_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    // Handle errors.
    dispatch({
      type: GET_LOGO_FAILURE,
      payload: error
    });
  }
};
