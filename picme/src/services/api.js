import axios from 'axios';

const api = axios.create({
  baseURL: 'https://a918d60c.ngrok.io/',
});

export default api;
