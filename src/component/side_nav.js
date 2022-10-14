import React from "react";
import {  FaCartPlus,FaCalendar 
        ,FaUserAlt,FaShippingFast,FaBox, 
        FaRegListAlt,FaChartBar,FaWrench   } from 'react-icons/fa';

const SideNav = ()=>{
    return(
        <>
        <nav className="sideNavFrame">
            <ul className="sideNav">
                <li className="side_nav_icon"><FaChartBar /></li>
                <li className="side_nav_icon"><FaRegListAlt /></li>
                <li className="side_nav_icon"><FaUserAlt /></li>
                <li className="side_nav_icon"><FaBox /></li>
                <li className="side_nav_icon"><FaShippingFast /></li>
                <li className="side_nav_icon"><FaCalendar /></li>
                <li className="side_nav_icon"><FaCartPlus /></li>
                <li className="side_nav_icon"><FaWrench /></li>
            </ul>
        </nav>
        </>
    )
}

export default SideNav;