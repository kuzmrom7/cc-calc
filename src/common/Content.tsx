import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #333;
  margin-top: 30px;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0 10px;
`;

export const Content: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};
