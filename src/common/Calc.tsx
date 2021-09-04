import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import CardMaterial from '@material-ui/core/Card';
import CardContentMaterial from '@material-ui/core/CardContent';
import { ProductCartType } from '../App';
import { Button } from './Button';
import { makeStyles } from '@material-ui/core';

const ButtonWrap = styled.div`
  width: 100%;
  margin-left: 4px;
`;
const Controls = styled.div`
  display: flex;
  width: 40%;
`;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
    minHeight: '92px',
  },
  content: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '18px',
    color: '#333',
    fontWeight: 600,
  },
}));

type Props = {
  cart: ProductCartType;
  onSubmit: () => void;
  onClear: () => void;
};

export const Calc: React.FC<Props> = ({ cart, onSubmit, onClear }) => {
  const classes = useStyles();

  const [count, setCount] = useState(0);

  useEffect(() => {
    let value = 0;
    Object.keys(cart).forEach((item: string) => {
      value = value + cart[item].count;
    });
    setCount(value);
  }, [cart]);

  return (
    <CardMaterial className={classes.root}>
      <CardContentMaterial className={classes.content}>
        <div>{count > 0 ? <>Всего {count}&nbsp;шт&nbsp;🍏 </> : <>Пока пусто 🥝</>}</div>
        {count > 0 && (
          <Controls>
            <ButtonWrap>
              <Button theme="outline" onClick={onSubmit}>
                Готово
              </Button>
            </ButtonWrap>
          </Controls>
        )}
      </CardContentMaterial>
    </CardMaterial>
  );
};
