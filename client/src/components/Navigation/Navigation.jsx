import React from "react";
import { navigation } from "../../utils/constant";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navigation = () => {
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
          >
            {item.value}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
