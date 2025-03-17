import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import SeperatePage_LTB from '../../temp/SeperatePage_LTB';
import Basicbutton from '../../components/button/Basicbutton';
import SampleTable1 from '../../components/table/SampleTable1';
import SampleTable2 from '../../components/table/SampleTable2';

const Temp3 = () => {
  const [sizeArr, setSizeArr] = useState([50, 50]); // 초기 비율 50:50
  const [leftPanelSize, setLeftPanelSize] = useState(0);
  const [topPanelSize, setTopPanelSize] = useState(0);
  const [bottomPanelSize, setBottomPanelSize] = useState(0);
  const handleSplitter = (newSizes) => {
    setSizeArr(newSizes);
  }
  // 패널 사이즈 변경 또는 윈도우 크기 변경시 호출출
  useEffect(() => {
    // 패널 사이즈 업데이트트
    const updatePanelSizes = () => {
      setTimeout(() => {  //setTimeout을 사용하여 렌더링이 완료된 후에 실행되도록 함
      const leftPanel = document.querySelector('.leftPanel');       //상부 패널 객체 선언
      const topPanel = document.querySelector('.topPanel');       //상부 패널 객체 선언
      const bottomPanel = document.querySelector('.bottomPanel'); //하부 패널 객체 선언
        setLeftPanelSize(leftPanel.clientHeight);
        setTopPanelSize(topPanel.clientHeight);
        setBottomPanelSize(bottomPanel.clientHeight);  
      },80)
    };

    updatePanelSizes();
    window.addEventListener('resize', updatePanelSizes);

    return () => {
      window.removeEventListener('resize', updatePanelSizes);
    };
  }, [sizeArr,window.innerHeight]);
  return (
      <SeperatePage_LTB onSizeChange={handleSplitter}>
        <SampleTable1 size={leftPanelSize}/>
        <Basicbutton size={topPanelSize} />
        <SampleTable2 size={bottomPanelSize} />
      </SeperatePage_LTB>
  );
};

export default Temp3;