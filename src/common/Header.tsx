import React from 'react';
import { styled } from '@linaria/react';

const Container = styled.div`
  display: flex;
  background: #333;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 10px;
  color: #fff;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;
const Icon = styled.div`
  position: absolute;
  left: 10px;
`;

export const Header: React.FC = () => {
  return (
    <Container>
      <Icon>🍜</Icon>
      <Title>Zhirnyy app</Title>
    </Container>
  );
};
