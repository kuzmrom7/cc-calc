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
  padding: 0;
  font-size: 14px;
`

const ButtonWrap = styled.div`
  width: 30%;
`
const ButtonPlus = styled.div`
  width: 50px;
`

type Props = {
  title: string;
  count: number;
  id: string;
  onClick?: (id: string, type: string) => void;
}

export const Card: React.FC<Props> = ({title, count, id, onClick}) => {

  const handleClick = (e: React.MouseEvent) => {
    const { name } = e.target as HTMLButtonElement;
    let type = name;

    if (onClick) {
      onClick(id, type)
    }
  }

  return (
    <Container style={{background: colors[2]}}>
      <Title>{title}</Title>
      {count > 0 ? 
        <>
          <ButtonPlus>
            <Button onClick={handleClick} name="sub">-</Button>
          </ButtonPlus>
          <Count>{count} шт.</Count>
          <ButtonPlus>
            <Button onClick={handleClick} name="add">+</Button>
          </ButtonPlus>
        </>
        :
        <>
          <ButtonWrap>
            <Button onClick={handleClick} name="add">Добавить</Button>
          </ButtonWrap>
        </>
        }
    </Container>
  )
}
