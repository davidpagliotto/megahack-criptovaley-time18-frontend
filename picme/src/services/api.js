import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.228.44.240:8080/',
});

export default api;
