import React, { useEffect, useState } from "react";
import CarouselOutLet from "../../components/Carousel/CarouselOutLet";
import { apiGetProducts } from "./../../apis/batDongSan";
import { Footer, ItemDat, Pagination } from "../../components";

const DatNen = () => {
  const [getProductByCategory, setGetProductByCategory] = useState([]);

  const fetchProductByCategory = async (category) => {
    console.log(category);
    const response = await apiGetProducts("dat-nen");
    console.log(response);
    setGetProductByCategory(response.data.getProducts);
  };

  useEffect(() => {
    fetchProductByCategory();
  }, []);
  return (
    <div className="w-full">
      <CarouselOutLet />
      <div className="w-[1050px] mx-auto mt-20 grid grid-cols-3 gap-4 mb-20">
        {getProductByCategory?.map((product, index) => (
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
      <div className="w-[1050px] mx-auto flex justify-center my-10">
        <Pagination totalCount={getProductByCategory?.counts} />
      </div>
      <Footer />
    </div>
  );
};

export default DatNen;
