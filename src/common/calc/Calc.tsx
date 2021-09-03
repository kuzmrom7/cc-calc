import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ProductCartType } from '../../App';

const Container = styled.div`
  display: flex;
  font-size: 18px;
  box-sizing: border-box;
  color: #333;
  font-weight: 600;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
`;

type Props = {
  cart: ProductCartType;
};

export const Calc: React.FC<Props> = ({ cart }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let value = 0;
    Object.keys(cart).forEach((item: string) => {
      value = value + cart[item].count;
    });
    setCount(value);
  }, [cart]);

  return <Container>{count > 0 ? <>Всего {count}&nbsp;шт&nbsp;🍏 </> : <>Пока пусто 🥝</>}</Container>;
};
