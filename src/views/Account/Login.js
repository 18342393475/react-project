import style from './Login.module.scss'
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout;
function Login(){
    return (
        <Layout className={style.login}>
            <Header>天安人寿智能门禁系统</Header>
            <Content>
                <img src={require('@/Images/4.jpg')} alt='天安人寿'></img>
            </Content>
            <Footer>天客汇智能门禁APP下载</Footer>
        </Layout>
    )
}
export default Login