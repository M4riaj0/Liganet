import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/booking'; // Cambia esta URL si es necesario

export const booking = async (query) => {
    try {
        const response = await axios.post(API_BASE_URL, query);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};
