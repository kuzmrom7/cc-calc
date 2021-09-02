import { Calc } from './common/calc/Calc';
import { Card } from './common/card/Card';
import { Content } from './common/content/Content';
import { Header } from './common/header/Header';
import { Wrap } from './common/wrap/Wrap';


function App() {
  return (
    <Wrap>
      <Header/>
     <Content>
      <Calc count={22} calories={5500} />
     </Content>
      <Content>
        <Card title={"Филадельфия"} count={2}/>
        <Card title={"Филадельфия"} count={0}/>
        <Card title={"Филадельфия"} count={2}/>
        <Card title={"ФиладельфияФиладельфияФиладельфияФиладельфия"} count={2} />
        <Card title={"Филадельфия"} count={0} />
      </Content>
    </Wrap>
  );
}

export default App;
