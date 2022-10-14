import React from "react";
import { FaConnectdevelop, FaBell,FaSearch } from 'react-icons/fa';
const TopNav = (props) => {
    console.log(props);
    const pEmail = localStorage.Pemail;
    const pName = localStorage.Pname;
    const pimageUrl = localStorage.pimageUrl;
    return (
        <>
            <nav className="nav">
                <ul className="ul1">
                    <li className="iconFrame" >< FaConnectdevelop className="icon1" /></li>
                    <li className="center2 search_frame"><input type="text" className="inpt_box"/><FaSearch className="search_icon" /></li>
                    <li>
                        <ul className="ul12">
                            <li><img src={pimageUrl} alt='Profile image' onClick={(e) => {
                                document.getElementsByClassName("profile")[0].classList.toggle("ul2");
                            }}></img>
                                <ul className="ul2 profile">
                                    <li>
                                        <span style={{fontSize : "16px"}}>Name :</span>
                                        <span style={{fontSize : "16px"}}>{pName}</span>
                                    </li>
                                    <li>
                                        <span style={{fontSize : "16px"}}>Email :</span>
                                        <span style={{fontSize : "16px"}}>{pEmail}</span>
                                    </li>
                                    <li className="logOutBtn">{props.comp}</li>
                                </ul>
                            </li>
                            <li><FaBell className="search_icon" /></li>
                        </ul>

                    </li>
                </ul>
            </nav>
        </>
    )
}

export default TopNav;