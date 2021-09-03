import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  height: 100%;
  color: #333;
  margin-top: 30px;
  align-items: center;
  font-size: 14px;
  box-sizing: border-box;
`;

export const Content: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};
