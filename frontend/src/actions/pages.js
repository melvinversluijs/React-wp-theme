import axios from 'axios';
import {
  GET_HOME_PAGE_REQUEST,
  GET_HOME_PAGE_SUCCESS,
  GET_HOME_PAGE_FAILURE,
  GET_PAGE_REQUEST,
  GET_PAGE_SUCCESS,
  GET_PAGE_FAILURE,
} from './types';

/**
 * Get home page.
 */
export const getHomePageAction = () => async dispatch => {
  try {
    // Set loader.
    dispatch({
      type: GET_HOME_PAGE_REQUEST,
    });

    // Send request.
    const res = await axios.get('/react-theme/v1/pages/home');

    // Save to state.
    dispatch({
      type: GET_HOME_PAGE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    // Handle errors.
    dispatch({
      type: GET_HOME_PAGE_FAILURE,
      payload: error,
    });
  }
};

/**
 * Get page by id.
 *
 * @param {int|string} pageId
 */
export const getPageAction = pageId => async dispatch => {
  try {
    // Set loader.
    dispatch({
      type: GET_PAGE_REQUEST,
    });

    // Get page by id.
    const res = await axios.get(`/wp/v2/pages/${pageId}`);

    // Save to state.
    dispatch({
      type: GET_PAGE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    // Handle errors.
    dispatch({
      type: GET_PAGE_FAILURE,
      payload: error,
    });
  }
};
