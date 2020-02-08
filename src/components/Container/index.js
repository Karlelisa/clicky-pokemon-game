import React from "react";
import "./style.css";

function Container(props) {
    return <div className="container" >
        <img className="logo" /> {props.children}
    </div>;
}

export default Container;