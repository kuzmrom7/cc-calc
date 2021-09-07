import React, { useEffect } from 'react';
import { useState } from 'react';
import { Calc, Card, AppContent, Total } from '../../common';
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
          <AppContent>
            <Calc cart={cart} onClear={handleClear} onSubmit={handleSubmit} />
          </AppContent>
          <AppContent>
            {Object.keys(products).map((item) => (
              <Card
                key={item}
                id={item}
                title={products[item].name}
                count={cart?.[item]?.count}
                onClick={handleClick}
              />
            ))}
          </AppContent>
        </>
      )}
      {state === 'total' && (
        <AppContent>
          <Total cart={cart} onBack={() => setState('cart')} onClear={handleClear} />
        </AppContent>
      )}
    </>
  );
}

export default Cart;
