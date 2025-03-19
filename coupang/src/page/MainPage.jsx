import React, { useState, useEffect } from "react";
import MainLeftPage from "./MainLeftPage";
import MainRightPage from "./MainRightPage";
import MainBottomPage from "./MainBottomPage";
import "../css/MainPage.css";

const MainPage = () => {
  const [product, setProduct] = useState("핑크블루");

  return (
    <>
      <div className="mainPage">
        <div className="topPage">
          <MainLeftPage />
          <MainRightPage setProduct={setProduct} product={product} />
        </div>
        <div className="bottomPage">
          <MainBottomPage />
        </div>
      </div>
    </>
  );
};

export default MainPage;
