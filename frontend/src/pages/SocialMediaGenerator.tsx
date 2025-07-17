import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import api from "@/lib/axios";
import {
    Plus,
    Copy,
    Sparkles,
    Edit3,
    Save,
    Trash2,
    Share,
    Eye,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    MessageSquare,
    Hash,
    Calendar,
    Target,
    Zap
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import Navbar from '../components/Navbar';


interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    targetAudience: string;
    benefits: string[];
    features: string[];
    createdAt: string;
}

interface SocialPost {
    id: string;
    productId: string;
    platform: string;
    content: string;
    hashtags: string[];
    tone: string;
    objective: string;
    generatedAt: string;
    isEdited: boolean;
}



const SocialMediaGenerator = () => {
    const { toast } = useToast();
    const [products, setProducts] = useState<Product[]>([]);
    const [socialPosts, setSocialPosts] = useState<SocialPost[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [editingPost, setEditingPost] = useState<string | null>(null);

    // Formulaire nouveau produit
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        targetAudience: '',
        benefits: '',
        features: ''
    });

    // Paramètres de génération
    const [generationParams, setGenerationParams] = useState({
        platform: 'instagram',
        tone: 'engageant',
        objective: 'engagement',
        includeHashtags: true,
        includeEmojis: true,
        length: 'moyen'
    });


    useEffect(() => {
        const token = localStorage.getItem('token');

        // Charger les posts du localStorage
        const savedPosts = localStorage.getItem('socialMediaPosts');
        if (savedPosts) {
            setSocialPosts(JSON.parse(savedPosts));
        }

        // Charger les produits depuis l'API (asynchrone)
        const fetchProducts = async () => {
            try {
                const response = await api.get('/api/user/products', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setProducts(response.data);
            } catch (error) {
                console.error("Erreur lors du chargement des produits :", error);
            }
        };

        fetchProducts();
    }, []);


    // Sauvegarder les produits
    const saveProducts = (updatedProducts: Product[]) => {
        setProducts(updatedProducts);
        localStorage.setItem('socialMediaProducts', JSON.stringify(updatedProducts));
    };

    // Sauvegarder les posts
    const savePosts = (updatedPosts: SocialPost[]) => {
        setSocialPosts(updatedPosts);
        localStorage.setItem('socialMediaPosts', JSON.stringify(updatedPosts));
    };

    // Ajouter un nouveau produit
    const handleAddProduct = () => {
        if (!newProduct.name || !newProduct.description) {
            toast({
                variant: "destructive",
                title: "Erreur",
                description: "Veuillez remplir au moins le nom et la description du produit.",
            });
            return;
        }

        const product: Product = {
            id: Date.now().toString(),
            ...newProduct,
            benefits: newProduct.benefits.split(',').map(b => b.trim()).filter(b => b),
            features: newProduct.features.split(',').map(f => f.trim()).filter(f => f),
            createdAt: new Date().toISOString()
        };

        saveProducts([...products, product]);
        setNewProduct({
            name: '',
            description: '',
            price: '',
            category: '',
            targetAudience: '',
            benefits: '',
            features: ''
        });
        setShowAddProduct(false);

        toast({
            title: "Produit ajouté",
            description: "Le produit a été ajouté avec succès.",
        });
    };

    // Supprimer un produit
    const handleDeleteProduct = (productId: string) => {
        const updatedProducts = products.filter(p => p.id !== productId);
        saveProducts(updatedProducts);

        // Supprimer aussi les posts associés
        const updatedPosts = socialPosts.filter(p => p.productId !== productId);
        savePosts(updatedPosts);

        if (selectedProduct?.id === productId) {
            setSelectedProduct(null);
        }

        toast({
            title: "Produit supprimé",
            description: "Le produit et ses posts associés ont été supprimés.",
        });
    };

    // Générer le prompt pour l'IA
    const generatePrompt = (product: Product) => {
        const platformSpecs = {
            instagram: "Instagram (format carré, visuel, hashtags importants, 2200 caractères max)",
            facebook: "Facebook (format long accepté, engagement communautaire, 63206 caractères max)",
            twitter: "Twitter/X (280 caractères max, concis, hashtags limités)",
            linkedin: "LinkedIn (professionnel, networking, 3000 caractères max)",
            youtube: "YouTube (description vidéo, SEO important, 5000 caractères max)",
            tiktok: "TikTok (jeune, tendance, hashtags viraux, 2200 caractères max)"
        };

        const toneSpecs = {
            professionnel: "ton professionnel et expert",
            engageant: "ton engageant et conversationnel",
            fun: "ton fun et décontracté",
            inspirant: "ton inspirant et motivant",
            educatif: "ton éducatif et informatif",
            urgent: "ton urgent avec appel à l'action fort"
        };

        const objectiveSpecs = {
            engagement: "générer de l'engagement (likes, commentaires, partages)",
            conversion: "convertir en ventes ou leads",
            awareness: "augmenter la notoriété de la marque",
            education: "éduquer l'audience sur le produit",
            community: "créer une communauté autour du produit"
        };

        const generatedPrompt = `Tu es un expert en marketing digital et copywriting pour les réseaux sociaux. 

Génère un post optimisé pour ${platformSpecs[generationParams.platform as keyof typeof platformSpecs]} avec les caractéristiques suivantes :

**PRODUIT :**
- Nom : ${product.name}
- Description : ${product.description}
- Prix : ${product.price || 'Non spécifié'}
- Catégorie : ${product.category || 'Non spécifiée'}
- Public cible : ${product.targetAudience || 'Non spécifié'}
- Bénéfices : ${product.benefits.join(', ') || 'Non spécifiés'}
- Fonctionnalités : ${product.features.join(', ') || 'Non spécifiées'}

**PARAMÈTRES DU POST :**
- Plateforme : ${generationParams.platform}
- Tonalité : ${toneSpecs[generationParams.tone as keyof typeof toneSpecs]}
- Objectif : ${objectiveSpecs[generationParams.objective as keyof typeof objectiveSpecs]}
- Longueur : ${generationParams.length} (court = 50-100 mots, moyen = 100-200 mots, long = 200+ mots)
- Inclure des emojis : ${generationParams.includeEmojis ? 'Oui' : 'Non'}
- Inclure des hashtags : ${generationParams.includeHashtags ? 'Oui' : 'Non'}

**INSTRUCTIONS :**
1. Crée un post accrocheur qui respecte les codes de la plateforme
2. Adapte le message au public cible du produit
3. Inclus un appel à l'action clair
4. ${generationParams.includeEmojis ? 'Utilise des emojis pertinents pour rendre le post plus engageant' : 'N\'utilise pas d\'emojis'}
5. ${generationParams.includeHashtags ? 'Ajoute 5-10 hashtags pertinents à la fin' : 'N\'ajoute pas de hashtags'}
6. Assure-toi que le contenu soit authentique et non promotionnel de manière agressive

Génère uniquement le contenu du post, sans explications supplémentaires.`;
        console.log("prompt111", generatedPrompt)
        return generatedPrompt
    };

    // Générer un post
    const handleGeneratePost = async () => {
        if (!selectedProduct) {
            toast({
                variant: "destructive",
                title: "Erreur",
                description: "Veuillez sélectionner un produit.",
            });
            return;
        }

        setIsGenerating(true);

        try {
            const prompt = generatePrompt(selectedProduct);
            console.log("Prompt envoyé à Claude:", generatePrompt(selectedProduct));

            const token = localStorage.getItem("token");

            // Appel réel à Claude
            const claudeRes = await api.post(
                "/api/generate-claude",
                { prompt },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            const rawText = claudeRes.data?.content?.[0]?.text || '';
            console.log("Texte généré par Claude:", rawText);

            // Extraction du contenu et des hashtags (vous devrez peut-être adapter cette partie selon le format de réponse de Claude)
            const generatedContent = rawText;
            const hashtags = generationParams.includeHashtags
                ? extractHashtags(rawText)
                : [];

            const newPost: SocialPost = {
                id: Date.now().toString(),
                productId: selectedProduct.id,
                platform: generationParams.platform,
                content: generatedContent,
                hashtags: hashtags,
                tone: generationParams.tone,
                objective: generationParams.objective,
                generatedAt: new Date().toISOString(),
                isEdited: false
            };

            savePosts([newPost, ...socialPosts]);

            toast({
                title: "Post généré",
                description: `Post ${generationParams.platform} généré avec succès par Claude!`,
            });

        } catch (error) {
            console.error("Erreur lors de la génération avec Claude:", error);
            toast({
                variant: "destructive",
                title: "Erreur",
                description: "Erreur lors de la génération du post avec Claude.",
            });
        } finally {
            setIsGenerating(false);
        }
    };

    // Fonction utilitaire pour extraire les hashtags du texte généré
    const extractHashtags = (text: string): string[] => {
        const hashtagRegex = /#\w+/g;
        const matches = text.match(hashtagRegex);
        return matches ? [...new Set(matches)] : []; // Supprime les doublons
    };
    // Fonction de génération simulée
    //     const generateMockContent = (product: Product, params: any) => {
    //         const emojis = params.includeEmojis;
    //         const platform = params.platform;

    //         let content = '';
    //         let hashtags: string[] = [];

    //         // Contenu basé sur la plateforme
    //         switch (platform) {
    //             case 'instagram':
    //                 content = `${emojis ? '✨ ' : ''}Découvrez ${product.name} ! ${emojis ? '🚀' : ''}

    // ${product.description}

    // ${product.benefits.length > 0 ? `${emojis ? '💡 ' : ''}Pourquoi choisir ${product.name} ?
    // ${product.benefits.slice(0, 3).map(b => `${emojis ? '• ' : '- '}${b}`).join('\n')}` : ''}

    // ${product.price ? `${emojis ? '💰 ' : ''}Prix : ${product.price}` : ''}

    // ${emojis ? '👆 ' : ''}Cliquez sur le lien dans notre bio pour en savoir plus !

    // ${emojis ? '💬 ' : ''}Dites-nous en commentaire ce que vous en pensez !`;

    //                 if (params.includeHashtags) {
    //                     hashtags = [`#${product.name.replace(/\s+/g, '')}`, `#${product.category || 'produit'}`, '#innovation', '#qualité', '#nouveauté'];
    //                 }
    //                 break;

    //             case 'linkedin':
    //                 content = `🔍 Présentation de ${product.name}

    // ${product.description}

    // Dans un marché en constante évolution, ${product.name} se distingue par :
    // ${product.benefits.slice(0, 3).map(b => `✓ ${b}`).join('\n')}

    // ${product.targetAudience ? `Idéal pour : ${product.targetAudience}` : ''}

    // ${product.price ? `Investissement : ${product.price}` : ''}

    // Qu'en pensez-vous ? Partagez votre avis en commentaire.

    // #Innovation #Business #Qualité`;
    //                 break;

    //             case 'twitter':
    //                 content = `${emojis ? '🚀 ' : ''}${product.name} : ${product.description.substring(0, 100)}...

    // ${product.benefits.length > 0 ? `${emojis ? '✅ ' : ''}${product.benefits[0]}` : ''}

    // ${product.price ? `${product.price} ` : ''}${emojis ? '👉 ' : ''}En savoir plus`;

    //                 if (params.includeHashtags) {
    //                     hashtags = [`#${product.category || 'innovation'}`, '#nouveauté'];
    //                 }
    //                 break;

    //             default:
    //                 content = `Découvrez ${product.name} !

    // ${product.description}

    // ${product.benefits.length > 0 ? `Avantages :
    // ${product.benefits.slice(0, 2).map(b => `- ${b}`).join('\n')}` : ''}

    // ${product.price ? `Prix : ${product.price}` : ''}`;
    //         }

    //         return { content, hashtags };
    //     };

    // Modifier un post
    const handleEditPost = (postId: string, newContent: string) => {
        const updatedPosts = socialPosts.map(post =>
            post.id === postId
                ? { ...post, content: newContent, isEdited: true }
                : post
        );
        savePosts(updatedPosts);
        setEditingPost(null);

        toast({
            title: "Post modifié",
            description: "Le post a été mis à jour avec succès.",
        });
    };

    // Supprimer un post
    const handleDeletePost = (postId: string) => {
        const updatedPosts = socialPosts.filter(p => p.id !== postId);
        savePosts(updatedPosts);

        toast({
            title: "Post supprimé",
            description: "Le post a été supprimé avec succès.",
        });
    };

    // Copier le contenu
    const handleCopyContent = (content: string, hashtags: string[]) => {
        const fullContent = hashtags.length > 0
            ? `${content}\n\n${hashtags.join(' ')}`
            : content;

        navigator.clipboard.writeText(fullContent);
        toast({
            title: "Copié",
            description: "Le contenu a été copié dans le presse-papier.",
        });
    };

    // Icône de plateforme
    const getPlatformIcon = (platform: string) => {
        switch (platform) {
            case 'instagram': return <Instagram className="h-4 w-4" />;
            case 'facebook': return <Facebook className="h-4 w-4" />;
            case 'twitter': return <Twitter className="h-4 w-4" />;
            case 'linkedin': return <Linkedin className="h-4 w-4" />;
            case 'youtube': return <Youtube className="h-4 w-4" />;
            case 'tiktok': return <MessageSquare className="h-4 w-4" />;
            default: return <Share className="h-4 w-4" />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <Navbar />
            <main className="container mx-auto px-4 py-6">
                <div className="mb-6 mt-20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                            <Share className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Générateur Réseaux Sociaux
                        </h1>
                    </div>
                    <p className="text-slate-600 ml-15">
                        Gérez vos produits et générez du contenu optimisé pour chaque plateforme
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Colonne 1: Gestion des produits */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <CardTitle className="flex items-center gap-2">
                                            <Target className="h-5 w-5" />
                                            Mes Produits
                                        </CardTitle>
                                        <CardDescription>
                                            Gérez vos produits et services
                                        </CardDescription>
                                    </div>
                                    <Button
                                        onClick={() => setShowAddProduct(!showAddProduct)}
                                        size="sm"
                                        className="bg-blue-600 hover:bg-blue-700"
                                    >
                                        <Plus className="h-4 w-4 mr-1" />
                                        Ajouter
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {showAddProduct && (
                                    <div className="space-y-4 mb-6 p-4 border border-blue-200 rounded-lg bg-blue-50">
                                        <div className="space-y-2">
                                            <Label htmlFor="productName">Nom du produit *</Label>
                                            <Input
                                                id="productName"
                                                value={newProduct.name}
                                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                                placeholder="Ex: Formation Marketing Digital"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="productDescription">Description *</Label>
                                            <Textarea
                                                id="productDescription"
                                                value={newProduct.description}
                                                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                                placeholder="Décrivez votre produit..."
                                                rows={3}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="productPrice">Prix</Label>
                                                <Input
                                                    id="productPrice"
                                                    value={newProduct.price}
                                                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                                    placeholder="Ex: 297€"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="productCategory">Catégorie</Label>
                                                <Input
                                                    id="productCategory"
                                                    value={newProduct.category}
                                                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                                                    placeholder="Ex: Formation"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="targetAudience">Public cible</Label>
                                            <Input
                                                id="targetAudience"
                                                value={newProduct.targetAudience}
                                                onChange={(e) => setNewProduct({ ...newProduct, targetAudience: e.target.value })}
                                                placeholder="Ex: Entrepreneurs, freelances"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="benefits">Bénéfices (séparés par des virgules)</Label>
                                            <Textarea
                                                id="benefits"
                                                value={newProduct.benefits}
                                                onChange={(e) => setNewProduct({ ...newProduct, benefits: e.target.value })}
                                                placeholder="Ex: Gain de temps, Augmentation des ventes, Simplicité d'utilisation"
                                                rows={2}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="features">Fonctionnalités (séparées par des virgules)</Label>
                                            <Textarea
                                                id="features"
                                                value={newProduct.features}
                                                onChange={(e) => setNewProduct({ ...newProduct, features: e.target.value })}
                                                placeholder="Ex: 10 modules vidéo, Support 24/7, Certificat inclus"
                                                rows={2}
                                            />
                                        </div>

                                        <div className="flex gap-2">
                                            <Button onClick={handleAddProduct} className="bg-green-600 hover:bg-green-700">
                                                <Save className="h-4 w-4 mr-1" />
                                                Enregistrer
                                            </Button>
                                            <Button variant="outline" onClick={() => setShowAddProduct(false)}>
                                                Annuler
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    {products.length === 0 ? (
                                        <div className="text-center py-8 text-gray-500">
                                            <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                            <p>Aucun produit ajouté</p>
                                            <p className="text-sm">Commencez par ajouter un produit</p>
                                        </div>
                                    ) : (
                                        products.map((product) => (
                                            <div
                                                key={product.id}
                                                className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedProduct?.id === product.id
                                                    ? 'border-blue-500 bg-blue-50'
                                                    : 'border-gray-200 hover:border-blue-300'
                                                    }`}
                                                onClick={() => setSelectedProduct(product)}
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-1">
                                                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                                                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                                            {product.description}
                                                        </p>
                                                        <div className="flex items-center gap-2 mt-2">
                                                            {product.price && (
                                                                <Badge variant="outline" className="text-xs">
                                                                    {product.price}
                                                                </Badge>
                                                            )}
                                                            {product.category && (
                                                                <Badge variant="outline" className="text-xs">
                                                                    {product.category}
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDeleteProduct(product.id);
                                                        }}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Colonne 2: Génération de contenu */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Zap className="h-5 w-5" />
                                    Générateur de Contenu
                                </CardTitle>
                                <CardDescription>
                                    Configurez et générez du contenu optimisé
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {!selectedProduct ? (
                                    <div className="text-center py-8 text-gray-500">
                                        <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                        <p>Sélectionnez un produit</p>
                                        <p className="text-sm">pour commencer la génération</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                            <h3 className="font-medium text-blue-900 mb-2">Produit sélectionné</h3>
                                            <p className="text-blue-800">{selectedProduct.name}</p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <Label>Plateforme</Label>
                                                <Select
                                                    value={generationParams.platform}
                                                    onValueChange={(value) => setGenerationParams({ ...generationParams, platform: value })}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="instagram">Instagram</SelectItem>
                                                        <SelectItem value="facebook">Facebook</SelectItem>
                                                        <SelectItem value="twitter">Twitter/X</SelectItem>
                                                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                                                        <SelectItem value="youtube">YouTube</SelectItem>
                                                        <SelectItem value="tiktok">TikTok</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label>Tonalité</Label>
                                                    <Select
                                                        value={generationParams.tone}
                                                        onValueChange={(value) => setGenerationParams({ ...generationParams, tone: value })}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="professionnel">Professionnel</SelectItem>
                                                            <SelectItem value="engageant">Engageant</SelectItem>
                                                            <SelectItem value="fun">Fun</SelectItem>
                                                            <SelectItem value="inspirant">Inspirant</SelectItem>
                                                            <SelectItem value="educatif">Éducatif</SelectItem>
                                                            <SelectItem value="urgent">Urgent</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label>Objectif</Label>
                                                    <Select
                                                        value={generationParams.objective}
                                                        onValueChange={(value) => setGenerationParams({ ...generationParams, objective: value })}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="engagement">Engagement</SelectItem>
                                                            <SelectItem value="conversion">Conversion</SelectItem>
                                                            <SelectItem value="awareness">Notoriété</SelectItem>
                                                            <SelectItem value="education">Éducation</SelectItem>
                                                            <SelectItem value="community">Communauté</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label>Longueur du contenu</Label>
                                                <Select
                                                    value={generationParams.length}
                                                    onValueChange={(value) => setGenerationParams({ ...generationParams, length: value })}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="court">Court (50-100 mots)</SelectItem>
                                                        <SelectItem value="moyen">Moyen (100-200 mots)</SelectItem>
                                                        <SelectItem value="long">Long (200+ mots)</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={generationParams.includeEmojis}
                                                        onChange={(e) => setGenerationParams({ ...generationParams, includeEmojis: e.target.checked })}
                                                        className="rounded"
                                                    />
                                                    <span className="text-sm">Inclure des emojis</span>
                                                </label>

                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={generationParams.includeHashtags}
                                                        onChange={(e) => setGenerationParams({ ...generationParams, includeHashtags: e.target.checked })}
                                                        className="rounded"
                                                    />
                                                    <span className="text-sm">Inclure des hashtags</span>
                                                </label>
                                            </div>

                                            <Button
                                                onClick={handleGeneratePost}
                                                disabled={isGenerating}
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                            >
                                                {isGenerating ? (
                                                    <>
                                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                        Génération en cours...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Sparkles className="h-4 w-4 mr-2" />
                                                        Générer le contenu
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </CardContent>
                        </Card>

                        {/* Prompt généré */}
                        {selectedProduct && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MessageSquare className="h-5 w-5" />
                                        Prompt généré
                                    </CardTitle>
                                    <CardDescription>
                                        Copiez ce prompt pour l'utiliser avec votre IA
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-gray-50 rounded-md p-4 max-h-60 overflow-auto text-sm font-mono">
                                        {generatePrompt(selectedProduct)}
                                    </div>
                                    <Button
                                        onClick={() => {
                                            navigator.clipboard.writeText(generatePrompt(selectedProduct));
                                            toast({
                                                title: "Copié",
                                                description: "Le prompt a été copié dans le presse-papier.",
                                            });
                                        }}
                                        variant="outline"
                                        className="w-full mt-4"
                                    >
                                        <Copy className="h-4 w-4 mr-2" />
                                        Copier le prompt
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Colonne 3: Posts générés */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5" />
                                    Posts Générés
                                </CardTitle>
                                <CardDescription>
                                    Historique de vos contenus générés
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {socialPosts.length === 0 ? (
                                        <div className="text-center py-8 text-gray-500">
                                            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                            <p>Aucun post généré</p>
                                            <p className="text-sm">Vos contenus apparaîtront ici</p>
                                        </div>
                                    ) : (
                                        socialPosts.map((post) => {
                                            const product = products.find(p => p.id === post.productId);
                                            return (
                                                <Card key={post.id} className="border border-gray-200">
                                                    <CardHeader className="pb-3">
                                                        <div className="flex justify-between items-start">
                                                            <div className="flex items-center gap-2">
                                                                {getPlatformIcon(post.platform)}
                                                                <span className="font-medium capitalize">{post.platform}</span>
                                                                {post.isEdited && (
                                                                    <Badge variant="outline" className="text-xs">
                                                                        Modifié
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                            <div className="flex gap-1">
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    onClick={() => setEditingPost(post.id)}
                                                                >
                                                                    <Edit3 className="h-4 w-4" />
                                                                </Button>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    onClick={() => handleCopyContent(post.content, post.hashtags)}
                                                                >
                                                                    <Copy className="h-4 w-4" />
                                                                </Button>
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    onClick={() => handleDeletePost(post.id)}
                                                                    className="text-red-500 hover:text-red-700"
                                                                >
                                                                    <Trash2 className="h-4 w-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className="text-sm text-gray-600">
                                                            {product?.name} • {new Date(post.generatedAt).toLocaleDateString()}
                                                        </div>
                                                    </CardHeader>
                                                    <CardContent className="pt-0">
                                                        {editingPost === post.id ? (
                                                            <div className="space-y-3">
                                                                <Textarea
                                                                    value={post.content}
                                                                    onChange={(e) => {
                                                                        const updatedPosts = socialPosts.map(p =>
                                                                            p.id === post.id ? { ...p, content: e.target.value } : p
                                                                        );
                                                                        setSocialPosts(updatedPosts);
                                                                    }}
                                                                    rows={6}
                                                                    className="text-sm"
                                                                />
                                                                <div className="flex gap-2">
                                                                    <Button
                                                                        size="sm"
                                                                        onClick={() => handleEditPost(post.id, post.content)}
                                                                        className="bg-green-600 hover:bg-green-700"
                                                                    >
                                                                        <Save className="h-4 w-4 mr-1" />
                                                                        Sauvegarder
                                                                    </Button>
                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline"
                                                                        onClick={() => setEditingPost(null)}
                                                                    >
                                                                        Annuler
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <div className="text-sm whitespace-pre-wrap mb-3">
                                                                    {post.content}
                                                                </div>
                                                                {post.hashtags.length > 0 && (
                                                                    <div className="flex flex-wrap gap-1">
                                                                        {post.hashtags.map((hashtag, index) => (
                                                                            <Badge key={index} variant="secondary" className="text-xs">
                                                                                <Hash className="h-3 w-3 mr-1" />
                                                                                {hashtag.replace('#', '')}
                                                                            </Badge>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </>
                                                        )}
                                                    </CardContent>
                                                </Card>
                                            );
                                        })
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SocialMediaGenerator;