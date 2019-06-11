import axios from "axios";
import { GET_LOGO, GENERAL_ERROR } from "./types";

/**
 * Get logo.
 */
export const getLogo = () => async dispatch => {
  try {
    // Send request.
    const res = await axios.get("/react-theme/v1/general/logo");

    // Dispatch action.
    dispatch({
      type: GET_LOGO,
      payload: res.data
    });
  } catch (error) {
    // Handle errors.
    dispatch({
      type: GENERAL_ERROR
    });
  }
};
