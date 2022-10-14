import React from "react"
const Cards = (props) => {
    let sum = 0;
    let props_arr = props.data;
    let len = props_arr.length;
    for (let i = 0; i < len; i++) {
        sum += props_arr[i].profit;
    }
    return (
        <>
            <div className="card_frame">
                <div className="icon center">{props.pic}</div>
                <div className="upper_layer">
                    <div className="text">{props.name}</div>
                    <div className="value">{Math.ceil(sum) || len}{props.symbol }</div>
                </div>
            </div>
        </>
    )
}

export default Cards;