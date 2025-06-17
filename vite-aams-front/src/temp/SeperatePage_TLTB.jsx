import React from 'react'
import { Splitter,  Typography } from 'antd'

const {Text} = Typography;
const SeperatePage_TLTB = ({ prop, children = [], onSizeChange }) => {
  const [topChild, leftChild, rightTopChild,rightBottomChild] = children;

  const handleResize1 = (newSizes) => {
    if (onSizeChange) {
        onSizeChange(newSizes); // Temp3에서 setSizes를 호출하도록 전달
    }
  };

  return (

    <Splitter layout='vertical' onResize={handleResize1}>
        <Splitter.Panel 
                        className="topPanel"
                        defaultSize={'50%'} min='100'>
            {topChild || <Text>Top</Text>}
        </Splitter.Panel>
        <Splitter.Panel>
          <Splitter >

            <Splitter.Panel
                className="bottomLeftPanel"
                defaultSize={'50%'}
                style={{ overflow: 'hidden' }}
                min='100'>
                {leftChild || <Text>L_Bottom</Text>}
            </Splitter.Panel>
            <Splitter.Panel min = '200'>
            <Splitter className = 'bottomSplitter' layout = 'vertical'>
                <Splitter.Panel
                                className="rightTopPanel"
                                 size='100' style={{ overflow: 'hidden' }}>
                    {rightTopChild || <Text>R_Top</Text>}
                </Splitter.Panel>
                <Splitter.Panel resizable =  {false}
                                className="rightBottomPanel"
                                size='50%' style={{ overflow: 'hidden' }}>
                    {rightBottomChild || <Text>R_Bottom</Text>}
                </Splitter.Panel>
            </Splitter>
            </Splitter.Panel>
          </Splitter>
        </Splitter.Panel>
    </Splitter>
  )
}
export  default SeperatePage_TLTB;