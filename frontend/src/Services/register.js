import axios from "axios";

const register = async (formData) => {
    try {
        console.log('Datos de registro:', formData);
        const response = await axios.post('http://localhost:8000/api/user', formData);
        const userData = response.data;
        console.log('Datos de registro:', userData);
        // localStorage.setItem('user', JSON.stringify(userData));
        return userData;
    } catch (error) {
        console.error('Error de registro:', error);
        throw error;
    }
};

export default register;