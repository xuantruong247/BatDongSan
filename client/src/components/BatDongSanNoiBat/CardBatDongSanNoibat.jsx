import React from "react";
import { AiOutlineRight, AiOutlineEye, AiOutlineComment } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import path from "../../utils/path";

const CardBatDongSanNoibat = ({
  imageThum,
  name,
  views,
  updatedAt,
  description,
  product,
}) => {
  const navigation = useNavigate();
  return (
    <div className="w-[330px] rounded-lg shadow custom-gradient hover:custom-gradient card-tintuc cursor-pointer">
      <div className="flex flex-col"
       onClick={() => {
        navigation(`/${path.CHI_TIET_DAT}/${product?._id}/${name}`);
      }}>
        <img
          src={imageThum}
          alt="imageThum"
          className="w-full h-[340px] rounded-xl transition-transform transform hover:scale-105 p-2"
        />
        <div className="px-2 mb-2 flex flex-col gap-2">
          <div>
            <p className=" text-main font-bold text-[19px] pb-2">{name}</p>
            <p className="border-t flex items-center gap-1 text-[14px]">
              <BiTime />
              {moment(updatedAt).format("DD MM YYYY, h:mm a")}
            </p>
            <p className="border-b border-t flex items-center gap-1 text-[14px]">
              <AiOutlineEye /> đã xem: {views}
            </p>
            <p className="border-b flex items-center gap-1 text-[14px]">
              <AiOutlineComment /> Phản hồi: 0
            </p>
          </div>
          <div className="text-[17px]">{description}</div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="border rounded-full bg-main p-3 flex items-center justify-center text-white">
          <AiOutlineRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CardBatDongSanNoibat;
