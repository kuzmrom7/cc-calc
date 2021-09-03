export type CategoriesType = {
  [id: string]: {
    name: string;
    places: number[];
  };
};
export const categories: Set<CategoriesType> = new Set([
  {
    0: {
      name: 'Роллы',
      places: [0],
    },
  },
]);
