import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * PostItem component.
 *
 * @param {Object} param0
 */
const PostItem = ({ post }) => {
  // Get featured image from post.
  const image = post._embedded["wp:featuredmedia"];
  const terms = post._embedded["wp:term"];
  let termsList = "";

  if (terms && terms.length > 0) {
    terms.forEach(term => {
      term.forEach(item => {
        if (item.taxonomy === "category") {
          if (termsList.length > 0) termsList += ", ";

          termsList += item.name;
        }
      });
    });
  }

  return (
    <div className="posts-overview__card">
      {image && image[0] && (
        <img
          src={image[0].source_url}
          alt=""
          className="posts-overview__post-image"
        />
      )}

      {termsList.length > 0 && (
        <span className="posts-overview__post-category">{termsList}</span>
      )}
      <h3 className="posts-overview__post-name">{post.title.rendered}</h3>
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
