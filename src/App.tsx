import { useState } from 'react';
import { Calc } from './common/calc/Calc';
import { Card } from './common/card/Card';
import { Content } from './common/content/Content';
import { Header } from './common/header/Header';
import { Wrap } from './common/wrap/Wrap';
import { products } from './db/products';

export type ProductCartType = {
  [id: string]: {
    count: number;
  };
};

function App() {
  const [cart, setCart] = useState<ProductCartType>({});

  const handleClick = (id: string, type: string) => {
    setCart((prev) => ({
      ...prev,
      [id]: {
        count: prev[id] ? (type === 'add' ? prev[id].count + 1 : prev[id].count - 1) : 1,
      },
    }));
  };

  return (
    <Wrap>
      <Header />
      <Content>
        <Calc cart={cart} />
      </Content>
      <Content>
        {Object.keys(products).map((item) => (
          <Card key={item} id={item} title={products[item].name} count={cart?.[item]?.count} onClick={handleClick} />
        ))}
      </Content>
    </Wrap>
  );
}

export default App;
