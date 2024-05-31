import React, { useState } from "react";
import UploadFiles from '../UploadFiles/UploadFiles';
import { MdEdit } from "react-icons/md";

const Step2 = ({ formData, handleChange, handleNext, handleBack, handleFotoUrlUpload, isEditingFoto, setIsEditingFoto }) => {

    return (
        <div>
            <h2>Información Jugador</h2>
            <form>
                <div className='foto-section'>
                    <div className='foto-container'>
                        {formData.fotoUrl.length > 0 ? (
                            <img
                                src={formData.fotoUrl}
                                alt="Foto de Jugador"
                                className="foto-perfil"
                            />
                        ) : (
                            <div className="foto-placeholder">No se ha seleccionado ninguna foto de jugador</div>
                        )}
                        <button type="button" className="edit-button" onClick={() => setIsEditingFoto(!isEditingFoto)}>
                            <MdEdit />
                        </button>
                    </div>
                    <div className='foto-label-container'>
                        <label className="label-type">Foto Jugador</label>
                    </div>
                    {isEditingFoto && (
                        <div className='upload-section'>
                            <UploadFiles onUpload={handleFotoUrlUpload} />
                        </div>
                    )}
                </div>

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
                            name='añosExperiencia'
                            value={formData.añosExperiencia}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className='VariosCampos'>
                    <label>
                        Nivel de competencia:
                        <input
                            type='number'
                            name='nivelCompetencia'
                            value={formData.nivelCompetencia}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Número de equipación:
                        <input
                            type='number'
                            name='numeroEquipacion'
                            value={formData.numeroEquipacion}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className='VariosCampos'>
                    <label>
                        Perfil dominante:
                        <input
                            type='text'
                            name='perfilDominante'
                            value={formData.perfilDominante}
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
                            name='piernaDominante'
                            value={formData.piernaDominante}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Posición principal:
                        <input
                            type='text'
                            name='posicionPrincipal'
                            value={formData.posicionPrincipal}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Posición secundaria:
                        <input
                            type='text'
                            name='posicionSecundaria'
                            value={formData.posicionSecundaria}
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
