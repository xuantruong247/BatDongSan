import React from "react";
import {
  BatDongSanNoiBat,
  Carousel,
  Footer,
  ThongDiep,
  TinTucComponent,
} from "../../components";
import slide1 from "../../assets/images/slide_1.jpg";
const TrangChu = () => {
  return (
    <div className="w-full">
      <Carousel />
      <ThongDiep />
      <BatDongSanNoiBat />
      <img
        src={slide1}
        alt="imagelogo"
        className="w-full h-[70vh] object-cover"
      />
      <TinTucComponent />
      <img
        src={slide1}
        alt="imagelogo"
        className="w-full h-[70vh] object-cover"
      />
      <Footer />
    </div>
  );
};

export default TrangChu;
