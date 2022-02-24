import React from 'react';
import './LeeMain.scss';
import Comment from './Comment';
import { useState, useEffect } from 'react';

function LeeMain() {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  // ->[]: 빈배열의 이유: 빈값을 가지고 오는데 빈값이 json에 있는 빈 배열이기 때문

  const getComment = e => {
    setComment(e.target.value);
  }; // event handler

  const addComment = e => {
    setCommentList(
      commentList.concat([
        {
          author: 'Yooan',
          comment: comment,
        },
      ])
    );
    e.preventDefault();
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/mock.json') //->api 조소(mock data)
      .then(res => res.json()) //-> 인자에 넣어줌
      .then(data => setCommentList(data));
  }, []);

  // -> 빈배열 이유:딱한번만 가져오기 때문에
  //

  return (
    <div className="main">
      {/* <!-- main Section --> */}
      <main className="main_section">
        {/* <!-- main_left_box --> */}
        <div className="feeds">
          <div id="post">
            <div className="account_name">
              <div className="story">
                <img
                  src="/images/yooanLee/example1.jpg"
                  alt="logo"
                  className="profile_logo"
                  id="profile_pic_in_post"
                />
                <div className="texts_in_account_box">
                  <h4>_animani_lee</h4>
                </div>
              </div>
            </div>
            <div className="post_img" />
            <div className="features_box">
              <div className="menus">
                <li className="features_icon">
                  <i className="far fa-heart" />
                </li>
                <li className="features_icon">
                  <i className="far fa-comment" />
                </li>
                <li className="features_icon">
                  <i className="far fa-share-square" />
                </li>
              </div>
              <div className="menus">
                <li className="bookmark_icon">
                  <i className="far fa-bookmark" />
                </li>
              </div>
            </div>
            <div className="likes">
              <div className="story">
                <img
                  src="/images/yooanLee/example2.jpg"
                  alt="a profile"
                  className="profile_logo"
                  id="profile_pic_in-likes"
                />
                <div className="texts_in_likes">
                  <h4>
                    <span>aineworld</span>님 외 <span>10명</span>이 좋아합니다
                  </h4>
                </div>
              </div>
            </div>
            <div id="comment_box">
              <ul id="new_comment">
                <Comment newCommentList={commentList} />
              </ul>
            </div>
            <div className="new_comment_box">
              <form className="comment_form" onSubmit={addComment}>
                <input
                  type="text"
                  onChange={getComment}
                  placeholder="Add a comment"
                  id="comment_input"
                />
                <button id="post_button">post</button>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- main_right_box--> */}
        <div className="main-right">
          <div className="account_box">
            <img
              src="/images/yooanLee/example4.jpg"
              alt="logo"
              className="profile_logo"
            />
            <div className="texts_in_account_box">
              <h4>wecode_bootcamp</h4>
              <h5 className="info_under_name">WeCode | 위코드</h5>
            </div>
          </div>
          {/* <!--first box in the right side  --> */}
          <div className="side_box_setup">
            <div className="box_name">
              <h5 className="color_h5">스토리</h5>
              <h5>모두 보기</h5>
            </div>
            <div className="story">
              <img
                src="/images/yooanLee/example5.jpg"
                alt="logo"
                className="profile_logo clickable"
              />
              <div className="texts_in_account_box">
                <h4>_yum_s</h4>
                <h5 className="info_under_name">15분 전</h5>
              </div>
            </div>
            <div className="story">
              <img
                src="/images/yooanLee/example6.jpg"
                alt="logo"
                className="profile_logo"
                id="clickable"
              />
              <div className="texts_in_account_box">
                <h4>drink_eat_drink</h4>
                <h5 className="info_under_name">3시간 전</h5>
              </div>
            </div>
            <div className="story">
              <img
                src="/images/yooanLee/example7.jpg"
                alt="logo"
                className="profile_logo"
                id="clickable"
              />
              <div className="texts_in_account_box">
                <h4>hyukyc</h4>
                <h5 className="info_under_name">20시간 전</h5>
              </div>
            </div>
            <div className="story">
              <img
                src="/images/yooanLee/example8.jpg"
                alt="logo"
                className="profile_logo"
                id="clickable"
              />
              <div className="texts_in_account_box">
                <h4>cskang_93</h4>
                <h5 className="info_under_name">15분 전</h5>
              </div>
            </div>
          </div>

          {/* <!--second box in the right side  --> */}
          <div className="side_box_setup" id="recommned_section">
            <div className="box_name">
              <h5 className="color_h5">회원님을 위한 추천</h5>
              <h5>모두 보기</h5>
            </div>
            <div id="recommend_box">
              <div className="story">
                <img
                  src="/images/yooanLee/profile.jpg"
                  alt="logo"
                  className="profile_logo"
                />
                <div className="texts_in_account_box">
                  <h4>joaaaaaaahye</h4>
                  <h5 className="info_under_name">jimmylee1220님 외1...</h5>
                </div>
              </div>
              <button className="follow_btn">팔로우</button>
            </div>
            <div id="recommend_box">
              <div className="story">
                <img
                  src="/images/yooanLee/profile.png"
                  alt="logo"
                  className="profile_logo"
                />
                <div className="texts_in_account_box">
                  <h4>shawnkjjoo</h4>
                  <h5 className="info_under_name">_legend_a님 외 2명이...</h5>
                </div>
              </div>
              <button className="follow_btn">팔로우</button>
            </div>
            <div id="recommend_box">
              <div className="story">
                <img
                  src="/images/yooanLee/feed1.jpg"
                  alt="logo"
                  className="profile_logo"
                />
                <div className="texts_in_account_box">
                  <h4>rampart81</h4>
                  <h5 className="info_under_name">ringo.in.seoun님 외 12..</h5>
                </div>
              </div>
              <button className="follow_btn">팔로우</button>
            </div>
          </div>
          <div className="side_box_setup" id="copyright_box">
            <div className="box_name" id="copyright">
              <h5 className="color_h5">
                Westagram &nbsp; 정보 지원 홍보 센터 API 채용정보
                개인정보처리방침 약관
              </h5>
              <h5 className="color_h5">디렉터리 프로필 해시태그 언어 </h5>{' '}
              <h5 className="color_h5">@ 2022 WESTAGRAM</h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default LeeMain;
