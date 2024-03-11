import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels = ['JAN','FEB','MAR' ,'APR', 'MAY', 'JUN', 'JUL','AUG', 'SEP', 'OCT','NOV', 'DEC'];

export const data = {
    
  labels,
  datasets: [
    {
      label: 'Members',
      data: [994, 1253, 2885, 1600, 1244, 2065, 1814, 2200, 2987 , 3347, 3241, 2712],
      borderColor: '#CB7EFF',
      backgroundColor: '#F57742',
    },
  ],
};

;



  const sortOptions = [
    { lable: 2023, value: 2023 },
    { lable: 2022, value: 2022 },
    { lable: 2021, value: 2021 },
    { lable: 2020, value: 2020},
  ];
const LineChart = () => {
  return (
      <div className='border border-gray-300 p-4 rounded-2xl flex-1'>
          <div className='flex justify-between'>
              
          <p className="text-2xl pb-6" style={{ color: "#32343E" }}>Members</p>
        <div>
            <select
              id="countries"
              style={{
                backgroundColor: "#F5F7FA",
              }}
              className="border-none px-4 text-gray-900 text-sm rounded-full block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            >
              <option selected disabled>
                Year
              </option>
              {sortOptions?.map((data, i) => (
                <option key={i} value={data?.value}>
                  {data?.lable}
                </option>
              ))}
            </select>
          </div>
          </div>
     <Line options={options} data={data} style={{height:"300px" , width: "480px"}}/>
    </div>
  )
}

export default LineChart
