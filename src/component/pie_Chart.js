import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
let data = [[], [], [], [],]
data[0] = ["Prefer", "Service"]

export function Pie() {
    const [onLine, setOnline] = useState();
    const [cash, setCash] = useState();
    const [emi, setEmi] = useState();
    useEffect(() => {
        axios.get("http://localhost:3001/getOnlineTransactionCount").then((res) => {
            setOnline(res.data.num)
        }).catch((err) => {
            console.log(err)
        })
    }, []);
    useEffect(() => {
        axios.get("http://localhost:3001/getEmiCount").then((res) => {
            setEmi(res.data.num)
        }).catch((err) => {
            console.log(err)
        })
    }, []);
    useEffect(() => {
        axios.get("http://localhost:3001/getCashOnDelivaryCount").then((res) => {
            setCash(res.data.num)
        }).catch((err) => {
            console.log(err)
        })
    }, []);



    data[1] = ["Cash On Delivary", parseInt(`${cash}`)]
    data[2] = ["EMI", parseInt(`${emi}`)]
    data[3] = ["Online Transaction", parseInt(`${onLine}`)]
    const options = {
        title: "Customer More Prefer For....",
        is3D: true,
        backgroundColor: "#9212e8",
        legend: {
            position: "bottom",
            textStyle: {
                color: "white",
            },
        },
        titleTextStyle: {
            color: "white",
        },

    };
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"100%"}
            fontSize = "20px"
                />
    )
}