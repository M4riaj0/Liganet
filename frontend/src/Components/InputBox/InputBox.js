import React from "react";
import "./InputBox.css";

function InputBox({ name, value, onChange, type = 'text' }) {
    return (
        <div className="input-box">
            <p className="NombreInput">{name}</p>
            <input
                type={type}
                name={name}
                placeholder={name}
                className="Casilla"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default InputBox;
