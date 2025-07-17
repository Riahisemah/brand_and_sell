import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import api from "@/lib/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";


const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);
    const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.password || !form.confirmPassword) {
    alert("Tous les champs sont obligatoires.");
    return;
  }

  if (form.password.length < 6) {
    alert("Le mot de passe doit contenir au moins 6 caractères.");
    return;
  }

  if (form.password !== form.confirmPassword) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }

  try {
    const response = await api.post("/api/register", {
      name: form.name,
      email: form.email,
      password: form.password,
      password_confirmation: form.confirmPassword,
    });

    console.log("Inscription réussie", response.data);
    navigate("/home");
  } catch (error: any) {
    console.error("Erreur d'inscription", error.response?.data || error.message);
    alert("Une erreur est survenue lors de l'inscription.");
  }
};


    return (
        <div className="flex flex-col min-h-screen bg-white" >
            <div className="flex flex-1 flex-col lg:flex-row">
                {/* Image gauche (desktop uniquement) */}
                <div className="hidden lg:flex w-1/2 items-start justify-center px-10">
                    <img
                        src="public/images/Signup.jpg"
                        alt="Illustration création de compte"
                        className="h-auto w-full"
                    />
                </div>

                {/* Formulaire droit */}
                <div className="flex w-full lg:w-1/2 items-start justify-center px-4 py-2">
                    <div className="w-full max-w-md space-y-4">
                        {/* Logo en haut à droite */}
                        <div className="flex justify-end">
                            <img
                                src="public/images/Brand&Sell.png"
                                alt="Logo"
                                className="h-auto w-40"
                            />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Créer un compte</h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Entrez vos informations pour commencer
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="name">Nom complet</Label>
                                <Input id="name" name="name" type="text" placeholder="Ex: Prénom Nom" value={form.name} onChange={handleChange} />
                            </div>

                            <div>
                                <Label htmlFor="email">Adresse email</Label>
                                <Input id="email" name="email" type="email" placeholder="vous@example.com" value={form.email} onChange={handleChange} />
                            </div>

                            <div>
                                <Label htmlFor="password">Mot de passe</Label>
                                <div className="relative">
                                    <Input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={form.password} onChange={handleChange} />
                                    <button type="button" onClick={togglePassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-600">
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                                <div className="relative">
                                    <Input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" value={form.confirmPassword} onChange={handleChange} />
                                    <button type="button" onClick={toggleConfirmPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-600">
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <Button type="submit" className="w-full hover:bg-orange-500">
                                S'inscrire
                            </Button>
                        </form>

                        <p className="text-center text-sm text-slate-500">
                            Vous avez déjà un compte ?{" "}
                            <Link to="/" className="text-orange-500 hover:underline">
                                Connectez-vous ici
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer global */}
            <footer className="bg-slate-900 text-slate-400 py-2">
                <div className="container mx-auto px-4 text-center">
                    <p>© 2025 Brand&Sell V1.0 | Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
};

export default Register;
