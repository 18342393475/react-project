import './Login.scss'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
function Login(){
    return (
        <Layout className='login'>
            <Header>天安人寿智能门禁系统</Header>
            <Content>
                <img src=''></img>
            </Content>
            <Footer>天客汇智能门禁APP下载</Footer>
        </Layout>
    )
}
export default Login