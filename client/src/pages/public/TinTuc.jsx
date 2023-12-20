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
      <div className="lg:w-[1050px] sm:w-[425px] lg:mx-auto lg:mt-20 grid lg:grid-cols-3 lg:gap-4 lg:mb-20 sm:grid-cols-1 sm:pl-10 md:w-[768px] md:grid-cols-2 md:pl-7 md:mt-10 sm:mt-6">
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

export default TinTuc;
