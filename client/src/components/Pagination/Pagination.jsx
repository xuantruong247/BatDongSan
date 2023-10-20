import React from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex items-center justify-center gap-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`border px-3 py-1 rounded ${
          currentPage === 1
            ? "bg-white text-black hover:bg-gray-200 hover:text-white cursor-pointer"
            : "bg-white text-black hover:bg-gray-200 hover:text-white"
        }`}
      >
        <AiOutlineDoubleLeft className="h-6" />
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`border px-3 py-1 rounded ${
            page === currentPage
              ? "bg-main text-white cursor-not-allowed"
              : "bg-white text-black hover:bg-gray-200 hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`border px-3 py-1 rounded ${
          currentPage === totalPages
            ? "bg-white text-black hover:bg-gray-200 hover:text-white cursor-pointer"
            : "bg-white text-black hover:bg-gray-200 hover:text-white"
        }`}
      >
        <AiOutlineDoubleRight className="h-6" />
      </button>
    </div>
  );
};

export default Pagination;
