import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useToast } from '@/hooks/use-toast';
import Navbar from "@/components/Navbar";
import api from "@/lib/axios";
import {
    Share2,
    Sparkles,
    History,
    Package,
    Check,
    Wand2,
    Copy,
    Save,
    FileText,
    Trash2,
    Calendar,
    Eye,
    EyeOff,
    Loader2
} from 'lucide-react';

// Types
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    features: string;
    tags: string;
    url: string;
}

interface PostFormData {
    productId: string;
    objective: 'awareness' | 'engagement' | 'conversion' | 'traffic';
    platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'tiktok';
    length: 'short' | 'medium' | 'long';
    tone: 'professional' | 'casual' | 'enthusiastic' | 'educational';
    includeHashtags: boolean;
    includeEmojis: boolean;
    customUrl: string;
}

interface GeneratedPost {
    id: string;
    productId: string;
    formData: PostFormData;
    prompt: string;
    generatedContent: string;
    createdAt: Date;
}



const PostsGenerator = () => {
    const { toast } = useToast();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [generatedPost, setGeneratedPost] = useState<GeneratedPost | null>(null);
    const [posts, setPosts] = useState<GeneratedPost[]>([]);
    const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set());
    const [isGenerating, setIsGenerating] = useState(false);

    // ✅ Tous les useState et useEffect doivent être ici
    const [ProductList, setProductList] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get('/api/user/products', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProductList(response.data);
            } catch (error) {
                console.error("Erreur lors du chargement des produits :", error);
            }
        };

        fetchProducts();
    }, []);

    const [formData, setFormData] = useState<PostFormData>({
        productId: '',
        objective: 'awareness',
        platform: 'instagram',
        length: 'medium',
        tone: 'casual',
        includeHashtags: true,
        includeEmojis: true,
        customUrl: ''
    });

    React.useEffect(() => {
        if (selectedProduct) {
            setFormData(prev => ({ ...prev, productId: selectedProduct.id }));
        }
    }, [selectedProduct]);

    const handleProductSelect = (product: Product) => {
        setSelectedProduct(product);
    };

    const generatePrompt = (selectedProduct: Product, formData: PostFormData) => {
        const platformContext = {
            facebook: "Facebook (format long acceptable, engagement communautaire)",
            instagram: "Instagram (visuel important, hashtags essentiels, stories possibles)",
            twitter: "X/Twitter (concis, maximum 280 caractères, trending topics)",
            linkedin: "LinkedIn (professionnel, B2B, expertise)",
            tiktok: "TikTok (jeune audience, tendances, créatif)"
        };

        const objectiveContext = {
            awareness: "sensibiliser et faire connaître le produit",
            engagement: "encourager les interactions, commentaires et partages",
            conversion: "inciter à l'achat ou à l'action",
            traffic: "diriger vers le site web ou la page produit"
        };

        const lengthGuide = {
            short: "un post concis et percutant",
            medium: "un post équilibré avec détails importants",
            long: "un post détaillé et informatif"
        };

        const toneGuide = {
            professional: "un ton professionnel et sérieux",
            casual: "un ton décontracté et accessible",
            enthusiastic: "un ton enthousiaste et énergique",
            educational: "un ton informatif et pédagogique"
        };

        const url = formData.customUrl || selectedProduct.url;

        return `Créé un post pour ${platformContext[formData.platform]} avec l'objectif de ${objectiveContext[formData.objective]}.

PRODUIT À PROMOUVOIR :
- Nom : ${selectedProduct.name}
- Description : ${selectedProduct.description}
- Prix : ${selectedProduct.price}€
- Catégorie : ${selectedProduct.category}
- Caractéristiques clés : ${selectedProduct.features}
- Tags : ${selectedProduct.tags}
- URL : ${url}

CONSIGNES :
- Plateforme : ${platformContext[formData.platform]}
- Longueur : ${lengthGuide[formData.length]}
- Ton : ${toneGuide[formData.tone]}
- Inclure des hashtags : ${formData.includeHashtags ? 'OUI' : 'NON'}
- Inclure des emojis : ${formData.includeEmojis ? 'OUI' : 'NON'}
- Objectif principal : ${objectiveContext[formData.objective]}

${formData.includeHashtags ? '\nInclus des hashtags pertinents pour maximiser la portée.' : ''}
${formData.includeEmojis ? '\nUtilise des emojis appropriés pour rendre le post plus engageant.' : ''}

Assure-toi que le post est optimisé pour ${formData.platform} et respecte les bonnes pratiques de cette plateforme.`;
    };

    const callClaude = async (prompt: string) => {
        const token = localStorage.getItem("token");

        const claudeRes = await api.post(
            "/api/generate-claude",
            { prompt },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const rawText = claudeRes.data?.content?.[0]?.text || '';
        console.log("Texte brut reçu de Claude :", rawText);
        // Stocke dans localStorage directement le JSON généré
        localStorage.setItem("generatedPost", rawText);

        return rawText;
    };

    const handleGeneratePost = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedProduct) {
            toast({
                title: "Erreur",
                description: "Veuillez sélectionner un produit",
                variant: "destructive"
            });
            return;
        }



        setIsGenerating(true);

        try {
            const prompt = generatePrompt(selectedProduct, formData);
            const generatedContent = await callClaude(prompt);

            const newPost: GeneratedPost = {
                id: Date.now().toString(),
                productId: selectedProduct.id,
                formData,
                prompt,
                generatedContent,
                createdAt: new Date()
            };

            setGeneratedPost(newPost);
            toast({
                title: "Post généré !",
                description: "Votre post a été créé avec succès",
            });
        } catch (error) {
            console.error('Error generating post:', error);
            toast({
                title: "Erreur",
                description: "Impossible de générer le post. Vérifiez votre clé API Claude.",
                variant: "destructive"
            });
        } finally {
            setIsGenerating(false);
        }
    };

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast({
                title: "Copié !",
                description: "Le contenu a été copié dans le presse-papiers",
            });
        } catch (err) {
            toast({
                title: "Erreur",
                description: "Impossible de copier le texte",
                variant: "destructive"
            });
        }
    };

    const handleSavePost = () => {
        if (generatedPost) {
            setPosts(prev => [generatedPost, ...prev]);
            toast({
                title: "Sauvegardé !",
                description: "Votre post a été sauvegardé avec succès",
            });
            setGeneratedPost(null);
        }
    };

    const deletePost = (postId: string) => {
        setPosts(prev => prev.filter(post => post.id !== postId));
        toast({
            title: "Supprimé",
            description: "Le post a été supprimé de l'historique",
        });
    };

    const toggleExpanded = (postId: string) => {
        const newExpanded = new Set(expandedPosts);
        if (newExpanded.has(postId)) {
            newExpanded.delete(postId);
        } else {
            newExpanded.add(postId);
        }
        setExpandedPosts(newExpanded);
    };

    const platformLabels = {
        facebook: 'Facebook',
        instagram: 'Instagram',
        twitter: 'X (Twitter)',
        linkedin: 'LinkedIn',
        tiktok: 'TikTok'
    };

    const objectiveLabels = {
        awareness: 'Notoriété',
        engagement: 'Engagement',
        conversion: 'Conversion',
        traffic: 'Trafic'
    };

    const lengthLabels = {
        short: 'Court (< 100 mots)',
        medium: 'Moyen (100-200 mots)',
        long: 'Long (> 200 mots)'
    };

    const toneLabels = {
        professional: 'Professionnel',
        casual: 'Décontracté',
        enthusiastic: 'Enthousiaste',
        educational: 'Éducatif'
    };

    return (<div>
        <Navbar />

        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-10">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                            <Share2 className="h-8 w-8 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Générateur de Posts Sociaux
                        </h1>
                    </div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Créez des posts engageants pour vos réseaux sociaux en quelques clics.
                        Sélectionnez un produit, personnalisez vos paramètres et générez directement votre post avec Claude.
                    </p>
                </div>

                <Tabs defaultValue="generator" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                        <TabsTrigger value="generator" className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4" />
                            Générateur
                        </TabsTrigger>
                        <TabsTrigger value="history" className="flex items-center gap-2">
                            <History className="h-4 w-4" />
                            Historique
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="generator" className="space-y-6">
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Product Selector */}
                            <div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Package className="h-5 w-5" />
                                            Sélectionner un produit
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            {ProductList.map((product) => (
                                                <Button
                                                    key={product.id}
                                                    variant={selectedProduct?.id === product.id ? "default" : "outline"}
                                                    className="w-full justify-between"
                                                    onClick={() => handleProductSelect(product)}
                                                >
                                                    <span>{product.name}</span>
                                                    {selectedProduct?.id === product.id && (
                                                        <Check className="h-4 w-4" />
                                                    )}
                                                </Button>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Post Form */}
                            <div>
                                <Card className="h-fit">
                                    <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                                        <CardTitle className="flex items-center gap-2">
                                            <Wand2 className="h-5 w-5" />
                                            Générateur de Post
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="p-6">
                                        <form onSubmit={handleGeneratePost} className="space-y-6">
                                            {selectedProduct && (
                                                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                                    <p className="text-sm font-medium text-blue-800">
                                                        Produit sélectionné: {selectedProduct.name}
                                                    </p>
                                                </div>
                                            )}

                                            <div className="grid gap-4">


                                                <div>
                                                    <Label htmlFor="objective">Objectif du post</Label>
                                                    <Select value={formData.objective} onValueChange={(value: any) =>
                                                        setFormData(prev => ({ ...prev, objective: value }))
                                                    }>
                                                        <SelectTrigger>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {Object.entries(objectiveLabels).map(([key, label]) => (
                                                                <SelectItem key={key} value={key}>{label}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div>
                                                    <Label htmlFor="platform">Plateforme</Label>
                                                    <Select value={formData.platform} onValueChange={(value: any) =>
                                                        setFormData(prev => ({ ...prev, platform: value }))
                                                    }>
                                                        <SelectTrigger>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {Object.entries(platformLabels).map(([key, label]) => (
                                                                <SelectItem key={key} value={key}>{label}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div>
                                                    <Label htmlFor="length">Longueur du post</Label>
                                                    <Select value={formData.length} onValueChange={(value: any) =>
                                                        setFormData(prev => ({ ...prev, length: value }))
                                                    }>
                                                        <SelectTrigger>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {Object.entries(lengthLabels).map(([key, label]) => (
                                                                <SelectItem key={key} value={key}>{label}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div>
                                                    <Label htmlFor="tone">Ton du message</Label>
                                                    <Select value={formData.tone} onValueChange={(value: any) =>
                                                        setFormData(prev => ({ ...prev, tone: value }))
                                                    }>
                                                        <SelectTrigger>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {Object.entries(toneLabels).map(([key, label]) => (
                                                                <SelectItem key={key} value={key}>{label}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div>
                                                    <Label htmlFor="customUrl">URL personnalisée (optionnel)</Label>
                                                    <Input
                                                        id="customUrl"
                                                        value={formData.customUrl}
                                                        onChange={(e) => setFormData(prev => ({ ...prev, customUrl: e.target.value }))}
                                                        placeholder="https://votre-url-personnalisee.com"
                                                    />
                                                </div>

                                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                    <div className="space-y-2">
                                                        <div className="flex items-center space-x-2">
                                                            <Switch
                                                                id="hashtags"
                                                                checked={formData.includeHashtags}
                                                                onCheckedChange={(checked) =>
                                                                    setFormData(prev => ({ ...prev, includeHashtags: checked }))
                                                                }
                                                            />
                                                            <Label htmlFor="hashtags">Inclure des hashtags</Label>
                                                        </div>

                                                        <div className="flex items-center space-x-2">
                                                            <Switch
                                                                id="emojis"
                                                                checked={formData.includeEmojis}
                                                                onCheckedChange={(checked) =>
                                                                    setFormData(prev => ({ ...prev, includeEmojis: checked }))
                                                                }
                                                            />
                                                            <Label htmlFor="emojis">Inclure des emojis</Label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                                                disabled={!selectedProduct || isGenerating}
                                            >
                                                {isGenerating ? (
                                                    <>
                                                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                                        Génération en cours...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Wand2 className="h-4 w-4 mr-2" />
                                                        Générer le post
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Generated Post Display */}
                            <div>
                                {generatedPost && (
                                    <div className="space-y-4">
                                        <Card>
                                            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-t-lg">
                                                <CardTitle className="flex items-center gap-2">
                                                    <Sparkles className="h-5 w-5" />
                                                    Post généré
                                                </CardTitle>
                                            </CardHeader>

                                            <CardContent className="p-6">
                                                <div className="space-y-4">
                                                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                                                        <p className="text-sm whitespace-pre-wrap">
                                                            {generatedPost.generatedContent}
                                                        </p>
                                                    </div>

                                                    <div className="flex gap-2">
                                                        <Button
                                                            onClick={() => copyToClipboard(generatedPost.generatedContent)}
                                                            variant="outline"
                                                            className="flex-1"
                                                        >
                                                            <Copy className="h-4 w-4 mr-2" />
                                                            Copier le post
                                                        </Button>

                                                        <Button
                                                            onClick={handleSavePost}
                                                            className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700"
                                                        >
                                                            <Save className="h-4 w-4 mr-2" />
                                                            Sauvegarder
                                                        </Button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                )}
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="history" className="space-y-6">
                        {/* Post History */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Historique des posts ({posts.length})
                            </h3>

                            {posts.length === 0 ? (
                                <Card>
                                    <CardContent className="p-8 text-center text-gray-500">
                                        <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                                        <p>Aucun post sauvegardé pour le moment</p>
                                    </CardContent>
                                </Card>
                            ) : (
                                posts.map((post) => {
                                    const isExpanded = expandedPosts.has(post.id);

                                    return (
                                        <Card key={post.id}>
                                            <CardHeader className="pb-3">
                                                <div className="flex justify-between items-start">
                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="outline">
                                                                {platformLabels[post.formData.platform]}
                                                            </Badge>
                                                            <Badge variant="secondary">
                                                                {objectiveLabels[post.formData.objective]}
                                                            </Badge>
                                                        </div>

                                                        <div className="flex items-center gap-1 text-sm text-gray-500">
                                                            <Calendar className="h-4 w-4" />
                                                            {post.createdAt.toLocaleDateString('fr-FR', {
                                                                day: 'numeric',
                                                                month: 'long',
                                                                year: 'numeric',
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            })}
                                                        </div>
                                                    </div>

                                                    <div className="flex gap-2">
                                                        <Collapsible open={isExpanded} onOpenChange={() => toggleExpanded(post.id)}>
                                                            <CollapsibleTrigger asChild>
                                                                <Button variant="outline" size="sm">
                                                                    {isExpanded ? (
                                                                        <EyeOff className="h-4 w-4" />
                                                                    ) : (
                                                                        <Eye className="h-4 w-4" />
                                                                    )}
                                                                </Button>
                                                            </CollapsibleTrigger>
                                                        </Collapsible>

                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => deletePost(post.id)}
                                                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </CardHeader>

                                            <Collapsible open={isExpanded} onOpenChange={() => toggleExpanded(post.id)}>
                                                <CollapsibleContent>
                                                    <CardContent className="pt-0 space-y-4">
                                                        <div>
                                                            <h4 className="font-medium text-gray-800 mb-2">Contenu du post :</h4>
                                                            <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                                                                <p className="text-sm whitespace-pre-wrap">
                                                                    {post.generatedContent}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="flex gap-2">
                                                            <Button
                                                                onClick={() => copyToClipboard(post.generatedContent)}
                                                                variant="outline"
                                                                size="sm"
                                                            >
                                                                <Copy className="h-4 w-4 mr-2" />
                                                                Copier
                                                            </Button>
                                                        </div>
                                                    </CardContent>
                                                </CollapsibleContent>
                                            </Collapsible>
                                        </Card>
                                    );
                                })
                            )}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
        <footer className="fixed bottom-0 w-full bg-slate-900 text-slate-400 py-2 mt-4">
            <div className="container mx-auto px-4 text-center">
                <p>© 2025 Brand&Sell V1.0 | Tous droits réservés.</p>
            </div>
        </footer>
    </div>
    );
};

export default PostsGenerator;
