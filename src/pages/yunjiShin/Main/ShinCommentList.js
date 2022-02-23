import React from 'react';
import './ShinComment.scss';
import ShinComment from './ShinComment';

function ShinCommentList({ shinCommentList }) {
  return (
    <div className="comment-info">
      {shinCommentList.map(comment => {
        return (
          <ShinComment
            key={comment.id}
            userName={comment.userId}
            content={comment.content}
          />
        );
      })}
    </div>
  );
}

export default ShinCommentList;
