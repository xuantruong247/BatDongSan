import React, { useEffect, useState } from "react";
import CarouselOutLet from "../../components/Carousel/CarouselOutLet";
import van_phong from "../../assets/images/van_phong.jpg";
import nhan_su_1 from "../../assets/images/nhan_su_1.jpg";
import nhan_su_2 from "../../assets/images/nhan_su_2.jpg";
import { BsSquareFill } from "react-icons/bs";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import ModalTuyenDung from "./../../components/Common/ModalTuyenDung";

const TuyenDung = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(
    location.pathname === "/tuyen-dung"
  );

  useEffect(() => {
    if (showModal) {
      openModal();
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showModal]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Ngăn chặn sự kiện click từ việc lan truyền ra ngoài
  };
  return (
    <div className="w-full">
      {showModal && (
        <div
          className="bg-overlay modal-container absolute inset-0 z-40 flex h-full justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white w-3/5 p-10 overflow-y-auto "
            onClick={handleModalClick}
          >
            <ModalTuyenDung />
          </div>
        </div>
      )}
      <div className="relative">
        <CarouselOutLet />
        <div className="w-[1050px] mx-auto px-[20px] mt-32 text-main">
          <div className="flex flex-col gap-10 text-[19px] mb-10">
            <h1 className=" font-bold text-3xl text-center">
              MÔI TRƯỜNG LÀM VIỆC .
            </h1>
            <span className="flex flex-col gap-5 text-justify text-gray-700">
              <p>
                Hãy đến với công ty cổ phần Uniland các bạn sẽ được trải nghiệm
                môi trường làm việc tuyệt vời, nhiệt huyết và đầy năng động.
                “Ngọn lửa” nhiệt huyết ấy đến từ ban lãnh đạo giàu kinh nghiệm
                và luôn truyền khát vọng và đam mê nghề nghiệp đến với mỗi cá
                nhân tại công ty. Không chỉ có vậy, Uniland còn sở hữu đội ngũ
                trẻ tràn đầy sức sống với tinh thần đam mê công việc ham học hỏi
                luôn muốn khẳng định bản thân trong công việc, nhưng vẫn đặt tập
                thể và sự đoàn kết lên hàng đầu.
              </p>
              <p>
                Với nhiệt huyết và sức trẻ tại Uniland cường độ làm việc luôn ở
                mức tối đa, thể hiện tính chuyên nghiệp nhưng cũng không kém
                phần vui vẻ thông qua các hoạt động giải trí, thể thao, sự kiện
                và du lịch. Thông qua các hoạt động trong và ngoài công ty các
                thành viên luôn xem đây là một “đại gia đình” Uniland. Chúng tôi
                luôn tâm niệm Công ty không chỉ là một nơi để làm việc, đó còn
                là “một gia đình”, “một niềm vui”, “một sự chia sẻ” của mỗi cá
                nhân đang làm việc tại Uniland.
              </p>
              <img
                src={van_phong}
                alt="van_phong"
                className="h-[80vh] w-full rounded-md"
              />
            </span>
            <h1 className=" font-bold text-3xl text-center">
              CƠ HỘI NGHỀ NGHIỆP.
            </h1>
            <span className="flex flex-col gap-5 text-justify">
              <p>
                Tại Uniland mọi nỗ lực cá nhân đều được ghi nhận và đền đáp xứng
                đáng. Đến với công ty chúng tôi các bạn sẽ được làm việc và trải
                nghiệm ở một môi trường chuyên nghiệp và năng động. Mọi cá nhân
                đang làm việc tại công ty đều được truyền đạt những kinh nghiệm
                quý báu được tích luỹ trong nhiều năm của Ban Lãnh Đạo công ty
                và được tạo điều kiện để phát huy tối đa về năng lực và phẩm
                chất để được phát triển và thăng tiến trong sự nghiệp.
              </p>
              <p>
                Với định hướng trở thành một trong những Công ty hàng đầu trong
                lĩnh vực phát triển và phân phối Bất động sản tại Bình Dương và
                các tỉnh khu vực phía Nam. Uniland luôn ý thức được rằng yếu tố
                con người là yếu tố then chốt, là “xương sống” cho sự thành công
                của doanh nghiệp. Vì vậy mọi cá nhân đều nhận được sự quan tâm
                và lắng nghe từ phía Ban lãnh đạo công ty. Cùng với đó là chính
                sách đãi ngộ tốt nhằm thu hút nhân tài cũng như đảm bảo mức thu
                nhập, lương, thưởng cạnh tranh cao nhất trên thị trường.
              </p>
              <p>
                Cùng với đó là nguồn sản phẩm dồi dào, đa dạng và có tính cạnh
                tranh cao nhất trên thị trường được đầu tư bài bản, chất lượng
                và minh bạch về pháp lý. Luôn đem đến cho các chuyên viên sale
                Uniland một niềm tin về sản phẩm, niềm tin về công ty qua đó
                hàng ngàn sản phẩm đã được đưa đến tận tay khách hàng.
              </p>
              <img
                src={nhan_su_1}
                alt="nhan_su_1"
                className="h-[80vh] w-full rounded-md"
              />
            </span>
            <h1 className=" font-bold text-3xl text-center">
              CHÍNH SÁCH ĐÃI NGỘ.
            </h1>
            <p>
              Tại Uniland chúng tôi trân trọng sự đóng góp của tất cả mọi người
              dù là nhỏ nhất. Mọi nỗ lực đều được ghi nhận và đền đáp xứng đáng
              nhằm mang đến cho người lao động sự yên tâm khi công tác tại
              Uniland.
            </p>
            <div className="flex flex-col">
              <span className="flex items-center gap-2  font-bold text-xl">
                <BsSquareFill size={10} />
                <h2>HỆ THỐNG LƯƠNG - THƯỞNG</h2>
              </span>
              <div className="ml-10">
                <p>+ Chế độ lương cạnh tranh, hoa hồng hấp dẫn.</p>
                <p>+ Xét duyệt tăng lương định kỳ hàng năm.</p>
                <p>
                  + Thưởng theo từng dự án, hàng tháng, hàng quý, hàng năm và
                  theo hiệu quả công việc.
                </p>
                <p>+ Thưởng tết và các ngày lễ lớn trong năm.</p>
                <p>
                  + Thực hiện đầy đủ BHXH, BHYT, chế độ thai sản, ốm đau theo
                  quy định hiện hành.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center gap-2  font-bold text-xl">
                <BsSquareFill size={10} />
                <h2>CHÍNH SÁCH PHÚC LỢI</h2>
              </span>
              <div className="ml-10">
                <p>
                  + Các chính sách chăm lo đời sống: quà sinh nhật, quà lễ tết..
                </p>
                <p>
                  + Được tham các khoá đào tạo, bồi dưỡng kỹ năng chuyên môn.
                </p>
                <p>
                  + Du lịch, nghỉ dưỡng hằng năm tạo sự thư giãn, vui vẻ và đoàn
                  kết.
                </p>
              </div>
            </div>
            <img
              src={nhan_su_2}
              alt="nhan_su_2"
              className="h-[80vh] w-full rounded-md"
            />
            <h1 className=" font-bold text-3xl text-center">
              THÔNG TIN TUYỂN DỤNG .
            </h1>
            <div>
              <div className="grid grid-cols-10 border w-3/4 mx-auto">
                <div className="col-span-1 bg-green-600 border py-8 flex items-center justify-center">
                  <span className=" text-white font-semibold">STT</span>
                </div>
                <div className="col-span-5 bg-green-600 border py-8 flex items-center pl-5">
                  <span className="text-white font-semibold">
                    VỊ TRÍ TUYỂN DỤNG
                  </span>
                </div>
                <div className="col-span-2 bg-green-600 border py-8 flex items-center justify-center">
                  <span className=" text-white font-semibold">SỐ LƯỢNG</span>
                </div>
                <div className="col-span-2 bg-green-600 border py-8 flex items-center justify-center">
                  <span className=" text-white font-semibold">
                    NGÀY HẾT HẠN
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-10 border w-3/4 mx-auto font-normal hover:font-semibold hover:bg-green-600 hover:text-white transition-all duration-500 bg-gray-50">
                <div className="col-span-1 border py-8 flex items-center justify-center ">
                  <span>01</span>
                </div>
                <div className="col-span-5 border py-8 flex items-center pl-5">
                  <span>TRƯỞNG PHÒNG KINH DOANH</span>
                </div>
                <div className="col-span-2 border py-8 flex items-center justify-center">
                  <span>04</span>
                </div>
                <div className="col-span-2 border py-8 flex items-center justify-center">
                  <span>31/03/2022</span>
                </div>
              </div>
              <div className="grid grid-cols-10 border w-3/4 mx-auto font-normal hover:font-semibold hover:bg-green-600 hover:text-white transition-all duration-500 bg-gray-200">
                <div className="col-span-1 border py-8 flex items-center justify-center ">
                  <span>02</span>
                </div>
                <div className="col-span-5 border py-8 flex items-center pl-5">
                  <span>CHUYÊN VIÊN KẾ TOÁN</span>
                </div>
                <div className="col-span-2 border py-8 flex items-center justify-center">
                  <span>03</span>
                </div>
                <div className="col-span-2 border py-8 flex items-center justify-center">
                  <span>31/03/2022</span>
                </div>
              </div>
              <div className="grid grid-cols-10 border w-3/4 mx-auto font-normal hover:font-semibold hover:bg-green-600 hover:text-white transition-all duration-500 bg-gray-50">
                <div className="col-span-1 border py-8 flex items-center justify-center ">
                  <span>03</span>
                </div>
                <div className="col-span-5 border py-8 flex items-center pl-5">
                  <span>TRƯỞNG NHÓM KINH DOANH</span>
                </div>
                <div className="col-span-2 border py-8 flex items-center justify-center">
                  <span>24</span>
                </div>
                <div className="col-span-2 border py-8 flex items-center justify-center">
                  <span>31/03/2022</span>
                </div>
              </div>
              <div className="grid grid-cols-10 border w-3/4 mx-auto font-normal hover:font-semibold hover:bg-green-600 hover:text-white transition-all duration-500 bg-gray-200">
                <div className="col-span-1 border py-8 flex items-center justify-center ">
                  <span>04</span>
                </div>
                <div className="col-span-5 border py-8 flex items-center pl-5">
                  <span>CHUYÊN VIÊN KINH DOANH</span>
                </div>
                <div className="col-span-2 border py-8 flex items-center justify-center">
                  <span>70</span>
                </div>
                <div className="col-span-2 border py-8 flex items-center justify-center">
                  <span>31/03/2022</span>
                </div>
              </div>
            </div>
            <h1 className=" font-bold text-3xl text-center">
              ĐIỀN THÔNG TIN NỘP ĐƠN
            </h1>
            <div className="w-3/4 mx-auto flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Họ và tên (*)"
                  className="bg-gray-50 w-2/5 p-2 border"
                />
                <input
                  type="text"
                  placeholder="Email (*)"
                  className="bg-gray-50 w-2/5 p-2 border"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Điện thoại (*)"
                  className="bg-gray-50 w-2/5 p-2 border"
                />
                <div className="hover-div">
                  <label
                    className="bg-gray-50 w-[303px] p-1 border cursor-pointer flex items-center justify-between"
                    htmlFor="uploadFile"
                  >
                    <span className="text-gray-400 px-1">
                      File hồ sơ của bạn
                    </span>
                    <button className="bg-red-600 text-white p-1 transition-all duration-500">
                      BROWSER
                    </button>
                  </label>
                  <input hidden type="file" id="uploadFile" required />
                </div>
              </div>
              <button className="bg-green-600 hover:bg-red-600 w-[100px] py-1 text-white transition-all duration-500">
                NỘP ĐƠN
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TuyenDung;
