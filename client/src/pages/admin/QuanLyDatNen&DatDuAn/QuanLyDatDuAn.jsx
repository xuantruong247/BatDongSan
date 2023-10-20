import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../../../apis";
import moment from "moment";
import { useParams } from "react-router-dom";
import { Pagination } from "../../../components";
import UpdateDat from "./UpdateDat";
import DOMPurify from "dompurify";

const QuanLyDatDuAn = () => {
  const [getProductDatNen, setGetProductDatNen] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalCount / 6);
  const { page } = useParams();
  const [editDat, setEditDat] = useState(false);

  const fetchProductDatNen = async (pageNumber) => {
    const response = await apiGetProducts("dat-du-an", { page: pageNumber });
    setGetProductDatNen(response.data.getProducts);
    setTotalCount(response.data.counts);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchProductDatNen(page || 1);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      fetchProductDatNen(newPage);
    }
  };
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };


  return (
    <div className="w-full relative p-4">
      {editDat && (
        <div className="absolute inset-0 bg-green-200 h-[1150px]">
          <UpdateDat editDat={editDat} setEditDat={setEditDat} />
        </div>
      )}
      <div className="flex border-b-2 border-green-300 pb-2">
        <h2 className="font-semibold text-xl">Quản lý đất nền</h2>
      </div>
      <div className="w-full p-4">
        <table className="table-auto w-full border-b border-green-400 text-left">
          <thead className="bg-green-500 text-white border rounded-md text-[15px]">
            <tr>
              <th className="px-2 py-1 text-center">#</th>
              <th className="px-2 py-1">Tên Dự Án</th>
              <th className="px-2 py-1">Hình ảnh</th>
              <th className="px-2 py-1">Mô tả dự án</th>
              <th className="px-2 py-1 text-center">Ngày tạo</th>
              <th className="px-2 py-1 text-center">Lượt xem</th>
              <th className="px-2 py-1 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {getProductDatNen?.map((item, index) => (
              <tr key={index}>
                <td className="px-2 py-1 text-center">{index + 1}</td>
                <td className="px-2 py-1">{item.name}</td>
                <td className="px-2 py-1">
                  <img src={item.imageThum} alt="" className="w-20 h-20" />
                </td>
                <td className="px-4 py-2">
                  {item?.description?.length > 1 &&
                    item?.description?.map((el, index) => (
                      <p key={index}>{truncateDescription(el, 100)}</p>
                    ))}
                  {item?.description?.length === 1 && (
                    <div
                      className="text-sm"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          truncateDescription(item?.description[0], 100)
                        ),
                      }}
                    ></div>
                  )}
                </td>
                <td className="px-2 py-1 text-center">
                  {moment(item.createdAt).format("DD/MM/YYYY")}
                </td>
                <td className="px-2 py-1 text-center">{item.views}</td>
                <td className="flex gap-2 justify-center pt-6">
                  <button
                    onClick={() => {
                      setEditDat(item);
                    }}
                    className="py-2 px-4 bg-blue-500 rounded-md text-white hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button className="py-2 px-4 bg-red-500 rounded-md text-white hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full mx-auto flex justify-center mt-5">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default QuanLyDatDuAn;
