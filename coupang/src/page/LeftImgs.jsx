import React, { useState, useEffect } from "react";
import "../css/LeftImgs.css";

import pinkBlue1 from "../image/pinkBlue1.jpg";
import pinkBlue2 from "../image/pinkBlue2.jpg";
import orangeBlue1 from "../image/orangeBlue1.jpg";
import orangeBlue2 from "../image/orangBlue2.jpg";
import choco1 from "../image/choco1.jpg";
import choco2 from "../image/choco2.jpg";
import orangeBrown1 from "../image/orangeBrown1.jpg";
import orangeBrown2 from "../image/orangeBrown2.jpg";
import pink1 from "../image/pink1.jpg";
import pink2 from "../image/pink2.jpg";
import pinkBrown1 from "../image/pinkBrown1.jpg";
import pinkBrown2 from "../image/pinkBrown2.jpg";

const LeftImgs = (props) => {
  const { product, setProduct } = props;

  const [hoveredProduct, setHoveredProduct] = useState(product);

  const handleImageClick = (productName) => {
    setProduct(hoveredProduct);
  };

  const items = {
    핑크블루: [pinkBlue1, pinkBlue2],
    오렌지블루: [orangeBlue1, orangeBlue2],
    초코: [choco1, choco2],
    오렌지브라운: [orangeBrown1, orangeBrown2],
    핑크: [pink1, pink2],
    핑크브라운: [pinkBrown1, pinkBrown2],
  };

  return (
    <>
      <div className="flexItem">
        <div className="rightItem">
          <img
            className="MainImg"
            src={items[hoveredProduct] || items[product]}
            alt={product}
          />
        </div>
        <div className="leftItems">
          <LeftImgs
            product={product}
            setProduct={setProduct}
            hoveredProduct={hoveredProduct}
            setHoveredProduct={setHoveredProduct}
          />
        </div>
      </div>
    </>
  );
};

export default LeftImgs;
