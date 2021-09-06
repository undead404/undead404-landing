import "./App.css";
import { Layout } from "antd";
import MyHeader from "./components/Header";
import MyFooter from "./components/Footer";
import MyContent from "./components/Content";

const { Header, Footer, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header><MyHeader /></Header>
        <Content><MyContent /></Content>
        <Footer><MyFooter /></Footer>
      </Layout>
    </div>
  );
}

export default App;
