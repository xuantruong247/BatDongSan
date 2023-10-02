import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  const hanleFacebook = () => {
    const newTab = window.open(
      "https://www.facebook.com/Nguyenthanhtra.0901201111",
      "_blank"
    );
    if (newTab) {
      newTab.focus();
    }
  };

  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center h-[400px] custom-gradient-home w-full">
        <h1 className="font-semibold sm:text-[30px] text-main">
          CÔNG TY CỔ PHẦN UNILAND
        </h1>
        <div className="flex items-center justify-center text-[17px] gap-2">
          <span className="flex items-center gap-1 font-semibold text-main ">
            <MdLocationPin />
            Trụ sở chính:
          </span>
          <p className="text-main">
            158 Ngô Gia Tự, Khu 11, P. Chánh Nghĩa, TP. Thủ Dầu Một, Bình Dương.
          </p>
        </div>
        <div className="flex items-center justify-center text-[17px] gap-2">
          <span className="flex items-center gap-1 font-semibold text-main ">
            <MdLocationPin />
            Chi nhánh 1:
          </span>
          <p className="text-main">
            Số 12C, Đại Lộ Bình Dương, Kp. Đông Nhì, P. Lái Thiêu, TP. Thuận An,
            Bình Dương.
          </p>
        </div>
        <div className="flex items-center justify-center text-[17px] gap-2">
          <span className="flex items-center gap-1 font-semibold text-main ">
            <MdLocationPin />
            Chi nhánh 2:
          </span>
          <p className="text-main">
            Số 1338 Phạm Văn Đồng, P. Linh Tây, TP. Thủ Đức, TP.HCM.
          </p>
        </div>
        <div className="flex items-center justify-center text-[17px] gap-2">
          <span className="flex items-center gap-1 font-semibold text-main ">
            <BsFillTelephoneFill />
            Phone
          </span>
          <p className="text-main">0901 20 11 11</p>
        </div>
        <button onClick={hanleFacebook} className="btn btn-5 hover-border-11">
          <span>
            <BiLogoFacebook size={30} />
          </span>
        </button>
      </div>
      <div className="h-[60px] w-full flex justify-center items-center">
        <h1>
          2023 © CÔNG TY CỔ PHẦN UNILAND. ALL RIGHTS RESERVED. DEVELOPED BY XUAN TRUONG
        </h1>
      </div>
    </div>
  );
};

export default Footer;
