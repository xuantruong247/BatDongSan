import React from "react";
import CarouselOutLet from "../../components/Carousel/CarouselOutLet";
import Footer from "./../../components/Footer/Footer";

const GioiThieu = () => {
  return (
    <div className="w-full">
      <CarouselOutLet />
      <div className="flex text-main lg:w-[1050px] lg:mx-auto lg:px-[20px] md:w-[768px] md:px-[15px] sm:w-[425px] sm:px-[15px]">
        <div className="flex flex-col lg:gap-4 lg:text-[19px] mb-10  text-justify">
          <h1 className="lg:mt-32 sm:mt-10 lg:text-[40px] md:text-[40px] font-medium flex justify-center md:mt-16 sm:text-[23px]">
            GIỚI THIỆU VỀ CÔNG TY
          </h1>
          <h2 className="font-bold sm:text-[14px] md:text-[17px] lg:text-[20px]">
            Lời đầu tiên, Công Ty Cổ Phần Uniland xin gửi lời chào,
            lời chúc sức khỏe và thành công đến Quý khách hàng, Quý đối tác cùng
            toàn thể các Thành viên của Công ty!
          </h2>
          <p className="sm:text-[13px] md:text-[15px] lg:text-[18px]">
            Được thành lập vào ngày 13/07/2015, Công Ty Cổ Phần Uniland là một trong
            những doanh nghiệp tiêu biểu trong lĩnh vực Bất động sản tại Bình
            Dương nói riêng cũng như khu vực Đông Nam Bộ nói chung. Chúng tôi
            chuyên phát triển và phân phối các sản phẩm đất nền, biệt thự, nhà
            phố, căn hộ, nhà ở xã hội tại Bình Dương, Bình Phước, Đồng Nai…
          </p>
          <p className="sm:text-[13px] md:text-[15px] lg:text-[18px]">
            Công Ty Cổ Phần Uniland lấy sự chính trực, chuyên nghiệp, tận tâm làm kim
            chỉ nam; đồng thời xem sự hài lòng của khách hàng, đối tác và các
            thành viên trong công ty là sứ mệnh của chính mình. Trải qua hơn 8
            năm hoạt động, Công Ty Cổ Phần Uniland đã gặt hái nhiều thành tựu rực rỡ
            và vẫn luôn nỗ lực không ngừng để khẳng định vị thế thương hiệu của
            mình.
          </p>
          <p className="sm:text-[13px] md:text-[15px] lg:text-[18px]">
            Để đáp ứng nhu cầu của đông đảo khách hàng, công ty luôn nỗ lực tìm
            kiếm những dự án đẹp và tiềm năng. Từ những dự án đất nền, nhà ở xã
            hội giá rẻ cho đến những dự án biệt thự, nhà phố cao cấp, Công Ty Cổ Phần Uniland
            luôn là người bạn đồng hành đáng tin cậy, giúp Quý khách hàng thuận
            lợi hơn trong quá trình an cư và đầu tư.
          </p>
          <p className="sm:text-[13px] md:text-[15px] lg:text-[18px]">
            Với chiến lược chủ động liên doanh, liên kết, hợp tác với các tổ
            chức tài chính, chứng khoán, ngân hàng... nhằm tối ưu hóa sức cạnh
            tranh trên thị trường, Công Ty Cổ Phần Uniland mong rằng sẽ luôn nhận
            được sự tin tưởng, hợp tác của Quý đối tác và Quý nhà đầu tư.
          </p>
          <p className="sm:text-[13px] md:text-[15px] lg:text-[18px]">
            Văn hóa doanh nghiệp cũng là một trong những yếu tố quan trọng tạo
            nên sự thành công. Vì thế, chúng tôi chủ động xây dựng một môi
            trường làm việc chuyên nghiệp, năng động, sáng tạo và thân thiện.
            Ngoài ra, Công Ty Cổ Phần Uniland còn đề cao mục tiêu phát triển doanh nghiệp gắn
            liền với sự phát triển của xã hội, luôn có những hành động thiết
            thực nhằm chung tay hỗ trợ cộng đồng.
          </p>
          <p className="sm:text-[13px] md:text-[15px] lg:text-[18px]">
            Hiện tại, Công Ty Cổ Phần Uniland đã có 1 trụ sở chính, 3 chi nhánh tại tỉnh Bình
            Dương và 1 chi nhánh tại TP. Hồ Chí Minh. Trong tương lai, công ty
            phấn đấu trở thành Nhà Đầu tư - Phát triển Bất động sản số 1 tại
            Việt Nam, mở rộng quy mô hoạt động ra khắp đất nước, cam kết mang
            đến những giải pháp an cư hoàn hảo, góp phần mang lại cuộc sống hạnh
            phúc và thịnh vượng cho cộng đồng.
          </p>
          <p className="sm:text-[13px] md:text-[15px] lg:text-[18px]">
            Một lần nữa, Công Ty Cổ Phần Uniland xin gửi lời tri ân
            chân thành nhất đến tất cả Quý vị!
          </p>
          <p className="sm:text-[13px] md:text-[15px] lg:text-[18px]">Trân trọng!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GioiThieu;
