import React, {useState} from "react";
import './Stepper.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Stepper = ({steps, onSubmit}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isEditingFoto, setIsEditingFoto] = useState(true);
    const [isEditingFotoPerfil, setIsEditingFotoPerfil] = useState(true);

    const [formData, setFormData] = useState({
        //Inicializar los datos del formulario
        nombreCompleto: '',
        cedula: '',
        lugarExpedicion: '',
        fechaNacimiento: '',
        celular: 0,
        genero: '',
        nacionalidad: '',
        pais: '',
        departamento: '',
        direccion: '',
        ciudad: '',
        altura: '',
        añosExperiencia: '',
        nivelCompetencia: '',
        numeroEquipacion: '',
        perfilDominante: '',
        peso: '',
        piernaDominante: '',
        posicionPrincipal: '',
        posicionSecundaria: '',
        nombreUsuario: '',
        correo: '',
        contraseña: '',
        fotoPerfil: '',
        fotoUrl: ''
    });

    const handleNext = () => {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Manejar el envio del formularioooo
        console.log('Datos del formulario:', formData);
    };

    const handleFotoPerfilUpload = (url) => {
        setFormData((prevData) => ({
          ...prevData,
          fotoPerfil: url
        }));
        setIsEditingFotoPerfil(false);
      };
      
      const handleFotoUrlUpload = (url) => {
        setFormData((prevData) => ({
          ...prevData,
          fotoUrl: url
        }));
        setIsEditingFoto(false);
      };


    return (
        <div className="Step-Content">
            { currentStep === 0 && (
                <Step1 formData={formData} handleChange={handleChange} handleNext={handleNext} />
            )}
            { currentStep === 1 && (
                <Step2 formData={formData} handleChange={handleChange} handleNext={handleNext} handleBack={handleBack} handleFotoUrlUpload={handleFotoUrlUpload} isEditingFoto={isEditingFoto}  setIsEditingFoto={setIsEditingFoto}/>
            )}
            { currentStep === 2 && (
                <Step3 formData={formData} handleChange={handleChange} handleBack={handleBack} handleSubmit={onSubmit} handleFotoPerfilUpload={handleFotoPerfilUpload }   isEditingFotoPerfil={isEditingFotoPerfil} setIsEditingFotoPerfil={setIsEditingFotoPerfil} />
            )}
        </div>
    );
};

export default Stepper;