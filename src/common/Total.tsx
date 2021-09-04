import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ProductCartType } from '../App';
import { products, ProductType } from '../db/products';
import { Button } from './Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;
const Row = styled.div`
  display: flex;
  padding: 20px 5px;
  margin-top: 6px;
  border-bottom: 1px solid #333;
  font-size: 18px;
  font-weight: 500;
`;
const RowTotal = styled.div`
  display: flex;
  padding: 20px 5px;
  margin-top: 6px;
  font-size: 20px;
  font-weight: 600;
`;
const ButtonWrap = styled.div`
  min-width: 20%;
  margin-left: 4px;
`;
const RowBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

type Props = {
  cart: ProductCartType;
  onBack?: () => void;
  onClear?: () => void;
};

type MappedProducts = {
  id: string;
  count: number;
  totalCcal: number;
  product: ProductType;
};

export const Total: React.FC<Props> = ({ cart, onBack, onClear }) => {
  const [state, setState] = useState<Array<MappedProducts>>([]);
  const [total, setTotal] = useState({ count: 0, ccal: 0 });

  useEffect(() => {
    const mapped: MappedProducts[] = Object.keys(cart)
      .filter((item) => cart[item].count > 0)
      .map((item: string) => {
        return {
          id: item,
          count: cart[item].count,
          totalCcal: cart[item].count * ((products[item].calories / 100) * products[item].partWeight),
          product: products[item],
        };
      });

    setState(mapped);
  }, [cart]);

  useEffect(() => {
    let totalCount = 0;
    let totalCcal = 0;
    state.forEach((item: MappedProducts) => {
      totalCount = totalCount + item.count;
      totalCcal = totalCcal + item.totalCcal;
    });
    setTotal({ count: totalCount, ccal: totalCcal });
  }, [state]);

  return (
    <>
      <RowBtn>
        <ButtonWrap>
          <Button theme="outline" onClick={onBack}>
            Назад
          </Button>
        </ButtonWrap>
        <ButtonWrap>
          <Button theme="outline" onClick={onClear}>
            Очистить
          </Button>
        </ButtonWrap>
      </RowBtn>
      <Container>
        {state.length > 0 &&
          state.map((item) => (
            <Row key={item.id}>
              {item.product.name} ({item.count} шт) = {item.totalCcal.toFixed(2)} ккал
            </Row>
          ))}
        <RowTotal>
          Итого : {total.count} шт = {total.ccal.toFixed(2)} ккал
        </RowTotal>
      </Container>
    </>
  );
};
