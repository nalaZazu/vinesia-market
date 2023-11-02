import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function Appactivity() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
  );
  const daysLeft = 10;

  const current = [1, 200, 3000, 20000, 29009, 39009, 79009];
  const previous = [1, 200, 3000, 200, 299];

  const options: any = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    tooltips: {
      callbacks: {
        label: function (tooltipItem: any) {
          console.log("tooltipItemtooltipItem", tooltipItem);
          return tooltipItem.yLabel
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,");
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += "$" + context.parsed.y.toString().split(".")[0];
              // .format(context.parsed.y)
              // .split('.')[0]
            }
            return label;
          },
        },
      },
      legend: {
        display: false, // Hide the legend
      },

      title: {
        display: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        min: 0,
        grid: {
          display: false,
        },
        max: 100000,
        ticks: {
          beginAtZero: true,
          callback: function (value: number, index: number) {
            return index % 2 === 0 ? `$` + value : "";
          },
        },
      },
      y1: {
        type: "linear" as const,
        display: false,
        ticks: {
          beginAtZero: true,
        },
        position: "right" as const,
        grid: {
          drawOnChartArea: false,
          display: false,
        },
        min: 0,
        max: 100000,
      },
    },
  };
  const labels = Array.from({ length: daysLeft + 1 }).map((_v, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return `${date.getDate()}d`;
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Current",
        data: current,
        borderColor: "#0088F5",
        backgroundColor: "#0088F5",
        yAxisID: "y",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
      },
      {
        label: "Previous",
        data: previous,
        borderColor: "#ff0100",
        backgroundColor: "#ff0100",
        yAxisID: "y1",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  return (
    <>
      <div className="flex justify-between w-full mt-4 px-4 text-xs">
        <h4>Mobile App Revenue</h4>
        <div className="flex">
          <p className=" text-blue-600">Current Period</p>
          <div className="w-2 h-2 mt-1 mx-2 rounded-full bg-blue-600 "></div>
          <p className=" text-red-600">Previous Period</p>
          <div className="w-2 h-2 mt-1 mx-2 rounded-full bg-red-600 "></div>
        </div>
      </div>
      <div className="mt-2 ml-5  text-2xl ">{/* <p>$1677787</p> */}</div>

      <Line className="mx-2 mb-10 w-20 h-20" options={options} data={data} />
    </>
  );
}
