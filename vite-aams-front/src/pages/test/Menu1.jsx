import React from 'react'
import {Layout, Flex, Typography} from 'antd'
import { Link } from 'react-router-dom';
import BscBtn from '../../components/button/Basicbutton';

const { Text, Title  } = Typography;
function Menu1() {
  return (
    <Layout>
    <Title level={1}>Menu1</Title>
        <Layout>
            <Flex>
                <BscBtn/>
            </Flex>
        </Layout>
    </Layout>

  )
}

export default Menu1