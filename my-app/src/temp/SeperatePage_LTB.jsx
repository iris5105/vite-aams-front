import React, { useRef, useContext, useEffect } from 'react';
import { Splitter, Typography } from 'antd';
import { ContentHeightContext } from '../style/ContentHeightContext';
const {Text} = Typography;

// 좌우 분할 후 우측 상하 분할 컴포넌트
const SeperatePage_LTB = ({ prop, children = [], onSizeChange, handleResize }) => {
    const contentHeight = useContext(ContentHeightContext);
    const [leftChild, topChild, bottomChild] = children;
    const bottomPanelRef = useRef(null);
  
    // useEffect(() => {
    //   // 윈도우 크기가 변경될 때마다 실행되는 함수
    //   const onResize = () => {
    //     handleResize();
    //     const newSizes = [window.innerHeight * 0.5, window.innerHeight * 0.5];
    //     handlePanelResize(newSizes);
    //   };
  
    //   // 리사이즈 이벤트 리스너 추가
    //   window.addEventListener('resize', onResize);
  
    //   // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    //   return () => {
    //     window.removeEventListener('resize', onResize);
    //   };
    // }, [handleResize]);
  
    const handlePanelResize = (newSizes) => {
 
        onSizeChange(newSizes); // Temp3에서 setSizes를 호출하도록 전달
        console.log('LTB 각 사이즈', newSizes)

    };
  
    console.log('contentHeight', contentHeight);
  
    return (
      <Splitter>
        <Splitter.Panel min='100' style={{ height: prop }}>
          {leftChild || <Text>Left</Text>}
        </Splitter.Panel>
        <Splitter.Panel min='100' style={{ height: prop, overflow: 'hidden' }}>
          <Splitter id='verticalSplitter' layout='vertical' onResize={handlePanelResize} style={{ overflow: 'hidden' }}>
            <Splitter.Panel defaultSize={'50%'} min='100'>
              {topChild || <Text>Top</Text>}
            </Splitter.Panel>
            <Splitter.Panel
              id='BottomPanel'
              defaultSize={'50%'}
              ref={bottomPanelRef} // Reference the BottomPanel
              style={{ overflow: 'hidden' }}
              min='100'
            >
              {bottomChild || <Text>Bottom</Text>}
            </Splitter.Panel>
          </Splitter>
        </Splitter.Panel>
      </Splitter>
    );
  };

export default SeperatePage_LTB;
