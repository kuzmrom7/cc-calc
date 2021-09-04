import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ProductCartType } from '../App';
import { Button } from './Button';

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
  width: 100%;
  justify-content: space-between;
  background-color: #fff;
  min-height: 92px;
`;
const ButtonWrap = styled.div`
  width: 100%;
  margin-left: 4px;
`;
const Controls = styled.div`
  display: flex;
  width: 40%;
`;

type Props = {
  cart: ProductCartType;
  onSubmit: () => void;
  onClear: () => void;
};

export const Calc: React.FC<Props> = ({ cart, onSubmit, onClear }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let value = 0;
    Object.keys(cart).forEach((item: string) => {
      value = value + cart[item].count;
    });
    setCount(value);
  }, [cart]);

  return (
    <Container>
      <div>{count > 0 ? <>Всего {count}&nbsp;шт&nbsp;🍏 </> : <>Пока пусто 🥝</>}</div>
      {count > 0 && (
        <Controls>
          {/* <ButtonWrap>
            <Button theme="outline" onClick={onClear}>
              Сброс
            </Button>
          </ButtonWrap> */}
          <ButtonWrap>
            <Button theme="outline" onClick={onSubmit}>
              Готово
            </Button>
          </ButtonWrap>
        </Controls>
      )}
    </Container>
  );
};
