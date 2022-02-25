import React, { useEffect, useState } from 'react';
import ShinComment from './ShinComment';
import ShinCommentList from './ShinCommentList';
import './ShinMain.scss';

const ShinMain = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('/data/shinData.json')
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  const getComment = e => {
    setComment(e.target.value);
  };

  const addComment = () => {
    setCommentList(
      commentList.concat({
        id: commentList.length + 1,
        userName: 'memememe',
        content: comment,
      })
    );
    setComment('');
  };

  const submitComment = e => {
    e.preventDefault();
  };

  return (
    <div className="shinMain">
      <nav>
        <section className="navTopLogo">
          <img
            alt="instagram logo"
            className="instagramLogo"
            src="/images/yunjiShin/instagram.png"
          />
          <span className="instagram">Instagram</span>
        </section>
        <span className="searchBar">
          <img
            alt="search icon"
            className="searchIcon"
            src="/images/yunjiShin/search.png"
          />
          검색
        </span>
        <section className="navRight">
          <img
            alt="explore icon"
            className="exploreIcon"
            src="/images/yunjiShin/search.png"
          />
          <img
            alt="heart icon"
            className="heartIcon"
            src="/images/yunjiShin/instagram_heart.png"
          />
          <img
            alt="profile icon"
            className="profileIcon"
            src="/images/yunjiShin/instagram_profile.png"
          />
        </section>
      </nav>
      <main>
        <div id="feeds">
          <article>
            <section className="feedArticle">
              <div className="feedArticleProfile">
                <img
                  alt="feed profile"
                  className="feedProfile"
                  src="/images/yunjiShin/good-faces-ouWf8vF1NSo-unsplash.jpg"
                />
                <span className="feedNickname">human_oo1 </span>
              </div>
            </section>
            <section>
              <img
                alt="feed article"
                className="feedPicture"
                src="/images/yunjiShin/photo-1644780295307-eab5f4f430a3.jpeg"
              />
            </section>
            <section className="feedBtn">
              <div>
                <img
                  alt="heart button"
                  className="heartBtn"
                  src="/images/yunjiShin/instagram_heart.png"
                />
                <img
                  alt="comment button"
                  className="commentBtn"
                  src="/images/yunjiShin/chat-bubble.png"
                />
                <img
                  alt="export button"
                  className="shareBtn"
                  src="/images/yunjiShin/premium-icon-export-3024597.png"
                />
              </div>
            </section>
          </article>
          <section className="likes">
            <img
              alt="right profile1"
              className="mainRightStoryProfile1"
              src="/images/yunjiShin/collins-lesulie-h8F09Am8W5Y-unsplash.jpg"
            />
            <span>yourfriendoo1님 외 7명이 좋아합니다.</span>
          </section>
          <section className="description">
            <span className="descriptionNickname"> human_oo1 </span>
            <span> 바다 #today </span>
          </section>
          <form className="comments" onSubmit={submitComment}>
            <ShinCommentList shinCommentList={commentList} />
            <input
              placeholder="댓글 달기..."
              onChange={getComment}
              value={comment}
            />
            <button onClick={addComment}>게시</button>
          </form>
        </div>
        <div id="main-right">
          <div className="mainRightMe">
            <img
              alt="right profile0"
              className="myProfile"
              src="/images/yunjiShin/alexa-portoraro-7UuwLkA8rHQ-unsplash.jpg"
            />
            <p className="myId">mememememe</p>
            <p className="myNickname">myself | coding</p>
          </div>
          <section className="mainRightStory">
            <div className="mainRightStoryIndex">
              <h3 className="stories">스토리</h3>
              <h3 className="seeAll">모두 보기</h3>
            </div>
            <div className="mainRightStory1">
              <img
                alt="story1 profile"
                className="mainRightStoryProfile1"
                src="/images/yunjiShin/collins-lesulie-h8F09Am8W5Y-unsplash.jpg"
              />
              <span>yourfriendoo1</span>
              <span className="mainRightStoryTime1">19분 전</span>
            </div>
            <div className="mainRightStory2">
              <img
                alt="story2 profile"
                className="mainRightStoryProfile2"
                src="/images/yunjiShin/hamza-nouasria-dPEcZi445OM-unsplash.jpg"
              />
              <span>yourfriendoo2</span>
              <span className="mainRightStoryTime2">49분 전</span>
            </div>
            <div className="mainRightStory3">
              <img
                alt="right profile3"
                className="mainRightStoryProfile3"
                src="/images/yunjiShin/photo-1553272725-086100aecf5e.jpeg"
              />
              <span>yourfriendoo33</span>
              <span className="mainRightStoryTime3">4시간 전</span>
            </div>
          </section>
          <section className="mainRightSuggestions">
            <div className="mainRightSuggestionsIndex">
              <h3 className="suggestions">회원님을 위한 추천</h3>
              <h3 className="seeAll">모두 보기</h3>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ShinMain;
