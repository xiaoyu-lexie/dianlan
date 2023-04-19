import { Carousel } from "antd";
import image1 from "../public/images/carousel1.png";
import image2 from "../public/images/carousel2.png";
import image3 from "../public/images/carousel3.png";
import cer1 from "../public/images/cer1.png";
import cer2 from "../public/images/cer2.png";
import cer3 from "../public/images/cer3.png";
import cer4 from "../public/images/cer4.png";
import cer5 from "../public/images/cer5.png";
import cer6 from "../public/images/cer6.png";
// import cer7 from "../images/cer7.png";
// import cer8 from "../images/cer8.png";

import Image from "next/image";

const CarouselBar = () => (
  <Carousel
    autoplay
    effect="fade"
    autoplaySpeed={3500}
    speed={1000}
    pauseOnDotsHover={true}
  >
    <div>
      <h3
        className="carouselContainer"
        style={{
          // ...contentStyle,
          backgroundImage: `url(${image1})`,
          // backgroundRepeat: "round",
          // backgroundSize: "100% 100%",
          // backgroundPosition: "0% 0%",
        }}
      >
        1
      </h3>
    </div>

    <div>
      <h3
        className="carouselContainer"
        style={{
          // ...contentStyle,
          backgroundImage: `url(${image3})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "100% 100%",
          // backgroundPosition: "0% 0%",
        }}
      >
        {/* <div className="trust">诚信为本</div>
        <div>追求卓越</div> */}
        <div className="introContainer">
          <div id="contacts">
            <p>宁夏众远电缆有限公司</p>
            <p>地址： 宁夏银川得胜工业园区富远路6号</p>
            <p>电话： 0951-5684888 5684777</p>
            <p>电话： 0951-5684888 5684777</p>
            <p>邮箱： 547366282@qq.com</p>
          </div>
        </div>
      </h3>
    </div>
    <div>
      <h3
        className="carouselContainer"
        style={{
          // ...contentStyle,
          backgroundImage: `url(${image2})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "100% 100%",
          // backgroundPosition: "0% 0%",
        }}
      >
        <p>具有多种资质和证书</p>
        <div className="cerContainer">
          {/* <Image src={cer1} alt="certificate1" width={"15%"} height="45%" />
          <Image src={cer2} alt="certificate2" width={"15%"} height="45%" />
          <Image src={cer3} alt="certificate3" width={"15%"} height="45%" />
          <Image src={cer4} alt="certificate4" width={"15%"} height="45%" />
          <Image src={cer5} alt="certificate5" width={"15%"} height="45%" />
          <Image src={cer6} alt="certificate6" width={"15%"} height="45%" /> */}
        </div>
      </h3>
    </div>
  </Carousel>
);

export default CarouselBar;
