import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import SeperatePage_LTB from '../../temp/SeperatePage_LTB';
import Basicbutton from '../../components/button/Basicbutton';
import SampleTable1 from '../../components/table/SampleTable1';
import SampleTable2 from '../../components/table/SampleTable2';

const Temp3 = () => {
  const [wdHeight, setWdHeight] = useState(window.innerHeight);
  const [boardHeight, setBoardHeight] = useState(wdHeight);
  const [sizes, setSizes] = useState([boardHeight * 0.5, boardHeight * 0.5]);

  const handleResize = () => {
    setWdHeight(window.innerHeight);
    console.log('wdHeight: ', window.innerHeight);
    // Splitter의 각 panel의 사이즈를 측정하여 sizes 업데이트
    const newSizes = [window.innerHeight * 0.5, window.innerHeight * 0.5];
    setSizes(newSizes);
  };

  useEffect(() => {
    // 윈도우 크기가 변경될 때마다 실행되는 함수
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ window.innerHeight]);

  useEffect(() => {
    setBoardHeight(wdHeight); // wdHeight가 변경될 때마다 tableHeight 업데이트
  }, [wdHeight]);

  console.log('스플릿 패널 sizes', sizes);

  return (
    <Layout>
      <SeperatePage_LTB prop={boardHeight} onSizeChange={setSizes} handleResize={handleResize}>
        <SampleTable1 />
        <Basicbutton size={sizes[0]-60} />
        <SampleTable2 prop={boardHeight} size={sizes[1]-60} />
      </SeperatePage_LTB>
    </Layout>
  );
};

export default Temp3;