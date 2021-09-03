
export type ProductType = {
  name: string;
  category: number[];
  calories: number;
  partWeight: number;
};
export const products: { [id: string]: ProductType } = {
  0: {
    name: 'Филадельфия',
    category: [0],
    calories: 248,
    partWeight: 35,
  },
  1: {
    name: 'Калифорния',
    category: [0],
    calories: 230,
    partWeight: 30,
  },
  2: {
    name: 'Ролл со снежным крабом',
    category: [0],
    calories: 233,
    partWeight: 30,
  },
  3: {
    name: 'Запеченный ролл с лососем',
    category: [0],
    calories: 276,
    partWeight: 31.9
  },
  4: {
    name: 'Запеченный ролл с тигровой креветкой',
    category: [0],
    calories: 275,
    partWeight: 32.5
  },
  5: {
    name: 'Ролл с тунцом и креветкой',
    category: [0],
    calories: 267,
    partWeight: 29.4
  },
};
