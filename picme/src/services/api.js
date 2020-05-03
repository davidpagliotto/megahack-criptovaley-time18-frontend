import axios from 'axios';
import { envVariables } from '~/env';
import history from './history';

const api = axios.create({
  baseURL: envVariables.API_ADDRESS,
});

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       // TODO enviar para a tela de login
//       // TODO remover o estado do usuario na aplicação
//     }

//     return Promise.reject(error);
//   }
// );

export default api;
