import { Template, TemplateSection } from '../types/templates';

const salesPageSections: TemplateSection[] = [
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
        placeholder: "Ex: Transformez Votre Business - Solution Innovante",
        required: true,
        defaultValue: "Transformez Votre Business avec Notre Solution Innovante"
      },
      {
        id: "metaDescription",
        label: "Meta Description",
        type: "textarea",
        placeholder: "Description de 150-160 caractères pour les moteurs de recherche",
        defaultValue: "Découvrez comment notre solution innovante peut transformer votre business et améliorer votre quotidien. Essai gratuit disponible."
      },
      {
        id: "keywords",
        label: "Mots-clés (séparés par des virgules)",
        type: "textarea",
        placeholder: "Ex: marketing digital, automation, CRM, entrepreneurs",
        defaultValue: "marketing digital, automation, CRM, entrepreneurs, solution business"
      },
      {
        id: "ogTitle",
        label: "Titre Open Graph (réseaux sociaux)",
        type: "text",
        placeholder: "Titre pour le partage sur les réseaux sociaux",
        defaultValue: "Transformez Votre Business avec Notre Solution"
      },
      {
        id: "ogDescription",
        label: "Description Open Graph",
        type: "textarea",
        placeholder: "Description pour le partage sur les réseaux sociaux",
        defaultValue: "La solution qui révolutionne votre façon de travailler"
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
        defaultValue: "#10b981"
      },
      {
        id: "secondaryColor",
        label: "Couleur Secondaire",
        type: "color",
        defaultValue: "#059669"
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
        placeholder: "Ex: Transformez Votre Business",
        required: true,
        defaultValue: "Transformez Votre Business avec Notre Solution Innovante"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Décrivez brièvement votre offre",
        defaultValue: "Découvrez comment notre produit peut résoudre vos problèmes et améliorer votre quotidien"
      },
      {
        id: "cta",
        label: "Texte du Bouton CTA",
        type: "text",
        placeholder: "Ex: Commencer Maintenant",
        defaultValue: "Commencer Maintenant"
      },
      {
        id: "image",
        label: "Image Hero",
        type: "image",
        placeholder: "https://example.com/hero.jpg",
        defaultValue: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Solution innovante"
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
        placeholder: "Ex: Les Défis Que Vous Rencontrez",
        defaultValue: "Les Défis Que Vous Rencontrez"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez les problèmes",
        defaultValue: "Nous comprenons les difficultés auxquelles vous faites face au quotidien"
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
            placeholder: "Ex: Manque de temps",
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
            title: "Manque de temps",
            description: "Vous passez trop de temps sur des tâches répétitives qui pourraient être automatisées."
          },
          {
            title: "Coûts élevés",
            description: "Les solutions actuelles sont souvent trop coûteuses pour les petites entreprises."
          },
          {
            title: "Complexité technique",
            description: "Les outils existants nécessitent des connaissances techniques avancées."
          }
        ]
      },
      {
        id: "image",
        label: "Image de la section",
        type: "image",
        placeholder: "https://example.com/problems.jpg",
        defaultValue: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Problèmes rencontrés"
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
        placeholder: "Ex: Notre Solution Unique",
        defaultValue: "Notre Solution Unique"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez votre solution",
        defaultValue: "Voici comment nous résolvons vos problèmes de manière simple et efficace"
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
            placeholder: "Ex: Gain de temps",
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
            title: "Gain de temps considérable",
            description: "Automatisez les tâches répétitives et concentrez-vous sur ce qui compte vraiment."
          },
          {
            icon: "💰",
            title: "Économies substantielles",
            description: "Une solution abordable qui s'adapte à votre budget et offre un excellent retour sur investissement."
          },
          {
            icon: "🔍",
            title: "Simplicité d'utilisation",
            description: "Interface intuitive ne nécessitant aucune compétence technique particulière."
          }
        ]
      },
      {
        id: "image",
        label: "Image de la section",
        type: "image",
        placeholder: "https://example.com/solution.jpg",
        defaultValue: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Solution innovante"
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
        placeholder: "Ex: Fonctionnalités incluses",
        defaultValue: "Fonctionnalités incluses"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez vos fonctionnalités",
        defaultValue: "Découvrez toutes les fonctionnalités qui vous aideront à réussir"
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
            icon: "🚀",
            title: "Fonctionnalité 1",
            description: "Description de la première fonctionnalité"
          },
          {
            icon: "📊",
            title: "Fonctionnalité 2",
            description: "Description de la deuxième fonctionnalité"
          },
          {
            icon: "🔄",
            title: "Fonctionnalité 3",
            description: "Description de la troisième fonctionnalité"
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
        defaultValue: "Interface moderne"
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
        placeholder: "Ex: Ce que disent nos clients",
        defaultValue: "Ce que disent nos clients"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez les témoignages",
        defaultValue: "Découvrez les retours de nos clients satisfaits"
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
            content: "Excellent service, je recommande vivement !",
            rating: "5.0",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
          },
          {
            name: "Thomas L.",
            role: "E-commerce",
            content: "Une solution qui a transformé mon business.",
            rating: "4.8",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
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
        defaultValue: "Choisissez le plan qui vous convient"
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
            features: "Fonctionnalité 1, Fonctionnalité 2, Fonctionnalité 3",
            buttonText: "Commencer",
            popular: "false"
          },
          {
            name: "Pro",
            description: "Pour les professionnels",
            price: "€99",
            period: "/mois",
            features: "Toutes les fonctionnalités, Support prioritaire, Intégrations avancées",
            buttonText: "Essai Gratuit",
            popular: "true"
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
        defaultValue: "Trouvez les réponses à vos questions"
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
            placeholder: "Ex: Comment ça marche ?",
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
            question: "Comment ça marche ?",
            answer: "C'est très simple, il suffit de suivre les étapes."
          },
          {
            question: "Y a-t-il une garantie ?",
            answer: "Oui, nous offrons une garantie de 30 jours."
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
        placeholder: "Ex: Prêt à commencer ?",
        defaultValue: "Prêt à commencer ?"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Dernier message avant l'action",
        defaultValue: "Rejoignez des milliers de clients satisfaits"
      },
      {
        id: "buttonText",
        label: "Texte du Bouton",
        type: "text",
        placeholder: "Ex: Commencer maintenant",
        defaultValue: "Commencer maintenant"
      },
      {
        id: "guarantee",
        label: "Garantie",
        type: "text",
        placeholder: "Ex: Garantie 30 jours",
        defaultValue: "Garantie satisfait ou remboursé pendant 30 jours"
      }
    ]
  }
];

const generateSalesPageHTML = (data: any): string => {
  const { branding, seo } = data;
  
  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seo?.title || data.hero?.title || 'Page de Vente'}</title>
    <meta name="description" content="${seo?.metaDescription || 'Page de vente professionnelle'}">
    <meta name="keywords" content="${seo?.keywords || 'marketing, business, solution'}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${seo?.ogTitle || seo?.title || data.hero?.title}">
    <meta property="og:description" content="${seo?.ogDescription || seo?.metaDescription}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="${data.hero?.image || ''}">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${seo?.ogTitle || seo?.title}">
    <meta name="twitter:description" content="${seo?.ogDescription || seo?.metaDescription}">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        html { scroll-behavior: smooth; }
        :root {
          --primary-color: ${branding?.primaryColor || '#10b981'};
          --secondary-color: ${branding?.secondaryColor || '#059669'};
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
        .gradient-bg { background: linear-gradient(135deg, #064e3b 0%, var(--secondary-color) 100%); }
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
</body>
</html>`;
};

const generateHeroSection = (hero: any, branding: any) => `
    <header class="gradient-bg text-white py-20 px-4">
        <div class="max-w-6xl mx-auto">
            <nav class="flex items-center justify-between mb-16">
                <div class="flex items-center space-x-3">
                    <img src="${branding?.logo || ''}" alt="${branding?.logoAlt || ''}" class="w-12 h-12 rounded-full shadow-lg object-cover">
                    <span class="text-2xl font-bold">${branding?.companyName || 'Brand&Sell'}</span>
                </div>
            </nav>
            
            <div class="grid lg:grid-cols-2 gap-12 items-center">
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
        </div>
    </header>
`;

const generateProblemsSection = (problemes: any) => `
    <section class="py-16 px-4 bg-gradient-to-r from-red-50 to-orange-50">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">${problemes.title}</h2>
                <p class="text-xl text-gray-600">${problemes.subtitle}</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                ${problemes.problems?.map((problem: any) => `
                <div class="bg-white p-6 rounded-xl shadow border-l-4 border-red-400">
                    <h3 class="text-red-700 font-bold mb-2">${problem.title}</h3>
                    <p class="text-gray-700">${problem.description}</p>
                </div>
                `).join('') || ''}
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
            <div class="grid lg:grid-cols-2 gap-12 items-center">
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
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">${fonctionnalites.title}</h2>
                <p class="text-xl text-gray-600">${fonctionnalites.subtitle}</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                ${fonctionnalites.features?.map((feature: any) => `
                <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow text-center">
                    <div class="text-4xl mb-4">${feature.icon}</div>
                    <h3 class="text-xl font-semibold mb-2">${feature.title}</h3>
                    <p class="text-gray-600">${feature.description}</p>
                </div>
                `).join('') || ''}
            </div>
        </div>
    </section>
`;

const generateTestimonialsSection = (temoignages: any) => `
    <section class="py-16 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">${temoignages.title}</h2>
                <p class="text-xl text-gray-600">${temoignages.subtitle}</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                ${temoignages.testimonials?.map((testimonial: any) => `
                <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                    <div class="flex items-center mb-4">
                        <span class="text-yellow-400">★★★★★</span>
                        <span class="ml-2 text-gray-600">${testimonial.rating}</span>
                    </div>
                    <p class="text-gray-700 mb-4 italic">"${testimonial.content}"</p>
                    <div class="flex items-center">
                        <img src="${testimonial.avatar}" class="w-10 h-10 rounded-full mr-3" alt="${testimonial.name}">
                        <div>
                            <h4 class="font-semibold">${testimonial.name}</h4>
                            <p class="text-gray-500 text-sm">${testimonial.role}</p>
                        </div>
                    </div>
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
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">${faq.title}</h2>
                <p class="text-xl text-gray-600">${faq.subtitle}</p>
            </div>
            <div class="space-y-4">
                ${faq.faqs?.map((faq: any) => `
                <details class="bg-white p-6 rounded-lg border shadow-sm">
                    <summary class="font-semibold cursor-pointer">${faq.question}</summary>
                    <p class="mt-2 text-gray-600">${faq.answer}</p>
                </details>
                `).join('') || ''}
            </div>
        </div>
    </section>
`;

const generateCTASection = (cta: any) => `
    <section id="cta-final" class="py-20 px-4 gradient-bg text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">${cta.title}</h2>
        <p class="text-xl md:text-2xl mb-10 opacity-90">${cta.subtitle}</p>
        <a href="#" class="inline-block gradient-accent text-white font-semibold px-10 py-5 text-xl rounded-full shadow-lg transition transform hover:scale-105 mb-8">
          ${cta.buttonText}
        </a>
        <p class="flex items-center justify-center text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          ${cta.guarantee}
        </p>
      </div>
    </section>
`;

export const salesPageTemplate: Template = {
  id: 'sales-page',
  name: 'Page de Vente',
  description: 'Template de page de vente avec sections problèmes/solutions',
  thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
  category: 'Marketing',
  sections: salesPageSections,
  defaultData: {
    seo: {
      title: "Transformez Votre Business avec Notre Solution Innovante",
      metaDescription: "Découvrez comment notre solution innovante peut transformer votre business et améliorer votre quotidien. Essai gratuit disponible.",
      keywords: "marketing digital, automation, CRM, entrepreneurs, solution business",
      ogTitle: "Transformez Votre Business avec Notre Solution",
      ogDescription: "La solution qui révolutionne votre façon de travailler"
    },
    branding: {
      companyName: "Brand&Sell",
      tagline: "Marketing Digital Simplifié pour Entrepreneurs",
      logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=100&q=80",
      logoAlt: "Logo de l'entreprise",
      primaryColor: "#10b981",
      secondaryColor: "#059669",
      accentColor: "#f59e0b",
      backgroundColor: "#ffffff",
      textColor: "#1f2937"
    },
    hero: {
      title: "Transformez Votre Business avec Notre Solution Innovante",
      subtitle: "Découvrez comment notre produit peut résoudre vos problèmes et améliorer votre quotidien",
      cta: "Commencer Maintenant",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Solution innovante"
    },
    problemes: {
      title: "Les Défis Que Vous Rencontrez",
      subtitle: "Nous comprenons les difficultés auxquelles vous faites face au quotidien",
      problems: [
        {
          title: "Manque de temps",
          description: "Vous passez trop de temps sur des tâches répétitives qui pourraient être automatisées."
        },
        {
          title: "Coûts élevés",
          description: "Les solutions actuelles sont souvent trop coûteuses pour les petites entreprises."
        }
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Problèmes rencontrés"
    },
    solution: {
      title: "Notre Solution Unique",
      subtitle: "Voici comment nous résolvons vos problèmes de manière simple et efficace",
      benefits: [
        {
          icon: "⚡",
          title: "Gain de temps considérable",
          description: "Automatisez les tâches répétitives et concentrez-vous sur ce qui compte vraiment."
        }
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Solution innovante"
    },
    fonctionnalites: {
      title: "Fonctionnalités incluses",
      subtitle: "Découvrez toutes les fonctionnalités qui vous aideront à réussir",
      features: [
        {
          icon: "🚀",
          title: "Fonctionnalité 1",
          description: "Description de la première fonctionnalité"
        }
      ],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Interface moderne"
    },
    temoignages: {
      title: "Ce que disent nos clients",
      subtitle: "Découvrez les retours de nos clients satisfaits",
      testimonials: [
        {
          name: "Marie D.",
          role: "Coach Business",
          content: "Excellent service, je recommande vivement !",
          rating: "5.0",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        }
      ]
    },
    tarifs: {
      title: "Nos tarifs",
      subtitle: "Choisissez le plan qui vous convient",
      plans: [
        {
          name: "Starter",
          description: "Parfait pour commencer",
          price: "€49",
          period: "/mois",
          features: "Fonctionnalité 1, Fonctionnalité 2, Fonctionnalité 3",
          buttonText: "Commencer",
          popular: "false"
        }
      ]
    },
    faq: {
      title: "Questions fréquentes",
      subtitle: "Trouvez les réponses à vos questions",
      faqs: [
        {
          question: "Comment ça marche ?",
          answer: "C'est très simple, il suffit de suivre les étapes."
        }
      ]
    },
    cta: {
      title: "Prêt à commencer ?",
      subtitle: "Rejoignez des milliers de clients satisfaits",
      buttonText: "Commencer maintenant",
      guarantee: "Garantie satisfait ou remboursé pendant 30 jours"
    }
  },
  generateHTML: generateSalesPageHTML
};