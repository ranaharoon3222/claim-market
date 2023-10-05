import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart = () => {
  const series = [
    {
      name: 'Market Price',
      data: [7000, 9000, 4000, 3000, 12000, 11000, 15000, 6000],
    },
  ];

  const options = {
    chart: {
      type: 'area',
      height: 650,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
    },

    title: {
      text: 'BlockFi Inc.',
      align: 'center',
    },
    labels: [
      '12/02/22',
      '12/09/22',
      '12/16/22',
      '12/23/22',
      '12/30/22',
      '01/06/23',
      '01/13/23',
      '01/20/23',
    ],
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: false,
    },
    legend: {
      horizontalAlign: 'right',
    },
  };
  return (
    <div className='area-chart'>
      {' '}
      <ReactApexChart
        options={options}
        series={series}
        type='area'
        height={450}
      />
    </div>
  );
};

export default AreaChart;
