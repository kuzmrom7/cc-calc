import React from "react";
import styled from 'styled-components';

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
`

type Props = {
  count: number;
  calories: number;
}

export const Calc: React.FC<Props> = ({ count, calories }) => {
  return (
    <Container>
       Всего {count}&nbsp;шт&nbsp;🍏 {calories} ккал
    </Container>
  )
}
