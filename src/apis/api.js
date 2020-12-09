import axios from 'axios';

const api = axios.create({
    baseURL: "https://5fd07be81f23740016631b5a.mockapi.io/"
});

export default api;