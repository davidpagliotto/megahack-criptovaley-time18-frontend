import axios from 'axios';
import { envVariables } from '~/env';

const api = axios.create({
  baseURL: envVariables.API_ADDRESS,
});

export default api;
