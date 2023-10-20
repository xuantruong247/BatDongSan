import './App.css';
import { Route, Routes } from "react-router-dom"
import path from './utils/path';
import { CongCong, DatDuAn, DatNen, LienHe, TinTuc, TrangChu, TuyenDung } from './pages/public';
import GioiThieu from './pages/public/GioiThieu';
import { ButtonGoTop, ChiTietDat, ChiTietTinTuc, NotFound404, Loading } from './components';
import { Login, QuanLyAdmin, QuanLyDatDuAn, QuanLyDatNen, QuanLyTinTuc, TaoDat, TaoTinTuc, } from './pages/admin';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css"
import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const userData = JSON.parse(localStorage.getItem("userData"))
  const [isLoadingData, setIsLoadingData] = useState(true); // Trạng thái tải dữ liệu

  // Giả lập thời gian tải dữ liệu
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingData(false); // Sau 3 giây, dừng hiệu ứng tải
    }, 1500);
  }, []);

  return (
    <div >
      {isLoadingData ? <Loading /> : null}
      <Routes>
        <Route path={path.NOT_FOUND_404} element={<NotFound404 />} />
        {/* Trang public */}
        <Route path={path.PUBLIC} element={<CongCong />}>
          <Route path={path.TRANGCHU} element={<TrangChu />} />
          <Route path={path.GIOITHIEU} element={<GioiThieu />} />
          <Route path={path.DATNEN} element={<DatNen />} />
          <Route path={path.DATDUAN} element={<DatDuAn />} />
          <Route path={path.TINTUC} element={<TinTuc />} />
          <Route path={path.TUYENDUNG} element={<TuyenDung />} />
          <Route path={path.LIENHE} element={<LienHe />} />
          <Route path={path.CHI_TIET_DAT_PID_TEN_DAT} element={<ChiTietDat />} />
          <Route path={path.CHI_TIET_TIN_TUC_BID_TEN_TIN_TUC} element={<ChiTietTinTuc />} />
        </Route>

        {/* Trang login */}
        <Route path={path.LOGIN} element={userData ? <QuanLyAdmin /> : <Login />} />

        {/* Trang admin */}
        <Route path={path.ADMIN} element={userData ? <QuanLyAdmin /> : <NotFound404 />}>
          <Route path={path.QUAN_LY_DAT_NEN} element={<QuanLyDatNen />} />
          <Route path={path.QUAN_LU_DAT_DU_AN} element={<QuanLyDatDuAn />} />
          <Route path={path.TAO_DAT} element={<TaoDat />} />
          <Route path={path.QUAN_LY_TIN_TUC} element={<QuanLyTinTuc />} />
          <Route path={path.TAO_TIN_TUC} element={<TaoTinTuc />} />
        </Route>
      </Routes>
      <ButtonGoTop />
    </div>
  );
}

export default App;
