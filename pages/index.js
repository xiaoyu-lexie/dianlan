import CarouselBar from "../components/CarouselBar";
import image1 from "../public/images/carousel1.png";

import Image from "next/image";

export default function Home() {
  console.log("image1", image1);
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${image1})`,
        width: "100%",
        height: "100%",
      }}
    >
      <Image src={image1} alt="ppp" />
      {/* <div className="carouselContainer">
        <CarouselBar />
      </div> */}
      {/* <div className="body">
      <Profile />
    </div> */}
    </div>
  );
}
