import axios from "axios";
import { GET_MAIN_MENU, NAVIGATION_ERROR } from "./types";

/**
 * Get main menu.
 */
export const getMainMenu = () => async dispatch => {
  try {
    // Send request.
    const res = await axios.get("/react-theme/v1/navigation/main");

    // Dispatch action.
    dispatch({
      type: GET_MAIN_MENU,
      payload: res.data
    });
  } catch (error) {
    // Handle errors.
    dispatch({
      type: NAVIGATION_ERROR
    });
  }
};
