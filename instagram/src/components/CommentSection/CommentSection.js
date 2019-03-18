import React, { Component } from "react";
import Comment from "../Comment/Comment"

function CommentSection(props) {
  console.log(props);
  return (
    <div>
      {props.comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}

export default CommentSection;
