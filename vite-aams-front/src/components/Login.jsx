import React, {useState} from 'react';
import {Typography, Button, Checkbox, Form, Input, Flex, Image } from 'antd';
import Logo from '../..//public/aams_logo.jpg';
import { useNavigate } from 'react-router-dom';
const { Text, Title} = Typography;



const boxStyle = {
    borderRadius: 50,
    border: '1px solid rgb(7, 7, 7)',
    height : 500,
    width : 500
    
  };
const Login = ({ onLoginSuccess }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // console.log('username', username);
        // console.log('password', password);
      // 로그인 로직 (예: username과 password가 올바른지 체크)
      if (username === 'admin' && password === '1111') {
        // 로그인 성공 시 sessionStorage에 로그인 상태 저장
        sessionStorage.setItem('isLoggedIn', 'true');
        onLoginSuccess();  // 부모 컴포넌트에게 로그인 성공을 알림
        navigate('/main');  // 메인 페이지로 이동
      } else {
        alert('잘못된 로그인 정보입니다.');
      }
    };

return(
    <Flex style = {{height : '100vh'}} vertical={true} justify = {'center'} align = {'center'}>
        <Flex style = {boxStyle} vertical={true} justify = {'center'} align = {'center'}>
            <Image width = {300} src={Logo} preview={false}></Image>
            <Title level = {2}> Welcome to AAMS </Title>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 400}}
                initialValues={{remember: true}}
                onFinish={handleLogin}
                autoComplete="off"
            >
                <Form.Item
                    label = "Username"
                    name  = "username"
                    rules = {[
                            {required: true,
                            message: 'Please input your username!'
                            },
                            ]}
                >
                    <Input alue={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label = "Password"
                    name  = "password"
                    rules = {[
                            {required: true,
                            message: 'Please input your password!'
                            },
                            ]}
                >
                    <Input.Password value={password} onChange={(e) => setPassword(e.target.value) }/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                    <Button id='Login' type="primary" htmlType="submit">
                    Log In
                    </Button>
                </Form.Item>
            </Form>
        </Flex>
    {/* </div> */}
    </Flex>
    )
};
export default Login;