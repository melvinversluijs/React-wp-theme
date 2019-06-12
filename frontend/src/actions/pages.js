import axios from "axios";
import { GET_HOME_PAGE, PAGES_ERROR } from "./types";

/**
 * Get home page.
 */
export const getHomePage = () => async dispatch => {
  try {
    // Send request.
    const res = await axios.get("/react-theme/v1/pages/home");

    // Save to state.
    dispatch({
      type: GET_HOME_PAGE,
      payload: res.data
    });
  } catch (error) {
    // Handle errors.
    dispatch({
      type: PAGES_ERROR
    });
  }
};
