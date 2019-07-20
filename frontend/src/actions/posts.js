import axios from "axios";
import { GET_POSTS, GET_POST, POSTS_ERROR } from "./types";

/**
 * Get posts.
 */
export const getPosts = (page = 1) => async dispatch => {
  try {
    // Get posts.
    const res = await axios.get(`/wp/v2/posts?page=${page}&_embed`);

    // Dispatch get_posts.
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (error) {
    // Properly handle errors.
    dispatch({
      type: POSTS_ERROR
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
    // Get post by id.
    const res = await axios.get(`/wp/v2/posts/${pageId}?_embed`);

    // Set resulting post as payload for dispatch.
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (error) {
    // Properly handle errors.
    dispatch({
      type: POSTS_ERROR
    });
  }
};
