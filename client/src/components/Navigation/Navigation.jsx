import React, { useState } from "react";
import { navigation } from "../../utils/constant";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Loading from "../Common/Loading";
import ModalTuyenDung from "../Common/ModalTuyenDung";

const Navigation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showTuyenDungModal, setShowTuyenDungModal] = useState(false);

  const handleNavLinkClick = (item) => {
    // Bắt đầu hiển thị trạng thái loading khi người dùng click liên kết
    setIsLoading(true);

    // Đặt thời gian chờ 1.5 giây trước khi tắt trạng thái loading
    setTimeout(() => {
      setIsLoading(false);

      // Kiểm tra xem người dùng đã click vào liên kết "Tuyển dụng" hay chưa
      if (item.value === "Tuyển dụng") {
        setShowTuyenDungModal(true);
      }
      window.scrollTo(0, 0);
    }, 1500);
  };
  return (
    <div
      className="flex lg:justify-between lg:mx-20 lg:h-[60px] items-center lg:text-lg lg:bg-white lg:flex-row lg:pt-0
    md:bg-white md:h-[86px] md:flex-col md:pt-2 md:gap-2 sm:bg-white sm:flex-col sm:h-[100px] sm:pt-2 sm:gap-2
    "
    >
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" className="w-[150px] h-[40px]" />
      </div>
      <div
        className="
      lg:flex lg:gap-5 lg:w-full lg:justify-end
      md:flex md:gap-5 md:w-full md:justify-center md:text-[16px]
      sm:text-center sm:w-[330px] sm:text-[13px]"
      >
        {navigation.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive ? " active-link sm:mr-2" : " non-active-link sm:mr-2"
            }
            onClick={handleNavLinkClick}
          >
            {item.value}
          </NavLink>
        ))}
      </div>
      {isLoading && <Loading />}
      {showTuyenDungModal && <ModalTuyenDung />}
    </div>
  );
};

export default Navigation;
