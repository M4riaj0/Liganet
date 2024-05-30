import React from 'react';
import './SignUp.css';
import register from '../../Services/register';
import Stepper from '../../Components/Stepper/Stepper'
import Step1 from '../../Components/Stepper/Step1'
import Step2 from '../../Components/Stepper/Step2'
import Step3 from '../../Components/Stepper/Step3'

function SignUp() {
    const steps = [
        {name: 'Step 1', component: <Step1 />},
        {name: 'Step 2', component: <Step2 />},
        {name: 'Step 3', component: <Step3 />}
    ];

    const handleSubmit = (formData) => {
        console.log('Form submitted with data:',formData);
        register(formData)
        .then(() => {
            console.log('Usuario registrado correctamente');
        })
        .catch((error) => {
            console.error('Error al registrar usuario:', error);
        });
    }

    return (
        <div className='SignUp'>

            <div className="left-section">
            </div>

            <div className="Signup-right-section">
                <Stepper steps={steps} onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default SignUp;