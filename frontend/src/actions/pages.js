import axios from "axios";
import { GET_HOME_PAGE, GET_PAGE, PAGES_ERROR } from "./types";

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

/**
 * Get page by id.
 *
 * @param {int|string} pageId
 */
export const getPage = pageId => async dispatch => {
  try {
    // Get page by id.
    const res = await axios.get(`/wp/v2/pages/${pageId}`);

    // Save to state.
    dispatch({
      type: GET_PAGE,
      payload: res.data
    });
  } catch (error) {
    // Handle errors.
    dispatch({
      type: PAGES_ERROR
    });
  }
};
