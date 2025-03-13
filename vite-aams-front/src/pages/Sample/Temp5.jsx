import React, { useState, useEffect} from 'react'
import SeperatePage_TB from '../../temp/SeperatePage_TB'
import SampleTable3 from '../../components/table/SampleTable3'
import SampleTable4 from '../../components/table/SampleTable4'

const Temp5 = ({columns,data}) => {
    const getWindowHeight = () => window.innerHeight;      //header의 높이를 제외한 전체 화면의 높이
    const  [panelSizes, setPanelSizes] = useState([getWindowHeight() /2, getWindowHeight()/2])

    useEffect(() => {
        const handleResize = () => {
          const newHeight = getWindowHeight()-10;
          setPanelSizes([newHeight / 2, newHeight / 2]);
          console.log('높이 변경에 따른 panel 사이즈 배분',newHeight,newHeight/2)
        };
    
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    const handleSizeChange = (newSizes) => {
        setPanelSizes(newSizes);
        console.log('넘어온 패널 사이즈',newSizes)
      };
      console.log('넘길 테이블 사이즈',panelSizes)
  return (
    <SeperatePage_TB onSizeChange={handleSizeChange}>
        <SampleTable3 column={columns} data={data} size={panelSizes[0]}/>
        <SampleTable4 column={columns} data={data} size={panelSizes[1]}/>
    </SeperatePage_TB>
  )
}

export default Temp5