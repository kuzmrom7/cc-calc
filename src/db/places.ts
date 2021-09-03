export type PlaceType = {
  [id: string]: {
    name: string;
  };
};
export const places: Set<PlaceType> = new Set([
  {
    0: {
      name: 'Dostaevsky',
    },
  },
]);
