import React, { useEffect, useState } from "react";
import CarouselOutLet from "../../components/Carousel/CarouselOutLet";
import { apiGetProducts } from "../../apis/batDongSan";
import { Footer, ItemDat, Pagination } from "../../components";

const DatDuAn = () => {
  const [getProductByCategory, setGetProductByCategory] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const fetchProductByCategory = async () => {
    const response = await apiGetProducts("dat-du-an");
    console.log(response.data.counts);
    setGetProductByCategory(response.data.getProducts);
    setTotalCount(response.data.counts);
  };

  useEffect(() => {
    fetchProductByCategory();
  }, []);
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
              updatedAt={product.updatedAt}
              description={product.description}
              product={product}
            />
          </div>
        ))}
      </div>
      <div className="w-[1050px] mx-auto flex justify-center mb-20">
        <Pagination totalCount={totalCount} />
      </div>
      <Footer />
    </div>
  );
};

export default DatDuAn;
