import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import api from "@/lib/axios";
import Navbar from "@/components/Navbar";
import { DocumentDuplicateIcon, ArrowDownTrayIcon, CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';

interface TemplateEditorProps {
  initialTemplate?: string;
}

const TemplateEditor: React.FC<TemplateEditorProps> = ({ initialTemplate = '' }) => {
  const [htmlCode, setHtmlCode] = useState(initialTemplate);
  const [isPreview] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTemplate = async () => {
      if (id) {
        try {
          // 1. Récupérer le chemin du template depuis l'API
          const apiResponse = await api.get(`/api/template/${id}`);
          const templatePath = apiResponse.data?.html;

          if (!templatePath) {
            throw new Error("Chemin du template non trouvé dans la réponse API");
          }

          // 2. Nettoyer le chemin (enlever le slash initial si présent)
          const cleanPath = templatePath.startsWith('/')
            ? templatePath.slice(1)
            : templatePath;

          // 3. Charger le contenu HTML depuis le dossier public
          const fileResponse = await fetch(`/${cleanPath}`);
          if (!fileResponse.ok) {
            throw new Error("Fichier template non trouvé");
          }

          const htmlContent = await fileResponse.text();
          setHtmlCode(htmlContent);
        } catch (error) {
          console.error("Erreur lors du chargement du template:", error);
          setHtmlCode(initialTemplate);
        } finally {
          setIsLoading(false);
        }
      } else {
        setHtmlCode(initialTemplate);
        setIsLoading(false);
      }
    };

    loadTemplate();
  }, [id, initialTemplate]);

  // Mettre à jour l'iframe lorsque le code change
  useEffect(() => {
    if (iframeRef.current && htmlCode) {
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(htmlCode);
        iframeDoc.close();
      }
    }
  }, [htmlCode]);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setHtmlCode(value);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      showNotification('Copié dans le presse-papier !');
    } catch (err) {
      showNotification('Échec de la copie');
    }
  };

  const downloadTemplate = () => {
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `template_${id || 'new'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('Téléchargement commencé');
  };

  const showNotification = (message: string) => {
    setNotification(message);
    const timer = setTimeout(() => setNotification(null), 3000);
    return () => clearTimeout(timer);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Chargement du template...</div>;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />

  <main className="flex-1 flex flex-col overflow-hidden pt-16">
        {/* Header */}
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            {id ? `Édition du Template #${id}` : 'Nouveau Template'}
          </h1>
          <div className="flex space-x-3">
            {/* <button
              onClick={() => setIsPreview(!isPreview)}
              className="flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded transition-colors"
            >
              {isPreview ? (
                <>
                  <CodeBracketIcon className="h-5 w-5" />
                  <span>Code</span>
                </>
              ) : (
                <>
                  <EyeIcon className="h-5 w-5" />
                  <span>Prévisualisation</span>
                </>
              )}
            </button> */}


            <button
              onClick={copyToClipboard}
              className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded transition-colors"
            >
              <DocumentDuplicateIcon className="h-5 w-5" />
              <span>Copier</span>
            </button>

            <button
              onClick={downloadTemplate}
              className="flex items-center space-x-1 bg-emerald-600 hover:bg-emerald-700 px-3 py-2 rounded transition-colors"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span>Télécharger</span>
            </button>
          </div>
        </div>

        {/* Notification */}
        {notification && (
          <div className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg animate-fade-in-out z-50">
            {notification}
          </div>
        )}

        {/* Editor/Preview */}
        {isPreview ? (
          <div className="flex-1 overflow-hidden">
            <iframe
              ref={iframeRef}
              title="template-preview"
              className="w-full h-full border-0 bg-white"
              sandbox="allow-same-origin allow-scripts"
            />
          </div>
        ) : (
          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 border-r border-gray-300">
              <Editor
                height="100%"
                defaultLanguage="html"
                value={htmlCode}
                onChange={handleEditorChange}
                theme="vs-dark"
                options={{
                  minimap: { enabled: true },
                  fontSize: 14,
                  wordWrap: 'on',
                  automaticLayout: true,
                }}
              />
            </div>
            <div className="flex-1">
              <iframe
                ref={iframeRef}
                title="template-preview"
                className="w-full h-full border-0 bg-white"
                sandbox="allow-same-origin allow-scripts"
              />
            </div>
          </div>
        )}
      </main>
      <footer className="fixed bottom-0 w-full bg-slate-900 text-slate-400 py-2 mt-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Brand&Sell V1.0 | Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default TemplateEditor;