import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios"


export function Geo() {
  const [data, setData] = useState([["country", "Market expansion"],])
  let info = []
  useEffect(() => {
    axios.get("http://localhost:3001/three").then((res) => {
      let length1 = res.data.length;
      for (let i = 0; i < length1; i++) {
        let length2 = res.data[i].cust.length
        for (let j = 0; j < length2; j++) {
          info.push([res.data[i].cust[j].customerCounty, 1])
        }
      }
      setData([...data, ...info]);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  
  const options = {
    title: "Market expansion",
    backgroundColor: "#9212e8",
    legend: {
        textStyle: {
            color: "white",
        },
    },
    titleTextStyle: {
        color: "white",
    },

};

  return (
    <>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="100%"
        options={options}
        data={data}
      />

    </>
  );
}