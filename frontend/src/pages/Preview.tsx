import React, { useEffect, useState } from "react";
import api from "@/lib/axios";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";


const TemplatePreview = () => {
  const { id } = useParams();
  const [htmlUrl, setHtmlUrl] = useState<string>("");

  useEffect(() => {
    api.get(`/api/template/${id}`)
      .then(response => {
        const htmlPath = response.data?.html;  // safe navigation
        if (htmlPath) {
          const url = htmlPath.startsWith("/") ? htmlPath : "/" + htmlPath;
          setHtmlUrl(url);
        } else {
          console.error("Le champ 'html' est manquant dans la réponse API");
          setHtmlUrl("");  // ou une valeur par défaut
        }
      })
      .catch(error => {
        console.error("Erreur lors de la récupération du template :", error);
      });
  }, [id]);

  if (!htmlUrl) return <div>
    <Navbar />
    <main className="container mx-auto px-4 py-12">

      <span>Chargement...</span>
    </main>
    <footer className="fixed bottom-0 w-full bg-slate-900 text-slate-400 py-2 mt-4">
      <div className="container mx-auto px-4 text-center">
        <p>© 2025 Brand&Sell V1.0 | Tous droits réservés.</p>
      </div>
    </footer>
  </div>;

  return (
    <div>
      <main className="container mx-auto px-4 py-12">
        <Navbar />
        <iframe
          src={htmlUrl}
          style={{ width: "100%", height: "90vh", border: "1px solid #ccc" }}
          title="Preview"
          sandbox="allow-scripts allow-same-origin"
        />
      </main>
      <footer className="fixed bottom-0 w-full bg-slate-900 text-slate-400 py-2 mt-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Brand&Sell V1.0 | Tous droits réservés.</p>
        </div>
      </footer>
    </div>

  );
};

export default TemplatePreview;
