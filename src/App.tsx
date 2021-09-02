import { Calc } from './common/calc/Calc';
import { Card } from './common/card/Card';
import { Content } from './common/content/Content';
import { Header } from './common/header/Header';
import { Wrap } from './common/wrap/Wrap';
import { products } from './db/products';


function App() {
  const handleClick = (id: string, type: string) => {
    console.log(id, type)
  }

  return (
    <Wrap>
      <Header/>
     <Content>
      <Calc count={0} calories={0} />
     </Content>
      <Content>
        {Object.keys(products).map(item => 
          <Card key={item} id={item} title={products[item].name} count={0} onClick={handleClick}/>
        )}
      </Content>
    </Wrap>
  );
}

export default App;
