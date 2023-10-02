import React, { useEffect, useState } from "react";
import CarouselOutLet from "./../Carousel/CarouselOutLet";
import { apiGetCurrent } from "../../apis";
import { useParams } from "react-router-dom";
import moment from "moment";
import Footer from "../Footer/Footer";

const ChiTietDat = () => {
  const [getCurrentProduct, setGetCurrentProduct] = useState([]);
  const { pid } = useParams();

  const fetchGetCurrent = async () => {
    const response = await apiGetCurrent(pid);
    console.log(response);
    setGetCurrentProduct(response.data.getCurrentProduct);
  };

  useEffect(() => {
    fetchGetCurrent();
  }, []);

  return (
    <div className="w-full">
      <CarouselOutLet />
      <div className="w-[1050px] shadow-2xl h-[1000px] mx-auto my-20">
        <div className="flex flex-col p-10">
          <h1 className="text-main text-[30px] text-center font-semibold">
            {getCurrentProduct?.name}
          </h1>
          <p className="text-main">
            {moment(getCurrentProduct?.updatedAt).format(
              "dddd, DD/MM/YYYY HH:mm"
            )}
          </p>
          <div className="flex mt-10">
            <p>{getCurrentProduct?.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChiTietDat;
