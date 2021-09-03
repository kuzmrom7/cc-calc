import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  background: #333;
  width: 100%;
  height: 50px;
  color: #fff;
  border-radius: 20px;
  position: relative;
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  font-family: inherit;
  line-height: normal;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  outline: 0;
  box-shadow: none;
  cursor: pointer;
  box-sizing: border-box;
  overflow: visible;
  user-select: none;
  touch-action: manipulation;
  font-weight: 500;
  font-size: 14px;
`;
type Props = {
  onClick?: (e: React.MouseEvent) => void;
  name?: string;
};
export const Button: React.FC<Props> = ({ children, onClick, name }) => {
  return (
    <Container onClick={onClick} name={name}>
      {children}
    </Container>
  );
};
