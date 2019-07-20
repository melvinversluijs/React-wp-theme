import axios from "axios";
import {
  GET_MAIN_MENU_REQUEST,
  GET_MAIN_MENU_SUCCESS,
  GET_MAIN_MENU_FAILURE
} from "./types";

/**
 * Get main menu.
 */
export const getMainMenu = () => async dispatch => {
  try {
    // Set loader.
    dispatch({
      type: GET_MAIN_MENU_REQUEST
    });

    // Send request.
    const res = await axios.get("/react-theme/v1/navigation/main");

    // Dispatch action.
    dispatch({
      type: GET_MAIN_MENU_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    // Handle errors.
    dispatch({
      type: GET_MAIN_MENU_FAILURE
    });
  }
};
