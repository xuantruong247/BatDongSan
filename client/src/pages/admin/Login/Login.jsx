import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import path from "../../../utils/path";
import logo from "../../../assets/images/logo.png";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../../apis/user";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const response = await apiLogin(data);
    console.log(response);
    if (response) {
      const userData = {
        username: data.username,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công vào quản trị viên!",
      }).then(() => {
        window.location.replace(`/${path.ADMIN}/${path.QUAN_LY_DAT_NEN}`);
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sai tài khoản hoặc mật khẩu!",
      });
    }
  };

  return (
    <div className="w-full mx-auto h-[100vh] bg-gray-200 flex flex-col items-center justify-center text-gray-400 gap-3">
      <div>
        <img src={logo} alt="" className="h-[100px] w-[200px]" />
      </div>
      <div className="bg-white rounded-lg shadow-xl w-1/4 h-[340px] flex flex-col justify-center">
        <form onSubmit={handleSubmit(handleLogin)} className="px-6 py-10">
          <div className="flex flex-col gap-3 ">
            <p className="text-sm text-start">Đăng nhập quản trị hệ thống</p>
            <span className="flex gap-2">
              <span className="border-l-4 border-gray-300"></span>
              <p className="text-sm">
                Để đăng nhập quản trị, vui lòng khai báo tất cả các ô trống dưới
                đây
              </p>
            </span>
            <div>
              <label htmlFor="" className="text-[13px]">
                Tên đăng nhập:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                {...register("username")}
                className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline focus:shadow-md focus:border-sky-300 focus:shadow-sky-300"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="" className="text-[13px]">
                Mật khẩu:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password")}
                className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline focus:shadow-md focus:border-sky-300 focus:shadow-sky-300"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 w-2/5 text-white rounded-sm text-[13px] hover:bg-blue-600"
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
      <div>
        <p className="text-[14px]">
          Copyright ©{" "}
          <span
            className="cursor-pointer text-blue-500 text-[15px] hover:underline hover:text-blue-600"
            onClick={() => {
              navigate(`/${path.TRANGCHU}`);
            }}
          >
            Công ty cổ phẩn Uniland
          </span>{" "}
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
