import React, {useState} from "react";
import './Stepper.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Stepper = ({steps, onSubmit}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        //Inicializar los datos del formulario
        NombreCompleto: '',
        NumeroDocumento: '',
        LugarExpedicion: '',
        FechaNacimiento: '',
        Celular: '',
        Genero: '',
        Nacionalidad: '',
        Pais: '',
        Departamento: '',
        Direccion: '',
        Ciudad: '',
        Ejemplo1: '',
        Ejemplo2: '',

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


    return (
        <div className="Step-Content">
            { currentStep === 0 && (
                <Step1 formData={formData} handleChange={handleChange} handleNext={handleNext} />
            )}
            { currentStep === 1 && (
                <Step2 formData={formData} handleChange={handleChange} handleNext={handleNext} handleBack={handleBack} />
            )}
            { currentStep === 2 && (
                <Step3 formData={formData} handleChange={handleChange} handleBack={handleBack} handleSubmit={handleSubmit} />
            )}
        </div>
    );
};

export default Stepper;