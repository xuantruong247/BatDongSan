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
          className="font-semibold text-[35px] text-main"
          data-aos="fade-down-left"
        >
          TIN TỨC BẤT ĐỘNG SẢN
        </h1>
        <p className="border-b border-black w-2/5 ml-28 my-4"></p>
      </div>
      <div className="w-[1050px]">
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
