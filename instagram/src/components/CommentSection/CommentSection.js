import React, { Component } from "react";
import Comment from "../Comment/Comment";
import PropTypes from "prop-types";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: ""
    };
  }

  componentDidMount = () => {
    this.setState({ comments: this.props.comments });
  };

  updateHandler = event => {
    this.setState({ comment: event.target.value });
  };

  addNewComment = event => {
    event.preventDefault();

    let newComment = {
      text: this.state.comment,
      username: "anonuser"
    };

    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newComment],
        comment: ""
      };
    });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => (
          <Comment comment={comment} key={index} commentIndex={index} />
        ))}
        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            name="addComment"
            placeholder="Add a comment"
            value={this.state.comment}
            onChange={this.updateHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
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
