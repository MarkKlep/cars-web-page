import axios from "axios";

const url = 'http://localhost:4200/cars';

export const CarService = {
    getAll: async () => {
        const response = await axios.get(url);

        return response.data;
    },
    getCar: async (id) => {
        const response = await axios.get(`${url}/?id=${id}`);
    
        return response.data[0];
    },
    create: async (car) => {
        return axios.post(url, car)
    },
    remove: async (id) => {
        return axios.delete(url + '/' + id);
    }
}