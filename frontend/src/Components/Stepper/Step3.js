import React from 'react';
import UploadFiles from '../UploadFiles/UploadFiles';
import { MdEdit } from "react-icons/md";

const Step3 = ({ formData, handleChange, handleBack, handleSubmit, handleFotoPerfilUpload, isEditingFotoPerfil, setIsEditingFotoPerfil }) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData); // Llama a la función handleSubmit pasándole los datos del formulario
  };
  
  return (
    <div>
      <h2>Perfil</h2>
      <form>
        <div className='foto-section'>
            <div className='foto-container'>
                {formData.fotoPerfil.length > 0 ? (
                    <img
                        src={formData.fotoPerfil}
                        alt="Foto de Perfil"
                        className="foto-perfil"
                    />
                ) : (
                    <div className="foto-placeholder">No se ha seleccionado ninguna foto de Perfil</div>
                )}
                <button type="button" className="edit-button" onClick={() => setIsEditingFotoPerfil(!isEditingFotoPerfil)}>
                    <MdEdit />
                </button>
            </div>
            <div className='foto-label-container'>
                <label className="label-type">Foto Perfil</label>
            </div>
            {isEditingFotoPerfil && (
                <div className='upload-section'>
                    <UploadFiles onUpload={handleFotoPerfilUpload} />
                </div>
            )}
        </div>
        <div className='VariosCampos'>
          <label>
            Nombre de usuario:
            <input
              type='text'
              name='nombreUsuario'
              value={formData.nombreUsuario}
              onChange={handleChange}
            />
          </label>
          <label>
            Correo:
            <input
              type='email'
              name='correo'
              value={formData.correo}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='VariosCampos'>
          <label>
            Contraseña:
            <input
              type='password'
              name='contraseña'
              value={formData.contraseña}
              onChange={handleChange}
            />
          </label>
          <label>
            Confirmar contraseña:
            <input
              type='password'
              name='confirmar_contraseña'
              value={formData.confirmar_contraseña}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='ButtonContainer'>
          <button type='button' onClick={handleBack}>Atrás</button>
          <button type='button' onClick={handleFormSubmit}>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Step3;