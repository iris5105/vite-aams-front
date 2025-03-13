import React, { useRef, useContext, useEffect } from 'react';
import { Splitter, Typography } from 'antd';
import { ContentHeightContext } from '../style/ContentHeightContext';
const {Text} = Typography;

// 좌우 분할 후 우측 상하 분할 컴포넌트
const SeperatePage_LTB = ({ prop, children = [], onSizeChange, handleResize }) => {
    const contentHeight = useContext(ContentHeightContext);
    const [leftChild, topChild, bottomChild] = children;
    const bottomPanelRef = useRef(null);
  
    const handlePanelResize = (newSizes) => {
 
        onSizeChange(newSizes); // Temp3에서 setSizes를 호출하도록 전달
         console.log('LTB 각 사이즈', newSizes)

    };

  
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
