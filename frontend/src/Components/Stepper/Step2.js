import React from "react";
import InputBox from "../InputBox/InputBox";

const Step2 = ({onChange, data}) => {
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        onChange({[name]: value});
    };

    return (
        <div className="ContentForm">
            <h2>Información Básica</h2>
            <InputBox name='Ejemplo' type='Ejemplo' placeholder='Ejemplo' />

        </div>
    );
};

export default Step2;