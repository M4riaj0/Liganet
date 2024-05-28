import React from "react";

const Step1 = ({formData, handleChange, handleNext}) => {

    return (
        <div>
            <h2>Información Personal</h2>
            <form>
                <label>
                    Nombre Completo:
                    <input
                        type='text'
                        name='NombreCompleto'
                        value={formData.NombreCompleto}
                        onChange={handleChange}
                    />
                </label>
                <div className='VariosCampos'>
                    <label>
                        Numero de documento:
                        <input
                            type='number'
                            name='NumeroDocumento'
                            value={formData.NumeroDocumento}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Lugar de expedicion:
                        <input
                            type='text'
                            name='LugarExpedicion'
                            value={formData.LugarExpedicion}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='VariosCampos'>
                    <label>
                        Fecha de nacimiento:
                        <input
                            type='date'
                            name='FechaNacimiento'
                            value={formData.FechaNacimiento}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Celular:
                        <input
                            type='number'
                            name='Celular'
                            value={formData.Celular}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='VariosCampos'>
                    <label>
                        Genero:
                        <input
                            type='text'
                            name='Genero'
                            value={formData.Genero}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Nacionalidad:
                        <input
                            type='text'
                            name='Nacionalidad'
                            value={formData.Nacionalidad}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='VariosCampos'>
                    <label>
                        País de residencia:
                        <input
                            type='text'
                            name='Pais'
                            value={formData.Pais}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Departamento:
                        <input
                            type='text'
                            name='Departamento'
                            value={formData.Departamento}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='VariosCampos'>
                    <label>
                        Direccion:
                        <input
                            type='text'
                            name='Direccion'
                            value={formData.Direccion}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Ciudad:
                        <input
                            type='text'
                            name='Ciudad'
                            value={formData.Ciudad}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='ButtonContainer'>
                    <button type='button' onClick={handleNext}>Siguiente</button>
                </div>
            </form>  
        </div>
    );
};

export default Step1;
