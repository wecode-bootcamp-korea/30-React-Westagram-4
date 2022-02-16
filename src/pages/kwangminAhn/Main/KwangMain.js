import React from "react";
import reset from "../../../styles/reset.scss";
import KwangMainscss from "./KwangMain.scss";

const KwangMain = () => {
  return (
    <div className="home">
      <nav className="menuBar">
        <div className="menuBarImg">
          <i className="fab fa-instagram fa-lg"></i>
          <div className="Westagram">
            <span>&nbsp;&nbsp;Westagram</span>
          </div>
        </div>
        <div className="menuBarSearch">
          <input type="text" className="inputSearch" placeholder="검색" />
          <i className="fas fa-search"></i>
        </div>
        <div className="menuBarImg2">
          <i className="far fa-compass fa-lg"></i>
          <i className="far fa-heart  fa-lg"></i>
          <i className="far fa-user fa-lg"></i>
        </div>
      </nav>
      <div className="myFeed">
        <div className="feeds">
          <article className="feedImg">
            <div className="feedImgHeader">
              <img
                src="https://ca.slack-edge.com/TH0U6FBTN-U02R50R6G3A-88bf3d1c588a-512"
                className="feedUserImg"
              />
              <div className="feedUserId">
                <div className="feedUserId">
                  <span>kwangmon</span>
                </div>
              </div>
              <div className="feedSetting">
                {" "}
                <i className="fas fa-ellipsis-h fa-lg"></i>{" "}
              </div>
            </div>
            <div className="feedMainImg">
              <img src="../../../images/img.jpeg" className="feedRealImg" />
            </div>
            <div className="feedImgFooter">
              <div className="feedIcons">
                <div className="feedIcons1">
                  <i className="fa fa-heart fa-lg"></i>
                  <i className="far fa-comment fa-lg"></i>
                  <i className="fas fa-share-square fa-lg"></i>
                </div>
                <div className="feedIcons2">
                  <i className="far fa-bookmark fa-lg"></i>
                </div>
              </div>
              <div className="feedLikes">
                <div className="guestImg">
                  <img
                    src="https://ca.slack-edge.com/TH0U6FBTN-U02R50R6G3A-88bf3d1c588a-512"
                    className="guestUserImg"
                  />
                </div>
                <div className="guestLikes">
                  <span>kwangmon</span>님 외 10명이 좋아합니다
                </div>
              </div>
              <div className="feedComments">
                <div className="userComment">
                  <span>kwangmon</span> 내 아파트 장만!!!...더보기
                </div>
                <div className="guestComment">
                  <span>Friend</span> 굳~~~~
                  <p>42분전</p>
                </div>
              </div>
              <div className="newComment">
                <input
                  className="inputComment"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="commentBtn">게시</button>
              </div>
            </div>
          </article>
        </div>
        <div className="myFeedRight">
          <div className="myFeedRightUser">
            <img
              src="https://ca.slack-edge.com/TH0U6FBTN-U02R50R6G3A-88bf3d1c588a-512"
              className="myFeedRightUserImg"
            />
            <div className="myFeedRightUserId">
              <span>kwangmon</span>
              <p>Wecode | 위코드</p>
            </div>
          </div>
          <div className="myFeedRightStories">
            <div className="myFeedRightStoriesNav">
              <span className="StoriesTag">스토리</span>
              <span>모두 보기</span>
            </div>
            <div className="myFeedRightStories1"></div>
            <div className="myFeedRightStories2"></div>
            <div className="myFeedRightStories3"></div>
          </div>
          <div className="myFeedRightRecommend">
            <div className="myFeedRightRecommendNav">
              <span className="recommendTag">회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <div className="myFeedRightRecommend1"></div>
            <div className="myFeedRightRecommend2"></div>
            <div className="myFeedRightRecommend3"></div>
          </div>
          <p>
            Instagram 정보, 지원, 홍보 센터, API, 채용 정보, 개인정보처리방침,
            약관, 디렉터리, 프로필, 해시태그, 언어
            <br />
            2019 INSTAGRAM
          </p>
        </div>
      </div>
    </div>
  );
};

export default KwangMain;
