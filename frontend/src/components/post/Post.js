import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost } from "../../actions/posts";

/**
 * Post component.
 */
const Post = ({
  post,
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

  return (
    post && (
      <div className="post">
        <h1 className="post__title">{post.title.rendered}</h1>
        <p
          className="post__content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    )
  );
};

// Set property types.
Post.propTypes = {
  post: PropTypes.object,
  match: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired
};

// Map application state to local properties.
const mapStateToProps = state => ({
  post: state.posts.post
});

// Export component.
export default connect(
  mapStateToProps,
  { getPost }
)(Post);
