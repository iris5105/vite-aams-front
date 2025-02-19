import React,{useState, useEffect} from 'react';
import { Splitter,  Typography } from 'antd'
import ColumnGroup from 'antd/es/table/ColumnGroup';

const { Text } = Typography;

const SeperatePage_TBR = ({ prop, children = [], onSizeChange, handleResize }) => {
  const [topChild, bottomChild, rightChild] = children;
  const [panelSize, setPanelSize] = useState(['50%','50%']);

  useEffect(() => {
    // 윈도우 크기가 변경될 때마다 실행되는 함수
    const onResize = () => {
      handleResize();
    };

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', onResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [handleResize]);

  const handlePanelResize = (newSizes) => {
    console.log('newSizes:',newSizes);
    setPanelSize(newSizes);
      if (onSizeChange) {
          onSizeChange(newSizes); // bottom child에게 height 값을 전달용
      }
  };    

  return (
  <Splitter>
    <Splitter.Panel min='100' style={{ height: prop, overflow: 'hidden' }}>
        <Splitter layout='vertical' onResize={handlePanelResize} style={{ overflow: 'hidden' }} >
            <Splitter.Panel
                defaultSize={'50%'}
                min='100'
                >
                {topChild || <Text>Top</Text>}
            </Splitter.Panel>
            <Splitter.Panel
                id='BottomPanel'
                defaultSize={'50%'}
                // ref={bottomPanelRef} // Reference the BottomPanel
                 style={{ overflow: 'hidden' }}
                min='100'
            >
                {bottomChild || <Text>Bottom</Text>}
            </Splitter.Panel>
        </Splitter>
    </Splitter.Panel>

    <Splitter.Panel min='100' style={{ height: prop }}>
        {rightChild || <Text>Right</Text>}
    </Splitter.Panel>
  </Splitter>
  );
};

export default SeperatePage_TBR;
