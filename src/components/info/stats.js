import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

function Stats() {
  // set data
  const [barData, setBarData] = useState({
    labels: ["label 1", "label 2", "label 3", "label 4"],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "test label",
        data: [48, 35, 73, 82],
        // you can set indiviual colors for each bar
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderWidth: 3,
      },
    ],
  });
  // set options
  const [barOptions, setBarOptions] = useState({
    options: {
      scales: {
        /*
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        */
      },
      title: {
        display: true,
        text: "Data Orgranized In Bars",
        fontSize: 25,
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  });
// return chart
return (
    <div className="statschart">
        <Bar data={barData} options={barOptions.options} />
    </div>
);
}
export default Stats;
