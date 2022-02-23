import React from 'react';
import './ShinComment.scss';

function ShinComment() {
  return (
    <div className="ShinComment">
      <span className="userName">userName</span> <span>content</span>
      <img src="/images/instagram_heart.png" alt="comment heart icon" />
    </div>
  );
}

export default ShinComment;
