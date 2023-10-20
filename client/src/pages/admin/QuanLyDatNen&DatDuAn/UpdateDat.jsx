import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EditorQuill } from "../../../components";
import { BiImageAdd } from "react-icons/bi";
import { getBase64 } from "./../../../utils/helper";
import { apiUpdateProducts } from "../../../apis";
import path from "../../../utils/path";
import Swal from "sweetalert2";

const UpdateDat = ({ editDat, setEditDat }) => {
  const {
    register,
    handleSubmit,
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

  useEffect(() => {
    if (editDat) {
      reset({
        name: editDat?.name || "",
      });
      setPayload({
        description:
          typeof editDat?.description === "object"
            ? editDat?.description.join(", ")
            : editDat?.description,
      });
      setPreview({
        imageThum: editDat?.imageThum || "",
      });
    }
  }, []);



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
  const handleUpdate = async (data) => {
    const finalPayload = { ...data, ...payload };
    finalPayload.imageThum =
      data?.imageThum?.length === 0 ? preview.imageThum : data.imageThum[0];
    const formData = new FormData();
    for (let i of Object.entries(finalPayload)) formData.append(i[0], i[1]);
    const response = await apiUpdateProducts(formData, editDat?._id);
    console.log(response);
    if (response) {
      Swal.fire({
        icon: "success",
        text: "Cập nhật thông tin đất thành công!!",
      });
      setEditDat(null);
      window.location.reload();

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...!",
        text: "Cập nhật thông tin đất không thành công",
      });
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b-2 border-green-300 px-2 pb-2">
        <h2 className="font-semibold text-xl">Quản lý đất nền</h2>
        <button
          onClick={() => {
            setEditDat(null);
          }}
          className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 "
        >
          Cancel
        </button>
      </div>
      <div className="p-4">
        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="">Tên dự án</label>
            <input
              type="text"
              name="name"
              id="name"
              errors={errors}
              placeholder="Nhập tên dự án mớI"
              {...register("name")}
              className="appearance-none border rounded py-1 leading-tight px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Mô tả dự án</label>
            <EditorQuill
              payload={payload.description}
              setPayload={setPayload}
            />
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <span className="font-semibold">Upload Image</span>
            <label
              className="h-[105px] cursor-pointer w-full border-2 border-dashed border-gray-400 flex items-center justify-center"
              htmlFor="imageThum"
            >
              <BiImageAdd size={30} />
              <span>Choose file</span>
            </label>
            <input
              hidden
              type="file"
              id="imageThum"
              {...register("imageThum")}
            />
            {errors["imageThum"] && (
              <small className="text-xs text-red-500">
                {errors["imageThum"]?.message}
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
          <button className=" px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-700 text-semibold w-full">
            Cập nhập thông tin
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateDat;
