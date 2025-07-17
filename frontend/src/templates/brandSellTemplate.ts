import { Template, TemplateSection } from '../types/templates';

const brandSellSections: TemplateSection[] = [
  {
    id: "seo",
    title: "SEO",
    icon: "🔍",
    description: "Optimisation pour les moteurs de recherche",
    visible: true,
    order: 0,
    fields: [
      {
        id: "title",
        label: "Titre SEO (balise title)",
        type: "text",
        placeholder: "Ex: Brand&Sell - Marketing Digital Simplifié",
        required: true,
        defaultValue: "Brand&Sell - Marketing Digital Simplifié pour Entrepreneurs"
      },
      {
        id: "metaDescription",
        label: "Meta Description",
        type: "textarea",
        placeholder: "Description de 150-160 caractères pour les moteurs de recherche",
        defaultValue: "Centralisez vos outils marketing en une solution tout-en-un. Économisez 70% sur vos coûts et gagnez 3h/jour avec Brand&Sell !"
      },
      {
        id: "keywords",
        label: "Mots-clés (séparés par des virgules)",
        type: "textarea",
        placeholder: "Ex: marketing digital, automation, CRM, entrepreneurs",
        defaultValue: "marketing digital, automation, CRM, entrepreneurs, freelancers, outils marketing"
      },
      {
        id: "ogTitle",
        label: "Titre Open Graph (réseaux sociaux)",
        type: "text",
        placeholder: "Titre pour le partage sur les réseaux sociaux",
        defaultValue: "Brand&Sell - Marketing Digital Simplifié"
      },
      {
        id: "ogDescription",
        label: "Description Open Graph",
        type: "textarea",
        placeholder: "Description pour le partage sur les réseaux sociaux",
        defaultValue: "La solution tout-en-un qui révolutionne le marketing digital des entrepreneurs"
      }
    ]
  },
  {
    id: "branding",
    title: "Marque & Couleurs",
    icon: "🎨",
    description: "Identité de marque et palette de couleurs",
    visible: true,
    order: 1,
    fields: [
      {
        id: "companyName",
        label: "Nom de l'entreprise",
        type: "text",
        placeholder: "Ex: Brand&Sell",
        required: true,
        defaultValue: "Brand&Sell"
      },
      {
        id: "tagline",
        label: "Slogan",
        type: "text",
        placeholder: "Ex: Marketing Digital Simplifié",
        defaultValue: "Marketing Digital Simplifié pour Entrepreneurs"
      },
      {
        id: "logo",
        label: "Logo (URL)",
        type: "image",
        placeholder: "https://example.com/logo.png",
        defaultValue: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=100&q=80"
      },
      {
        id: "logoAlt",
        label: "Texte alternatif du logo",
        type: "text",
        placeholder: "Logo de l'entreprise",
        defaultValue: "Logo de l'entreprise"
      },
      {
        id: "primaryColor",
        label: "Couleur Principale",
        type: "color",
        defaultValue: "#3b82f6"
      },
      {
        id: "secondaryColor",
        label: "Couleur Secondaire",
        type: "color",
        defaultValue: "#8b5cf6"
      },
      {
        id: "accentColor",
        label: "Couleur d'Accent",
        type: "color",
        defaultValue: "#f59e0b"
      },
      {
        id: "backgroundColor",
        label: "Couleur de Fond",
        type: "color",
        defaultValue: "#ffffff"
      },
      {
        id: "textColor",
        label: "Couleur du Texte",
        type: "color",
        defaultValue: "#1f2937"
      }
    ]
  },
  {
    id: "hero",
    title: "Hero",
    icon: "🏠",
    description: "Section d'en-tête principale",
    visible: true,
    order: 2,
    fields: [
      {
        id: "title",
        label: "Titre Principal",
        type: "text",
        placeholder: "Ex: Brand&Sell : Votre Marketing Digital Simplifié",
        required: true,
        defaultValue: "Brand&Sell : Votre Marketing Digital Simplifié"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Décrivez brièvement votre offre",
        defaultValue: "Fini le casse-tête des multiples outils ! Centralisez, automatisez et boostez votre business avec une solution tout-en-un révolutionnaire."
      },
      {
        id: "cta",
        label: "Texte du Bouton CTA",
        type: "text",
        placeholder: "Ex: AUDIT OFFERT - Réservez Maintenant !",
        defaultValue: "🎯 AUDIT OFFERT - Réservez Maintenant !"
      },
      {
        id: "image",
        label: "Image Hero",
        type: "image",
        placeholder: "https://example.com/hero.jpg",
        defaultValue: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Entrepreneur utilisant Brand&Sell"
      }
    ]
  },
  {
    id: "problemes",
    title: "Problèmes",
    icon: "⚠️",
    description: "Problèmes que vous résolvez",
    visible: true,
    order: 3,
    fields: [
      {
        id: "title",
        label: "Titre de la Section",
        type: "text",
        placeholder: "Ex: Vous en avez marre de jongler entre 15 outils différents ?",
        defaultValue: "Vous en avez marre de jongler entre 15 outils différents ?"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez les problèmes",
        defaultValue: "En tant qu'entrepreneur ou freelance, vous perdez un temps précieux à naviguer entre vos outils de marketing digital..."
      },
      {
        id: "problems",
        label: "Liste des Problèmes",
        type: "array",
        arrayItemTemplate: [
          {
            id: "title",
            label: "Titre du problème",
            type: "text",
            placeholder: "Ex: Perte de Temps Massive",
            required: true,
            defaultValue: ""
          },
          {
            id: "description",
            label: "Description",
            type: "textarea",
            placeholder: "Décrivez le problème en détail",
            defaultValue: ""
          }
        ],
        defaultValue: [
          {
            title: "Perte de Temps Massive",
            description: "Vous passez plus de temps à gérer vos outils qu'à développer votre business. Entre les connexions, les synchronisations et les bugs..."
          },
          {
            title: "Coûts Qui S'accumulent",
            description: "15 abonnements différents = factures qui explosent ! Sans compter les intégrations payantes et les formations pour chaque outil."
          }
        ]
      },
      {
        id: "image",
        label: "Image de la section",
        type: "image",
        placeholder: "https://example.com/problems.jpg",
        defaultValue: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Frustration des entrepreneurs avec multiples outils"
      }
    ]
  },
  {
    id: "solution",
    title: "Solution",
    icon: "✅",
    description: "Votre solution et ses avantages",
    visible: true,
    order: 4,
    fields: [
      {
        id: "title",
        label: "Titre de la Section",
        type: "text",
        placeholder: "Ex: Brand&Sell : LA Solution Tout-en-Un",
        defaultValue: "Brand&Sell : LA Solution Tout-en-Un"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez votre solution",
        defaultValue: "Centralisez tous vos outils marketing en un seul endroit. Simplifiez votre quotidien et multipliez vos résultats !"
      },
      {
        id: "benefits",
        label: "Avantages",
        type: "array",
        arrayItemTemplate: [
          {
            id: "icon",
            label: "Icône",
            type: "text",
            placeholder: "Ex: ⚡",
            defaultValue: "✨"
          },
          {
            id: "title",
            label: "Titre",
            type: "text",
            placeholder: "Ex: Coûts Maîtrisés",
            required: true,
            defaultValue: ""
          },
          {
            id: "description",
            label: "Description",
            type: "textarea",
            placeholder: "Décrivez cet avantage",
            defaultValue: ""
          }
        ],
        defaultValue: [
          {
            icon: "⚡",
            title: "Coûts Maîtrisés",
            description: "Économisez jusqu'à 70% sur vos outils marketing. Un seul abonnement remplace tous vos outils actuels."
          },
          {
            icon: "👥",
            title: "Un Seul Interlocuteur",
            description: "Fini les appels vers 10 supports différents. Une équipe dédiée pour tous vos besoins marketing digital."
          },
          {
            icon: "🤖",
            title: "IA Intégrée",
            description: "Intelligence artificielle qui automatise vos tâches répétitives et optimise vos campagnes en permanence."
          }
        ]
      },
      {
        id: "image",
        label: "Image de la section",
        type: "image",
        placeholder: "https://example.com/solution.jpg",
        defaultValue: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Dashboard Brand&Sell - Solution tout-en-un"
      }
    ]
  },
  {
    id: "fonctionnalites",
    title: "Fonctionnalités",
    icon: "⚙️",
    description: "Fonctionnalités principales",
    visible: true,
    order: 5,
    fields: [
      {
        id: "title",
        label: "Titre de la Section",
        type: "text",
        placeholder: "Ex: Tout Ce Dont Vous Avez Besoin en Un Seul Endroit",
        defaultValue: "Tout Ce Dont Vous Avez Besoin en Un Seul Endroit"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez vos fonctionnalités",
        defaultValue: "Une plateforme conçue pour les entrepreneurs qui veulent des résultats, pas des fonctionnalités inutiles."
      },
      {
        id: "features",
        label: "Fonctionnalités",
        type: "array",
        arrayItemTemplate: [
          {
            id: "icon",
            label: "Icône",
            type: "text",
            placeholder: "Ex: 🚀",
            defaultValue: "🚀"
          },
          {
            id: "title",
            label: "Titre",
            type: "text",
            placeholder: "Ex: Tunnels de Vente Performants",
            required: true,
            defaultValue: ""
          },
          {
            id: "description",
            label: "Description",
            type: "textarea",
            placeholder: "Décrivez cette fonctionnalité",
            defaultValue: ""
          }
        ],
        defaultValue: [
          {
            icon: "🎯",
            title: "Tunnels de Vente Performants",
            description: "Créez des tunnels qui convertissent avec nos templates optimisés"
          },
          {
            icon: "📱",
            title: "Gestion Réseaux Sociaux",
            description: "Programmez et gérez tous vos contenus depuis une interface unique"
          },
          {
            icon: "👥",
            title: "CRM Intelligent",
            description: "Gérez et exploitez vos données clients avec l'IA"
          },
          {
            icon: "📊",
            title: "Campagnes Google Ads",
            description: "Animation et optimisation automatique de vos campagnes"
          }
        ]
      },
      {
        id: "image",
        label: "Image de la section",
        type: "image",
        placeholder: "https://example.com/features.jpg",
        defaultValue: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Interface Brand&Sell - Fonctionnalités complètes"
      }
    ]
  },
  {
    id: "temoignages",
    title: "Témoignages",
    icon: "💬",
    description: "Témoignages clients",
    visible: true,
    order: 6,
    fields: [
      {
        id: "title",
        label: "Titre de la Section",
        type: "text",
        placeholder: "Ex: Ils Ont Transformé Leur Business",
        defaultValue: "Ils Ont Transformé Leur Business"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez les témoignages",
        defaultValue: "Des entrepreneurs comme vous qui ont transformé leur business."
      },
      {
        id: "testimonials",
        label: "Témoignages",
        type: "array",
        arrayItemTemplate: [
          {
            id: "name",
            label: "Nom",
            type: "text",
            placeholder: "Ex: Marie",
            required: true,
            defaultValue: ""
          },
          {
            id: "role",
            label: "Rôle / Entreprise",
            type: "text",
            placeholder: "Ex: Coach Business",
            defaultValue: ""
          },
          {
            id: "content",
            label: "Contenu du témoignage",
            type: "textarea",
            placeholder: "Ce que la personne a dit",
            defaultValue: ""
          },
          {
            id: "rating",
            label: "Note",
            type: "text",
            placeholder: "Ex: 5.0",
            defaultValue: "5.0"
          },
          {
            id: "avatar",
            label: "URL de l'avatar",
            type: "image",
            placeholder: "https://example.com/avatar.jpg",
            defaultValue: "https://randomuser.me/api/portraits/women/44.jpg"
          }
        ],
        defaultValue: [
          {
            name: "Marie",
            role: "Coach Business",
            content: "J'ai économisé 800€/mois en abonnements et je gagne 3h par jour ! Brand&Sell a révolutionné ma façon de travailler.",
            rating: "5.0",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
          },
          {
            name: "Thomas",
            role: "E-commerce",
            content: "Mes conversions ont augmenté de 45% grâce aux tunnels optimisés. L'IA fait le travail à ma place !",
            rating: "4.8",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
          },
          {
            name: "Sophie",
            role: "Consultante",
            content: "Enfin une solution qui me comprend ! Plus besoin de jongler entre 12 outils différents.",
            rating: "5.0",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
          }
        ]
      }
    ]
  },
  {
    id: "tarifs",
    title: "Tarifs",
    icon: "💰",
    description: "Plans et tarification",
    visible: true,
    order: 7,
    fields: [
      {
        id: "title",
        label: "Titre de la Section",
        type: "text",
        placeholder: "Ex: Nos tarifs",
        defaultValue: "Nos tarifs"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez vos tarifs",
        defaultValue: "Choisissez le plan qui vous convient le mieux"
      },
      {
        id: "plans",
        label: "Plans tarifaires",
        type: "array",
        arrayItemTemplate: [
          {
            id: "name",
            label: "Nom du plan",
            type: "text",
            placeholder: "Ex: Starter",
            required: true,
            defaultValue: ""
          },
          {
            id: "description",
            label: "Description",
            type: "text",
            placeholder: "Ex: Parfait pour commencer",
            defaultValue: ""
          },
          {
            id: "price",
            label: "Prix",
            type: "text",
            placeholder: "Ex: €97",
            defaultValue: ""
          },
          {
            id: "period",
            label: "Période",
            type: "text",
            placeholder: "Ex: /mois",
            defaultValue: "/mois"
          },
          {
            id: "features",
            label: "Fonctionnalités (séparées par des virgules)",
            type: "textarea",
            placeholder: "Ex: CRM de base, 3 tunnels de vente, Email marketing",
            defaultValue: ""
          },
          {
            id: "buttonText",
            label: "Texte du bouton",
            type: "text",
            placeholder: "Ex: Commencer",
            defaultValue: "Commencer"
          },
          {
            id: "popular",
            label: "Plan populaire",
            type: "text",
            placeholder: "true ou false",
            defaultValue: "false"
          }
        ],
        defaultValue: [
          {
            name: "Starter",
            description: "Parfait pour commencer",
            price: "€97",
            period: "/mois",
            features: "CRM de base, 3 tunnels de vente, Email marketing",
            buttonText: "Commencer",
            popular: "false"
          },
          {
            name: "Pro",
            description: "Pour les entrepreneurs sérieux",
            price: "€197",
            period: "/mois",
            features: "Tout Starter + IA avancée, Tunnels illimités, Support prioritaire",
            buttonText: "Essai Gratuit",
            popular: "true"
          },
          {
            name: "Enterprise",
            description: "Solution sur mesure",
            price: "€497",
            period: "/mois",
            features: "Tout Pro + Migration gratuite, Formation équipe, Account manager dédié",
            buttonText: "Nous contacter",
            popular: "false"
          }
        ]
      }
    ]
  },
  {
    id: "faq",
    title: "FAQ",
    icon: "❓",
    description: "Questions fréquentes",
    visible: true,
    order: 8,
    fields: [
      {
        id: "title",
        label: "Titre de la Section",
        type: "text",
        placeholder: "Ex: Questions Fréquentes",
        defaultValue: "Questions Fréquentes"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez la FAQ",
        defaultValue: "Trouvez les réponses à vos questions les plus fréquentes"
      },
      {
        id: "faqs",
        label: "Questions",
        type: "array",
        arrayItemTemplate: [
          {
            id: "question",
            label: "Question",
            type: "text",
            placeholder: "Ex: Comment Brand&Sell peut-il remplacer tous mes outils actuels ?",
            required: true,
            defaultValue: ""
          },
          {
            id: "answer",
            label: "Réponse",
            type: "textarea",
            placeholder: "Répondez à la question",
            defaultValue: ""
          }
        ],
        defaultValue: [
          {
            question: "Comment Brand&Sell peut-il remplacer tous mes outils actuels ?",
            answer: "Brand&Sell intègre nativement toutes les fonctionnalités essentielles : création de tunnels, gestion CRM, automation marketing, réseaux sociaux, et campagnes publicitaires. Plus besoin de multiples abonnements !"
          },
          {
            question: "Combien de temps faut-il pour migrer mes données ?",
            answer: "Notre équipe technique s'occupe de la migration complète en moins de 48h. Vous n'avez rien à faire, nous gérons tout de A à Z pour une transition sans interruption de service."
          }
        ]
      }
    ]
  },
  {
    id: "cta",
    title: "CTA Final",
    icon: "🚀",
    description: "Appel à l'action final",
    visible: true,
    order: 9,
    fields: [
      {
        id: "title",
        label: "Titre Principal",
        type: "text",
        placeholder: "Ex: Prêt à Révolutionner Votre Marketing Digital ?",
        defaultValue: "Prêt à Révolutionner Votre Marketing Digital ?"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Dernier message avant l'action",
        defaultValue: "Rejoignez les 2,000+ entrepreneurs qui ont déjà simplifié leur business !"
      },
      {
        id: "buttonText",
        label: "Texte du Bouton",
        type: "text",
        placeholder: "Ex: Démarrer Mon Audit OFFERT",
        defaultValue: "🚀 Démarrer Mon Audit OFFERT"
      },
      {
        id: "guarantee",
        label: "Garantie",
        type: "text",
        placeholder: "Ex: Sans engagement • Audit de 45 minutes • Résultats garantis",
        defaultValue: "Sans engagement • Audit de 45 minutes • Résultats garantis"
      }
    ]
  }
];

const generateBrandSellHTML = (data: any): string => {
  const { branding, seo } = data;
  
  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seo?.title || branding?.companyName || 'Brand&Sell'} - ${seo?.metaDescription || branding?.tagline || 'Marketing Digital Simplifié'}</title>
    <meta name="description" content="${seo?.metaDescription || 'Centralisez vos outils marketing en une solution tout-en-un. Économisez 70% sur vos coûts et gagnez 3h/jour avec Brand&Sell !'}">
    <meta name="keywords" content="${seo?.keywords || 'marketing digital, automation, CRM, entrepreneurs, freelancers, outils marketing'}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${seo?.ogTitle || seo?.title || branding?.companyName}">
    <meta property="og:description" content="${seo?.ogDescription || seo?.metaDescription}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="${data.hero?.image || ''}">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${seo?.ogTitle || seo?.title}">
    <meta name="twitter:description" content="${seo?.ogDescription || seo?.metaDescription}">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        html { scroll-behavior: smooth; }
        :root {
          --primary-color: ${branding?.primaryColor || '#3b82f6'};
          --secondary-color: ${branding?.secondaryColor || '#8b5cf6'};
          --accent-color: ${branding?.accentColor || '#f59e0b'};
          --background-color: ${branding?.backgroundColor || '#ffffff'};
          --text-color: ${branding?.textColor || '#1f2937'};
        }
        body { 
          background-color: var(--background-color); 
          color: var(--text-color); 
        }
        .gradient-primary { background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%); }
        .gradient-accent { background: linear-gradient(135deg, var(--accent-color) 0%, #d97706 100%); }
        .gradient-bg { background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%); }
        .text-primary { color: var(--primary-color); }
        .border-primary { border-color: var(--primary-color); }
        .bg-primary-50 { background-color: color-mix(in srgb, var(--primary-color) 10%, white); }
    </style>
</head>
<body>
    ${data.hero ? generateHeroSection(data.hero, branding) : ''}
    ${data.problemes ? generateProblemsSection(data.problemes) : ''}
    ${data.solution ? generateSolutionSection(data.solution) : ''}
    ${data.fonctionnalites ? generateFeaturesSection(data.fonctionnalites) : ''}
    ${data.temoignages ? generateTestimonialsSection(data.temoignages) : ''}
    ${data.tarifs ? generatePricingSection(data.tarifs) : ''}
    ${data.faq ? generateFAQSection(data.faq) : ''}
    ${data.cta ? generateCTASection(data.cta) : ''}
    
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>lucide.createIcons();</script>
</body>
</html>`;
};

const generateHeroSection = (hero: any, branding: any) => `
    <header class="gradient-bg text-white py-16 px-4">
        <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">${hero.title}</h1>
                <p class="text-xl md:text-2xl mb-8 opacity-90">${hero.subtitle}</p>
                <a href="#cta-final" class="inline-block gradient-accent text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg transition transform hover:scale-105">
                    ${hero.cta}
                </a>
            </div>
            <div class="hidden lg:block">
                <img src="${hero.image}" alt="${hero.imageAlt}" class="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition duration-300">
            </div>
        </div>
    </header>
`;

const generateProblemsSection = (problemes: any) => `
    <section class="py-16 px-4 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="${problemes.image}" alt="${problemes.imageAlt}" class="rounded-lg shadow-xl" />
                </div>
                <div>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">${problemes.title}</h2>
                    <p class="text-xl text-gray-600 mb-8">${problemes.subtitle}</p>
                    <div class="space-y-6">
                        ${problemes.problems?.map((problem: any) => `
                        <div class="border-l-4 border-red-200 bg-red-50 p-4 rounded-md">
                            <h3 class="text-red-700 font-bold mb-2">${problem.title}</h3>
                            <p class="text-gray-700">${problem.description}</p>
                        </div>
                        `).join('') || ''}
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const generateSolutionSection = (solution: any) => `
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">${solution.title}</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">${solution.subtitle}</p>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <img src="${solution.image}" alt="${solution.imageAlt}" class="rounded-lg shadow-xl" />
                </div>
                <div class="grid gap-6">
                    ${solution.benefits?.map((benefit: any) => `
                    <div class="border border-primary bg-primary-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div class="flex items-center text-primary text-lg font-semibold mb-2">
                            <span class="mr-2">${benefit.icon}</span>
                            ${benefit.title}
                        </div>
                        <p class="text-gray-700">${benefit.description}</p>
                    </div>
                    `).join('') || ''}
                </div>
            </div>
        </div>
    </section>
`;

const generateFeaturesSection = (fonctionnalites: any) => `
    <section class="py-16 px-4 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">${fonctionnalites.title}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                ${fonctionnalites.features?.map((feature: any) => `
                <div class="text-center">
                    <div class="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <span class="text-2xl">${feature.icon}</span>
                    </div>
                    <h3 class="font-semibold text-lg mb-2">${feature.title}</h3>
                    <p class="text-gray-600">${feature.description}</p>
                </div>
                `).join('') || ''}
            </div>
            <div class="text-center">
                <img src="${fonctionnalites.image}" alt="${fonctionnalites.imageAlt}" class="rounded-lg shadow-xl mx-auto max-w-4xl" />
            </div>
        </div>
    </section>
`;

const generateTestimonialsSection = (temoignages: any) => `
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">${temoignages.title}</h2>
            <div class="grid md:grid-cols-3 gap-8">
                ${temoignages.testimonials?.map((testimonial: any) => `
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <div class="flex items-center mb-2">
                        <span class="text-yellow-400">★★★★★</span>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800">${testimonial.name}, ${testimonial.role}</h3>
                    <p class="text-gray-600 italic mt-2">"${testimonial.content}"</p>
                </div>
                `).join('') || ''}
            </div>
        </div>
    </section>
`;

const generatePricingSection = (tarifs: any) => `
    <section class="py-16 px-4 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">${tarifs.title}</h2>
                <p class="text-xl text-gray-600">${tarifs.subtitle}</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                ${tarifs.plans?.map((plan: any) => `
                <div class="bg-white p-8 rounded-xl shadow ${plan.popular === 'true' ? 'border-2 border-blue-500 relative' : 'border border-gray-200'}">
                    ${plan.popular === 'true' ? '<div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Populaire</div>' : ''}
                    <h3 class="text-2xl font-bold mb-2">${plan.name}</h3>
                    <p class="text-gray-600 mb-4">${plan.description}</p>
                    <div class="mb-6">
                        <span class="text-4xl font-bold">${plan.price}</span>
                        <span class="text-gray-500">${plan.period}</span>
                    </div>
                    <ul class="space-y-2 mb-8">
                        ${plan.features.split(',').map((feature: string) => `
                        <li class="flex items-center">
                            <span class="text-green-500 mr-2">✓</span>
                            <span>${feature.trim()}</span>
                        </li>
                        `).join('')}
                    </ul>
                    <button class="w-full ${plan.popular === 'true' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} font-semibold py-3 px-4 rounded-lg transition">
                        ${plan.buttonText}
                    </button>
                </div>
                `).join('') || ''}
            </div>
        </div>
    </section>
`;

const generateFAQSection = (faq: any) => `
    <section class="py-16 px-4">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">${faq.title}</h2>
            <div class="space-y-4">
                ${faq.faqs?.map((faq: any) => `
                <details class="bg-white rounded-lg border shadow-sm p-4">
                    <summary class="font-semibold cursor-pointer">${faq.question}</summary>
                    <p class="mt-2 text-gray-600">${faq.answer}</p>
                </details>
                `).join('') || ''}
            </div>
        </div>
    </section>
`;

const generateCTASection = (cta: any) => `
    <section id="cta-final" class="py-16 px-4 gradient-bg text-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">${cta.title}</h2>
            <p class="text-xl mb-8 opacity-90">${cta.subtitle}</p>
            <button class="gradient-accent text-white font-semibold px-12 py-4 text-xl rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                ${cta.buttonText}
            </button>
            <p class="mt-4 text-sm opacity-75">${cta.guarantee}</p>
        </div>
    </section>
`;

export const brandSellTemplate: Template = {
  id: 'brand-sell',
  name: 'Brand&Sell - Marketing Digital',
  description: 'Template pour solution marketing tout-en-un avec focus sur les problèmes/solutions',
  thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
  category: 'Marketing',
  sections: brandSellSections,
  defaultData: {
    seo: {
      title: "Brand&Sell - Marketing Digital Simplifié pour Entrepreneurs",
      metaDescription: "Centralisez vos outils marketing en une solution tout-en-un. Économisez 70% sur vos coûts et gagnez 3h/jour avec Brand&Sell !",
      keywords: "marketing digital, automation, CRM, entrepreneurs, freelancers, outils marketing",
      ogTitle: "Brand&Sell - Marketing Digital Simplifié",
      ogDescription: "La solution tout-en-un qui révolutionne le marketing digital des entrepreneurs"
    },
    branding: {
      companyName: "Brand&Sell",
      tagline: "Marketing Digital Simplifié pour Entrepreneurs",
      logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=100&q=80",
      logoAlt: "Logo de l'entreprise",
      primaryColor: "#3b82f6",
      secondaryColor: "#8b5cf6",
      accentColor: "#f59e0b",
      backgroundColor: "#ffffff",
      textColor: "#1f2937"
    },
    hero: {
      title: "Brand&Sell : Votre Marketing Digital Simplifié",
      subtitle: "Fini le casse-tête des multiples outils ! Centralisez, automatisez et boostez votre business avec une solution tout-en-un révolutionnaire.",
      cta: "🎯 AUDIT OFFERT - Réservez Maintenant !",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Entrepreneur utilisant Brand&Sell"
    },
    problemes: {
      title: "Vous en avez marre de jongler entre 15 outils différents ?",
      subtitle: "En tant qu'entrepreneur ou freelance, vous perdez un temps précieux à naviguer entre vos outils de marketing digital...",
      problems: [
        {
          title: "Perte de Temps Massive",
          description: "Vous passez plus de temps à gérer vos outils qu'à développer votre business. Entre les connexions, les synchronisations et les bugs..."
        },
        {
          title: "Coûts Qui S'accumulent",
          description: "15 abonnements différents = factures qui explosent ! Sans compter les intégrations payantes et les formations pour chaque outil."
        }
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Frustration des entrepreneurs avec multiples outils"
    },
    solution: {
      title: "Brand&Sell : LA Solution Tout-en-Un",
      subtitle: "Centralisez tous vos outils marketing en un seul endroit. Simplifiez votre quotidien et multipliez vos résultats !",
      benefits: [
        {
          icon: "⚡",
          title: "Coûts Maîtrisés",
          description: "Économisez jusqu'à 70% sur vos outils marketing. Un seul abonnement remplace tous vos outils actuels."
        },
        {
          icon: "👥",
          title: "Un Seul Interlocuteur",
          description: "Fini les appels vers 10 supports différents. Une équipe dédiée pour tous vos besoins marketing digital."
        },
        {
          icon: "🤖",
          title: "IA Intégrée",
          description: "Intelligence artificielle qui automatise vos tâches répétitives et optimise vos campagnes en permanence."
        }
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Dashboard Brand&Sell - Solution tout-en-un"
    },
    fonctionnalites: {
      title: "Tout Ce Dont Vous Avez Besoin en Un Seul Endroit",
      subtitle: "Une plateforme conçue pour les entrepreneurs qui veulent des résultats, pas des fonctionnalités inutiles.",
      features: [
        {
          icon: "🎯",
          title: "Tunnels de Vente Performants",
          description: "Créez des tunnels qui convertissent avec nos templates optimisés"
        },
        {
          icon: "📱",
          title: "Gestion Réseaux Sociaux",
          description: "Programmez et gérez tous vos contenus depuis une interface unique"
        },
        {
          icon: "👥",
          title: "CRM Intelligent",
          description: "Gérez et exploitez vos données clients avec l'IA"
        },
        {
          icon: "📊",
          title: "Campagnes Google Ads",
          description: "Animation et optimisation automatique de vos campagnes"
        }
      ],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Interface Brand&Sell - Fonctionnalités complètes"
    },
    temoignages: {
      title: "Ils Ont Transformé Leur Business",
      subtitle: "Des entrepreneurs comme vous qui ont transformé leur business.",
      testimonials: [
        {
          name: "Marie",
          role: "Coach Business",
          content: "J'ai économisé 800€/mois en abonnements et je gagne 3h par jour ! Brand&Sell a révolutionné ma façon de travailler.",
          rating: "5.0",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          name: "Thomas",
          role: "E-commerce",
          content: "Mes conversions ont augmenté de 45% grâce aux tunnels optimisés. L'IA fait le travail à ma place !",
          rating: "4.8",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          name: "Sophie",
          role: "Consultante",
          content: "Enfin une solution qui me comprend ! Plus besoin de jongler entre 12 outils différents.",
          rating: "5.0",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
      ]
    },
    tarifs: {
      title: "Nos tarifs",
      subtitle: "Choisissez le plan qui vous convient le mieux",
      plans: [
        {
          name: "Starter",
          description: "Parfait pour commencer",
          price: "€97",
          period: "/mois",
          features: "CRM de base, 3 tunnels de vente, Email marketing",
          buttonText: "Commencer",
          popular: "false"
        },
        {
          name: "Pro",
          description: "Pour les entrepreneurs sérieux",
          price: "€197",
          period: "/mois",
          features: "Tout Starter + IA avancée, Tunnels illimités, Support prioritaire",
          buttonText: "Essai Gratuit",
          popular: "true"
        },
        {
          name: "Enterprise",
          description: "Solution sur mesure",
          price: "€497",
          period: "/mois",
          features: "Tout Pro + Migration gratuite, Formation équipe, Account manager dédié",
          buttonText: "Nous contacter",
          popular: "false"
        }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Trouvez les réponses à vos questions les plus fréquentes",
      faqs: [
        {
          question: "Comment Brand&Sell peut-il remplacer tous mes outils actuels ?",
          answer: "Brand&Sell intègre nativement toutes les fonctionnalités essentielles : création de tunnels, gestion CRM, automation marketing, réseaux sociaux, et campagnes publicitaires. Plus besoin de multiples abonnements !"
        },
        {
          question: "Combien de temps faut-il pour migrer mes données ?",
          answer: "Notre équipe technique s'occupe de la migration complète en moins de 48h. Vous n'avez rien à faire, nous gérons tout de A à Z pour une transition sans interruption de service."
        }
      ]
    },
    cta: {
      title: "Prêt à Révolutionner Votre Marketing Digital ?",
      subtitle: "Rejoignez les 2,000+ entrepreneurs qui ont déjà simplifié leur business !",
      buttonText: "🚀 Démarrer Mon Audit OFFERT",
      guarantee: "Sans engagement • Audit de 45 minutes • Résultats garantis"
    }
  },
  generateHTML: generateBrandSellHTML
};