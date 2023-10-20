import React from "react";
import form_ung_tuyen from "../../assets/file/don-ung-tuyen-uniland_vi_1607418103.pdf";
import { AiOutlineCaretDown } from "react-icons/ai";

const ModalTuyenDung = () => {
  return (
    <div className="gap-6 flex flex-col">
      <div className="flex flex-col gap-4 items-center">
        <h3>VỊ TRÍ TUYỂN DỤNG</h3>
        <h1 className="font-bold text-main text-2xl">CHUYÊN VIÊN KINH DOANH</h1>
        <p className="border-dashed border-b-2 w-full"></p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="flex gap-2">
            <b>Chức danh:</b>
            <p>Chuyên viên kinh doanh</p>
          </span>
          <span className="flex gap-2">
            <b>Số lượng:</b>
            <p>70 người</p>
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <b>MÔ TẢ CÔNG VIỆC:</b>
          <p>
            - Tìm kiếm, tư vấn khách hàng về các sản phẩm, dự án của công ty
            (Đất nền, nhà phố, căn hộ…).
          </p>
          <p>
            - Hướng dẫn khách hàng đi tham quan dự án & Thực hiện các thủ tục ký
            kết hợp đồng với khách hàng.
          </p>
          <p>
            - Chăm sóc khách hàng (tiềm năng, hiện tại, cũ) tạo mối quan hệ với
            khách hàng.
          </p>
          <p>- Công việc cụ thể sẽ được hướng dẫn chi tiết khi vào làm việc.</p>
          <p>
            - Công cụ Marketing (tìm kiếm khách hàng) chính như: Marketing
            online (đăng tin, quảng cáo Facebook, Google); sale phone, tìm kiếm
            khách hàng trực tiếp.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <b>YÊU CẦU:</b>
          <p>- Độ tuổi: 18 đến 40 tuổi.</p>
          <p>- Giới tính: Không yêu cầu.</p>
          <p>
            - Trung thực, chăm chỉ, nhiệt tình, ham học hỏi, có tinh thần cầu
            tiến.
          </p>
          <p>- Đam mê kinh doanh, yêu thích ngành Bất động sản.</p>
          <p>- Có kinh nghiệm lĩnh vực BĐS là một lợi thế.</p>
          <p>
            - Nếu chưa có kinh nghiệm sẽ được đào tạo hướng dẫn các kỹ năng.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <b>QUYỀN LỢI ĐƯỢC HƯỞNG:</b>
          <p>- Lương cơ bản: 5,500,000đ/tháng + hỗ trợ marketing</p>
          <p>
            - Thu nhập hấp dẫn: lương, doanh số, thưởng nóng từng đợt bán hàng.
          </p>
          <p>- Hưởng đầy đủ chế độ BHXH - YT - TN</p>
          <p>- Các chương trình du lịch nghỉ dưỡng, Team building hàng năm.</p>
          <p>- Được đào tạo thường xuyên.</p>
        </div>
      </div>
      <p className="border-dashed border-b-2 w-full mt-20"></p>
      <div className="flex justify-center my-10">
        <a
          className="border border-main p-1 w-[220px] rounded-3xl"
          href={form_ung_tuyen}
          download
        >
          <button className="text-white font-bold px-6 py-2 bg-main rounded-3xl hover:bg-over form-download transition-all duration-500">
            <div className="flex items-center gap-4">
              <span className="flex flex-col">
                <p className="text-start">download</p>
                <p className="text-xl">MẪU ĐƠN</p>
              </span>
              <nav className="border p-3 rounded-full bg-over span-download">
                <AiOutlineCaretDown size={20} />
              </nav>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ModalTuyenDung;
