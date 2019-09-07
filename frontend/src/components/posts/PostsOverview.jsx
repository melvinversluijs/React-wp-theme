import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostsAction } from '../../actions/posts';
import PostItem from './PostItem';

/**
 * PostsOverview component.
 */
const PostsOverview = ({ posts: { posts, currentPage }, getPosts }) => {
  // Load page after loading component.
  useEffect(() => {
    if (posts.length === 0) {
      getPosts(currentPage);
    }
  }, [getPosts, currentPage, posts.length]);

  /**
   * Function to load more items.
   */
  const handleLoadMore = () => {
    getPosts(currentPage);
  };

  return (
    posts.length > 0 && (
      <div className="posts-overview">
        <div className="posts-overview__container">
          {posts.map(post => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
        <button
          className="posts-overview__load-more"
          onClick={() => handleLoadMore()}
          type="button"
        >
          Load more posts
        </button>
      </div>
    )
  );
};

// Set component property types.
PostsOverview.propTypes = {
  posts: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
};

// Map application state to component props.
const mapStateToProps = state => ({
  posts: state.posts,
});

// Export component.
export default connect(
  mapStateToProps,
  { getPosts: getPostsAction },
)(PostsOverview);
