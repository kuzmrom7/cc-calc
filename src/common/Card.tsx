import React from 'react';
import { styled } from '@linaria/react';
import CardMaterial from '@material-ui/core/Card';
import CardContentMaterial from '@material-ui/core/CardContent';
import { Button } from './Button';
import { makeStyles } from '@material-ui/core';

const Title = styled.div`
  width: 50%;
  padding: 10px 0;
  overflow-x: scroll;
  font-size: 18px;
  font-weight: 600;
`;
const Count = styled.div`
  padding: 0;
  font-size: 14px;
`;
const ButtonWrap = styled.div<{ type?: string }>`
  width: ${(props) => (props.type === 'full' ? '100%' : '50px')};
  animation: fade 0.4s;
  max-width: 150px;

  @keyframes fade {
    from {
    opacity: 0;
    }
    to {
    opacity: 1;
    }
  }
`;
const Controls = styled.div<{ type?: string }>`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.type === 'full' ? 'flex-end' : 'space-around')};
`;
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
    marginBottom: '8px',
  },
  content: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

type Props = {
  title: string;
  id: string;
  count?: number;
  onClick?: (id: string, type: string) => void;
};

export const Card: React.FC<Props> = ({ title, count, id, onClick }) => {
  const classes = useStyles();

  const handleClick = (e: React.MouseEvent) => {
    const { name } = e.target as HTMLButtonElement;
    let type = name;

    if (onClick) {
      onClick(id, type);
    }
  };

  return (
    <CardMaterial className={classes.root}>
      <CardContentMaterial className={classes.content}>
        <Title>{title}</Title>
        {count && count > 0 ? (
          <Controls>
            <ButtonWrap>
              <Button onClick={handleClick} name="sub">
                -
              </Button>
            </ButtonWrap>
            <Count>{count} шт.</Count>
            <ButtonWrap>
              <Button onClick={handleClick} name="add">
                +
              </Button>
            </ButtonWrap>
          </Controls>
        ) : (
          <Controls type="full">
            <ButtonWrap type="full">
              <Button onClick={handleClick} name="add">
                Добавить
              </Button>
            </ButtonWrap>
          </Controls>
        )}
      </CardContentMaterial>
    </CardMaterial>
  );
};
