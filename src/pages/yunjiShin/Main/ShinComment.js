import React from 'react';
import './ShinComment.scss';

function ShinComment({ userName, content }) {
  return (
    <div className="ShinComment">
      <section>
        <span className="userName">{userName}</span>
        <span>{content}</span>
      </section>
      <img
        src="/images/yunjiShin/instagram_heart.png"
        alt="comment heart icon"
      />
    </div>
  );
}

export default ShinComment;
