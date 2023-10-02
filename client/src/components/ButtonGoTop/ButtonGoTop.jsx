import React, { useState, useEffect } from "react";
import { AiFillCaretUp } from "react-icons/ai";

function ButtonGoTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Kiểm tra vị trí cuộn, nếu vị trí > 100px, hiển thị nút "Go Top", ngược lại ẩn nút
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`go-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <AiFillCaretUp size={30} className="text-main"/>
    </div>
  );
}

export default ButtonGoTop;
