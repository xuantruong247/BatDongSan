import React, { useEffect, useState } from "react";
import CardTinTuc from "./CardTinTuc";
import { apiGetBlogs } from "../../apis/tinTuc";
import Slider from "react-slick";

const TinTucComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  const [getBlog, setGetBlog] = useState([]);

  const fetchBlog = async () => {
    const response = await apiGetBlogs();
    setGetBlog(response?.data?.getBlogs);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[600px] w-full custom-gradient-home">
      <div>
        <h1
          className="font-semibold text-[35px] text-main"
        >
          TIN TỨC BẤT ĐỘNG SẢN
        </h1>
        <p className="border-b border-black w-2/5 ml-28 my-4"></p>
      </div>
      <div className="w-[1050px]">
        <Slider {...settings}>
          {getBlog?.map((blog, index) => (
            <CardTinTuc
              key={index}
              name={blog.name}
              imageThum={blog?.imageThum}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TinTucComponent;
