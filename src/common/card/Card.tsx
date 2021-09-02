import React from "react";
import styled from 'styled-components';
import { Button } from "../button/Button";

const colors = ['#7CDAAD', '#ABDA7C', '#89E3E9', '#F87E94'];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  color: #333;
  align-items: center;
  font-size: 14px;
  box-sizing: border-box;
  margin-top: 8px;
  padding: 0 10px;
`

const Title = styled.div`
  width: 50%;
  padding: 10px 0;
  overflow-x: scroll;
  font-size: 18px;
  font-weight: 600;

`

const Count = styled.div`
  width: 20%;
  padding: 0 2px;
  font-size: 18px;
`

const ButtonWrap = styled.div`
  width: 30%;
`
const ButtonPlus = styled.div`
  width: 80px;
`

type Props = {
  title: string;
  count: number;
}

export const Card: React.FC<Props> = ({title, count}) => {

  return (
    <Container style={{background: colors[2]}}>
      <Title>{title}</Title>
      {count > 0 ? 
        <>
          <Count>{count} шт.</Count>
          <ButtonPlus>
            <Button>-</Button>
          </ButtonPlus>
          <ButtonPlus style={{marginLeft: '4px'}}>
            <Button>+</Button>
          </ButtonPlus>
        </>
        :
        <>
          <ButtonWrap>
            <Button>Добавить</Button>
          </ButtonWrap>
        </>
        }
    </Container>
  )
}
