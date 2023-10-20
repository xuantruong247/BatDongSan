import React from "react";
import CarouselOutLet from "../../components/Carousel/CarouselOutLet";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

import Footer from "./../../components/Footer/Footer";

const LienHe = () => {
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
    <div className="w-full">
      <CarouselOutLet />
      <div className="w-[1050px] mx-auto px-[20px]">
        <div className="flex flex-col gap-20 text-[19px] mb-10 items-center justify-center">
          <h1 className="mt-32 text-[17px] flex justify-center items-center text-center">
            Để không ngừng nâng cao chất lượng dịch vụ và đáp ứng tốt hơn nữa
            các yêu cầu của Quý khách, chúng tôi mong muốn nhận được các thông
            tin phản hồi. Nếu Quý khách có bất kỳ thắc mắc hoặc đóng góp nào,
            xin vui lòng liên hệ với chúng tôi theo thông tin dưới đây. Chúng
            tôi sẽ phản hồi lại Quý khách trong thời gian sớm nhất.
          </h1>
          <div className="shadow-2xl w-5/6 h-[250px] flex flex-col items-center justify-center text-main">
            <div
              className="flex flex-col items-center justify-center"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <b className="text-[30px]">CÔNG TY CỔ PHẦN UNILAND</b>
              <div className="flex items-center justify-center text-[17px] gap-2">
                <span className="flex items-center gap-1 font-semibold text-main ">
                  <MdLocationPin />
                  Trụ sở chính:
                </span>
                <p className="text-main">
                  158 Ngô Gia Tự, Khu 11, P. Chánh Nghĩa, TP. Thủ Dầu Một, Bình
                  Dương.
                </p>
              </div>
              <div className="flex items-center justify-center text-[17px] gap-2">
                <span className="flex items-center gap-1 font-semibold text-main ">
                  <BsFillTelephoneFill />
                  Phone
                </span>
                <p className="text-main">0901 20 11 11</p>
              </div>
              <button
                onClick={hanleFacebook}
                className="btn btn-5 hover-border-11"
              >
                <span>
                  <BiLogoFacebook size={30} />
                </span>
              </button>
            </div>
          </div>
          <h1 className="text-[35px] font-light text-main flex justify-center items-center text-center">
            MẪU THÔNG TIN LIÊN HỆ
          </h1>
          <div
            className="flex flex-col gap-6 w-5/6 shadow-2xl justify-center h-[650px] px-14 py-16"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Tiêu đề"
              className="border-b-2"
            />
            <input
              type="text"
              name="hovaten"
              id="hovaten"
              className="border-b-2"
              placeholder="Họ và tên"
            />
            <input
              type="number"
              name="dienthoai"
              id="dienthoai"
              className="border-b-2"
              placeholder="Điện thoại"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="border-b-2"
              placeholder="Email"
            />
            <span className="w-full flex flex-col gap-2">
              <label htmlFor="noidung" className="text-main">
                Nội dung (*)
              </label>
              <textarea
                name="noidung"
                id="noidung"
                cols="30"
                rows="5"
                placeholder="Nội dung"
                className="border border-black p-4 "
              />
            </span>
            <div className="flex justify-center">
              <div className="border border-main p-1 w-[204px] rounded-3xl">
                <button className="text-white font-bold px-6 py-2 bg-main rounded-3xl hover:bg-over">
                  GỬI THÔNG TIN
                </button>
              </div>
            </div>
          </div>
          <p className="border-b border-black w-2/5 my-4"></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LienHe;
