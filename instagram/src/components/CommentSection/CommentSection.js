import React, { Component } from "react";
import Comment from "../Comment/Comment";

function CommentSection(props) {
  console.log(props);
  return (
    <div>
      {props.comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
      <form>
        <input name="addPost" placeholder="Add a comment"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentSection;
