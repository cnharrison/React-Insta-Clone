import React, { Component } from "react";
import Comment from "../Comment/Comment";
import PropTypes from "prop-types";

function CommentSection(props) {
  console.log(props);
  return (
    <div>
      {props.comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
      <form>
        <input name="addPost" placeholder="Add a comment" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    })
  )
};

export default CommentSection;
