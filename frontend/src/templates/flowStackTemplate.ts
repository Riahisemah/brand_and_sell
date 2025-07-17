import { Template, TemplateSection } from '../types/templates';

const flowStackSections: TemplateSection[] = [
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
        placeholder: "Ex: FlowStack - Marketing Automatisé",
        required: true,
        defaultValue: "FlowStack - Plateforme Marketing Intelligente"
      },
      {
        id: "metaDescription",
        label: "Meta Description",
        type: "textarea",
        placeholder: "Description de 150-160 caractères pour les moteurs de recherche",
        defaultValue: "La solution intégrée qui unifie vos outils marketing, automatise vos processus et booste vos conversions"
      },
      {
        id: "keywords",
        label: "Mots-clés (séparés par des virgules)",
        type: "textarea",
        placeholder: "Ex: automation marketing, CRM, tunnels de vente",
        defaultValue: "automation marketing, CRM, tunnels de vente, entrepreneurs, IA marketing, outils intégrés"
      },
      {
        id: "ogTitle",
        label: "Titre Open Graph (réseaux sociaux)",
        type: "text",
        placeholder: "Titre pour le partage sur les réseaux sociaux",
        defaultValue: "FlowStack - Marketing Simplifié par l'IA"
      },
      {
        id: "ogDescription",
        label: "Description Open Graph",
        type: "textarea",
        placeholder: "Description pour le partage sur les réseaux sociaux",
        defaultValue: "Tous vos outils marketing dans une seule plateforme intelligente"
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
        placeholder: "Ex: FlowStack",
        required: true,
        defaultValue: "FlowStack"
      },
      {
        id: "tagline",
        label: "Slogan",
        type: "text",
        placeholder: "Ex: Marketing Automatisé",
        defaultValue: "Votre Marketing Automatisé"
      },
      {
        id: "logo",
        label: "Logo (URL)",
        type: "image",
        placeholder: "https://example.com/logo.png",
        defaultValue: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80"
      },
      {
        id: "logoAlt",
        label: "Texte alternatif du logo",
        type: "text",
        placeholder: "Logo de l'entreprise",
        defaultValue: "Logo FlowStack"
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
        placeholder: "Ex: FlowStack : Votre Marketing Automatisé",
        required: true,
        defaultValue: "FlowStack : Votre Marketing Automatisé"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Décrivez brièvement votre plateforme",
        defaultValue: "La plateforme qui unifie vos outils, automatise vos processus et multiplie vos résultats sans effort."
      },
      {
        id: "cta",
        label: "Texte du Bouton CTA Principal",
        type: "text",
        placeholder: "Ex: Essai Gratuit 14 Jours",
        defaultValue: "Essai Gratuit 14 Jours"
      },
      {
        id: "image",
        label: "Image Hero",
        type: "image",
        placeholder: "https://example.com/hero.jpg",
        defaultValue: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Dashboard FlowStack"
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
        placeholder: "Ex: Vous passez plus de temps à gérer vos outils qu'à développer votre business ?",
        defaultValue: "Vous passez plus de temps à gérer vos outils qu'à développer votre business ?"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez les problèmes",
        defaultValue: "La complexité du marketing digital vous empêche de vous concentrer sur l'essentiel."
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
            placeholder: "Ex: Temps perdu",
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
            title: "Temps perdu",
            description: "Entre les connexions, synchronisations et bugs, vous perdez 3h/jour en moyenne."
          },
          {
            title: "Coûts cachés",
            description: "Les abonnements multiples et intégrations payantes font exploser votre budget."
          },
          {
            title: "Données dispersées",
            description: "Vos données clients sont éparpillées entre 10 plateformes différentes."
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
        defaultValue: "Frustration avec multiples outils"
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
        placeholder: "Ex: Une plateforme unifiée pour tout votre marketing",
        defaultValue: "Une plateforme unifiée pour tout votre marketing"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez votre solution",
        defaultValue: "FlowStack rassemble tous vos outils essentiels dans une interface cohérente, avec l'IA pour automatiser les tâches répétitives."
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
            placeholder: "Ex: Économisez jusqu'à 70%",
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
            icon: "💰",
            title: "Économisez jusqu'à 70%",
            description: "Un seul abonnement remplace tous vos outils actuels."
          },
          {
            icon: "⏰",
            title: "Gagnez 3h par jour",
            description: "Automatisation des tâches chronophages."
          },
          {
            icon: "📊",
            title: "Décisions éclairées",
            description: "Analyses unifiées et recommandations par IA."
          }
        ]
      },
      {
        id: "image",
        label: "Image de la section",
        type: "image",
        placeholder: "https://example.com/solution.jpg",
        defaultValue: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Dashboard FlowStack"
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
        placeholder: "Ex: Tout ce dont vous avez besoin, rien de superflu",
        defaultValue: "Tout ce dont vous avez besoin, rien de superflu"
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
            placeholder: "Ex: Automation Marketing",
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
            icon: "⚡",
            title: "Automation Marketing",
            description: "Créez des workflows intelligents qui fonctionnent 24/7 pour engager vos clients."
          },
          {
            icon: "🎯",
            title: "Tunnels de Vente",
            description: "Des templates optimisés pour convertir plus avec moins d'effort."
          },
          {
            icon: "👥",
            title: "CRM Intelligent",
            description: "Gérez vos contacts et segments avec des insights en temps réel."
          },
          {
            icon: "📱",
            title: "Réseaux Sociaux",
            description: "Planifiez, publiez et analysez tous vos canaux en un seul endroit."
          },
          {
            icon: "📊",
            title: "Analyses Avancées",
            description: "Tableaux de bord personnalisés pour suivre ce qui compte vraiment."
          },
          {
            icon: "🤖",
            title: "IA Intégrée",
            description: "Notre IA optimise automatiquement vos campagnes pour de meilleurs résultats."
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
        defaultValue: "Interface FlowStack"
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
        placeholder: "Ex: Ce que nos clients disent",
        defaultValue: "Ce que nos clients disent"
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
            placeholder: "Ex: Marie D.",
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
            name: "Marie D.",
            role: "Coach Business",
            content: "FlowStack a réduit mes coûts marketing de 60% tout en augmentant mes conversions. La plateforme est si intuitive que j'ai pu l'utiliser efficacement dès le premier jour.",
            rating: "5.0",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
          },
          {
            name: "Thomas L.",
            role: "E-commerce",
            content: "L'IA de FlowStack a identifié des opportunités que j'avais complètement manquées. En 3 mois, mon chiffre d'affaires a augmenté de 40% sans effort supplémentaire.",
            rating: "4.8",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
          },
          {
            name: "Sophie M.",
            role: "Consultante",
            content: "Enfin une solution qui comprend les besoins des entrepreneurs. Plus besoin d'être un expert en tech pour avoir des résultats professionnels.",
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
        placeholder: "Ex: Simple, transparent, adapté à vous",
        defaultValue: "Simple, transparent, adapté à vous"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez vos tarifs",
        defaultValue: "Un seul prix pour toutes les fonctionnalités. Payez seulement pour ce dont vous avez besoin."
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
            placeholder: "Ex: €49",
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
            placeholder: "Ex: 1,000 contacts, 3 tunnels de vente, 5 comptes sociaux",
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
            price: "€49",
            period: "/mois",
            features: "1,000 contacts, 3 tunnels de vente, 5 comptes sociaux",
            buttonText: "Commencer",
            popular: "false"
          },
          {
            name: "Pro",
            description: "Pour les entrepreneurs sérieux",
            price: "€99",
            period: "/mois",
            features: "10,000 contacts, Tunnels illimités, Comptes sociaux illimités, IA avancée",
            buttonText: "Essai Gratuit",
            popular: "true"
          },
          {
            name: "Enterprise",
            description: "Solution sur mesure",
            price: "€299",
            period: "/mois",
            features: "Contacts illimités, Tunnels illimités, Comptes sociaux illimités, IA premium + support dédié",
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
        placeholder: "Ex: Questions fréquentes",
        defaultValue: "Questions fréquentes"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez la FAQ",
        defaultValue: "Tout ce que vous devez savoir avant de commencer."
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
            placeholder: "Ex: Comment migrer mes données depuis mes outils actuels ?",
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
            question: "Comment migrer mes données depuis mes outils actuels ?",
            answer: "Notre équipe prend en charge la migration complète de vos données. Il vous suffit de nous donner accès à vos outils actuels et nous nous occupons de tout en moins de 48h, sans interruption de service."
          },
          {
            question: "Puis-je essayer FlowStack gratuitement ?",
            answer: "Oui ! Nous offrons un essai gratuit de 14 jours sans carte de crédit requise. Vous avez accès à toutes les fonctionnalités pendant cette période pour tester la plateforme."
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
        placeholder: "Ex: Prêt à simplifier votre marketing digital ?",
        defaultValue: "Prêt à simplifier votre marketing digital ?"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Dernier message avant l'action",
        defaultValue: "Rejoignez les milliers d'entrepreneurs qui ont déjà économisé temps et argent avec FlowStack."
      },
      {
        id: "buttonText",
        label: "Texte du Bouton",
        type: "text",
        placeholder: "Ex: Commencer l'essai gratuit",
        defaultValue: "Commencer l'essai gratuit"
      },
      {
        id: "guarantee",
        label: "Garantie",
        type: "text",
        placeholder: "Ex: Essai de 14 jours • Sans carte de crédit • Annulation à tout moment",
        defaultValue: "Essai de 14 jours • Sans carte de crédit • Annulation à tout moment"
      }
    ]
  }
];

const generateFlowStackHTML = (data: any): string => {
  const { branding, seo } = data;
  
  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seo?.title || branding?.companyName || 'FlowStack'} - ${seo?.metaDescription || branding?.tagline || 'Marketing Automatisé'}</title>
    <meta name="description" content="${seo?.metaDescription || 'La solution intégrée qui unifie vos outils marketing, automatise vos processus et booste vos conversions'}">
    <meta name="keywords" content="${seo?.keywords || 'automation marketing, CRM, tunnels de vente, entrepreneurs, IA marketing, outils intégrés'}">
    
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
        .gradient-text {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-image: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        }
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
    <script>
        lucide.createIcons();
        
        document.querySelectorAll('details').forEach(item => {
            item.addEventListener('toggle', () => {
                const icon = item.querySelector('i');
                if (item.open) {
                    icon.classList.add('rotate-180');
                } else {
                    icon.classList.remove('rotate-180');
                }
            });
        });
    </script>
</body>
</html>`;
};

const generateHeroSection = (hero: any, branding: any) => `
    <header class="bg-white py-16 px-4 border-b border-gray-100">
        <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <span class="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">✨ Nouvelle génération de marketing</span>
                <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    <span class="gradient-text">${hero.title}</span>
                </h1>
                <p class="text-xl text-gray-600 mb-8">${hero.subtitle}</p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#cta" class="inline-block gradient-primary text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-300">
                        ${hero.cta}
                    </a>
                </div>
            </div>
            <div class="hidden lg:block relative">
                <img src="${hero.image}" alt="${hero.imageAlt}" class="relative rounded-xl shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition duration-300">
            </div>
        </div>
    </header>
`;

const generateProblemsSection = (problemes: any) => `
    <section class="py-20 px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
            <span class="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">Le défi des entrepreneurs</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">${problemes.title}</h2>
            <p class="text-xl text-gray-600">${problemes.subtitle}</p>
        </div>

        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            ${problemes.problems?.map((problem: any) => `
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 class="text-xl font-semibold mb-3">${problem.title}</h3>
                <p class="text-gray-600">${problem.description}</p>
            </div>
            `).join('') || ''}
        </div>
    </section>
`;

const generateSolutionSection = (solution: any) => `
    <section class="py-20 px-4 bg-gray-50">
        <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
                <span class="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">Notre solution</span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">${solution.title}</h2>
                <p class="text-xl text-gray-600 mb-8">${solution.subtitle}</p>

                <div class="space-y-6">
                    ${solution.benefits?.map((benefit: any) => `
                    <div class="flex">
                        <div class="flex-shrink-0 mt-1">
                            <div class="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                                <span class="text-green-500">${benefit.icon}</span>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-medium text-gray-900">${benefit.title}</h3>
                            <p class="text-gray-600">${benefit.description}</p>
                        </div>
                    </div>
                    `).join('') || ''}
                </div>
            </div>

            <div class="order-1 lg:order-2 relative">
                <img src="${solution.image}" alt="${solution.imageAlt}" class="relative rounded-xl shadow-lg border border-gray-100">
            </div>
        </div>
    </section>
`;

const generateFeaturesSection = (fonctionnalites: any) => `
    <section class="py-20 px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
            <span class="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">Fonctionnalités</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">${fonctionnalites.title}</h2>
            <p class="text-xl text-gray-600">${fonctionnalites.subtitle}</p>
        </div>

        <div class="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${fonctionnalites.features?.map((feature: any) => `
            <div class="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div class="text-4xl mb-4">${feature.icon}</div>
                <h3 class="text-xl font-semibold mb-3">${feature.title}</h3>
                <p class="text-gray-600">${feature.description}</p>
            </div>
            `).join('') || ''}
        </div>
    </section>
`;

const generateTestimonialsSection = (temoignages: any) => `
    <section class="py-20 px-4 bg-white">
        <div class="max-w-4xl mx-auto text-center mb-16">
            <span class="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">Témoignages</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">${temoignages.title}</h2>
            <p class="text-xl text-gray-600">${temoignages.subtitle}</p>
        </div>

        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            ${temoignages.testimonials?.map((testimonial: any) => `
            <div class="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <div class="flex items-center mb-4">
                    <div class="flex items-center mr-4">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span class="ml-1 text-gray-700">${testimonial.rating}</span>
                    </div>
                </div>
                <p class="text-gray-700 mb-6 italic">"${testimonial.content}"</p>
                <div class="flex items-center">
                    <img src="${testimonial.avatar}" class="w-10 h-10 rounded-full mr-4" alt="${testimonial.name}">
                    <div>
                        <h4 class="font-medium">${testimonial.name}</h4>
                        <p class="text-gray-500 text-sm">${testimonial.role}</p>
                    </div>
                </div>
            </div>
            `).join('') || ''}
        </div>
    </section>
`;

const generatePricingSection = (tarifs: any) => `
    <section class="py-20 px-4 bg-gray-50">
        <div class="max-w-4xl mx-auto text-center mb-16">
            <span class="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">Tarification</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">${tarifs.title}</h2>
            <p class="text-xl text-gray-600">${tarifs.subtitle}</p>
        </div>

        <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            ${tarifs.plans?.map((plan: any) => `
            <div class="bg-white p-8 rounded-xl border ${plan.popular === 'true' ? 'border-2 border-blue-500 shadow-lg' : 'border-gray-200 shadow-sm hover:shadow-md'} transition-shadow ${plan.popular === 'true' ? 'relative' : ''}">
                ${plan.popular === 'true' ? '<div class="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">Populaire</div>' : ''}
                <h3 class="text-xl font-semibold mb-4">${plan.name}</h3>
                <p class="text-gray-600 mb-6">${plan.description}</p>
                <div class="mb-6">
                    <span class="text-4xl font-bold">${plan.price}</span>
                    <span class="text-gray-500">${plan.period}</span>
                </div>
                <ul class="space-y-3 mb-8">
                    ${plan.features.split(',').map((feature: string) => `
                    <li class="flex items-center">
                        <span class="text-green-500 mr-2">✓</span>
                        <span>${feature.trim()}</span>
                    </li>
                    `).join('')}
                </ul>
                <button class="w-full ${plan.popular === 'true' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} font-medium py-3 px-4 rounded-lg transition">
                    ${plan.buttonText}
                </button>
            </div>
            `).join('') || ''}
        </div>
    </section>
`;

const generateFAQSection = (faq: any) => `
    <section class="py-20 px-4 bg-white">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
                <span class="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">FAQ</span>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">${faq.title}</h2>
                <p class="text-xl text-gray-600">${faq.subtitle}</p>
            </div>

            <div class="space-y-4">
                ${faq.faqs?.map((faq: any) => `
                <details class="border border-gray-200 rounded-lg overflow-hidden">
                    <summary class="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition cursor-pointer">
                        <span class="text-lg font-medium">${faq.question}</span>
                        <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500 transition-transform duration-300"></i>
                    </summary>
                    <div class="px-6 pb-6 pt-0">
                        <p class="text-gray-600">${faq.answer}</p>
                    </div>
                </details>
                `).join('') || ''}
            </div>
        </div>
    </section>
`;

const generateCTASection = (cta: any) => `
    <section id="cta" class="py-20 px-4 gradient-bg text-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">${cta.title}</h2>
            <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">${cta.subtitle}</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <button class="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                    ${cta.buttonText}
                </button>
            </div>
            <p class="mt-6 text-sm opacity-80">${cta.guarantee}</p>
        </div>
    </section>
`;

export const flowStackTemplate: Template = {
  id: 'flow-stack',
  name: 'FlowStack - Plateforme Marketing',
  description: 'Template pour plateforme SaaS avec tarifs, témoignages et FAQ interactive',
  thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
  category: 'SaaS',
  sections: flowStackSections,
  defaultData: {
    seo: {
      title: "FlowStack - Plateforme Marketing Intelligente",
      metaDescription: "La solution intégrée qui unifie vos outils marketing, automatise vos processus et booste vos conversions",
      keywords: "automation marketing, CRM, tunnels de vente, entrepreneurs, IA marketing, outils intégrés",
      ogTitle: "FlowStack - Marketing Simplifié par l'IA",
      ogDescription: "Tous vos outils marketing dans une seule plateforme intelligente"
    },
    branding: {
      companyName: "FlowStack",
      tagline: "Votre Marketing Automatisé",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80",
      logoAlt: "Logo FlowStack",
      primaryColor: "#3b82f6",
      secondaryColor: "#8b5cf6",
      accentColor: "#f59e0b",
      backgroundColor: "#ffffff",
      textColor: "#1f2937"
    },
    hero: {
      title: "FlowStack : Votre Marketing Automatisé",
      subtitle: "La plateforme qui unifie vos outils, automatise vos processus et multiplie vos résultats sans effort.",
      cta: "Essai Gratuit 14 Jours",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Dashboard FlowStack"
    },
    problemes: {
      title: "Vous passez plus de temps à gérer vos outils qu'à développer votre business ?",
      subtitle: "La complexité du marketing digital vous empêche de vous concentrer sur l'essentiel.",
      problems: [
        {
          title: "Temps perdu",
          description: "Entre les connexions, synchronisations et bugs, vous perdez 3h/jour en moyenne."
        },
        {
          title: "Coûts cachés",
          description: "Les abonnements multiples et intégrations payantes font exploser votre budget."
        },
        {
          title: "Données dispersées",
          description: "Vos données clients sont éparpillées entre 10 plateformes différentes."
        }
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Frustration avec multiples outils"
    },
    solution: {
      title: "Une plateforme unifiée pour tout votre marketing",
      subtitle: "FlowStack rassemble tous vos outils essentiels dans une interface cohérente, avec l'IA pour automatiser les tâches répétitives.",
      benefits: [
        {
          icon: "💰",
          title: "Économisez jusqu'à 70%",
          description: "Un seul abonnement remplace tous vos outils actuels."
        },
        {
          icon: "⏰",
          title: "Gagnez 3h par jour",
          description: "Automatisation des tâches chronophages."
        },
        {
          icon: "📊",
          title: "Décisions éclairées",
          description: "Analyses unifiées et recommandations par IA."
        }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Dashboard FlowStack"
    },
    fonctionnalites: {
      title: "Tout ce dont vous avez besoin, rien de superflu",
      subtitle: "Une plateforme conçue pour les entrepreneurs qui veulent des résultats, pas des fonctionnalités inutiles.",
      features: [
        {
          icon: "⚡",
          title: "Automation Marketing",
          description: "Créez des workflows intelligents qui fonctionnent 24/7 pour engager vos clients."
        },
        {
          icon: "🎯",
          title: "Tunnels de Vente",
          description: "Des templates optimisés pour convertir plus avec moins d'effort."
        },
        {
          icon: "👥",
          title: "CRM Intelligent",
          description: "Gérez vos contacts et segments avec des insights en temps réel."
        },
        {
          icon: "📱",
          title: "Réseaux Sociaux",
          description: "Planifiez, publiez et analysez tous vos canaux en un seul endroit."
        },
        {
          icon: "📊",
          title: "Analyses Avancées",
          description: "Tableaux de bord personnalisés pour suivre ce qui compte vraiment."
        },
        {
          icon: "🤖",
          title: "IA Intégrée",
          description: "Notre IA optimise automatiquement vos campagnes pour de meilleurs résultats."
        }
      ],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Interface FlowStack"
    },
    temoignages: {
      title: "Ce que nos clients disent",
      subtitle: "Des entrepreneurs comme vous qui ont transformé leur business.",
      testimonials: [
        {
          name: "Marie D.",
          role: "Coach Business",
          content: "FlowStack a réduit mes coûts marketing de 60% tout en augmentant mes conversions. La plateforme est si intuitive que j'ai pu l'utiliser efficacement dès le premier jour.",
          rating: "5.0",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          name: "Thomas L.",
          role: "E-commerce",
          content: "L'IA de FlowStack a identifié des opportunités que j'avais complètement manquées. En 3 mois, mon chiffre d'affaires a augmenté de 40% sans effort supplémentaire.",
          rating: "4.8",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          name: "Sophie M.",
          role: "Consultante",
          content: "Enfin une solution qui comprend les besoins des entrepreneurs. Plus besoin d'être un expert en tech pour avoir des résultats professionnels.",
          rating: "5.0",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
      ]
    },
    tarifs: {
      title: "Simple, transparent, adapté à vous",
      subtitle: "Un seul prix pour toutes les fonctionnalités. Payez seulement pour ce dont vous avez besoin.",
      plans: [
        {
          name: "Starter",
          description: "Parfait pour commencer",
          price: "€49",
          period: "/mois",
          features: "1,000 contacts, 3 tunnels de vente, 5 comptes sociaux",
          buttonText: "Commencer",
          popular: "false"
        },
        {
          name: "Pro",
          description: "Pour les entrepreneurs sérieux",
          price: "€99",
          period: "/mois",
          features: "10,000 contacts, Tunnels illimités, Comptes sociaux illimités, IA avancée",
          buttonText: "Essai Gratuit",
          popular: "true"
        },
        {
          name: "Enterprise",
          description: "Solution sur mesure",
          price: "€299",
          period: "/mois",
          features: "Contacts illimités, Tunnels illimités, Comptes sociaux illimités, IA premium + support dédié",
          buttonText: "Nous contacter",
          popular: "false"
        }
      ]
    },
    faq: {
      title: "Questions fréquentes",
      subtitle: "Tout ce que vous devez savoir avant de commencer.",
      faqs: [
        {
          question: "Comment migrer mes données depuis mes outils actuels ?",
          answer: "Notre équipe prend en charge la migration complète de vos données. Il vous suffit de nous donner accès à vos outils actuels et nous nous occupons de tout en moins de 48h, sans interruption de service."
        },
        {
          question: "Puis-je essayer FlowStack gratuitement ?",
          answer: "Oui ! Nous offrons un essai gratuit de 14 jours sans carte de crédit requise. Vous avez accès à toutes les fonctionnalités pendant cette période pour tester la plateforme."
        }
      ]
    },
    cta: {
      title: "Prêt à simplifier votre marketing digital ?",
      subtitle: "Rejoignez les milliers d'entrepreneurs qui ont déjà économisé temps et argent avec FlowStack.",
      buttonText: "Commencer l'essai gratuit",
      guarantee: "Essai de 14 jours • Sans carte de crédit • Annulation à tout moment"
    }
  },
  generateHTML: generateFlowStackHTML
};