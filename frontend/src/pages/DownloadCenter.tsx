
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search, SortDesc, SortAsc, FileText, FileImage } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/axios";


const DownloadCenter = () => {
  type FileType = {
    id: number;
    name: string;
    description: string;
    tags: string[];
    size: string;
    file_type: string;
    date_added: string;
    downloads: number;
    download_url: string;
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [sortBy, setSortBy] = useState<"downloads" | "date_added" | "name">("downloads");
  const [files, setFiles] = useState<FileType[]>([]);
  const [filteredFiles, setFilteredFiles] = useState<FileType[]>(files);
  const { toast } = useToast();

 useEffect(() => {
  api
    .get("/api/files")
    .then((res) => setFiles(res.data))
    .catch(() =>
      toast({
        title: "Erreur",
        description: "Impossible de charger les fichiers",
        variant: "destructive",
      })
    );
}, []);

  useEffect(() => {
    const filtered = files.filter((file) =>
      file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "downloads") {
        return sortOrder === "asc" ? a.downloads - b.downloads : b.downloads - a.downloads;
      } else if (sortBy === "date_added") {
        return sortOrder === "asc"
          ? new Date(a.date_added).getTime() - new Date(b.date_added).getTime()
          : new Date(b.date_added).getTime() - new Date(a.date_added).getTime();
      } else {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
    });

    setFilteredFiles(sorted);
  }, [searchQuery, sortOrder, sortBy, files]);


const handleDownload = async (file: FileType) => {
  try {
    await api.patch(`/api/files/${file.id}/download`, null);

    setFiles((prev) =>
      prev.map((f) =>
        f.id === file.id ? { ...f, downloads: f.downloads + 1 } : f
      )
    );

    toast({
      title: "Téléchargement démarré",
      description: `${file.name} est en cours de téléchargement...`,
      duration: 3000,
    });
  } catch (error) {
    toast({
      title: "Erreur de téléchargement",
      description: "Impossible de notifier le serveur",
      variant: "destructive",
    });
  }
};
  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "PDF":
        return <FileText className="h-5 w-5 text-red-500" />;
      case "DOCX":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "XLSX":
        return <FileText className="h-5 w-5 text-green-500" />;
      case "JSON":
        return <FileText className="h-5 w-5 text-orange-500" />;
      case "ZIP":
        return <FileText className="h-5 w-5 text-yellow-500" />;
      case "JPG":
        return <FileImage className="h-5 w-5 text-purple-500" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 mt-20">
          <h1 className="text-3xl font-bold text-slate-900">Templates d'Automatisation CRM</h1>
          <p className="text-slate-600 mt-2">
            Parcourez et téléchargez notre collection de templates et outils premium d'automatisation CRM
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow z-0">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Rechercher par nom, description ou tags..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={sortBy} onValueChange={(value: "downloads" | "date_added" | "name") => setSortBy(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="downloads">Téléchargements</SelectItem>
                  <SelectItem value="date_added">Date d'ajout</SelectItem>
                  <SelectItem value="name">Nom</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={toggleSortOrder}>
                {sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {filteredFiles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600">Aucun fichier ne correspond à vos critères de recherche.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredFiles.map((file) => (
              <Card key={file.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{getFileIcon(file.file_type)}</div>
                      <CardTitle className="text-lg">{file.name}</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-slate-100">
                      {file.file_type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm mb-3">{file.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {file.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-500">
                    <div>Taille: {file.size}</div>
                    <div>Téléchargements: {file.downloads.toLocaleString()}</div>
                    <div>Ajouté le: {new Date(file.date_added).toLocaleString("fr-FR")
                    }</div>
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50">
                  <a
                    href={file.download_url}
                    download
                    className="w-full"
                    onClick={() => handleDownload(file)}
                  >
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" /> Télécharger
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
      <footer className="fixed bottom-0 w-full bg-slate-900 text-slate-400 py-2">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Brand&Sell V1.0 | Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default DownloadCenter;
