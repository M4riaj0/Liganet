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
                        name='nombreCompleto'
                        value={formData.nombreCompleto}
                        onChange={handleChange}
                    />
                </label>
                <div className='VariosCampos'>
                    <label>
                        Numero de documento:
                        <input
                            name='cedula'
                            value={formData.cedula}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Lugar de expedicion:
                        <input
                            type='text'

                            name='lugarExpedicion'
                            value={formData.lugarExpedicion}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='VariosCampos'>
                    <label>
                        Fecha de nacimiento:
                        <input
                            type='date'

                            name='fechaNacimiento'
                            value={formData.fechaNacimiento}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Celular:
                        <input

                            type='number'
                            name='celular'
                            value={formData.celular}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='VariosCampos'>
                    <label>
                        Genero:
                        <input
                            type='text'
                            name='genero'
                            value={formData.genero}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Nacionalidad:
                        <input
                            type='text'
                            name='nacionalidad'
                            value={formData.nacionalidad}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='VariosCampos'>
                    <label>
                        País de residencia:
                        <input
                            type='text'

                            name='pais'
                            value={formData.pais}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Departamento:
                        <input
                            type='text'
                            name='departamento'
                            value={formData.departamento}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='VariosCampos'>
                    <label>
                        Direccion:
                        <input
                            type='text'

                            name='direccion'
                            value={formData.direccion}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Ciudad:
                        <input
                            type='text'

                            name='ciudad'
                            value={formData.ciudad}
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
