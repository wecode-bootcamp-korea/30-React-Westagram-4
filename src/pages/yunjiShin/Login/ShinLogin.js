import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './ShinLogin.scss';

const ShinLogin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleIdInput = e => {
    setId(e.target.value);
  };
  const handlePwInput = e => {
    setPw(e.target.value);
  };

  const goToMain = () => {
    navigate('/main');
  };

  const submitFunction = e => {
    e.preventDefault();
    fetch('http://10.58.5.214:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json)
      .then(result => {
        if (result.token) {
          goToMain();
        } else {
          alert('로그인 정보를 확인해주세요.');
        }
      });
  };

  return (
    <div className="login">
      <h1>Westagram</h1>
      <section>
        <form onSubmit={submitFunction}>
          <div>
            <input
              type="text"
              placeholder="  전화번호, 사용자 이름 또는 이메일"
              id="inputId"
              onChange={handleIdInput}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="  비밀번호"
              id="inputPw"
              onChange={handlePwInput}
            />
          </div>
          <button
            className={`loginBtn ${
              id.indexOf('@') > -1 && pw.length >= 5 ? 'loginBtnChanged' : ''
            }`}
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
      </section>
      <div id="forgetPw">
        <a href="https://www.instagram.com/accounts/password/reset/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};
export default ShinLogin;
