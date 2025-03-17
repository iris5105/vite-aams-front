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
  const [temp3Props, setTemp3Props] = useState([]);

  // 세션에서 로그인 상태 확인
  useEffect(() => {
    const sessionKey = sessionStorage.getItem('isLoggedIn');
    if (sessionKey === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

// SampleTable1.jsx 데이터 및 컬럼
const data1 = Array.from({
  length: 100,
}).map((_, i) => ({
  key: i+1,
  name: `김태현 ${i+1}`,
  age: 32+i,
  address: `영등포구 여의대방로65길. ${200-i}`,
}));

const columns1 = [
  {
    title: 'Full Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    filters: data1.map(item => ({
      text: item.name,
      value: item.name,
    })), // 데이터에서 고유한 이름들을 필터 옵션으로 설정
    onFilter: (value, record) => record.name.includes(value), // 필터링 로직
    filterSearch: true, // 검색 가능하도록 설정
  },
  {
    title: 'Age',
    width: 80,
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8',
  },
  {
    title: 'Column 9',
    dataIndex: 'address',
    key: '9',
  },
  {
    title: 'Column 10',
    dataIndex: 'address',
    key: '10',
  },
  {
    title: 'Column 11',
    dataIndex: 'address',
    key: '11',
  },
  {
    title: 'Column 12',
    dataIndex: 'address',
    key: '12',
  },
  {
    title: 'Column 13',
    dataIndex: 'address',
    key: '13',
  },
  {
    title: 'Column 14',
    dataIndex: 'address',
    key: '14',
  },
  {
    title: 'Column 15',
    dataIndex: 'address',
    key: '15',
  },
  {
    title: 'Column 16',
    dataIndex: 'address',
    key: '16',
  },
  {
    title: 'Column 17',
    dataIndex: 'address',
    key: '17',
  },
  {
    title: 'Column 18',
    dataIndex: 'address',
    key: '18',
  },
  {
    title: 'Column 19',
    dataIndex: 'address',
    key: '19',
  },
  {
    title: 'Column 20',
    dataIndex: 'address',
    key: '20',
  },
  {
    title: 'Action',
    key: 'operation',
    width: 100,
    render: () => <a>action</a>,
  },
];

// SampleTable2.jsx 데이터 및 컬럼
const columns2 = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 150,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Street',
    dataIndex: 'street',
    key: 'street',
    width: 150,
  },
  {
    title: 'Building',
    dataIndex: 'building',
    key: 'building',
    width: 100,
  },
  {
    title: 'Door No.',
    dataIndex: 'number',
    key: 'number',
    width: 100,
  },
  {
    title: 'Company Address',
    dataIndex: 'companyAddress',
    key: 'companyAddress',
    width: 200,
  },
  {
    title: 'Company Name',
    dataIndex: 'companyName',
    key: 'companyName',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
];

const data2 = Array.from({
  length: 100,
}).map((_, i) => ({
  key: i + 1,
  name: 'John Brown',
  age: i + 1,
  street: 'Lake Park',
  building: 'C',
  number: 2035,
  companyAddress: 'Lake Street 42',
  companyName: 'SoftLake Co',
  gender: 'M',
}));

// SampleTable3,4.jsx 데이터 및 컬럼
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
                                key: index+1,
                                no : index+1,
                                cash_cd: `현금성 자산 ${index+1}`,
                                fnd_cd: 1000+index+1,
                                xx_fund_cd: `테스트 계좌${index+1}`,
                                balh_ymd: dayjs("2024-01-01").add(index+1, "day").format("YYYY/MM/DD"),
                                hj_nm : `종목명${index+1}`,
                                maip_ymd : dayjs("2025-01-01").add(index+1, "day").format("YYYY/MM/DD"),
                                ksd_jm_cd : `KSD종목${index+1}`,
                                aekm : 1000000+index+1,
                                pyom_iyul_per : 0.5+index+1,
                                pg_cd : index+1%2 === 0 ? 'A' : 'B',
                                sanghw_ymd : dayjs("2026-01-01").add(index+1, "day").format("YYYY/MM/DD"),
                                tr_aek : 1000000+index+1,
                                sanghw_aek : 1000000+index+1,
                                ija_yy_su : index+1%3,
                                ija_yy_hoicha : 2,
                                tot_ija_gugan : index+1%3,
                                jm_cd : `종목코드${index+1}`
                          }));
  useEffect(() => {
    setTemp3Props([[columns1, data1], [columns2, data2]]);
  }, []);
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
          <Route path="temp3" element={<Temp3 props ={temp3Props}/>} />
          <Route path="temp4" element={<Temp4  props ={temp3Props}/>} />
          <Route path="temp5" element={<Temp5 columns={columns4} data ={data4} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;