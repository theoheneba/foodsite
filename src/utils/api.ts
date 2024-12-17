import axios, { AxiosError } from 'axios';
import { API } from './constants';

const api = axios.create({
  headers: {
    'Authorization': `Bearer ${API.SMS.TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

interface APIError {
  error?: string;
  message?: string;
}

export const sendRequest = async <T>(
  url: string, 
  data: any
): Promise<T> => {
  try {
    const response = await api.post<T>(url, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<APIError>;
      const errorMessage = axiosError.response?.data?.error || 
                          axiosError.response?.data?.message || 
                          axiosError.message;
      console.error('API Error:', {
        status: axiosError.response?.status,
        data: axiosError.response?.data,
        message: errorMessage
      });
      throw new Error(errorMessage);
    }
    console.error('Unknown Error:', error);
    throw error;
  }
};