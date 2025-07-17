import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Sparkles, Code,Share, FileText, Home } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const { user, logout, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (loading || !user) return null; // Ne pas afficher la navbar si pas connecté

  return (
    <header className="bg-white fixed w-full top-0 left-0 right-0 z-50 shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + nom */}
          <Link to="/home" className="flex items-center gap-2">
            <img src="public/images/Brand&Sell.png" alt="Logo Brand&Sell" className="h-10 w-auto" />
            <span className="text-xl font-bold text-slate-900">Brand&Sell</span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/home" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600">
              <Home className="h-4 w-4" />
              Accueil
            </Link>
            <Link to="/download-center" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600">
              <Download className="h-4 w-4" />
              Automatisation CRM
            </Link>
            <Link to="/product-generator" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600">
              <Sparkles className="h-4 w-4" />
              Générateur de Prompt
            </Link>
            {/* <Link to="/templates" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600">

              <FileText className="h-4 w-4" />
              Templates

            </Link> */}
            <Link to="/post-generator" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600">

               <Share className="h-4 w-4" />
              Réseaux Sociaux

            </Link>
            <Button
              variant="ghost"
              onClick={logout}
              className="text-red-500 hover:text-red-700"
            >
              Se déconnecter
            </Button>
          </nav>

          {/* Bouton Menu Mobile */}
          <div className="block md:hidden">
            <Button variant="ghost" size="sm" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </Button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col items-start gap-4 py-4 px-2 bg-white shadow">
            <Link to="/home" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
              <Home className="h-4 w-4" />
              Accueil
            </Link>
            <Link to="/download-center" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
              <Download className="h-4 w-4" />
              Automatisation CRM
            </Link>
            <Link to="/product-generator" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
              <Sparkles className="h-4 w-4" />
              Générateur de Produit
            </Link>
             <Link to="/post-generator" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>

               <Share className="h-4 w-4" />
              Réseaux Sociaux

            </Link>
            <Button variant="ghost" onClick={() => { logout(); setIsMenuOpen(false); }} className="text-red-500 hover:text-red-700">
              Se déconnecter
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
