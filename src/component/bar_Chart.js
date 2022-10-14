import React from "react";
import { Chart } from "react-google-charts";

export function Bar(props) {
    let data = []
    data.push(["Date", "Profit"])
    let data1 = props.data;
    let len = data1.length
    for (let i = 0; i < len / 2; i++) {
        let temp = []
        let len2 = data1[i].pro.length
        for (let j = 0; j < len2; j++) {
            temp.push(data1[i].shipDate.slice(0, 10))
            temp.push(Math.ceil(data1[i].pro[j].profit))
        }
        data.push(temp)
    }
    data = data.sort();
    data.reverse();
    const options = {
        title: "Profit",
        curveType: "function",
        legend: {
            position: "bottom",
            textStyle: {
                color: "white",
            },
        },
        titleTextStyle: {
            color: "white",
        },
        hAxis: {
            textStyle: {
                color: "white",
            },
            titleTextStyle: {
                color: "white",
            },
        },
        vAxis: {
            textStyle: {
                color: "white",
            },
            titleTextStyle: {
                color: "white",
            },
          
        },
        colors: ["white", "white"],
        backgroundColor: "#9212e8"
    }
    return (
        <>
            <Chart
                chartType="LineChart"
                width="100%"
                height="100%"
                data={data}
                options={options}
            />
        </>
    );
}
