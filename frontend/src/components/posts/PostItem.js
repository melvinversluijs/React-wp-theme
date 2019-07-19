import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * PostItem component.
 *
 * @param {Object} param0
 */
const PostItem = ({ post }) => {
  return (
    <div className="posts-overview__card">
      <h3 className="posts-overview__post-name">{post.title.rendered}</h3>
      <p
        className="posts-overview__post-excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
      <Link to={`/post/${post.id}`} className="posts-overview__post-link">
        Read more
      </Link>
    </div>
  );
};

// Set postitem property types.
PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

// Export component.
export default PostItem;
