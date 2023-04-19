import { Carousel } from "antd";
import image1 from "../public/images/carousel1.png";

import Image from "next/image";

console.log("image1", image1);

const contentStyle = {
  height: "160px",
  color: "red",
  lineHeight: "160px",
  textAlign: "center",
  // background: "#364d79",
  borderStyle: "solid",
  borderColor: "red",
  display: "flex",
};

const Products = () => (
  <Carousel>
    <div>
      <h3 style={contentStyle}>
        <div style={{ width: "100%", height: "80%", zIndex: "-1" }}>
          <Image
            src={image1}
            alt="image1"
            width={"500"}
            height={"500"}
            style={{ zIndex: "-1" }}
          />
        </div>
        <div>sdfdskjk</div>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default Products;
