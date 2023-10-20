import React, { useEffect, useState } from "react";
import { apiGetCurrentBlog } from "../../apis";
import { useParams } from "react-router-dom";
import moment from "moment";
import CarouselOutLet from "../Carousel/CarouselOutLet";
import Footer from "../Footer/Footer";

const ChiTietTinTuc = () => {
  const [getCurrentBlog, setGetCurrentBlog] = useState([]);
  const { bid } = useParams();
  const fetchgetCurrentBlog = async () => {
    const response = await apiGetCurrentBlog(bid);
    setGetCurrentBlog(response.data.getCurrentBlog);
  };

  useEffect(() => {
    fetchgetCurrentBlog();
  }, []);

  return (
    <div className="w-full">
      <CarouselOutLet />
      <div className="w-[1050px] shadow-2xl h-[1000px] mx-auto my-20">
        <div className="flex flex-col p-10">
          <h1 className="text-main text-[30px] text-center font-semibold">
            {getCurrentBlog?.name}
          </h1>
          <p className="text-main">
            {moment(getCurrentBlog?.createdAt).format("dddd, DD/MM/YYYY HH:mm")}
          </p>
          <div className="flex mt-10">
            <p>{getCurrentBlog?.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChiTietTinTuc;
