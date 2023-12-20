import React, { useEffect, useState } from "react";
import CarouselOutLet from "../../components/Carousel/CarouselOutLet";
import { apiGetProducts } from "../../apis/batDongSan";
import { Footer, ItemDat,Pagination } from "../../components";
import { useParams } from "react-router-dom";

const DatNen = () => {
  const [getProductByCategory, setGetProductByCategory] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalCount / 6);
  const { page } = useParams();

  const fetchProductByCategory = async (pageNumber) => {
    const response = await apiGetProducts("dat-nen", { page: pageNumber });
    setGetProductByCategory(response.data.getProducts);
    setTotalCount(response.data.counts);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchProductByCategory(page || 1);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      fetchProductByCategory(newPage);
    }
  };

  return (
    <div className="w-full">
      <CarouselOutLet />
      <div className="lg:w-[1050px] sm:w-[425px] lg:mx-auto lg:mt-20 grid lg:grid-cols-3 lg:gap-4 lg:mb-20 sm:grid-cols-1 sm:pl-10 md:w-[768px] md:grid-cols-2 md:pl-7 md:mt-10 sm:mt-6">
        {getProductByCategory.map((product, index) => (
          <div key={index}>
            <ItemDat
              imageThum={product.imageThum}
              name={product.name}
              views={product.views}
              createdAt={product.createdAt}
              description={product.description}
              product={product}
            />
          </div>
        ))}
      </div>
      <div className="lg:w-[1050px] lg:mx-auto flex justify-center lg:mb-20 sm:w-[425px] sm:my-5 md:w-[768px] md:my-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DatNen;
