/* eslint no-underscore-dangle: 0, react/no-danger: 0 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostAction } from '../../actions/posts';

/**
 * Post component.
 */
const Post = ({ post, match, getPost }) => {
  // Get post when loading the page.
  useEffect(() => {
    // Only get new object if we not have one yet.
    if (!post || post.id !== Number(match.params.id)) {
      getPost(match.params.id);
    }
  }, [getPost, post, match.params.id]);

  if (!post) {
    return null;
  }

  // Get all needed variables.
  const title = post.title && post.title.rendered ? post.title.rendered : null;
  const content =
    post.content && post.content.rendered ? post.content.rendered : null;
  const author =
    post._embedded && post._embedded.author && post._embedded.author[0]
      ? post._embedded.author[0]
      : null;
  const authorName = author.name ? author.name : null;
  const authorImage =
    author.avatar_urls && author.avatar_urls[96]
      ? author.avatar_urls[96]
      : null;

  return (
    <div className="post">
      {title && <h1 className="post__title">{title}</h1>}
      {authorImage && authorName && (
        <div className="post__author">
          <img
            src={authorImage}
            alt={authorName}
            className="post__author-image"
          />
          <span className="post__author-name">{`by ${authorName}`}</span>
        </div>
      )}
      {content && (
        <div
          className="post__content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

// Set property types.
Post.propTypes = {
  post: PropTypes.object,
  match: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
};

Post.defaultProps = {
  post: null,
};

// Map application state to local properties.
const mapStateToProps = state => ({
  post: state.posts.post,
});

// Export component.
export default connect(
  mapStateToProps,
  { getPost: getPostAction },
)(Post);
