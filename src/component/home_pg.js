import React from "react";
import Logout from './logout';
import Nav from "./nav";
const Home = (props)=> {
    console.log(props.profile_data);
    return(
        <>
        <Nav comp={<Logout log_out = {props.getLoginDetails}></Logout>} />
        </>
    )
}

export default Home;