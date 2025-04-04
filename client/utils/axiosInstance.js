// utils/axiosInstance.js
import axios from 'axios';
import { getApiUrl } from './apiConfig';

const api = axios.create({
  baseURL: getApiUrl(), // Dynamically selects the API URL
  timeout: 10000,
});

export default api;