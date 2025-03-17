import React ,{useState}from 'react';
import { Layout, Typography, Flex} from 'antd';
import {UserOutlined, BarsOutlined} from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom'; // useNavigate 임포트

const { Text, Title  } = Typography;



const Header = ({onToggleSider}) => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        sessionStorage.setItem('logInStat', 'false')
        navigate('/login');
    }

    // 로고,시스템명 클릭스 '/'로 이동동
    const handleLogo = () => {

        navigate('/main');
    }

    return (
        <Layout
            style={{
                display: 'flex',
                height : '60px',
                backgroundColor : '#3f51b5',
                paddingLeft : '10px',
                paddingRight : '10px'
             }}
        >
            <Flex horizontal="true" justify='space-between' align='center'>
                <Flex horizontal="true" justify='flex-start' align='center'  >
                    <Flex horizontal="true" justify='flex-start' align='center' onClick={handleLogo}>
                        <Title  level = {2} italic style={{color : 'yellow', marginTop : '10px'}}>A</Title>
                        <Title  level = {4} style={{color : 'white', marginTop : '10px'}}>dvanced Asset Management System.</Title>
                    </Flex>
                </Flex>
                <Flex horizontal="true" justify='flex-start' align='center'>
                    <Text style={{color : 'white'}}>사용자 </Text>
                    <Text style={{color : 'white'}}>님반갑습니다.</Text>
                </Flex>
                <Flex horizontal="true" justify='flex-start' align='center'>
                    {/* onClick에서 함수 호출을 인라인으로 처리 */}
                    <div id='Logout' onClick={handleLogOut}>
                        <UserOutlined style={{ fontSize : '18px',color : 'white'}}/>
                        <Text style={{ fontSize : '18px',color : 'white'}}>Logout</Text>
                    </div>
                </Flex>
                
            </Flex>
        </Layout>
  )
}

export default Header;