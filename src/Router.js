import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 광민 컴포넌트
import KwangLogin from "./pages/kwangminAhn/Login/KwangLogin";
import KwangMain from "./pages/kwangminAhn/Main/KwangMain";

//유안 컴포넌트
import LeeLogin from "./pages/yooanLee/Login/LeeLogin";
import LeeMain from "./pages/yooanLee/Main/LeeMain";

//윤지 컴포넌트
import ShinLogin from "./pages/yunjiShin/Login/ShinLogin";
import ShinMain from "./pages/yunjiShin/Main/ShinMain";

const Router = () => {
  return (
    <BrowserRouter>
      <></>
      <Routes>
        <Route path="/" element={<KwangLogin />} />
        <Route path="/Kwangmain" element={<KwangMain />} />
        <Route path="/Lee" element={<LeeLogin />} />
        <Route path="/Leemain" element={<LeeMain />} />
        <Route path="/Shin" element={<ShinLogin />} />
        <Route path="/Shinmain" element={<ShinMain />} />
      </Routes>
      <></>
    </BrowserRouter>
  );
};

export default Router;
