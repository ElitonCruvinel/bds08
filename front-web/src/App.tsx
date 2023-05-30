import { useEffect, useMemo, useState } from 'react';
import Filter from './components/filter';
import Header from './components/header';
import TotalSales from './components/total-sales';
import { FilterData, PieChatConfig, SalesByGender } from './types';
import { buildFilterParams, makeRequest } from './utils/request';
import { buildSalesByGenderChart, sumSalesByGender } from './helpers';

import './App.css';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGender, setSalesByGender] = useState<PieChatConfig>();
  const [totalSum, setTotalSum] = useState(0);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
        const newTotalSum = sumSalesByGender(response.data);
        setTotalSum(newTotalSum);
      })
      .catch(() => {
        console.error('Error to fetch sales by gender');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <TotalSales
          total={totalSum}
          name=""
          labels={['Feminino', 'Masculino', 'Outro']}
          series={salesByGender?.series}
        />
      </div>
    </>
  );
}

export default App;
