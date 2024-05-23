import React, {useState} from "react";
import './Stepper.css';

const Stepper = ({steps, onSubmit}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleNext = () => {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const handleChange = (stepData) => {
        setFormData({...formData, ...stepData});
    }

    const handleSubmit = () => {
        onSubmit(formData);
    };

    return (
        <div>
            <div>
                {steps[currentStep].component}
            </div>
            <div className="button-container">
                {currentStep > 0 && <button className="button" onClick={handleBack}>Atrás</button>}
                {currentStep < steps.length - 1 && <button className="button" onClick={handleNext}>Siguiente</button>}
                {currentStep === steps.length - 1 && <button className="button" onClick={handleSubmit}>Confirmar</button>}
            </div>
        </div>
    );
};

export default Stepper;