import React, { Component } from "react";

function Comment(props) { 
    return ( 
        <div>
            <h3>{props.comment.username}</h3>
            <p>{props.comment.text}</p>
        </div>
    )
}

export default Comment;