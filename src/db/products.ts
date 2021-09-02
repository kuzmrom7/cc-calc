export type ProductType = {
  [id: string]: {
    name: string,
    category: number[],
    calories: number,
  }
}
export const products: ProductType = {
  0: {
    name: "Филадельфия",
    category: [0],
    calories: 248,
  },
  1: {
    name: "Калифорния",
    category: [0],
    calories: 230,
  },
  2: {
    name: "Ролл со снежным крабом",
    category: [0],
    calories: 233,
  },
  3: {
    name: "Запеченный ролл с лоссем",
    category: [0],
    calories: 276,
  },
  4: {
    name: "Запеченный ролл с тигровой креветкой",
    category: [0],
    calories: 275,
  },
  5: {
    name: "Ролл с тунцом и креветкой",
    category: [0],
    calories: 267,
  }
};
