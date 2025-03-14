import React, { useState, useEffect} from 'react'
import SeperatePage_TB from '../../temp/SeperatePage_TB'
import SampleTable3 from '../../components/table/SampleTable3'
import SampleTable4 from '../../components/table/SampleTable4'

const Temp5 = ({columns,data}) => {
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
  
  return (
    <SeperatePage_TB onSizeChange={handleSplitter}>
        <SampleTable3 column={columns} data={data} size={topPanelSize}/>
        <SampleTable4 column={columns} data={data} size={bottomPanelSize}/>
    </SeperatePage_TB>
  )
}

export default Temp5