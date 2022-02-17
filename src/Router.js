import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 광민 컴포넌트
import AhnLogin from './pages/kwangminAhn/Login/AhnLogin';
import AhnMain from './pages/kwangminAhn/Main/AhnMain';

//유안 컴포넌트
import LeeLogin from './pages/yooanLee/Login/LeeLogin';
import LeeMain from './pages/yooanLee/Main/LeeMain';

//윤지 컴포넌트
import ShinLogin from './pages/yunjiShin/Login/ShinLogin';
import ShinMain from './pages/yunjiShin/Main/ShinMain';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AhnLogin />} />
        <Route path="/Ahnmain" element={<AhnMain />} />
        <Route path="/Lee" element={<LeeLogin />} />
        <Route path="/Leemain" element={<LeeMain />} />
        <Route path="/Shin" element={<ShinLogin />} />
        <Route path="/Shinmain" element={<ShinMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
