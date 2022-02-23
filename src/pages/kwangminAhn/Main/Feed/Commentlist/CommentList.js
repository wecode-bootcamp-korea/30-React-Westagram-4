import React, { useState, useEffect } from 'react';
import Comment from './Comment/Comment';
import './CommentList.scss';

function CommentList() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => 
    fetch('http://172.24.14.202:8000/westagram/sign-up', {
      method: 'POST',
      body: JSON.stringify({
        username: 'kwangmin',
        phone_number: '01012341234',
        email: 'kwangmon@naver.com',
        password: 'rhkdals@1',
      }),
    })
      .then(res => res.json())
      .then(result => console.log('결과: ', result)),
   []
);

  return (
    <div className="commentList">
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


<div className="guestComment">
<span>Friend</span> 굳~~~~
<p>42분전</p>
<div>
  {commentArr.map((commentItem, index) => {
    return <div key={index}>{commentItem}</div>;
  })}
</div>
</div>
</div>
<div className="newComment">
<input
className="inputComment"
type="text"
value={comment}
onChange={handleChange}
placeholder="댓글 달기..."
/>
<button className="commentBtn" onClick={handleClick}>
게시
</button>
</div>