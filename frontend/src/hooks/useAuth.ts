import axios from "axios";
import { useEffect, useState } from "react";

// Crée une instance Axios avec le token JWT
const api = axios.create({
  // src/lib/api.tsF
  baseURL: import.meta.env.VITE_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Ajoute automatiquement le token dans les headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/me"); // Pas besoin de /sanctum/csrf-cookie
        setUser(res.data);
      } catch (err) {
        console.error("❌ Erreur récupération utilisateur :", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  };

  return { user, loading, logout };
}
