import "./css/DetailRight.css";
import Swal from "sweetalert2";

import { Select, Rate } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const MainPage = () => {
  const [total, setTotal] = useState(34500);

  const [number, setNumber] = useState(1);

  const [giftPrice, setGiftPrice] = useState(0);

  const totalPrice = total * number + giftPrice;

  const formattedTotal = new Intl.NumberFormat().format(totalPrice);

  // 플러스 함수
  const sumNumber = () => {
    setNumber(number + 1);
  };

  // 마이너스 함수
  const miNumber = () => {
    setNumber(number - 1);
  };

  const alert = () => {
    Swal.fire({
      title: "준비 중인 기능입니다.",
      text: "조금만 더 기다려주세요 :) ",
      icon: "warning",
    });
  };

  return (
    <>
      <div className="rightBox">
        <h1> 맛있는 사과 </h1>
        <div className="rating">
          <Rate allowHalf defaultValue={5} />
          <b>2,905개 상품평</b>
        </div>
        <div className="boldLine"></div>
        <h2 className="redFont"> 34,500원 (박스당)</h2>
        <hr />
        <div className="flexText">
          <h4> 이 상품은 </h4>
          <h4 className="greenFont">내일 도착, 무료배송</h4>
        </div>
        <div className="flexSelects">
          <div className="flexBtns">
            <button
              onClick={() => {
                if (number > 1) {
                  miNumber();
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "개수를 확인하여 주세요!",
                    text: "1박스 이상 구매 가능합니다.",
                  });
                }
              }}
            >
              <MinusOutlined />
            </button>
            <div className="numBox"> {number} </div>
            <button
              onClick={() => {
                if (number < 10) {
                  sumNumber();
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "개수를 확인하여 주세요!",
                    text: "10 박스 이하만 구매 가능합니다.",
                  });
                }
              }}
            >
              <PlusOutlined />
            </button>
          </div>

          <Select
            defaultValue="defalut"
            className="custom-select"
            onChange={(value) => {
              if (value === "gift") {
                setGiftPrice(3000);
              } else if (value === "luxuryGift") {
                setGiftPrice(11000);
              } else {
                setGiftPrice(0);
              }
            }}
            options={[
              {
                value: "defalut",
                label: "기본 (+0원)",
              },
              {
                value: "gift",
                label: "선물 포장 (+3,000원)",
              },
              {
                value: "luxuryGift",
                label: "고급 포장 (+11,000원)",
              },
            ]}
          />
          <button className="alertBtn" onClick={alert}>
            장바구니
          </button>
          <button className="alertBtn" onClick={alert}>
            바로구매
          </button>
        </div>
        <div className="totalPrice">
          <h2>총 : {formattedTotal}</h2>
        </div>
      </div>
    </>
  );
};

export default MainPage;
