import React, { useState, useEffect } from "react";
import { HeartOutlined, ShareAltOutlined } from "@ant-design/icons";
import "../css/MainRightPage.css";
import { Button, InputNumber, notification, Rate } from "antd";

// 이미지
import markIcon from "../image/mark.svg";
import rocketIcon from "../image/rocket.png";
import pinkBlue1 from "../image/pinkBlue1.jpg";
import orangeBlue1 from "../image/orangeBlue1.jpg";
import choco1 from "../image/choco1.jpg";
import orangeBrown1 from "../image/orangeBrown1.jpg";
import pink1 from "../image/pink1.jpg";
import pinkBrown1 from "../image/pinkBrown1.jpg";

const MainRightPage = (props) => {
  const { product, setProduct } = props;

  // 다음날 날짜 가져오기
  const [deliveryDate, setDeliveryDate] = useState("");
  // 시간 계산
  const [orderTimeLeft, setOrderTimeLeft] = useState("");
  // 배달 라디오 버튼
  const [selectedDelivery, setSelectedDelivery] = useState("rocket");

  // 이미지
  const images = [
    { src: pinkBlue1, alt: "pinkBlue", name: "핑크블루" },
    { src: orangeBlue1, alt: "orangeBlue", name: "오렌지블루" },
    { src: choco1, alt: "choco", name: "초코" },
    { src: orangeBrown1, alt: "orangeBrown", name: "오렌지브라운" },
    { src: pink1, alt: "pink", name: "핑크" },
    { src: pinkBrown1, alt: "pinkBrown", name: "핑크브라운" },
  ];

  useEffect(() => {
    // 내일 날짜 & 요일 계산
    const getTomorrowDeliveryDate = () => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);

      const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
      const dayOfWeek = dayNames[tomorrow.getDay()];
      const month = tomorrow.getMonth() + 1;
      const date = tomorrow.getDate();

      return `내일(${dayOfWeek}) ${month}/${date} 도착 보장`;
    };

    setDeliveryDate(getTomorrowDeliveryDate());

    // 자정까지 남은 시간 계산
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(23, 59, 59, 999);

      const timeDiff = midnight - now;
      const minutesLeft = Math.floor(timeDiff / 1000 / 60);

      return `(${minutesLeft}분 내 주문 시 / 서울⋅경기 기준)`;
    };

    setOrderTimeLeft(calculateTimeLeft());

    // 1분마다 갱신
    const interval = setInterval(() => {
      setOrderTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const alert = () => {
    notification.warning({
      message: "준비 중입니다.",
    });
  };

  const handleImageClick = (productName) => {
    setProduct(productName);
  };

  return (
    <>
      <div className="rightBox">
        <div className="headName">
          <h2> 블루씨티 보들 체크 캐시 목도리 머플러</h2>
          <div className="icons" onClick={alert}>
            <HeartOutlined className="customIcon" />
            <ShareAltOutlined className="customIcon" />
          </div>
        </div>
        <div className="underTitle">
          <Rate className="rate" allowHalf defaultValue={4.5} />
          <p>1,646개 상품평</p>
        </div>
        <hr className="titleHr" />
        <div className="price">
          <span>27%</span>
          <span className="beforePrice">17,900원</span>
          <img
            className="markIcon"
            src={markIcon}
            alt="mark icon"
            onClick={alert}
          />
        </div>
        <div className="afterPrice">
          <h2> 12,900원 </h2>
          <img className="rocketIcon" src={rocketIcon} alt="rocket icon" />
          <img
            className="markIcon"
            src={markIcon}
            alt="mark icon"
            onClick={alert}
          />
        </div>
        <hr className="priceHr" />
        <div className="date">
          <b>{deliveryDate}</b>
          <p className="greenFont">도착 보장</p>
          <p className="blackFont">{orderTimeLeft}</p>
        </div>
        <div className="radios">
          <input
            className="rocketRadio"
            type="radio"
            name="delivery"
            value="rocket"
            checked={selectedDelivery === "rocket"}
            onChange={(e) => {
              setSelectedDelivery(e.target.value);
            }}
          />
          <b>로켓배송 상품 19,800원 이상 무료배송</b>
          <br />
          <input
            type="radio"
            name="delivery"
            value="free"
            checked={selectedDelivery === "free"}
            onChange={(e) => {
              setSelectedDelivery(e.target.value);
            }}
          />
          <b>무료 배송 + 무료 반품</b>
        </div>
        <div className="buttons">
          <InputNumber
            className="inputNum"
            min={1}
            max={10}
            defaultValue={1}
            onChange={(value) => {}}
          ></InputNumber>
          <button className="cartBtn" type="button" onClick={alert}>
            장바구니 담기
          </button>
          <button className="buyBtn" type="button" onClick={alert}>
            바로 구매
          </button>
        </div>
        <hr className="btnHr" />
        <div className="productBox">
          <p className="colorName">
            <b>색상 :</b> <span>{product}</span>
          </p>
          <div className="imagesWrapper">
            {images.map((image, index) => (
              <div key={index} className="imageContainer">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => handleImageClick(image.name)}
                  className={`productImage ${
                    product === image.name ? "selected" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainRightPage;
