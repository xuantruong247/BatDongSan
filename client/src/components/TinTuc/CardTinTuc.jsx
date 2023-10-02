import React from "react";
import { AiOutlineRight } from 'react-icons/ai'

const CardTinTuc = ({ name, imageThum }) => {
  return (
    <div className="w-[250px] rounded-lg shadow custom-gradient hover:custom-gradient card-tintuc cursor-pointer">
      <div className="flex flex-col">
        <img
          src={imageThum}
          alt="imageThum"
          className="w-full h-[250px] transition-transform transform hover:scale-105 p-2"
        />
        <p className="mb-2 text-center">{name}</p>
      </div>
      <div className="flex justify-center items-center">
        <button className="border rounded-full bg-main p-3 hover:bg-over flex items-center justify-center text-white">
          <AiOutlineRight size={20}/>
        </button>
      </div>
    </div>
  );
};

export default CardTinTuc;
