import axios from 'axios';

const baseURL = 'https://test-backend.esverito.com/api/car';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

const API = axios.create({
    baseURL,
    headers
});

export default API;
