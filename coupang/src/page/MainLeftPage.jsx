import "../css/MainLeftPage.css";
import LeftImgs from "./LeftImgs";

// 이미지
import pinkBlue1 from "../image/pinkBlue1.jpg";
import orangeBlue1 from "../image/orangeBlue1.jpg";
import choco1 from "../image/choco1.jpg";
import orangeBrown1 from "../image/orangeBrown1.jpg";
import pink1 from "../image/pink1.jpg";
import pinkBrown1 from "../image/pinkBrown1.jpg";

const MainLeftPage = (props) => {
  const { product, setProduct, hoveredProduct, setHoveredProduct } = props;

  const images = {
    핑크블루: pinkBlue1,
    오렌지블루: orangeBlue1,
    초코: choco1,
    오렌지브라운: orangeBrown1,
    핑크: pink1,
    핑크브라운: pinkBrown1,
  };

  return (
    <>
      <div className="flexItem">
        <div className="rightItem">
          <img
            className="MainImg"
            src={images[hoveredProduct] || images[product]}
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

export default MainLeftPage;
