import React from "react";
import InputBox from "../InputBox/InputBox";

const Step1 = ({onChange, data}) => {
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        onChange({[name]: value});
    };


    return (
        <div className='ContentForm'>
            <h2>Datos Personales</h2>
                <InputBox name='Nombre completo' type='Nombre' placeholder='Nombre Completo' />
                    <div className='TresCampos'>
                        <InputBox name='Genero' type='Genero' placeholder='Genero' />
                        <InputBox name='Tipo de documento' type='TipoDocumento' placeholder='Tipo de documento' />
                        <InputBox name='Numero de documento' type='Documento' placeholder='Documento' />
                    </div>
                    <div className='TresCampos'>
                        <InputBox name='Lugar de expedicion' type='LugarExpedicion' placeholder='Lugar de expedicion' />
                        <InputBox name='Fecha de nacimiento' type='FechaNacimiento' placeholder='Fecha de nacimiento' />
                        <InputBox name='Nacionalidad' type='Nacionalidad' placeholder='Nacionalidad' />
                    </div>
                    <div className='TresCampos'>
                        <InputBox name='Departamento' type='Departamento' placeholder='Departamento' />
                        <InputBox name='Ciudad' type='Ciudad' placeholder='Ciudad' />
                        <InputBox name='Direccion' type='Direccion' placeholder='Direccion' />
                    </div>
                    <div className='TresCampos'>
                        <InputBox name='Telefono' type='Telefono' placeholder='Telefono' />
                        <InputBox name='Contacto de emergencia' type='ContactoEmergencia' placeholder='Contacto de emergencia' />
                        <InputBox name='Telefono de emergencia' type='TelefonoEmergencia' placeholder='Telefono de emergencia' />
                    </div>
                    <div className='TresCampos'>
                        <InputBox name='Correo' type='Correo' placeholder='Correo' />
                        <InputBox name='Contraseña' type='Contraseña' placeholder='Contraseña' />
                        <InputBox name='Confirmar contraseña' type='ConfirmarContraseña' placeholder='Confirmar contraseña' />
                    </div>
                </div>
    );
};

export default Step1;
