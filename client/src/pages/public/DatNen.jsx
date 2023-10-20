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
      <div className="w-[1050px] mx-auto mt-20 grid grid-cols-3 gap-4 mb-20">
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
      <div className="w-[1050px] mx-auto flex justify-center mb-20">
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
