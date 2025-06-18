import React,{useState, useEffect} from 'react'
import { Layout, Input } from 'antd'
import SampleTable1 from '../../components/table/SampleTable1'
import SampleTable2 from '../../components/table/SampleTable2';
import Basicbutton from '../../components/button/Basicbutton';

import SeperatePage_TLTB from '../../temp/SeperatePage_TLTB';
import SampleTable3 from '../../components/table/SampleTable3';

import SampleTable4 from '../../components/table/SampleTable2';

const {TextArea} = Input;

const Temp7 = ({props}) => {
  // const [sample1, sample2] = props;
  const [sizeArr, setSizeArr] = useState([50, 50]); // 초기 비율 50:50
  const [topPanelSize, setTopPanelSize] = useState(0);
  const [bottomLeftPanelSize, setbottomLeftPanelSize] = useState(0);
  const [rightTopPanelSize, setRightTopPanelSize] = useState(0);
  const [rightBottomPanelSize, setRightBottomPanelSize] = useState(0);
  
  const handleSplitter = (newSizes) => {
    setSizeArr(newSizes);
  }
  // 패널 사이즈 변경 또는 윈도우 크기 변경시 호출출
  useEffect(() => {
    // 패널 사이즈 업데이트트
    const updatePanelSizes = () => {
      setTimeout(() => {  //setTimeout을 사용하여 렌더링이 완료된 후에 실행되도록 함
      const topPanel = document.querySelector('.topPanel');       //상부 패널 객체 선언
      const bottomLeftPanel = document.querySelector('.bottomLeftPanel'); //하부 패널 객체 선언
      const rightTopPanel = document.querySelector('.rightTopPanel'); //우측 상단 패널 객체 선언
      const rightBottomPanel = document.querySelector('.rightBottomPanel'); //우측 하단
        setTopPanelSize(topPanel.clientHeight);
        setbottomLeftPanelSize(bottomLeftPanel.clientHeight);
        setRightTopPanelSize(rightTopPanel.clientHeight);
        setRightBottomPanelSize(rightBottomPanel.clientHeight);
      },10)
    };

    updatePanelSizes();
    window.addEventListener('resize', updatePanelSizes);

    return () => {
      window.removeEventListener('resize', updatePanelSizes);
    };
  }, [sizeArr,window.innerHeight]);
 console.log(topPanelSize,bottomLeftPanelSize, rightTopPanelSize, rightBottomPanelSize)

  return (
      <SeperatePage_TLTB  onSizeChange={handleSplitter} >
        <SampleTable3 size={topPanelSize} /*prop={sample2}*//>
         <SampleTable2 size={bottomLeftPanelSize} /*prop={sample1} *//>
        <TextArea autoSize={{ minRows: 5, maxRows: 5 }}/>
        <SampleTable3 size={rightBottomPanelSize} /*prop={sample1} *//>
      </SeperatePage_TLTB>
  );
};

export default Temp7;
