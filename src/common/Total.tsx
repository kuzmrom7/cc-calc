import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { styled } from '@linaria/react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ProductCartType } from '../App';
import { products, ProductType } from '../db/products';
import { Button } from './Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;
const RowTotal = styled.div`
  display: flex;
  padding: 20px 5px;
  margin-top: 6px;
  font-size: 20px;
  font-weight: 600;
`;
const ButtonWrap = styled.div`
  min-width: 20%;
  margin-left: 4px;
`;
const RowBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: '18px',
    },
  }),
);

type Props = {
  cart: ProductCartType;
  onBack?: () => void;
  onClear?: () => void;
};

type MappedProducts = {
  id: string;
  count: number;
  totalCcal: number;
  product: ProductType;
};


export const Total: React.FC<Props> = ({ cart, onBack, onClear }) => {
  const classes = useStyles();

  const [state, setState] = useState<Array<MappedProducts>>([]);
  const [total, setTotal] = useState({ count: 0, ccal: 0 });

  useEffect(() => {
    const mapped: MappedProducts[] = Object.keys(cart)
      .filter((item) => cart[item].count > 0)
      .map((item: string) => {
        return {
          id: item,
          count: cart[item].count,
          totalCcal: cart[item].count * ((products[item].calories / 100) * products[item].partWeight),
          product: products[item],
        };
      });

    setState(mapped);
  }, [cart]);

  useEffect(() => {
    let totalCount = 0;
    let totalCcal = 0;
    state.forEach((item: MappedProducts) => {
      totalCount = totalCount + item.count;
      totalCcal = totalCcal + item.totalCcal;
    });
    setTotal({ count: totalCount, ccal: totalCcal });
  }, [state]);

  return (
    <>
      <RowBtn>
        <ButtonWrap>
          <Button theme="outline" onClick={onBack}>
            Назад
          </Button>
        </ButtonWrap>
        <ButtonWrap>
          <Button theme="outline" onClick={onClear}>
            Очистить
          </Button>
        </ButtonWrap>
      </RowBtn>
      <Container>
        <div className={classes.root}>
          {state.length > 0 &&
            state.map((item) => (
              <Accordion key={item.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>{item.product.name} ({item.count} шт = {item.product.partWeight * item.count} гр. = {item.totalCcal.toFixed(2)} ккал)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Кол-во: {item.count} <br />
                  Всего ккалл {item.totalCcal}
                </AccordionDetails>
              </Accordion>
            ))}
        </div>
        <RowTotal>
          Итого : {total.count} шт = {total.ccal.toFixed(2)} ккал
        </RowTotal>

      </Container>
    </>
  );
};
