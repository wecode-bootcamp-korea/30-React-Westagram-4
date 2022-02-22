import React, { useState, useEffect } from 'react';
import Comment from './Comment/Comment';
import './CommentList.scss';

function CommentList() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <div className="commentList">
      <h1>Main Page</h1>
      <ul>
        {commentList.map(comment => {
          return (
            <Comment
              key={comment.id}
              name={comment.userName}
              comment={comment.content}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;
