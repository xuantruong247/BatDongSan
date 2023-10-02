import React from "react";
import { BatDongSanNoiBat, Carousel, Footer, ThongDiep, TinTucComponent } from "../../components";
import slide from "../../assets/images/slide_1.jpg";
const TrangChu = () => {
  return (
    <div className="w-full">
      <Carousel />
      <ThongDiep />
      <BatDongSanNoiBat />
      <img src={slide} alt="image" className="w-full h-[70vh] object-cover" />
      <TinTucComponent />
      <img src={slide} alt="image" className="w-full h-[70vh] object-cover" />
      <Footer />
    </div>
  );
};

export default TrangChu;
