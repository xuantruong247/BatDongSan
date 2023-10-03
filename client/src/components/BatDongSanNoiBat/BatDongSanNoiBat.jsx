import React, { useEffect, useState } from "react";
import {  apiGetProductsSortViews } from "./../../apis";
import Slider from "react-slick";
import CardBatDongSanNoibat from "./CardBatDongSanNoibat";

const BatDongSanNoiBat = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  const [getProduct, setGetProduct] = useState([]);
  const fetchProducts = async () => {
    const response = await apiGetProductsSortViews({
      sortBy: "views",
      sortDesc: "desc",
    });
    if (response.data.getProducts) {
      setGetProduct(response.data.getProducts);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center border-t-2 h-[900px] w-full custom-gradient-home">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-[35px] text-main">
          TIN TỨC BẤT ĐỘNG SẢN
        </h1>
        <p className="text-main">
          Tổng hợp các dự án bất động sản tại Bình Dương, Bình Phước.... các
          tỉnh lân cận
        </p>
        <p className="border-b border-black w-2/5 my-4"></p>
      </div>
      <div className="w-[1050px]">
        <Slider {...settings}>
          {getProduct?.map((product, index) => (
            <div key={index} className="custom-slide">
              <CardBatDongSanNoibat
                imageThum={product?.imageThum}
                name={product.name}
                updatedAt={product.updatedAt}
                views={product.views}
                description={product.description}
                product={product}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BatDongSanNoiBat;
