import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost } from "../../actions/posts";
import posts from "../../reducers/posts";

/**
 * Post component.
 */
const Post = ({
  post,
  loading,
  match: {
    params: { id }
  },
  getPost
}) => {
  // Get post when loading the page.
  useEffect(() => {
    // Only get new object if we not have one yet.
    if (!post || !post.id !== id) {
      getPost(id);
    }
  }, [getPost]);

  return loading || !post || !post.hasOwnProperty("id") ? (
    <span>Loading</span>
  ) : (
    <div className="post">
      <h1 className="post__title">{post.title.rendered}</h1>
      <p
        className="post__content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
};

// Set property types.
Post.propTypes = {
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired
};

// Map application state to local properties.
const mapStateToProps = state => ({
  post: state.posts.currentPost,
  loading: state.posts.loading
});

// Export component.
export default connect(
  mapStateToProps,
  { getPost }
)(Post);
