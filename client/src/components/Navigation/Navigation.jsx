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
    }, 1500);
  };
  return (
    <div className="flex justify-between mx-20 h-[60px] items-center text-lg">
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" className="w-[150px] h-[40px]" />
      </div>
      <div className="flex gap-5">
        {navigation.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive ? " active-link" : " non-active-link"
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
