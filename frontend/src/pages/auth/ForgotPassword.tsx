import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Image gauche */}
        <div className="hidden lg:flex w-1/2 items-center justify-center px-10">
          <img
            src="src/images/password-reset.jpg"
            alt="Illustration mot de passe oublié"
            className="w-full object-contain"
          />
        </div>

        {/* Formulaire */}
        <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12">
          <div className="w-full max-w-md space-y-8">
            {/* Logo en haut à droite */}
            <div className="flex justify-end">
              <img
                src="src/images/Brand&Sell.png"
                alt="Logo"
                className="h-auto w-40"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">Mot de passe oublié ?</h2>
              <p className="mt-2 text-sm text-slate-600">
                Entrez votre adresse email pour recevoir un lien de réinitialisation.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <Label htmlFor="email">Adresse email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@example.com"
                />
              </div>

              <Button type="submit" className="w-full hover:bg-orange-500">
                Envoyer le lien de réinitialisation
              </Button>
            </form>

            <p className="text-center text-sm text-slate-500">
              <Link to="/login" className="text-orange-500 hover:underline">
                Retour à la connexion
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-2">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Brand&Sell V1.0 | Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default ForgotPassword;
