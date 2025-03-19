import { useEffect, useState } from "react";
import "./css/MainPage.css";
import { Button } from "antd";

// Life Cycle
const LiftCycleTest = () => {
  // const { user, setUser } = useState(false);

  // 로그인이 되어있을 때 user가 false이면 하이요 반환
  // return <>{!user && <div> 하이요</div>}</>;

  // user가 ture이면 user 출력(아무것도 출력안됨), 아니면 하이요 반환
  // return <>{!user || <div> 하이요</div>}</>;

  // life cycle
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(5);
  const [number3, setNumber3] = useState(10);

  // 마지막에 빈 배열 없으면 무한루프
  // 마운트, 업데이트, 언마운트 중 어떤 시기에 실행되도록 함
  // 빈 배열일 때 : 마운트, [number] : number가 업데이트됐을 때, return: 언마운트 때 실행
  useEffect(() => {
    console.log("첫번째");
  }, [number1]);
  useEffect(() => {
    console.log("두번째");
  }, [number2]);
  useEffect(() => {
    console.log("세번째");
  }, [number3]);

  return (
    <>
      <div>
        <Button
          onClick={() => {
            setNumber1(number1 - 1);
          }}
        >
          -
        </Button>
        {number1}
        <Button
          onClick={() => {
            setNumber1(number1 + 1);
          }}
        >
          +
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            setNumber2(number2 - 5);
          }}
        >
          -
        </Button>
        {number2}
        <Button
          onClick={() => {
            setNumber2(number2 + 5);
          }}
        >
          +
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            setNumber3(number3 - 10);
          }}
        >
          -
        </Button>
        {number3}
        <Button
          onClick={() => {
            setNumber3(number3 + 10);
          }}
        >
          +
        </Button>
      </div>
    </>
  );
};

export default LiftCycleTest;
