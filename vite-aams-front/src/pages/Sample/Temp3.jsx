import React, { useState, useEffect, useRef } from 'react';
import { Layout, Flex, Breadcrumb } from 'antd';
import SeperatePage_LTB from '../../temp/SeperatePage_LTB';
import Basicbutton from '../../components/button/Basicbutton';
import SampleTable1 from '../../components/table/SampleTable1';
import SampleTable2 from '../../components/table/SampleTable2';
import Filter_1 from '../../components/filters/Filter_1';
import BasicDatePicker from '../../components/datePicker/BasicDatePicker';
import SampleTable3 from '../../components/table/SampleTable3';
import BreadCumb_1 from '../../components/Bread/BreadCumb_1';


const Temp3 = () => {
  // const [sample1, sample2] = props;
  const [sizeArr, setSizeArr] = useState([50, 50]); // 초기 비율 50:50
  const [leftPanelSize, setLeftPanelSize] = useState(0);
  const [topPanelSize, setTopPanelSize] = useState(0);
  const [bottomPanelSize, setBottomPanelSize] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const contentRef = useRef(null);
  const auth = [1,1,1,1,1,1,1,1]  //버튼 권한
  const menuStep = ['사무관리','자문일일', '일일작업','1040 주식종가 등록 w_sjt0tg '] //Breadcrumb 메뉴 경로
  const handleSplitter = (newSizes) => {
    setSizeArr(newSizes);
  }
  // 패널 사이즈 변경 또는 윈도우 크기 변경시 호출출
  useEffect(() => {
    // 패널 사이즈 업데이트트
    const updatePanelSizes = () => {
      setTimeout(() => {  //setTimeout을 사용하여 렌더링이 완료된 후에 실행되도록 함
      const leftPanel = document.querySelector('.leftPanel').clientHeight;       //상부 패널 객체 선언
      const topPanel = document.querySelector('.topPanel').clientHeight;       //상부 패널 객체 선언
      const bottomPanel = document.querySelector('.bottomPanel').clientHeight; //하부 패널 객체 선언
      const topContent = document.querySelector('.topContent').clientHeight; //상단 컨텐츠 높이
        setLeftPanelSize(leftPanel - topContent);
        setTopPanelSize(topPanel);
        setBottomPanelSize(bottomPanel - topContent);
      },80)
    };

    updatePanelSizes();
    window.addEventListener('resize', updatePanelSizes);

    return () => {
      window.removeEventListener('resize', updatePanelSizes);
    };
  }, [sizeArr,window.innerHeight]);
  
  return (
    <>
      <div className='topContent'>
      <Flex direction="row" justify="space-between" align="center" style={{  borderBottom: '1px solid'}}>
      <Basicbutton/>
      <BreadCumb_1 menuStep={menuStep}
      >
      </BreadCumb_1>
      </Flex>
      <Flex direction="row" justify="space-between" align="center" style={{ borderBottom: '1px solid'}}>
        <span style={{margin : '10px'}}>영업일자 : </span>
        <BasicDatePicker date ={new Date()}/>
        <span style={{margin : '10px'}}>작업회사 : </span>
        <Filter_1 />
      </Flex>
      </div>
      <SeperatePage_LTB onSizeChange={handleSplitter}>
        <SampleTable2 size={leftPanelSize} /* prop={sample2}*//>
        <SampleTable1 size={topPanelSize} />
        <SampleTable3 size={bottomPanelSize} /*prop={sample1}*//>
      </SeperatePage_LTB>
    </>
  );
};

export default Temp3;