import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Typography, Splitter } from 'antd';
import dayjs from 'dayjs';
import './App.css';
import Main from './components/Main'
import Login from './components/Login';
import Menu from './pages/test/Menu';
import Menu1 from './pages/test/Menu1';
import Menu2 from './pages/test/Menu2';
import Menu3 from './pages/test/Menu3';
import Temp1 from './pages/Sample/Temp1';
import Temp2 from './pages/Sample/Temp2';
import Temp3 from './pages/Sample/Temp3';
import Temp4 from './pages/Sample/Temp4';
import Temp5 from './pages/Sample/Temp5';
import MainPage from './pages/test/MainPage';



const { Text } = Typography;


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 세션에서 로그인 상태 확인
  useEffect(() => {
    const sessionKey = sessionStorage.getItem('isLoggedIn');
    if (sessionKey === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const columns4 = [{
    title : 'No.',
    dataIndex : 'no',
    key : 'no',
    width: 100,
  },{
    title : '현금종류',
    dataIndex : 'cash_cd',
    key : 'cash_cd',
  },{
     title : '관리번호',
     dataIndex : 'fnd_cd',
     key : 'fnd_cd',
     width : 90,
  },{
    title : '계좌명',
    dataIndex : 'xx_fund_cd',
    key : 'xx_fund_cd',
  },{
    title : '발행일',
    dataIndex : 'balh_ymd',
    key : 'balh_ymd',
    width: 100,
  },{
    title : '종목명',
    dataIndex : 'hj_nm',
    key : 'hj_nm',
    width: 100,
  },{
    title : '매입일',
    dataIndex : 'maip_ymd',
    key : 'maip_ymd',
    width: 100,
  },{
    title : 'KSD종목',
    dataIndex : 'ksd_jm_cd',
    key : 'ksd_jm_cd',
    width: 100,
  },{
    title : '액면',
    dataIndex : 'aekm',
    key : 'aekm',
    width: 100,
  },{
    title : '이율',
    dataIndex : 'pyom_iyul_per',
    key : 'pyom_iyul_per',
    width: 100,
  },{
    title : '신용등급',
    dataIndex : 'pg_cd',
    key : 'pg_cd',
    width: 100,
  },{
    title : '상환일',
    dataIndex : 'sanghw_ymd',
    key : 'sanghw_ymd',
    width: 100,
  },{
    title : '매매액',
    dataIndex : 'tr_aek',
    key : 'tr_aek',
    width: 100,
  },{
    title : '상환액',
    dataIndex : 'sanghw_aek',
    key : 'sanghw_aek',
    width: 100,
  },{
    title : <>
            이자<br />년수
            </>,
    dataIndex : 'ija_yy_su',
    key : 'ija_yy_su',
    width: 100,
  },{
    title : <>
            년<br />이자횟수
            </>,
    dataIndex : 'ija_yy_hoicha',
    key : 'ija_yy_hoicha',
    width: 100,
  },{
    title : <>
            총<br />이자회사
            </>,
    dataIndex : 'tot_ija_gugan',
    key : 'tot_ija_gugan',
    width: 100,
  },{
    title : '종목코드',
    dataIndex : 'jm_cd',
    key : 'jm_cd',
    width: 100,
  }
];
const data4 = Array.from({
                          length: 100,
                          }).map((_, index) => ({
                                no: index,
                                cash_cd: `현금성 자산 ${index}`,
                                fnd_cd: 1000+index,
                                xx_fund_cd: `테스트 계좌${index}`,
                                balh_ymd: dayjs("2024-01-01").add(index, "day").format("YYYY/MM/DD"),
                                hj_nm : `종목명${index}`,
                                maip_ymd : dayjs("2025-01-01").add(index, "day").format("YYYY/MM/DD"),
                                ksd_jm_cd : `KSD종목${index}`,
                                aekm : 1000000+index,
                                pyom_iyul_per : 0.5+index,
                                pg_cd : index%2 === 0 ? 'A' : 'B',
                                sanghw_ymd : dayjs("2026-01-01").add(index, "day").format("YYYY/MM/DD"),
                                tr_aek : 1000000+index,
                                sanghw_aek : 1000000+index,
                                ija_yy_su : index%3,
                                ija_yy_hoicha : 2,
                                tot_ija_gugan : index%3,
                                jm_cd : `종목코드${index}`
                          }));

  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 경로 */}
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/login" element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />} />
         {/* 로그인 후 화면 */}
         <Route
          path="/"
          element={isLoggedIn ? <Main /> : <Navigate to="/login" />}
        >
         {/* <Route path="/" element={ <Main />}> */}
          {/* 추가적인 경로를 정의 */}
          <Route path='main' element = {<MainPage/>}/>
          <Route path="menu" element={<Menu />} />
          <Route path="menu1" element={<Menu1 />} />
          <Route path="menu2" element={<Menu2 />} />
          <Route path="menu3" element={<Menu3 />} />
          <Route path="temp1" element={<Temp1 />} />
          <Route path="temp2" element={<Temp2 />} />
          <Route path="temp3" element={<Temp3 />} />
          <Route path="temp4" element={<Temp4 />} />
          <Route path="temp5" element={<Temp5 columns={columns4} data ={data4} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;