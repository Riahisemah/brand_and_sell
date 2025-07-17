
import { useState } from "react";
import TemplateCard from "../components/TemplateCard";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { useEffect } from "react";
import api from "@/lib/axios";

interface Template {
    id: number;
    name: string;
    description?: string;
    category: string;
    image?: string;
    html: string;
}


const Templates = () => {
    const [templates, setTemplates] = useState<Template[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const categories = [
        { id: "all", name: "Tous" },
        { id: "landing", name: "Landing Page" },
        { id: "formation", name: "Formation" },

    ];


    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const res = await api.get("/api/templates");
                setTemplates(res.data);
            } catch (err) {
                setError("Erreur lors du chargement des templates");
            } finally {
                setLoading(false);
            }
        };

        fetchTemplates();
    }, []);

    const filteredTemplates = templates.filter((template: Template) => {
        const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            template.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            <Navbar />

            <main className="container mx-auto px-4 py-8">
                <div className="mt-20 mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Bibliothèque de Templates
                    </h1>
                    <p className="text-xl text-gray-600">
                        Choisissez parmi notre collection de templates professionnels
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                placeholder="Rechercher un template..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-500">Catégorie:</span>
                            {categories.map((category) => (
                                <Badge
                                    key={category.id}
                                    variant={selectedCategory === category.id ? "default" : "outline"}
                                    className="cursor-pointer"
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    {category.name}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Templates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {filteredTemplates.map((template) => (
                        <TemplateCard key={template.id} template={template} />
                    ))}
                </div>

                {filteredTemplates.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">
                            Aucun template trouvé pour votre recherche.
                        </p>
                        <Button
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedCategory("all");
                            }}
                            className="mt-4"
                            variant="outline"
                        >
                            Réinitialiser les filtres
                        </Button>
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

export default Templates;