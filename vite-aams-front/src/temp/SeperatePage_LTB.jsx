import React, { useRef, useContext, useEffect } from 'react';
import { Splitter, Typography } from 'antd';
import { ContentHeightContext } from '../style/ContentHeightContext';
const {Text} = Typography;

// 좌우 분할 후 우측 상하 분할 컴포넌트
const SeperatePage_LTB = ({ children = [], onSizeChange }) => {
    const [leftChild, topChild, bottomChild] = children;
    const splitterRef = useRef(null);
    const handleResize = (newSizes) => {
      onSizeChange(newSizes); // 부모 컴포넌트로 크기 변경 값 전달
  };
    useEffect(() => {
    if (splitterRef.current) {
      const height = splitterRef.current.clientHeight;
      console.log('초기 Splitter height:', height);
    }
  }, []);

    return (
    <div ref={splitterRef} style={{ height: '100%' }}>
      <Splitter>
        <Splitter.Panel className="leftPanel" min='100' style={{ overflow: 'hidden' }}>
          {leftChild || <Text>Left</Text>}
        </Splitter.Panel>
        <Splitter.Panel min='100' style={{ overflow: 'hidden' }}>
          <Splitter id='verticalSplitter' layout='vertical' onResize={handleResize} style={{ overflow: 'hidden' }}>
            <Splitter.Panel className="topPanel" defaultSize={'50%'} min='100'>
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
        </Splitter.Panel>
      </Splitter>
    </div>
    );
  };

export default SeperatePage_LTB;
