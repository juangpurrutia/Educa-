import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Define a URL base da API
const API_URL = process.env.REACT_APP_API_URL;

interface Campanha {
  id: number;
  titulo: string;
  descricao: string;
  conteudo: string;
  ativo: boolean;
  exibirNaCentral: boolean;
  usuarioId: number;
  criadoEm: string;
}

// Função para buscar campanhas da API
const fetchCampanhas = async (query: string = ''): Promise<Campanha[]> => {
  const url = `${API_URL}/campanhas/getcampanhas`;
  const response = await axios.get(url);
  return response.data;
};

// Hook customizado para usar campanhas
export const useCampaigns = (query: string = '') => {
  return useQuery<Campanha[], Error>({
    queryKey: ['campanhas', query],
    queryFn: () => fetchCampanhas(query),
  });
};