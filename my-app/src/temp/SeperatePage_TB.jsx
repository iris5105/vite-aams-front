import React from 'react';
import { Splitter,  Typography } from 'antd'
const { Text } = Typography;

const SeperatePage_TB = ({prop, children = [], onSizeChange}) => {
  const [ topChild, bottomChild] = children;
  // const bottomPanelRef = useRef(null);

  const handleResize = (newSizes) => {
      if (onSizeChange) {
          onSizeChange(newSizes); // Temp3에서 setSizes를 호출하도록 전달
      }
  };  

  return (
    <Splitter layout='vertical' onResize={handleResize}>
      <Splitter.Panel defaultSize={'50%'} min='100'>
          {topChild || <Text>Top</Text>}
      </Splitter.Panel>
      <Splitter.Panel
          id='BottomPanel'
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

