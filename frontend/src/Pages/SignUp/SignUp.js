import React from 'react';
import LogoImage from '../../Images/LiganetCanchas.jpeg';
import './SignUp.css';

function SignUp() {
    return (
        <div className='Main'>

            <div className="image-section">
                <img src={LogoImage} alt="Login Image" className="logo-image" />
            </div>

            <div className="form-section">
                <h2>Sign Up</h2>
                <form className='Formulario'>
                    <div className="input-field">
                        <p className='nombreInput'>Username</p>
                        <input className='input'
                            type="text"
                            name="username"
                            placeholder="Username"
                            required
                        />
                    </div>

                    <div className="input-field">
                        <p className='nombreInput'>Email</p>
                        <input className='input'
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div className="input-field">
                        <p className='nombreInput'>Password</p>
                        <input className='input'
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div className="input-field">
                        <p className='nombreInput'>Confirm Password</p>
                        <input className='input'
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            required
                        />
                    </div>

                    <button type="submit" className='button'>Sign Up</button>
                </form>
                </div>
        </div>
    );
}

export default SignUp;