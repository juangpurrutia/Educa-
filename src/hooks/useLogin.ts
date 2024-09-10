import { useMutation } from '@tanstack/react-query';
import api from '../services/api';

interface LoginResponse {
  usuario: {
    id: number;
    nome: string;
    email: string;
    matricula: string;
    ativo: boolean;
    logadoEm: string;
  };
  token: string;
}

interface LoginData {
  matricula: string;
}

// Função para fazer login utilizando a instância personalizada do Axios
const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await api.post('/conta/login', data);
  return response.data;
};

// Hook customizado para login
export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginData>({
    mutationFn: login,
  });
};