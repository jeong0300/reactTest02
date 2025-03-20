import React, { useState, useEffect } from "react";
import MainLeftPage from "./MainLeftPage";
import MainRightPage from "./MainRightPage";
import MainBottomPage from "./MainBottomPage";
import "../css/MainPage.css";

const MainPage = () => {
  const [product, setProduct] = useState("핑크블루");
  // 호버 시 상태 변경
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <>
      <div className="mainPage">
        <div className="topPage">
          <MainRightPage
            setProduct={setProduct}
            product={product}
            setHoveredProduct={setHoveredProduct}
          />
          <MainLeftPage
            setProduct={setProduct}
            product={product}
            hoveredProduct={hoveredProduct}
            setHoveredProduct={setHoveredProduct}
          />
        </div>
        <div className="bottomPage">
          <MainBottomPage />
        </div>
      </div>
    </>
  );
};

export default MainPage;
