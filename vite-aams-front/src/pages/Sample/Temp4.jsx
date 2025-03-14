import React,{useState, useEffect} from 'react'
import { Layout } from 'antd'
import SampleTable1 from '../../components/table/SampleTable1'
import SampleTable2 from '../../components/table/SampleTable2';
import Basicbutton from '../../components/button/Basicbutton';

import SeperatePage_TBR from '../../temp/SeperatePage_TBR';

const Temp4 = () => {
  const [sizeArr, setSizeArr] = useState([50, 50]); // 초기 비율 50:50
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
      const topPanel = document.querySelector('.topPanel');       //상부 패널 객체 선언
      const bottomPanel = document.querySelector('.bottomPanel'); //하부 패널 객체 선언
        setTopPanelSize(topPanel.clientHeight);
        setBottomPanelSize(bottomPanel.clientHeight);  
      },10)
    };

    updatePanelSizes();
    window.addEventListener('resize', updatePanelSizes);

    return () => {
      window.removeEventListener('resize', updatePanelSizes);
    };
  }, [sizeArr,window.innerHeight]);
 console.log(topPanelSize,bottomPanelSize)
  return (
      <SeperatePage_TBR  onSizeChange={handleSplitter} >
        <SampleTable1 size={topPanelSize}/>
        <SampleTable2 size={bottomPanelSize}/>
        <Basicbutton />
      </SeperatePage_TBR>

  );
};

export default Temp4;
