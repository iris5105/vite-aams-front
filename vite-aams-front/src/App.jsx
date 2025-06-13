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
import Temp6 from './pages/Sample/Temp6';
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

  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 경로 */}
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/login" element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />} />
         {/* 로그인 후 화면 */}
         <Route
          path="/"
          // element={isLoggedIn ? <Main /> : <Navigate to="/login" />}
          element ={<Main />}
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
          <Route path="temp5" element={<Temp5 />} />
          <Route path="temp6" element={<Temp6 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;