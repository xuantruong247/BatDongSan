import React, { useEffect, useState } from "react";
import CarouselOutLet from "./../../components/Carousel/CarouselOutLet";
import { apiGetBlogs } from "./../../apis/tinTuc";
import { Footer, TinTucItem } from "../../components";

const TinTuc = () => {
  const [getBlogs, setGetBlogs] = useState([]);

  const fetchBlogs = async () => {
    const reponse = await apiGetBlogs();
    setGetBlogs(reponse.data.getBlogs);
  };
  console.log(getBlogs);
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="w-full">
      <CarouselOutLet />
      <div className="w-[1050px] mx-auto mt-20 grid grid-cols-3 gap-4 mb-20">
        {getBlogs.map((blog, index) => (
          <div key={index}>
            <TinTucItem
              imageThum={blog.imageThum}
              name={blog.name}
              updatedAt={blog.updatedAt}
              views={blog.views}
              description={blog.description}
            />
          </div>
        ))}
      </div>
      <div className="w-full mx-auto flex justify-center mb-10">
        pagination
      </div>
      <Footer />
    </div>
  );
};

export default TinTuc;
