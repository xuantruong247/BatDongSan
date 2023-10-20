import React, { useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import path from "../../utils/path";

const GioiThieu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center h-[500px] w-full custom-gradient-home">
      <div className="w-full flex flex-col items-center gap-4">
        <h1
          className="font-semibold text-[35px] text-main"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          THÔNG ĐIỆP
        </h1>
        <div className="grid grid-cols-5 w-full text-xl" data-aos="fade-left">
          <div className="col-span-1">
            <span className="flex justify-end mt-8 mr-8">
              <FaQuoteLeft size={65} color="white" />
            </span>
          </div>
          <div className="col-span-3 flex items-center flex-col text-main gap-10 ">
            <div className="flex items-center justify-center flex-col">
              <h1 className="font-bold">
                Kính thưa Quý khách hàng, Quý đối tác và toàn thể nhân viên!
              </h1>
              <p className="text-center ">
                Công Ty Cổ Phân Uniland được khởi dựng từ khát vọng về một tập
                đoàn đa năng, chuyên nghiệp, với mục tiêu khẳng định vị thế và
                thương hiệu trên thị trường bất động sản ở khu vực Đông Nam Bộ
                nói chung và Bình Dương nói riêng.
              </p>
              <p className="text-center">
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
                className="mt-[130px] ml-8"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GioiThieu;
