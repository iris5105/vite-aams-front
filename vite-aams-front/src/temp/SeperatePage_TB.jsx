import React,{useState} from 'react';
import { Splitter,  Typography } from 'antd'
const { Text } = Typography;

const SeperatePage_TB = ({prop, children = [], onSizeChange}) => {
  const [ topChild, bottomChild] = children;
  const handleResize = (newSizes) => {
      onSizeChange(newSizes); // 부모 컴포넌트로 크기 변경 값 전달
  };


  return (
    <Splitter layout='vertical' onResize={handleResize}>
      <Splitter.Panel className="topPanel" defaultSize={'50%'} min='100' style={{ overflow: 'hidden' }} >
          {topChild || <Text>Top</Text>}
      </Splitter.Panel>
      <Splitter.Panel
          className="bottomPanel"
          defaultSize={'50%'}
          style={{ overflow: 'hidden' }}
          min='100'
      >
          {bottomChild || <Text>Bottom</Text>}
      </Splitter.Panel>
    </Splitter>
  );
};

export default SeperatePage_TB;

