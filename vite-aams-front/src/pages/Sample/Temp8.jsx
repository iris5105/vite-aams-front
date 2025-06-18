import React,{useState, useEffect} from 'react'
import SampleTable1 from '../../components/table/SampleTable1'
import SampleTable2 from '../../components/table/SampleTable2';
import Basicbutton from '../../components/button/Basicbutton';

import SeperatePage_LRB from '../../temp/SeperatePage_LRB';
import SampleTable3 from '../../components/table/SampleTable3';

import SampleTable4 from '../../components/table/SampleTable2';

const Temp8 = ({props}) => {
  // const [sample1, sample2] = props;
  const [sizeArr, setSizeArr] = useState([50, 50]); // 초기 비율 50:50
  const [topLeftPanelSize, setTopLeftPanelSize] = useState(0);
  const [topRightPanelSize, settopRightPanelSize] = useState(0);
  const [bottomPanelSize, setBottomPanelSize] = useState(0);
  
  const handleSplitter = (newSizes) => {
    setSizeArr(newSizes);
  }
  // 패널 사이즈 변경 또는 윈도우 크기 변경시 호출출
  useEffect(() => {
    // 패널 사이즈 업데이트트
    const updatePanelSizes = () => {
      setTimeout(() => {  //setTimeout을 사용하여 렌더링이 완료된 후에 실행되도록 함
      const topLeftPanel = document.querySelector('.topLeftPanel');       //상부 좌측 패널 객체 선언
      const topRightPanel = document.querySelector('.topRightPanel'); //상부 우측 패널 객체 선언
      const bottomPanel = document.querySelector('.bottomPanel'); //하단 패널 객체 선언
        setTopLeftPanelSize(topLeftPanel.clientHeight);
        settopRightPanelSize(topRightPanel.clientHeight);
        setBottomPanelSize(bottomPanel.clientHeight);
      },10)
    };



    updatePanelSizes();
    window.addEventListener('resize', updatePanelSizes);

    return () => {
      window.removeEventListener('resize', updatePanelSizes);
    };
  }, [sizeArr,window.innerHeight]);
 console.log(topLeftPanelSize,topRightPanelSize, bottomPanelSize)

  return (
      <SeperatePage_LRB  onSizeChange={handleSplitter} >
        <SampleTable3 size={topLeftPanelSize} /*prop={sample2}*//>
        <SampleTable2 size={topRightPanelSize} /*prop={sample1} *//>
        <SampleTable3 size={bottomPanelSize} /*prop={sample1} *//>
      </SeperatePage_LRB>
  );
};

export default Temp8;
