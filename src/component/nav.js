import React, { useEffect, useState } from "react";
import { FaMoneyBillAlt, FaCreativeCommonsNc, FaShippingFast, FaRegTimesCircle } from 'react-icons/fa'
import axios from "axios"
import SideNav from "./side_nav";
import TopNav from "./top_nav";
import Cards from "./first_card";
import { Bar } from "./bar_Chart";
import { Pie } from "./pie_Chart";
import { Geo } from "./geo_chart";
const Nav = (props) => {
    const [profit, setProfit] = useState("");
    const [cancleOrder, setCancleOrder] = useState("");
    const [Dispatch, setDispatch] = useState("");
    const [loss, setLoss] = useState("");
    useEffect(() => {
        function init_data() {
            try {
                axios.get("http://localhost:3001/profit")
                    .then((res) => {
                        setProfit(res.data);
                    })
            }
            catch (err) {

            }
        }

        init_data("product");
    }, [])
    useEffect(() => {
        function init_data() {
            try {
                axios.get("http://localhost:3001/loss")
                    .then((res) => {
                        setLoss(res.data);
                    })
            }
            catch (err) {
            }
        }
        init_data();
    }, [])
    useEffect(() => {
        function init_data() {
            try {
                axios.get("http://localhost:3001/total_dispatched")
                    .then((res) => {
                        setDispatch(res.data);
                    })
            }
            catch (err) {
            }
        }
        init_data();
    }, [])
    useEffect(() => {
        function init_data() {
            try {
                axios.get("http://localhost:3001/order_canceld")
                    .then((res) => {
                    })
            }
            catch (err) {
            }
        }
        init_data();
    }, [])
    useEffect(() => {
        function init_data() {
            try {
                axios.get("http://localhost:3001/three")
                    .then((res) => {
                        setCancleOrder(res.data);
                    })
            }
            catch (err) {
            }
        }
        init_data();
    }, [])
    return (
        <>
            <TopNav comp={props.comp} />
            <div className="container">
                <SideNav></SideNav>
                <div className="sideContainer">
                    <div className="card_wrapper">
                        <Cards data={profit} symbol="Rs" name="Profit" pic=<FaMoneyBillAlt /> />
                        <Cards data={loss} symbol="Rs" name="Loss" pic=< FaCreativeCommonsNc /> />
                        <Cards data={cancleOrder} symbol="" name="Cancelled Orders" pic=<FaRegTimesCircle /> />
                        <Cards data={Dispatch} symbol="" name="Total Dispatch" pic=<FaShippingFast /> />
                    </div>
                    <div className="Grap_wrapper spaceaAround">
                        <div className="show_onlyGraph ">
                            <Bar data={cancleOrder} />
                        </div>
                        <div className="show_onlyGraph  center2">
                            <div className="scapleUp"><Pie className="chart" /></div>
                        </div>
                    </div>
                    <div className="GeoChartWrapper center2">
                    <div className="GeoChart  ">
                        <h3 className="label">Market expansion</h3>
                        <Geo />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;