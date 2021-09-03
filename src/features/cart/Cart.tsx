import { useEffect } from 'react';
import { useState } from 'react';
import { Calc } from '../../common/calc/Calc';
import { Card } from '../../common/card/Card';
import { Content } from '../../common/content/Content';
import { Total } from '../../common/total/Total';
import { products } from '../../db/products';

export type ProductCartType = {
  [id: string]: {
    count: number;
  };
};

const localStorageKey = 'zhir-app-cart';

function Cart() {
  const [state, setState] = useState<'cart' | 'total'>('cart');
  const [cart, setCart] = useState<ProductCartType>({});

  useEffect(() => {
    let data = localStorage.getItem(localStorageKey);
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(cart));
  }, [cart]);

  const handleClick = (id: string, type: string) => {
    setCart((prev) => ({
      ...prev,
      [id]: {
        count: prev[id] ? (type === 'add' ? prev[id].count + 1 : prev[id].count - 1) : 1,
      },
    }));
  };

  const handleClear = () => {
    setCart({});
  };

  const handleSubmit = () => {
    setState('total');
  };

  return (
    <>
      {state === 'cart' && (
        <>
          <Content>
            <Calc cart={cart} onClear={handleClear} onSubmit={handleSubmit} />
          </Content>
          <Content>
            {Object.keys(products).map((item) => (
              <Card
                key={item}
                id={item}
                title={products[item].name}
                count={cart?.[item]?.count}
                onClick={handleClick}
              />
            ))}
          </Content>
        </>
      )}
      {state === 'total' && (
        <Content>
          <Total cart={cart} onBack={() => setState('cart')} onClear={handleClear} />
        </Content>
      )}
    </>
  );
}

export default Cart;
