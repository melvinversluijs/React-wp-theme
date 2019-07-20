import axios from "axios";
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE
} from "./types";

/**
 * Get posts.
 */
export const getPosts = (page = 1) => async dispatch => {
  try {
    // Set loader.
    dispatch({
      type: GET_POSTS_REQUEST
    });

    // Get posts.
    const res = await axios.get(`/wp/v2/posts?page=${page}&_embed`);

    // Dispatch get_posts.
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    // Properly handle errors.
    dispatch({
      type: GET_POSTS_FAILURE,
      payload: error
    });
  }
};

/**
 * Get post by id.
 *
 * @param {int|string} pageId
 */
export const getPost = pageId => async dispatch => {
  try {
    // Set loader.
    dispatch({
      type: GET_POST_REQUEST
    });

    // Get post by id.
    const res = await axios.get(`/wp/v2/posts/${pageId}?_embed`);

    // Set resulting post as payload for dispatch.
    dispatch({
      type: GET_POST_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    // Properly handle errors.
    dispatch({
      type: GET_POST_FAILURE,
      payload: error
    });
  }
};
