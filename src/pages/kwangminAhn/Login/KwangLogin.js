import React from 'react';
import { useNavigate } from 'react-router-dom';

import KwangLogincss from './KwangLogin.scss';

const KwangLogin = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/Kwangmain');
  };

  return (
    <div className="login">
      <h1>Westagram</h1>
      <div className="id">
        <input
          id="loginId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
      </div>
      <div className="password">
        <input id="loginPassword" type="password" placeholder="비밀번호" />
      </div>
      <div className="btn">
        <button className="loginButton" onClick={goToMain}>
          로그인
        </button>
      </div>
      <div className="link">
        <a href="#" className="footerLink">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default KwangLogin;
