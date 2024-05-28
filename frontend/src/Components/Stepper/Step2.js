import React from "react";

const Step2 = ({ formData, handleChange, handleNext, handleBack }) => {
    return (
        <div className="Step-Content">
            <h2 className="TituloStep">Información Básica</h2>
            <form>
                <label>
                    Ejemplo1:
                    <input
                        type='text'
                        name='Ejemplo1'
                        value={formData.Ejemplo1}
                        onChange={handleChange}
                    />
                </label>
                <div className='VariosCampos'>
                    <label>
                        Ejemplo2:
                        <input
                            type='text'
                            name='Ejemplo2'
                            value={formData.Ejemplo2}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Ejemplo3:
                        <input
                            type='text'
                            name='Ejemplo3'
                            value={formData.Ejemplo3}
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
