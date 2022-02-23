import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './AhnLogin.scss';

const AhnLogin = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/AhnMain');
  };

  const [userId, setUserId] = useState('');

  const handleIdInput = e => {
    setUserId(e.target.value);
  };

  const [userPassword, SetUserPassword] = useState('');

  const handlePasswordInput = e => {
    SetUserPassword(e.target.value);
  };

  // useEffect(
  //   () =>
  //     fetch('http://10.58.6.161:8000/westagram/log-in', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         password: 'rhkdals@12',
  //       }),
  //     })
  //       .then(res => res.json())
  //       .then(result => console.log('결과: ', result)),
  //   []
  // );

  return (
    <div className="login">
      <h1>Westagram</h1>
      <div className="id">
        <input
          id="loginId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={userId}
          onChange={handleIdInput}
        />
      </div>
      <div className="password">
        <input
          id="loginPassword"
          type="password"
          placeholder="비밀번호"
          value={userPassword}
          onChange={handlePasswordInput}
        />
      </div>
      <div className="btn">
        {/* <button
          className="loginButton"
          disabled={!(userId.indexOf('@') > -1 && userPassword.length >= 5)}
          onClick={goToMain}
        >
          로그인
        </button> */}
        <button
          className={`loginButton ${
            userId.indexOf('@') > -1 && userPassword.length >= 5
              ? 'cssloginButton'
              : ''
          }`}
          onClick={goToMain}
        >
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

export default AhnLogin;
