import React, { useEffect, useState } from "react";
import CardTinTuc from "./CardTinTuc";
import { apiGetBlogsFeatured } from "../../apis/tinTuc";
import Slider from "react-slick";

const TinTucComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Kích thước màn hình lg
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Kích thước màn hình md
        settings: {
          slidesToShow: 3,
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
  const [getBlog, setGetBlog] = useState([]);

  const fetchBlog = async () => {
    const response = await apiGetBlogsFeatured();
    setGetBlog(response?.data?.getBlogs);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[600px] w-full custom-gradient-home">
      <div>
        <h1
          className="font-semibold lg:text-[35px] text-main md:text-[25px]"
          data-aos="fade-down-left"
        >
          TIN TỨC BẤT ĐỘNG SẢN
        </h1>
        <p className="border-b border-black w-2/5 ml-28 my-4 sm:ml-14"></p>
      </div>
      <div className="lg:w-[1050px] md:w-[770px] sm:w-[250px]">
        <Slider {...settings}>
          {getBlog?.map((blog, index) => (
            <div key={index} data-aos="fade-up" data-aos-duration="3000">
              <CardTinTuc
                name={blog.name}
                imageThum={blog?.imageThum}
                blog={blog}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TinTucComponent;
