import React, { useEffect, useState } from "react";
import CarouselOutLet from "./../../components/Carousel/CarouselOutLet";
import { apiGetBlogs } from "./../../apis/tinTuc";
import { Footer, Pagination, TinTucItem } from "../../components";
import { useParams } from "react-router-dom";

const TinTuc = () => {
  const [getBlogs, setGetBlogs] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalCount / 6);
  const { page } = useParams();

  const fetchBlogs = async (pageNumber) => {
    const reponse = await apiGetBlogs({ page: pageNumber });
    setGetBlogs(reponse.data.getBlogs);
    setTotalCount(reponse.data.counts);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchBlogs(page || 1);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      fetchBlogs(newPage);
    }
  };

  return (
    <div className="w-full">
      <CarouselOutLet />
      <div className="w-[1050px] mx-auto mt-20 grid grid-cols-3 gap-4 mb-20">
        {getBlogs.map((blog, index) => (
          <div key={index}>
            <TinTucItem
              imageThum={blog.imageThum}
              name={blog.name}
              createdAt={blog.createdAt}
              views={blog.views}
              description={blog.description}
              blog={blog}
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

export default TinTuc;
