// import axios from 'axios';
// import config from '../config/config';

// export const getData = async () => {
//   try {
//     const response = await axios.get(`${config.apiUrl}/v1/`);
//     console.log('Dados recebidos:', response.data);
//   } catch (error) {
//     console.error('Erro ao carregar dados do dashboard:', error);
//   }
// };

import axios from 'axios';
import config from '../config/config';

// Criando uma instância personalizada do Axios
const api = axios.create({
  baseURL: config.apiUrl, // URL base da API
  timeout: 5000, // Define um tempo limite para as requisições (opcional)
});

// Interceptador para lidar com erros de rede
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ERR_NETWORK') {
      console.error('Erro de rede detectado:', error.message);
      // Adicione qualquer lógica adicional para lidar com erros de rede aqui
    }
    return Promise.reject(error);
  }
);

export default api;