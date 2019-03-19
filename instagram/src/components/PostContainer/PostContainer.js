import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
  }

  incrementLikes = () => {};

  render() {
    return (
      <div className="post-container">
        <img src={this.props.post.thumbnailUrl} />
        <h2>{this.props.post.username}</h2>
        <p>{this.props.post.timestamp}</p>
        <img src={this.props.post.imageUrl} />
        <p>
          {this.props.post.likes} likes
          <span className="heart" onClick={this.incrementLikes}>
            heart
          </span>
        </p>
        <div className="comments-container" />
        <CommentSection
          comments={this.props.post.comments}
          postIndex={this.props.postIndex}
        />
      </div>
    );
  }
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
