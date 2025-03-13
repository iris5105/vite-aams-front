import React from 'react'
import { Splitter,  Typography } from 'antd'

const { Text } = Typography;



const LR = () => {
    // const [leftChild, rightChild] = children;
    // return (
    //     <Splitter>
    //         <Splitter.Panel>
    //             {leftChild || <Text>Left</Text>}
    //         </Splitter.Panel>
    //         <Splitter.Panel>
    //         {rightChild || <Text>Left</Text>}
    //         </Splitter.Panel>
    //     </Splitter>
    // )
    return (
        <Splitter>
            <Splitter.Panel>
                <Text>Left</Text>
            </Splitter.Panel>
            <Splitter.Panel>
                <Text>Right</Text>
            </Splitter.Panel>
        </Splitter>
    )
}


const TB = () => {
    return (
        <Splitter layout="vertical">
            <Splitter.Panel>
                <Text>Top</Text>
            </Splitter.Panel>
            <Splitter.Panel>
                <Text>Bottom</Text>
            </Splitter.Panel>
        </Splitter>
    )
  }
  const LTB = ({ prop, children = [], onSizeChange }) => {
    const [leftChild, topChild, bottomChild] = children;
    // const bottomPanelRef = useRef(null);

    const handleResize = (newSizes) => {
        if (onSizeChange) {
            onSizeChange(newSizes); // Temp3에서 setSizes를 호출하도록 전달
        }
    };    
    return (
        <Splitter>
            <Splitter.Panel min='100' style={{ height: prop }}>
                {leftChild || <Text>Left</Text>}
            </Splitter.Panel>
            <Splitter.Panel min='100'>
                <Splitter layout='vertical' onResize={handleResize}>
                    <Splitter.Panel defaultSize={'50%'} min='100'>
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
        </Splitter>
    );
}

const TBR = () => {
    return (
        <Splitter>
            <Splitter.Panel>
                <Splitter layout="vertical">
                    <Splitter.Panel>
                        <Text>Top</Text>
                    </Splitter.Panel>           
                    <Splitter.Panel>
                        <Text>Bottom</Text>
                    </Splitter.Panel>
                </Splitter>
            </Splitter.Panel>
            <Splitter.Panel>
                <Text>Right</Text>
            </Splitter.Panel>
        </Splitter>
    )
}

const TLR = () => {
    return (
        <Splitter layout="vertical">
            <Splitter.Panel>
                <Text>Top</Text>
            </Splitter.Panel>
            <Splitter.Panel>
                <Splitter >
                    <Splitter.Panel>
                        <Text>Left</Text>
                    </Splitter.Panel>
                    <Splitter.Panel>
                        <Text>Right</Text>
                    </Splitter.Panel>
                </Splitter>
            </Splitter.Panel>        
        </Splitter>

    )
}
export {LR, TB, LTB, TBR, TLR}