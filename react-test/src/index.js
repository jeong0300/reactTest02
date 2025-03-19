import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./MainPage";
import reportWebVitals from "./reportWebVitals";
import MainStudy from "./MainStudy";
import UserInfo from "./UserTable/UserInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MainPage /> */}
    {/* <MainStudy /> */}
    <UserInfo />
  </React.StrictMode>
);

reportWebVitals();
