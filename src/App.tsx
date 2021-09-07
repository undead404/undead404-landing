import { Layout } from 'antd';
import { I18nextProvider } from 'react-i18next';

import i18next from './i18next';
import MyContent from './components/Content';
import MyFooter from './components/Footer';
import MyHeader from './components/Header';

import './App.css';

const { Header, Footer, Content } = Layout;
function App(): JSX.Element {
  return (
    <I18nextProvider i18n={i18next}>
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
    </I18nextProvider>
  );
}

export default App;
