import React, { useState, useEffect } from "react";
import "../css/LeftImgs.css";

const LeftImgs = (props) => {
  const { product, setProduct, hoveredProduct, setHoveredProduct, images } =
    props;

  const selectedImages = images[product] || [];

  const [imageIndex, setImageIndex] = useState(0);

  const handleClick = (index) => {
    setImageIndex(index);
    setProduct(product);
    setHoveredProduct(product);
  };

  const handleMouseOver = (index) => {
    setImageIndex(index);
    setHoveredProduct(product);
  };

  useEffect(() => {
    if (!hoveredProduct) {
      setImageIndex(0);
    }
  }, [product, hoveredProduct]);

  return (
    <div className="itemBox">
      {selectedImages.map((image, index) => (
        <img
          key={index}
          className="leftImg"
          src={image}
          alt={`${product} image`}
          onClick={() => handleClick(index)}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={() => handleMouseOver(index)}
        />
      ))}
    </div>
  );
};

export default LeftImgs;
