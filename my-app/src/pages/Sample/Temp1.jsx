import React, { useState } from 'react';
import { Select, Layout, Typography, Flex } from 'antd';
import { LR, LTB, TB, TBR, TLR } from '../../temp/SeperatePage';
import Basicbutton from '../../components/button/Basicbutton';
import '../../style/aams.css';

const { Text } = Typography;

const { Option } = Select;

const Temp1 = () => {
  const [selected, setSelected] = useState('LR');

  const handleChange = (value) => {
    setSelected(value);
  };

  return (
    <Layout className = 'WhiteBox' style= {{ height : '93vh'}}>
      <Basicbutton />
      <Layout className = 'WhiteBox' style={{padding : '10px'}}>
        <Flex className ='JstLeft AlignCenter' horizontal = 'true' >
        <Text>화면 선택 :</Text>
            <Select 
                defaultValue="LR" 
                style={{ width: 100 }} 
                onChange={handleChange} 
                placeholder="Select Layout"
            >
                <Option value="LR">LR</Option>
                <Option value="LTB">LTB</Option>
                <Option value="TB">TB</Option>
                <Option value="TBR">TBR</Option>
                <Option value="TLR">TLR</Option>
            </Select>
        </Flex>
      </Layout>
      <Layout className = 'WhiteBox' style={{ height : '90%', padding : '5px', borderTop : '1px solid black'}}>
        {selected === 'LR' && <LR />}
        {selected === 'LTB' && <LTB />}
        {selected === 'TB' && <TB />}
        {selected === 'TBR' && <TBR />}
        {selected === 'TLR' && <TLR />}
      </Layout>
    </Layout>
  );
};

export default Temp1;
