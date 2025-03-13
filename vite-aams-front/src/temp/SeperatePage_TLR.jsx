import React from 'react'
import { Splitter,  Typography } from 'antd'

const {Text} = Typography;
const SeperatePage_TLR = ({ prop, children = [], onSizeChange }) => {
  const [topChild, leftChild, rightChild] = children;

  const handleResize = (newSizes) => {
    if (onSizeChange) {
        onSizeChange(newSizes); // Temp3에서 setSizes를 호출하도록 전달
    }
}; 

  return (

    <Splitter layout='vertical' >
        <Splitter.Panel defaultSize={'50%'} min='100'>
            {topChild || <Text>Top</Text>}
        </Splitter.Panel>
        <Splitter.Panel>
          <Splitter onResize={handleResize}>

            <Splitter.Panel
                defaultSize={'50%'}
                style={{ overflow: 'hidden' }}
                min='100'>
                {leftChild || <Text>Bottom</Text>}
            </Splitter.Panel>

            <Splitter.Panel min='100' style={{ overflow: 'hidden' }}>
                {rightChild || <Text>Right</Text>}
            </Splitter.Panel>
          
          </Splitter>
        </Splitter.Panel>
    </Splitter>

  )
}
export  default SeperatePage_TLR