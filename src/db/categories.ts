export type CategoriesType = {
  [id: string]: {
    name: string;
    places: number[];
  };
};
export const categories: CategoriesType = {
  0: {
    name: 'Роллы',
    places: [0],
  },
};
