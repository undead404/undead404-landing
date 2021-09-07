import { Layout } from 'antd';

import MyContent from './components/Content';
import MyFooter from './components/Footer';
import MyHeader from './components/Header';

import './App.css';

const { Header, Footer, Content } = Layout;
function App(): JSX.Element {
  return (
    <div className="App">
      <Layout>
        <Header>
          <MyHeader />
        </Header>
        <Content>
          <MyContent />
        </Content>
        <Footer>
          <MyFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
