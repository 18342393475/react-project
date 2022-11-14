import style from './Login.module.scss'
import { Layout, Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { AppName, apkDownloadTitle, apkDownloadUrl } from '@/js/config/global.config'
const { Header, Footer, Content } = Layout;
function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Layout className={style.login}>
            <Header>
                <h4>{AppName}</h4>
            </Header>
            <Content>
                {/* <img src={require('@/Images/4.jpg')} alt={AppName}></img> */}
                <Form name="basic" labelCol={{span: 8}} wrapperCol={{span: 16}} initialValues={{remember: true}}
                    onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off"
                >
                    <Form.Item label="用户名" name="username" rules={[{required: true, message: '请输入用户名'}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="密码" name="password" rules={[{required: true, message: '请输入密码'}]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </Content>
            <Footer><h5 className='text-center'><a href={apkDownloadUrl} target="about">{apkDownloadTitle}</a></h5></Footer>
        </Layout>
    )
}
export default Login