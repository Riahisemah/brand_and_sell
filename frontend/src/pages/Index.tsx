
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 mt-20">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Bienvenue sur Brand&Sell</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Votre plateforme de Marketing digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Download Center Card */}
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-indigo-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Automatisation CRM
              </CardTitle>
              <CardDescription className="text-indigo-100">
                Accédez et téléchargez des ressources d'automatisation
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-700">
                Parcourez notre collection de ressources premium. Recherchez, triez et téléchargez des fichiers en toute simplicité.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-6">
                <div className="bg-slate-100 rounded p-3 text-center">
                  <p className="text-2xl font-bold text-indigo-600">10+</p>
                  <p className="text-xs text-slate-500">Ressources</p>
                </div>
                <div className="bg-slate-100 rounded p-3 text-center">
                  <p className="text-2xl font-bold text-indigo-600">100%</p>
                  <p className="text-xs text-slate-500">Accès Gratuit</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50">
              <Link to="/download-center" className="w-full">
                <Button variant="default" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Explorer les Fichiers <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Product Generator Card */}
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-emerald-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Générateur de Produit
              </CardTitle>
              <CardDescription className="text-emerald-100">
                Créez des tunnels de vente persuasifs
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-700">
                Générez des tunnels de vente personnalisés avec notre générateur de prompts intelligent. Boostez vos conversions instantanément.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-6">
                <div className="bg-slate-100 rounded p-3 text-center">
                  <p className="text-2xl font-bold text-emerald-600">Facile</p>
                  <p className="text-xs text-slate-500">À Utiliser</p>
                </div>
                <div className="bg-slate-100 rounded p-3 text-center">
                  <p className="text-2xl font-bold text-emerald-600">Sur Mesure</p>
                  <p className="text-xs text-slate-500">Prompts</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50">
              <Link to="/product-generator" className="w-full">
                <Button variant="default" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Commencer à Générer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
       <footer className="fixed bottom-0 w-full bg-slate-900 text-slate-400 py-2 mt-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Brand&Sell V1.0 | Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
