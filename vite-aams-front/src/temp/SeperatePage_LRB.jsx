import React from 'react'
import { Splitter,  Typography } from 'antd'

const {Text} = Typography;
const SeperatePage_LRB = ({ prop, children = [], onSizeChange }) => {
  const [topLeftChild, topRightChild, bottomChild] = children;

  const handleResize1 = (newSizes) => {
    if (onSizeChange) {
        onSizeChange(newSizes); // Temp3에서 setSizes를 호출하도록 전달
    }
  };

  return (

    <Splitter layout='vertical' onResize={handleResize1}>
        <Splitter.Panel>
          <Splitter >
            <Splitter.Panel 
                           className="topLeftPanel"
                           defaultSize={'50%'} min='100'>
                        {topLeftChild || <Text>topLeft</Text>}
            </Splitter.Panel>
            <Splitter.Panel
                            className="topRightPanel"
                            defaultSize={'50%'}
                            style={{ overflow: 'hidden' }}
                            min='100'>
                            {topRightChild || <Text>topRight</Text>}
            </Splitter.Panel>
          </Splitter>
        </Splitter.Panel>
        <Splitter.Panel
                        className="bottomPanel"
                          style={{ overflow: 'hidden'}}>
            {bottomChild || <Text>Bottom</Text>}
        </Splitter.Panel>
    </Splitter>
  )
}
export  default SeperatePage_LRB;