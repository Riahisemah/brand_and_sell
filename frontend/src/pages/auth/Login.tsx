import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
// import  loginImg from "../../../public/images/login.jpg"
// import  logoImg from "../../../public/images/Brand&Sell.png"

import api from "@/lib/axios";


const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // pour éviter le rechargement de page

        const { email, password } = formData;
        try {
            // 1. Login
            const loginResponse = await api.post("/api/login", { email, password });
            localStorage.setItem("token", loginResponse.data.token);

            // 2. Récupération du profil
            const userResponse = await api.get("/api/me"); // Le token est ajouté automatiquement

            console.log("✅ Connecté :", userResponse.data);
            navigate("/home");
        } catch (error) {
            console.error("❌ Erreur :", error.response?.data);
            setErrors("Identifiants incorrects");
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="flex flex-1 flex-col lg:flex-row">
                <div className="hidden lg:flex w-1/2 items-start justify-center  px-10">
                    <img src="public/images/Login.jpg"  alt="Illustration connexion" className="h-auto w-full" />
                </div>

                <div className="flex w-full lg:w-1/2 items-start justify-center px-4 py-2">
                    <div className="w-full max-w-md space-y-4">
                        <div className="flex justify-end">
                            <img src="public/images/Brand&Sell.png"  alt="Logo" className="h-auto w-40" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Connexion</h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Entrez vos identifiants pour accéder à votre compte
                            </p>
                        </div>

                        <form className="space-y-4  items-center" onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor="email">Adresse email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="vous@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <Label htmlFor="password">Mot de passe</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            {errors && <p className="text-red-500 text-sm">{errors}</p>}

                            <div className="text-right text-sm">
                                <Link to="/forgot-password" className="text-orange-500 hover:underline">
                                    Mot de passe oublié ?
                                </Link>
                            </div>

                            <Button type="submit" className="w-full hover:bg-orange-500">
                                Se connecter
                            </Button>
                        </form>

                        <p className="text-center text-sm text-slate-500">
                            Vous n'avez pas encore de compte ?{" "}
                            <Link to="/register" className="text-orange-500 hover:underline">
                                Inscrivez-vous ici
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <footer className="bg-slate-900 text-slate-400 py-2">
                <div className="container mx-auto px-4 text-center">
                    <p>© 2025 Brand&Sell V1.0 | Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
};

export default Login;
