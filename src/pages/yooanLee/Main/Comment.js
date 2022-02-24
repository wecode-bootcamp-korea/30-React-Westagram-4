import React from 'react';
import './Comment';

function Comment(props) {
  return props.newCommentList.map((comment, index) => {
    return (
      <li className="eachComment" key={index}>
        <span>
          {comment.author} {comment.comment}
        </span>
        <span>&nbsp;</span>
        <span className="trash-icon">
          <i className="far fa-trash-alt"></i>
        </span>
      </li>
    );
  });
}
export default Comment;

// a = [1,2,3]
// a.map((i)=> {return a^2})

// console -> a [1, 4 ,9]
