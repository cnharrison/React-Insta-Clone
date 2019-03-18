import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";

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

export default PostContainer;
