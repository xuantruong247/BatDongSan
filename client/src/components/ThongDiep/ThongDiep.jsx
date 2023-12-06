import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import path from "../../utils/path";

const GioiThieu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center lg:h-[500px] w-full custom-gradient-home md:h-[600px] sm:h-[700px]">
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="font-semibold lg:text-[35px] text-main md:text-[25px]" data-aos="zoom-in">
          THÔNG ĐIỆP
        </h1>
        <div className="grid grid-cols-5 w-full text-xl" data-aos="zoom-in-up">
          <div className="col-span-1">
            <span className="flex justify-end lg:mt-8 mr-8 md:mt-20 sm:mt-20 sm:mr-3">
              <FaQuoteLeft className="lg:text-[60px] md:text-[65px] text-white sm:text-[65px]" />
            </span>
          </div>
          <div className="col-span-3 flex items-center flex-col text-main gap-10 ">
            <div className="flex items-center justify-center flex-col">
              <h1 className="font-bold text-center sm:text-[13px] md:text-[20px]">
                Kính thưa Quý khách hàng, Quý đối tác và toàn thể nhân viên!
              </h1>
              <p className="text-center md:text-[18px] sm:text-[15px]">
                Công Ty Cổ Phân Uniland được khởi dựng từ khát vọng về một tập
                đoàn đa năng, chuyên nghiệp, với mục tiêu khẳng định vị thế và
                thương hiệu trên thị trường bất động sản ở khu vực Đông Nam Bộ
                nói chung và Bình Dương nói riêng.
              </p>
              <p className="text-center md:text-[18px] sm:text-[15px]">
                Với nguồn tài chính vững chắc, hướng quản trị phù hợp, cùng đội
                ngũ nhân viên chuyên nghiệp, sau hơn 5 năm hoạt động, chúng tôi
                đang dần khẳng định được vị thế và vai trò của mình đối với kinh
                tế - xã hội khu vực, đồng thời thể hiện được đẳng cấp thương
                hiệu trên thị trường...
              </p>
            </div>
            <button
              onClick={() => {
                navigate(`${path.GIOITHIEU}`);
              }}
              className="py-2 px-8 border rounded-3xl bg-white hover:bg-main hover:text-white hover:animate-bounce"
            >
              xem thêm
            </button>
          </div>
          <div className="col-span-1">
            <span className="flex">
              <FaQuoteRight
                size={65}
                color="white"
                className="lg:text-[60px] text-white lg:ml-8 lg:mt-[130px] md:mt-[250px] md:ml-8 sm:mt-[400px] sm:ml-3"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GioiThieu;
