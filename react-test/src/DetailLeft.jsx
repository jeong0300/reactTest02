import "./css/DetailLeft.css";
import { useState } from "react";

import apple from "./image/apple.jpg";
import apple2 from "./image/apple2.jpg";
import apple3 from "./image/apple3.jpg";

const MainPage = () => {
  const [photo, setPhoto] = useState(apple);
  const images = [apple, apple2, apple3];

  return (
    <>
      <div className="mainContainer">
        <div className="mainPhoto">
          <img src={photo} alt="apple" />
        </div>
        <div className="etcPhoto">
          {images.map((img, i) => (
            <div className="photoBox" onClick={() => setPhoto(img)}>
              <img className="photo" key={i} src={img} alt={img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
