import React, { useEffect, useState } from "react";
import CarouselOutLet from "./../Carousel/CarouselOutLet";
import { apiGetCurrent } from "../../apis";
import { useParams } from "react-router-dom";
import moment from "moment";
import Footer from "../Footer/Footer";
import DOMPurify from "dompurify";

const ChiTietDat = () => {
  const [getCurrentProduct, setGetCurrentProduct] = useState([]);
  const { pid } = useParams();

  const fetchGetCurrent = async () => {
    const response = await apiGetCurrent(pid);
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
            {moment(getCurrentProduct?.createdAt).format(
              "dddd, DD/MM/YYYY HH:mm"
            )}
          </p>
          <div className="mt-10 customer-description">
            {getCurrentProduct?.description?.length > 1 &&
              getCurrentProduct?.description?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            {getCurrentProduct?.description?.length === 1 && (
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(getCurrentProduct?.description[0]),
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChiTietDat;
