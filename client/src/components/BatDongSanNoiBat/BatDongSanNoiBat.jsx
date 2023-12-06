import React, { useEffect, useState } from "react";
import { apiGetProductsSortViews } from "./../../apis";
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
    responsive: [
      {
        breakpoint: 1024, // Kích thước màn hình lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Kích thước màn hình md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 426, // Kích thước màn hình sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
    <div className="flex flex-col justify-center items-center border-t-2 lg:h-[900px] w-full custom-gradient-home md:h-[800px] sm:h-[800px]">
      <div className="flex flex-col items-center" data-aos="fade-down-right">
        <h1 className="font-semibold lg:text-[35px] md:text-[25px] text-main">
          BẤT ĐỘNG SẢN NỔI BẬT
        </h1>
        <p className="text-main text-[15px] sm:text-center sm:px-5">
          Tổng hợp các dự án bất động sản tại Bình Dương, Bình Phước.... các
          tỉnh lân cận
        </p>
        <p className="border-b border-black w-2/5 my-4"></p>
      </div>
      <div className="lg:w-[1050px] md:w-[700px] sm:w-[350px]">
        <Slider {...settings}>
          {getProduct?.map((product, index) => (
            <div
              key={index}
              className="custom-slide"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <CardBatDongSanNoibat
                imageThum={product?.imageThum}
                name={product.name}
                createdAt={product.createdAt}
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
