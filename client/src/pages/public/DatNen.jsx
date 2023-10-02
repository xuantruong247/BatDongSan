import React, { useEffect, useState } from "react";
import CarouselOutLet from "../../components/Carousel/CarouselOutLet";
import { apiGetProducts } from "./../../apis/batDongSan";
import { ItemDat } from "../../components";

const DatNen = () => {
  const [getProductByCategory, setGetProductByCategory] = useState([]);

  const fetchProductByCategory = async () => {
    const response = await apiGetProducts();
    console.log(response);
    if (response.data.getProducts) {
      const filteredProducts = response.data.getProducts.filter(
        (product) => product.category === "dat-nen"
      );
      setGetProductByCategory(filteredProducts);
    }
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
    </div>
  );
};

export default DatNen;
