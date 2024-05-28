import React from "react";

const Step2 = ({ formData, handleChange, handleNext, handleBack }) => {
    return (
        <div>
            <h2>Información Jugador</h2>
            <form>
                <div className='VariosCampos'>
                    <label>
                        Altura:
                        <input
                            type='number'
                            name='altura'
                            value={formData.altura}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Años de experiencia:
                        <input
                            type='number'
                            name='años_experiencia'
                            value={formData.años_experiencia}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className='VariosCampos'>
                    <label>
                        Nivel de competencia:
                        <input
                            type='text'
                            name='nivel_competencia'
                            value={formData.nivel_competencia}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Número de equipación:
                        <input
                            type='number'
                            name='numero_equipacion'
                            value={formData.numero_equipacion}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className='VariosCampos'>
                    <label>
                        Perfil dominante:
                        <input
                            type='text'
                            name='perfil_dominante'
                            value={formData.perfil_dominante}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Peso:
                        <input
                            type='number'
                            name='peso'
                            value={formData.peso}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className='VariosCampos'>
                    <label>
                        Pierna dominante:
                        <input
                            type='text'
                            name='pierna_dominante'
                            value={formData.pierna_dominante}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Posición principal:
                        <input
                            type='text'
                            name='posicion_principal'
                            value={formData.posicion_principal}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Posición secundaria:
                        <input
                            type='text'
                            name='posicion_secundaria'
                            value={formData.posicion_secundaria}
                            onChange={handleChange}
                        />
                    </label>
                </div>
        

                <div className='ButtonContainer'>
                    <button type='button' onClick={handleBack}>Atrás</button>
                    <button type='button' onClick={handleNext}>Siguiente</button>
                </div>
            </form>
        </div>
    );
};

export default Step2;
