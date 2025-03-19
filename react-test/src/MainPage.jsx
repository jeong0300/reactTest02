import { useEffect, useState } from "react";
import "./css/MainPage.css";
import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";
import { Button, Input } from "antd";

// 사과 종류 고르기
const MainPage = () => {
  return (
    <>
      <div className="flex">
        <DetailLeft />
        <DetailRight />
      </div>
    </>
  );
};

export default MainPage;
