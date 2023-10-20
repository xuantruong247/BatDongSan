import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EditorQuill, Loading } from "../../../components";
import { BiImageAdd } from "react-icons/bi";
import { getBase64 } from "../../../utils/helper";
import { apiCreateProduct } from "../../../apis";
import { category } from "../../../utils/constant";
import Swal from "sweetalert2";

const TaoDat = () => {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [payload, setPayload] = useState({
    description: "",
  });
  const [preview, setPreview] = useState({
    imageThum: null,
  });

  const handlePreviewAvt = async (file) => {
    const base64Avt = await getBase64(file);
    setPreview((prev) => ({ ...prev, imageThum: base64Avt }));
  };

  useEffect(() => {
    if (
      watch("imageThum") instanceof FileList &&
      watch("imageThum").length > 0
    ) {
      handlePreviewAvt(watch("imageThum")[0]);
    }
  }, [watch("imageThum")]);

  const handleCreate = async (data) => {
    const finalPayload = { ...data, ...payload };
    finalPayload.imageThum =
      data?.imageThum?.length === 0 ? preview.imageThum : data.imageThum[0];
    const formData = new FormData();
    for (let i of Object.entries(finalPayload)) formData.append(i[0], i[1]);
    setIsLoadingData(true);
    const response = await apiCreateProduct(formData);
    setIsLoadingData(false);
    if (response.data.createProduct) {
      Swal.fire({
        icon: "success",
        text: "Tạo thông tin đất thành công!!",
      });
      setPayload({
        imageThum: "",
      });
      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...!",
        text: "Tạo thông tin đất không thành công!",
      });
    }

  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b-2 border-green-300 px-2 pb-2">
        <h2 className="font-semibold text-xl">Tạo thông tin đất mới</h2>
      </div>
      <div className="p-4">
        {isLoadingData ? (
          <Loading />
        ) : (
          <form
            onSubmit={handleSubmit(handleCreate)}
            className="flex flex-col gap-6"
          >
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-1 w-[70%]">
                <label htmlFor="">Tên dự án</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  errors={errors}
                  placeholder="Nhập tên dự án mớI"
                  {...register("name", {
                    required: "Tên dự án không được để trống",
                  })}
                  className="appearance-none border rounded py-1 leading-tight px-3"
                />
                {errors.name && (
                  <span className="text-xs text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 w-[20%]">
                <label htmlFor="">Thể loại đất</label>
                <select
                  className="appearance-none border rounded py-1 leading-tight px-3 cursor-pointer"
                  {...register("category", {
                    required: "Thể loại đất không được để trống",
                  })}
                  errors={errors}
                >
                  <option value="">----------chọn----------</option>
                  {category.map((item) => (
                    <option
                      className="hover:bg-blue-500"
                      value={item.value}
                      key={item.id}
                    >
                      {item.text}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <span className="text-xs text-red-500">
                    {errors.category.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="description">Mô tả dự án</label>
              <EditorQuill
                payload={payload.description}
                setPayload={setPayload}
              />
              {errors.description && (
                <span className="text-xs text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <span className="font-semibold">Upload Image</span>
              <label
                className={`h-[105px] cursor-pointer w-full border-2 border-dashed border-gray-400 flex items-center justify-center ${
                  errors.imageThum ? "border-red-500" : ""
                }`}
                htmlFor="imageThum"
              >
                <BiImageAdd size={30} />
                <span>Choose file</span>
              </label>
              <input
                hidden
                type="file"
                id="imageThum"
                {...register("imageThum", {
                  required: "Hình ảnh không được để trống",
                })}
              />
              {errors.imageThum && (
                <small className="text-xs text-red-500">
                  {errors.imageThum.message}
                </small>
              )}
              {preview.imageThum && (
                <div className="flex items-center justify-center">
                  <img
                    src={preview.imageThum}
                    alt="imageThum"
                    className="w-[200px] object-contain"
                  />
                </div>
              )}
            </div>
            <button className="px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-700 text-semibold w-full">
              Tạo thông tin đất mới
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TaoDat;
