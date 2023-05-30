import { SalesByGender } from './types';

export const buildSalesByGenderChart = (sales: SalesByGender[]) => {
  const labels = sales.map((sale) => sale.gender);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};

export const sumSalesByGender = (sales: SalesByGender[]) => {
  return sales.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.sum;
  }, 0);
};
