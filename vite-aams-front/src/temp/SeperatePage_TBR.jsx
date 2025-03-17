import React,{useState, useEffect} from 'react';
import { Splitter,  Typography } from 'antd'
import ColumnGroup from 'antd/es/table/ColumnGroup';

const { Text } = Typography;

const SeperatePage_TBR = ({ children = [], onSizeChange }) => {
  const [topChild, bottomChild, rightChild] = children;
  const handleResize = (newSizes) => {
      onSizeChange(newSizes); // 부모 컴포넌트로 크기 변경 값 전달
  };   

  return (
  <Splitter>
    <Splitter.Panel min='100' style={{ overflow: 'hidden' }}>
        <Splitter layout='vertical' onResize={handleResize} style={{ overflow: 'hidden' }} >
            <Splitter.Panel
                className="topPanel"
                defaultSize={'50%'}
                min='100'
                >
                {topChild || <Text>Top</Text>}
            </Splitter.Panel>
            <Splitter.Panel
                className='bottomPanel'
                defaultSize={'50%'}
                // ref={bottomPanelRef} // Reference the BottomPanel
                 style={{ overflow: 'hidden' }}
                min='100'
            >
                {bottomChild || <Text>Bottom</Text>}
            </Splitter.Panel>
        </Splitter>
    </Splitter.Panel>

    <Splitter.Panel min='100'>
        {rightChild || <Text>Right</Text>}
    </Splitter.Panel>
  </Splitter>
  );
};

export default SeperatePage_TBR;
