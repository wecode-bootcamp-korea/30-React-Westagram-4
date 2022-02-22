import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './LeeLogin.scss';

function LeeLogin() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();

  const updateIdValue = e => {
    setIdValue(e.target.value);
  };

  const updatePwValue = e => {
    setPwValue(e.target.value);
  };

  // const condition = idValue.length > 0 && pwValue.length >0 ? true : false;
  const condition = idValue.includes('@') && pwValue.length > 5;
  // console.log("condition>>>>");

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <section className="container-wrap">
      <h2 className="login-title">WESTAGRAM</h2>
      <form className="input-container" />
      <div className="input-wrap" />
      <input
        id="id"
        type="text"
        placeholder="전화번호,사용자이름 또는 이메일"
        onChange={updateIdValue}
      />
      <input
        id="password"
        type="password"
        placeholder="비밀번호"
        onChange={updatePwValue}
      />

      <div />
      <button
        className={condition ? 'activate' : 'deactivate'}
        id="btn"
        type="submit"
        onClick={goToMain}
      >
        {/* <Link to="/main"> */}
        로그인
      </button>

      <div className="last">
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </section>
  );
}

export default LeeLogin;
