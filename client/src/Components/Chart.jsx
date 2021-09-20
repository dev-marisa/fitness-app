import React, {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";

const Chart = props => {

  const [label, setLabel] = useState([]);
  const [calorieData, setCalorieData] = useState([]);

  useEffect( () => {
    const tempLabel = [];
    const tempData = [];
    if(props.workouts.length > 0) {
      let index = 0;
      let day = new Date(props.workouts[0].day);
      let start = new Date(props.workouts[props.workouts.length-1].day);
      while(day >= start) {
        tempLabel.push(day.toLocaleDateString());
        if(new Date(props.workouts[index].day).toLocaleDateString() === day.toLocaleDateString()) {
          tempData.push(props.workouts[index].caloriesBurned);
          index++;
        } else {
          tempData.push(0);
        }
        day.setDate(day.getDate() - 1);
      }
      setLabel(tempLabel);
      setCalorieData(tempData);
    } 
  }, [props]);

  const data = {
    labels: label,
    datasets: [
      {
        label: "Calories Burned",
        data: calorieData,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)'
      }
    ]
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Line data={data} options={options} />
  );

}

export default Chart;