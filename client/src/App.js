import './App.css';
import { Route, Routes } from "react-router-dom"
import path from './utils/path';
import { CongCong, DatDuAn, DatNen, LienHe, TinTuc, TrangChu, TuyenDung } from './pages/public';
import GioiThieu from './pages/public/GioiThieu';
import { ButtonGoTop, ChiTietDat } from './components';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<CongCong />}>
          <Route path={path.TRANGCHU} element={<TrangChu />} />
          <Route path={path.GIOITHIEU} element={<GioiThieu />} />
          <Route path={path.DATNEN} element={<DatNen />} />
          <Route path={path.DATDUAN} element={<DatDuAn />} />
          <Route path={path.TINTUC} element={<TinTuc />} />
          <Route path={path.TUYENDUNG} element={<TuyenDung />} />
          <Route path={path.LIENHE} element={<LienHe />} />
          <Route path={path.CHI_TIET_DAT_PID_TEN_DAT} element={<ChiTietDat />} />
        </Route>
      </Routes>
      <ButtonGoTop />
    </div>
  );
}

export default App;
