import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

function PostContainer(props) {
  console.log(props);
  return (
    <div className="post-container">
      <img src={props.post.thumbnailUrl} />
      <h2>{props.post.username}</h2>
      <p>{props.post.timestamp}</p>
      <img src={props.post.imageUrl} />
      <p>{props.post.likes} likes</p>
      <div className="comments-container" />
      <CommentSection comments={props.post.comments} />
    </div>
  );
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
};

export default PostContainer;
