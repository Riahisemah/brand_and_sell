import axios from "axios";

const api = axios.create({
// src/lib/api.tsF
 baseURL: import.meta.env.VITE_API_URL || '/api',
 headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});

// Intercepteur pour ajouter le token JWT automatiquement
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;