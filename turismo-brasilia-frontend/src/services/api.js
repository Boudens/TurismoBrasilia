import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // URL do backend
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default api;