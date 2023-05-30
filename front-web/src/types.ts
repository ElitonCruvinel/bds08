export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type Store = {
  id: number;
  name: string;
};

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type FilterData = {
  store: Store;
};

export type PieChatConfig = {
  labels: string[];
  series: number[];
};
