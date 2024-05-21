import React from "react";
import "./InputBox.css";

function InputBox(props) {
    return (
        <div className="input-box">
            <p className="NombreInput">{props.name}</p>
            <input type="text" placeholder={props.name} className="Casilla"/>
        </div>
    );
}

export default InputBox;
