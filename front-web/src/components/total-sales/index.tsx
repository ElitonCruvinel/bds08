import './styles.css';
import { buildPieChartConfig } from './helpers';
import ReactApexChart from 'react-apexcharts';
import { formatPrice } from '../../utils/formatters';

type Props = {
  total: number;
  labels?: string[];
  name: string;
  series?: number[];
};

function TotalSales({ total = 0, labels = [], name, series = [] }: Props) {
  return (
    <div className="total-sales-container  base-card">
      <div className="total-sales-amount">
        <h1> {formatPrice(total)} </h1>
        <h4>Total de vendas</h4>
      </div>
      <div className="total-sales-chart">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="300"
          height="300"
          series={series}
        />
      </div>
    </div>
  );
}

export default TotalSales;
