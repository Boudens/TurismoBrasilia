const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: 'http://localhost:5187', // URL do backend
  headers: token ? {
    Authorization: `Bearer ${token}`,
  } : {},
});

export default api;

