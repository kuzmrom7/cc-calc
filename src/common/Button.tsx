import React from 'react';
import { styled } from '@linaria/react';

const Container = styled.button<{ theme?: string }>`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  position: relative;
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 0;
  white-space: nowrap;
  font-family: inherit;
  line-height: normal;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  outline: 0;
  box-shadow: none;
  cursor: pointer;
  box-sizing: border-box;
  overflow: visible;
  user-select: none;
  touch-action: manipulation;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => (props.theme === 'outline' ? '#333' : '#fff')};
  background: ${(props) => (props.theme === 'outline' ? '#fff' : '#333')};
  border: ${(props) => (props.theme === 'outline' ? '2px solid #333' : '1px solid transparent;')};
`;

type Props = {
  onClick?: (e: React.MouseEvent) => void;
  name?: string;
  theme?: 'outline' | 'base';
};
export const Button: React.FC<Props> = ({ children, onClick, name, theme }) => {
  return (
    <Container onClick={onClick} name={name} theme={theme}>
      {children}
    </Container>
  );
};
