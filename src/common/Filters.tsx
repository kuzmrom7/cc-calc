import ChipMaterial from '@material-ui/core/Chip';
import React from 'react';
import styled from 'styled-components';
import { CategoriesType } from '../db/categories';

const Container = styled.div`
  display: flex;
`;
type Props = {
  categories: CategoriesType;
};

export const Filters: React.FC<Props> = ({ categories }) => {
  return (
    <Container>
      {Object.keys(categories).map((item: string) => (
        <ChipMaterial key={item} label={categories[item].name} variant="default" />
      ))}
    </Container>
  );
};
