import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import logo from "../../assets/images/logo.png";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import path from "./../../utils/path";
import { adminSidebar } from "../../utils/constant";

const activeStype =
  "px-4 py-2 flex items-center gap-2 text-white bg-blue-500 font-semibold border rounded-lg";

const notActiveStype =
  "px-4 py-2 flex items-center gap-2 hover:bg-blue-600 hover:text-white rounded-lg";

const AdminSidebar = () => {
  const [activeTab, setActiveTab] = useState([]);
  const navigate = useNavigate();

  const handleShowTab = (tabID) => {
    if (activeTab.some((el) => el === tabID)) {
      setActiveTab((prev) => prev.filter((el) => el !== tabID));
    } else {
      setActiveTab((prev) => [...prev, tabID]);
    }
  };
  return (
    <div className="bg-white h-full flex flex-col justify-between">
      <div className="py-4">
        <div className="flex flex-col items-center justify-center py-4 gap-2">
          <NavLink to={`/${path.TRANGCHU}`}>
            <img src={logo} alt="logo" className="w-[230px] object-contain " />
          </NavLink>
          <span className="font-medium">Admin workspace</span>
        </div>
        <div>
          {adminSidebar.map((item, index) => (
            <Fragment key={index}>
              {item.type === "PARENT" && (
                <div
                  className="flex flex-col"
                  onClick={() => {
                    handleShowTab(item.id);
                  }}
                >
                  <div className="flex items-center justify-between py-2 px-4 hover:bg-blue-600 hover:text-white cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span>{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                    {!activeTab.some((id) => id === item.id) ? (
                      <AiFillCaretRight />
                    ) : (
                      <AiFillCaretDown />
                    )}
                  </div>
                  {activeTab.some((id) => id === item.id) && (
                    <div className="flex flex-col pl-6 text-[15px]">
                      {item.subMenu.map((el) => (
                        <NavLink
                          key={el.text}
                          to={el.path}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className={({ isActive }) =>
                            clsx(isActive ? activeStype : notActiveStype)
                          }
                        >
                          {el.text}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <div className="flex justify-center items-center mt-20">
          <button
            onClick={() => {
              localStorage.removeItem("userData");
              navigate(`/${path.LOGIN}`);
            }}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
