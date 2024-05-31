import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Cambia esta URL si es necesario

export const fetchJugadores = async (query) => {
    try {
        console.log("query::", query);
        const url = query ? `/user/name/${query}` : '/user';
        const response = await axios.get(`${API_BASE_URL}${url}`);
        console.log("jugadores::", response.data);
        return response.data;
    } catch (error) {
        console.error('Error al obtener jugadores:', error);
        throw error;
    }
};

export const fetchTorneos = async (query) => {
    try{
        const url = query ? `/tournament/name/${query}` : '/tournament';
        const response = await axios.get(`${API_BASE_URL}${url}`);
        console.log("torneos::", response.data);
        return response.data;
    }catch (error) {
        console.error('Error al obtener torneos:', error);
        throw error;
    }
};

export const fetchEquipos = async (query) => {
    try{
        const url = query ? `/team/name/${query}` : '/team';
        const response = await axios.get(`${API_BASE_URL}${url}`);
        console.log("equipos::", response.data);
        return response.data;
    }catch (error) {
        console.error('Error al obtener equipos:', error);
        throw error;
    }
};

export const fetchCanchas = async (query) => {
    try{
        const url = query ? `/fields/name/${query}` : '/fields';
        const response = await axios.get(`${API_BASE_URL}${url}`);
        console.log("canchas::", response.data);
        return response.data;
    }catch (error) {
        console.error('Error al obtener canchas:', error);
        throw error;
    }
};
