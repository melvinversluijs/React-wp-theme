import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/posts";
import PostItem from "./PostItem";

/**
 * PostsOverview component.
 */
const PostsOverview = ({ posts: { posts, loading }, getPosts }) => {
  // Load page after loading component.
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="posts-overview">
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

// Set component property types.
PostsOverview.propTypes = {
  posts: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

// Map application state to component props.
const mapStateToProps = state => ({
  posts: state.posts
});

// Export component.
export default connect(
  mapStateToProps,
  { getPosts }
)(PostsOverview);
