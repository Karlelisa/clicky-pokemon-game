import React from "react";
import "./style.css";

function Title(props) {


    return <h1 className="title">{props.children} </h1>;


    // return (
    //     <div> <img className="logo" />
    //         <h1 className="title">{props.children}</h1>


    //     </div>

    // );


    // return <h1 className="title">{props.children}
    //     <img className="logo" />

    // </h1>;







}

export default Title;