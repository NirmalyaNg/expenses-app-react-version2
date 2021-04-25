import ChartBar from '../ChartBar/ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const amountsArray = dataPoints.map((datapoint) => parseInt(datapoint.value));

  const maxValue = Math.max(...amountsArray);

  return (
    <div className="chart">
      {dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          label={datapoint.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
