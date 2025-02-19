import React, {useState, useLayoutEffect, useRef} from 'react'
import { Splitter, Layout, Typography } from 'antd'

const { Text } = Typography;

const SeperatePage_LR = ({prop, children = [], onSizeChange}) => {
  const [leftChild, rightChild] = children;

  return (
    <Splitter>
    <Splitter.Panel>
       {leftChild || <Text>Left</Text> }
    </Splitter.Panel>
    <Splitter.Panel>
      {rightChild || <Text>Right</Text> }
    </Splitter.Panel>
</Splitter>
  );
};

export default SeperatePage_LR;
