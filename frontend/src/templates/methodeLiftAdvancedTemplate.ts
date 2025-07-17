import { Template, TemplateSection } from '../types/templates';

const methodeLiftAdvancedSections: TemplateSection[] = [
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
        placeholder: "Ex: Méthode LIFT – Libérez votre potentiel professionnel",
        required: true,
        defaultValue: "Méthode LIFT – Libérez votre potentiel professionnel"
      },
      {
        id: "metaDescription",
        label: "Meta Description",
        type: "textarea",
        placeholder: "Description de 150-160 caractères pour les moteurs de recherche",
        defaultValue: "La méthode LIFT en 4 étapes pour créer une activité alignée, rentable et épanouissante. Coaching stratégique pour entrepreneurs et indépendants."
      },
      {
        id: "keywords",
        label: "Mots-clés (séparés par des virgules)",
        type: "textarea",
        placeholder: "Ex: coaching, développement personnel, entrepreneuriat",
        defaultValue: "coaching, développement personnel, entrepreneuriat, formation, méthode LIFT, transformation professionnelle"
      },
      {
        id: "ogTitle",
        label: "Titre Open Graph (réseaux sociaux)",
        type: "text",
        placeholder: "Titre pour le partage sur les réseaux sociaux",
        defaultValue: "Méthode LIFT - Transformez votre vie professionnelle"
      },
      {
        id: "ogDescription",
        label: "Description Open Graph",
        type: "textarea",
        placeholder: "Description pour le partage sur les réseaux sociaux",
        defaultValue: "Le système en 4 étapes pour libérer votre potentiel et créer une activité alignée"
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
        placeholder: "Ex: Méthode LIFT",
        required: true,
        defaultValue: "Méthode LIFT"
      },
      {
        id: "tagline",
        label: "Slogan",
        type: "text",
        placeholder: "Ex: Libérez votre potentiel professionnel",
        defaultValue: "Libérez votre potentiel professionnel"
      },
      {
        id: "logo",
        label: "Logo (URL)",
        type: "image",
        placeholder: "https://example.com/logo.png",
        defaultValue: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=100&q=80"
      },
      {
        id: "logoAlt",
        label: "Texte alternatif du logo",
        type: "text",
        placeholder: "Logo de l'entreprise",
        defaultValue: "Logo Méthode LIFT"
      },
      {
        id: "primaryColor",
        label: "Couleur Principale",
        type: "color",
        defaultValue: "#0d9488"
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
        placeholder: "Ex: Méthode LIFT",
        required: true,
        defaultValue: "Méthode LIFT"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Décrivez brièvement votre méthode",
        defaultValue: "Le système en 4 étapes pour libérer votre potentiel et créer une activité alignée avec vos aspirations"
      },
      {
        id: "cta",
        label: "Texte du Bouton CTA",
        type: "text",
        placeholder: "Ex: Accéder à la formation offerte",
        defaultValue: "🚀 Accéder à la formation offerte"
      },
      {
        id: "bonus",
        label: "Bonus offert",
        type: "text",
        placeholder: "Ex: + 1 heure de coaching stratégique offerte",
        defaultValue: "+ 1 heure de coaching stratégique offerte"
      }
    ]
  },
  {
    id: "problemes",
    title: "Problèmes",
    icon: "⚠️",
    description: "Situations problématiques",
    visible: true,
    order: 3,
    fields: [
      {
        id: "title",
        label: "Titre de la Section",
        type: "text",
        placeholder: "Ex: Vous reconnaissez-vous dans ces situations ?",
        defaultValue: "Vous reconnaissez-vous dans ces situations ?"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez les problèmes",
        defaultValue: "Ces défis sont plus fréquents que vous ne le pensez. La bonne nouvelle ? Ils ont une solution."
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
            placeholder: "Ex: Manque de direction",
            required: true,
            defaultValue: ""
          },
          {
            id: "description",
            label: "Description",
            type: "textarea",
            placeholder: "Décrivez le problème en détail",
            defaultValue: ""
          },
          {
            id: "details",
            label: "Détails (séparés par des virgules)",
            type: "textarea",
            placeholder: "Ex: Beaucoup d'idées mais pas de priorité, Difficulté à passer à l'action",
            defaultValue: ""
          }
        ],
        defaultValue: [
          {
            title: "Manque de direction",
            description: "Vous avez le potentiel, mais pas le plan ni le cadre pour avancer efficacement.",
            details: "Beaucoup d'idées mais pas de priorité, Difficulté à passer à l'action"
          },
          {
            title: "Trop d'outils, peu de résultats",
            description: "Vous testez plein de méthodes sans voir d'impact réel sur votre activité.",
            details: "Formations qui s'accumulent, Résultats en dessous des attentes"
          },
          {
            title: "Solitude et doute",
            description: "Pas de soutien ni de retour sur vos actions, le doute s'installe.",
            details: "Manque de communauté, Remise en question constante"
          }
        ]
      }
    ]
  },
  {
    id: "methode",
    title: "Méthode LIFT",
    icon: "🎯",
    description: "Les 4 piliers de transformation",
    visible: true,
    order: 4,
    fields: [
      {
        id: "title",
        label: "Titre de la Section",
        type: "text",
        placeholder: "Ex: Les 4 piliers de la transformation",
        defaultValue: "Les 4 piliers de la transformation"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez votre méthode",
        defaultValue: "Un système éprouvé pour passer de l'idée à la réalisation concrète"
      },
      {
        id: "pillars",
        label: "Piliers de la méthode",
        type: "array",
        arrayItemTemplate: [
          {
            id: "number",
            label: "Numéro",
            type: "text",
            placeholder: "Ex: 1",
            required: true,
            defaultValue: ""
          },
          {
            id: "title",
            label: "Titre du pilier",
            type: "text",
            placeholder: "Ex: Libérez",
            required: true,
            defaultValue: ""
          },
          {
            id: "description",
            label: "Description",
            type: "textarea",
            placeholder: "Décrivez ce pilier",
            defaultValue: ""
          },
          {
            id: "details",
            label: "Détails (séparés par des virgules)",
            type: "textarea",
            placeholder: "Ex: Identifier vos freins, Clarifier vos aspirations",
            defaultValue: ""
          }
        ],
        defaultValue: [
          {
            number: "1",
            title: "Libérez",
            description: "Débarrassez-vous des blocages mentaux et définissez une vision claire.",
            details: "Identifier vos freins, Clarifier vos aspirations"
          },
          {
            number: "2",
            title: "Investissez",
            description: "Apprenez à investir en vous-même avec stratégie et confiance.",
            details: "Prioriser vos investissements, Maximiser votre ROI personnel"
          },
          {
            number: "3",
            title: "Formez",
            description: "Accédez à des contenus à fort impact, faciles à appliquer.",
            details: "Apprentissage ciblé, Méthodes actionnables"
          },
          {
            number: "4",
            title: "Transformez",
            description: "Mettez en place une transformation durable de votre vie pro.",
            details: "Plan d'action personnalisé, Résultats mesurables"
          }
        ]
      }
    ]
  },
  {
    id: "resultats",
    title: "Résultats",
    icon: "📊",
    description: "Résultats concrets obtenus",
    visible: true,
    order: 5,
    fields: [
      {
        id: "title",
        label: "Titre de la Section",
        type: "text",
        placeholder: "Ex: Ce que nos membres accomplissent",
        defaultValue: "Ce que nos membres accomplissent"
      },
      {
        id: "stats",
        label: "Statistiques",
        type: "array",
        arrayItemTemplate: [
          {
            id: "number",
            label: "Chiffre",
            type: "text",
            placeholder: "Ex: 3x",
            required: true,
            defaultValue: ""
          },
          {
            id: "description",
            label: "Description",
            type: "text",
            placeholder: "Ex: Plus de clarté sur leur projet",
            defaultValue: ""
          }
        ],
        defaultValue: [
          {
            number: "3x",
            description: "Plus de clarté sur leur projet"
          },
          {
            number: "2.5x",
            description: "Plus de confiance en leur valeur"
          },
          {
            number: "80%",
            description: "Ont lancé leur activité en 3 mois"
          }
        ]
      }
    ]
  },
  {
    id: "temoignages",
    title: "Témoignages",
    icon: "💬",
    description: "Témoignages membres",
    visible: true,
    order: 6,
    fields: [
      {
        id: "title",
        label: "Titre de la Section",
        type: "text",
        placeholder: "Ex: Nos membres racontent",
        defaultValue: "Nos membres racontent"
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
            placeholder: "Ex: Sarah",
            required: true,
            defaultValue: ""
          },
          {
            id: "role",
            label: "Rôle / Entreprise",
            type: "text",
            placeholder: "Ex: Coach en développement personnel",
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
            id: "timeAgo",
            label: "Il y a",
            type: "text",
            placeholder: "Ex: Il y a 2 mois",
            defaultValue: "Il y a 2 mois"
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
            name: "Sarah",
            role: "Coach en développement personnel",
            content: "J'ai lancé mon activité de coach en 3 mois, sans me brûler. La clarté de la méthode est incroyable.",
            rating: "5.0",
            timeAgo: "Il y a 2 mois",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
          },
          {
            name: "Hugo",
            role: "Consultant indépendant",
            content: "Je pensais que j'étais dispersé, en fait j'étais juste mal guidé. LIFT a tout changé.",
            rating: "4.9",
            timeAgo: "Il y a 1 mois",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
          },
          {
            name: "Mélanie",
            role: "Designer freelance",
            content: "La meilleure décision pro de mon année. Un boost énorme pour ma reconversion.",
            rating: "5.0",
            timeAgo: "Il y a 3 semaines",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
          }
        ]
      }
    ]
  },
  {
    id: "faq",
    title: "FAQ",
    icon: "❓",
    description: "Questions fréquentes détaillées",
    visible: true,
    order: 7,
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
        defaultValue: "Tout ce que vous devez savoir avant de commencer"
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
            placeholder: "Ex: À qui s'adresse la méthode LIFT ?",
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
            question: "À qui s'adresse la méthode LIFT ?",
            answer: "La méthode LIFT est conçue pour : Les indépendants et entrepreneurs qui veulent structurer leur activité, Les salariés en reconversion professionnelle, Les porteurs de projet qui cherchent une méthode claire, Toute personne souhaitant aligner sa vie professionnelle avec ses aspirations"
          },
          {
            question: "Combien de temps dure la formation ?",
            answer: "Le parcours principal est structuré sur 6 semaines avec : Modules vidéo à votre rythme (environ 2h/semaine), Rendez-vous live hebdomadaires de coaching (1h/semaine), Exercices pratiques et plan d'action personnalisé, Accès à vie au contenu après la formation"
          },
          {
            question: "Puis-je poser mes questions ou être accompagné ?",
            answer: "Oui, plusieurs options d'accompagnement sont disponibles : Groupe privé pour échanger avec la communauté, Coaching de groupe en live chaque semaine, Option d'accompagnement personnalisé 1:1, Support par email pour les questions techniques. Votre premier appel stratégique est offert avec la formation."
          },
          {
            question: "Quelle est la différence avec d'autres formations ?",
            answer: "La méthode LIFT se distingue par : Une approche holistique (mental, stratégie, action), Un focus sur l'alignement avec vos valeurs, Des outils concrets et immédiatement applicables, Un accompagnement humain et personnalisé, Une communauté bienveillante et engagée"
          }
        ]
      }
    ]
  },
  {
    id: "cta",
    title: "CTA Final",
    icon: "🚀",
    description: "Appel à l'action final avec bonus",
    visible: true,
    order: 8,
    fields: [
      {
        id: "title",
        label: "Titre Principal",
        type: "text",
        placeholder: "Ex: Prêt à transformer votre vie professionnelle ?",
        defaultValue: "Prêt à transformer votre vie professionnelle ?"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Message d'introduction",
        defaultValue: "Rejoignez la méthode LIFT aujourd'hui et recevez immédiatement :"
      },
      {
        id: "bonuses",
        label: "Bonus offerts",
        type: "array",
        arrayItemTemplate: [
          {
            id: "title",
            label: "Titre du bonus",
            type: "text",
            placeholder: "Ex: Module 1 offert",
            required: true,
            defaultValue: ""
          },
          {
            id: "value",
            label: "Valeur",
            type: "text",
            placeholder: "Ex: Valeur : 97€",
            defaultValue: ""
          }
        ],
        defaultValue: [
          {
            title: "Module 1 offert",
            value: "Valeur : 97€"
          },
          {
            title: "Appel stratégique",
            value: "Valeur : 150€"
          },
          {
            title: "Outils pratiques",
            value: "Valeur : 47€"
          }
        ]
      },
      {
        id: "buttonText",
        label: "Texte du Bouton",
        type: "text",
        placeholder: "Ex: Recevoir mon accès gratuit",
        defaultValue: "🎁 Recevoir mon accès gratuit"
      },
      {
        id: "guarantee",
        label: "Garantie",
        type: "text",
        placeholder: "Ex: Sans engagement • Accès immédiat",
        defaultValue: "Sans engagement • Accès immédiat"
      }
    ]
  },
  {
    id: "footer",
    title: "Footer",
    icon: "📄",
    description: "Pied de page personnalisable",
    visible: true,
    order: 9,
    fields: [
      {
        id: "companyName",
        label: "Nom de l'entreprise",
        type: "text",
        placeholder: "Ex: Méthode LIFT",
        defaultValue: "Méthode LIFT"
      },
      {
        id: "description",
        label: "Description",
        type: "textarea",
        placeholder: "Description de votre entreprise",
        defaultValue: "Le système en 4 étapes pour libérer votre potentiel professionnel et créer une activité alignée."
      },
      {
        id: "email",
        label: "Email de contact",
        type: "text",
        placeholder: "Ex: contact@methodelift.com",
        defaultValue: "contact@methodelift.com"
      },
      {
        id: "socialLinks",
        label: "Réseaux sociaux",
        type: "array",
        arrayItemTemplate: [
          {
            id: "platform",
            label: "Plateforme",
            type: "text",
            placeholder: "Ex: Twitter",
            required: true,
            defaultValue: ""
          },
          {
            id: "url",
            label: "URL",
            type: "text",
            placeholder: "Ex: https://twitter.com/methodelift",
            defaultValue: ""
          }
        ],
        defaultValue: [
          {
            platform: "Twitter",
            url: "https://twitter.com/methodelift"
          },
          {
            platform: "LinkedIn",
            url: "https://linkedin.com/company/methodelift"
          },
          {
            platform: "Instagram",
            url: "https://instagram.com/methodelift"
          }
        ]
      },
      {
        id: "copyright",
        label: "Copyright",
        type: "text",
        placeholder: "Ex: © 2025 Méthode LIFT. Tous droits réservés.",
        defaultValue: "© 2025 Méthode LIFT. Tous droits réservés."
      }
    ]
  }
];

const generateMethodeLiftAdvancedHTML = (data: any): string => {
  const { branding, seo } = data;
  
  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seo?.title || branding?.companyName || 'Méthode LIFT'} – ${seo?.metaDescription || branding?.tagline || 'Libérez votre potentiel pro'}</title>
    <meta name="description" content="${seo?.metaDescription || 'La méthode LIFT en 4 étapes pour créer une activité alignée, rentable et épanouissante. Coaching stratégique pour entrepreneurs et indépendants.'}">
    <meta name="keywords" content="${seo?.keywords || 'coaching, développement personnel, entrepreneuriat, formation, méthode LIFT, transformation professionnelle'}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${seo?.ogTitle || seo?.title || branding?.companyName}">
    <meta property="og:description" content="${seo?.ogDescription || seo?.metaDescription}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${seo?.ogTitle || seo?.title}">
    <meta name="twitter:description" content="${seo?.ogDescription || seo?.metaDescription}">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        html { scroll-behavior: smooth; }
        :root {
          --primary-color: ${branding?.primaryColor || '#0d9488'};
          --secondary-color: ${branding?.secondaryColor || '#059669'};
          --accent-color: ${branding?.accentColor || '#f59e0b'};
          --background-color: ${branding?.backgroundColor || '#ffffff'};
          --text-color: ${branding?.textColor || '#1f2937'};
        }
        body { 
          background-color: var(--background-color); 
          color: var(--text-color); 
        }
        .gradient-text {
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        .gradient-primary { background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%); }
        .gradient-accent { background: linear-gradient(135deg, var(--accent-color) 0%, #d97706 100%); }
        .hover-grow {
            transition: transform 0.3s ease;
        }
        .hover-grow:hover {
            transform: translateY(-5px);
        }
        .faq-item {
            transition: all 0.3s ease;
        }
        .faq-item[open] {
            background-color: #f0fdf4;
        }
        .animate-marquee {
            animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
        }
    </style>
</head>
<body class="bg-white text-gray-800 font-sans">

    <!-- Hero -->
    <header class="gradient-primary text-white py-24 px-4">
        <div class="max-w-5xl mx-auto text-center">
            <span class="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate__animated animate__fadeIn">Nouvelle formation disponible</span>
            <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6 animate__animated animate__fadeInUp">
                <span>${data.hero?.title || ''}</span>
            </h1>
            <p class="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-1s">
                ${data.hero?.subtitle || ''}
            </p>
            <div class="animate__animated animate__fadeIn animate__delay-1s">
                <a href="#cta" class="inline-block gradient-accent text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover-grow">
                    <span class="flex items-center justify-center">
                        <i data-lucide="rocket" class="w-5 h-5 mr-2"></i> ${data.hero?.cta || ''}
                    </span>
                </a>
                <p class="text-sm mt-4 opacity-80">${data.hero?.bonus || ''}</p>
            </div>
        </div>
    </header>

    <!-- Logos Marquee -->
    <div class="bg-white py-6 border-y border-gray-100 overflow-hidden">
        <div class="flex items-center justify-center animate-marquee whitespace-nowrap">
            <span class="text-gray-500 mx-8">Ils nous font confiance :</span>
            <span class="font-medium text-gray-700 mx-8">Entrepreneurs</span>
            <span class="font-medium text-gray-700 mx-8">Indépendants</span>
            <span class="font-medium text-gray-700 mx-8">Coach</span>
            <span class="font-medium text-gray-700 mx-8">Consultants</span>
            <span class="font-medium text-gray-700 mx-8">Créatifs</span>
        </div>
    </div>

    <!-- Problèmes -->
    <section class="py-20 px-4 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    ${data.problemes?.title || ''} <span class="gradient-text">ces situations</span> ?
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">${data.problemes?.subtitle || ''}</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                ${data.problemes?.problems?.map((problem: any, index: number) => {
                  const colors = ['red', 'yellow', 'indigo'];
                  const color = colors[index % colors.length];
                  return `
                <div class="bg-white p-8 rounded-xl shadow-md hover-grow border-l-4 border-${color}-400">
                    <div class="w-12 h-12 bg-${color}-50 rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="compass" class="w-6 h-6 text-${color}-500"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-${color}-600 mb-3">${problem.title}</h3>
                    <p class="text-gray-600 mb-4">${problem.description}</p>
                    <ul class="text-sm text-gray-500 space-y-2">
                        ${problem.details ? problem.details.split(',').map((detail: string) => `
                        <li class="flex items-start">
                            <i data-lucide="chevron-right" class="w-4 h-4 text-${color}-400 mt-0.5 mr-2 flex-shrink-0"></i>
                            <span>${detail.trim()}</span>
                        </li>
                        `).join('') : ''}
                    </ul>
                </div>
                `;
                }).join('') || ''}
            </div>
        </div>
    </section>

    <!-- Méthode LIFT en 4 étapes -->
    <section class="py-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <span class="inline-block bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-4">Notre méthode</span>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    ${data.methode?.title || 'Les 4 piliers de la transformation'}
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">${data.methode?.subtitle || ''}</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${data.methode?.pillars?.map((pillar: any, index: number) => {
                  const colors = ['teal', 'emerald', 'amber', 'orange'];
                  const color = colors[index % colors.length];
                  return `
                <div class="bg-gradient-to-b from-${color}-50 to-white p-6 rounded-xl border border-${color}-100 shadow-sm hover-grow">
                    <div class="w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center mb-4">
                        <span class="text-${color}-600 font-bold text-xl">${pillar.number}</span>
                    </div>
                    <h3 class="text-xl font-semibold text-${color}-700 mb-3">${pillar.title}</h3>
                    <p class="text-gray-600 mb-4">${pillar.description}</p>
                    <ul class="text-sm text-gray-500 space-y-2">
                        ${pillar.details ? pillar.details.split(',').map((detail: string) => `
                        <li class="flex items-start">
                            <i data-lucide="check" class="w-4 h-4 text-${color}-400 mt-0.5 mr-2 flex-shrink-0"></i>
                            <span>${detail.trim()}</span>
                        </li>
                        `).join('') : ''}
                    </ul>
                </div>
                `;
                }).join('') || ''}
            </div>
        </div>
    </section>

    <!-- Résultats -->
    <section class="py-20 px-4 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <span class="inline-block bg-white text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-teal-200">Résultats concrets</span>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    ${data.resultats?.title || 'Ce que nos membres accomplissent'}
                </h2>
            </div>

            <div class="grid md:grid-cols-3 gap-8 mb-16">
                ${data.resultats?.stats?.map((stat: any) => `
                <div class="bg-white p-6 rounded-xl shadow text-center">
                    <div class="text-4xl font-bold text-teal-600 mb-2">${stat.number}</div>
                    <p class="text-gray-700">${stat.description}</p>
                </div>
                `).join('') || ''}
            </div>
        </div>
    </section>

    <!-- Témoignages -->
    <section class="py-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <span class="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4">Ils témoignent</span>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    ${data.temoignages?.title || 'Nos membres racontent'}
                </h2>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                ${data.temoignages?.testimonials?.map((testimonial: any) => `
                <div class="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover-grow">
                    <div class="flex items-center mb-4">
                        <div class="flex items-center mr-4">
                            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <span class="ml-1 text-gray-700">${testimonial.rating}</span>
                        </div>
                        <span class="text-gray-500 text-sm">${testimonial.timeAgo}</span>
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
        </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 px-4 bg-gray-50">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    ${data.faq?.title || 'Questions fréquentes'}
                </h2>
                <p class="text-xl text-gray-600">${data.faq?.subtitle || ''}</p>
            </div>

            <div class="space-y-4">
                ${data.faq?.faqs?.map((faq: any) => `
                <details class="faq-item bg-white p-6 rounded-lg border border-gray-200">
                    <summary class="flex justify-between items-center cursor-pointer font-semibold text-lg">
                        <span>${faq.question}</span>
                        <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500 transition-transform"></i>
                    </summary>
                    <div class="mt-4 text-gray-600">
                        <p>${faq.answer}</p>
                    </div>
                </details>
                `).join('') || ''}
            </div>
        </div>
    </section>

    <!-- Appel à l'action -->
    <section id="cta" class="py-24 px-4 gradient-primary text-white">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
                ${data.cta?.title || 'Prêt à transformer votre vie professionnelle ?'}
            </h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">${data.cta?.subtitle || ''}</p>

            <div class="grid md:grid-cols-3 gap-6 mb-12">
                ${data.cta?.bonuses?.map((bonus: any) => `
                <div class="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <i data-lucide="video" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="font-semibold mb-2">${bonus.title}</h3>
                    <p class="text-sm opacity-90">${bonus.value}</p>
                </div>
                `).join('') || ''}
            </div>

            <a href="#" class="inline-block gradient-accent text-white font-semibold px-10 py-4 text-lg rounded-full shadow-lg hover-grow">
                <span class="flex items-center justify-center">
                    <i data-lucide="gift" class="w-5 h-5 mr-2"></i> ${data.cta?.buttonText || ''}
                </span>
            </a>
            <p class="text-sm mt-4 opacity-80">${data.cta?.guarantee || ''}</p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-16 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-4 gap-12">
                <div>
                    <h3 class="text-xl font-bold mb-4">${data.footer?.companyName || branding?.companyName || 'Méthode LIFT'}</h3>
                    <p class="text-gray-400 mb-4">
                        ${data.footer?.description || 'Le système en 4 étapes pour libérer votre potentiel professionnel et créer une activité alignée.'}
                    </p>
                    <div class="flex space-x-4">
                        ${data.footer?.socialLinks?.map((link: any) => `
                        <a href="${link.url}" class="text-gray-400 hover:text-white">
                            <i data-lucide="${link.platform.toLowerCase()}" class="w-5 h-5"></i>
                        </a>
                        `).join('') || `
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i data-lucide="twitter" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i data-lucide="linkedin" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i data-lucide="instagram" class="w-5 h-5"></i>
                        </a>
                        `}
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Navigation</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Accueil</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">La méthode</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Témoignages</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">FAQ</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Légal</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Mentions légales</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">CGV</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Contact</h3>
                    <ul class="space-y-2">
                        <li class="flex items-center text-gray-400">
                            <i data-lucide="mail" class="w-4 h-4 mr-2"></i>
                            <span>${data.footer?.email || 'contact@methodelift.com'}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                ${data.footer?.copyright || '© 2025 Méthode LIFT. Tous droits réservés.'}
            </div>
        </div>
    </footer>

    <script>
        lucide.createIcons();

        // Animation FAQ
        document.querySelectorAll('details').forEach((item) => {
            item.addEventListener('toggle', (event) => {
                if (item.open) {
                    const icon = item.querySelector('i');
                    icon.classList.add('rotate-180');
                } else {
                    const icon = item.querySelector('i');
                    icon.classList.remove('rotate-180');
                }
            });
        });

        // Animation du défilement des logos
        const marquee = document.querySelector('.animate-marquee');
        if (marquee) {
            marquee.innerHTML += marquee.innerHTML;
            marquee.innerHTML += marquee.innerHTML;
        }
    </script>
</body>
</html>`;
};

export const methodeLiftAdvancedTemplate: Template = {
  id: 'methode-lift-advanced',
  name: 'Méthode LIFT - Version Avancée',
  description: 'Template avancé pour méthode de coaching avec animations, statistiques et design moderne',
  thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
  category: 'Coaching',
  sections: methodeLiftAdvancedSections,
  defaultData: {
    seo: {
      title: "Méthode LIFT – Libérez votre potentiel professionnel",
      metaDescription: "La méthode LIFT en 4 étapes pour créer une activité alignée, rentable et épanouissante. Coaching stratégique pour entrepreneurs et indépendants.",
      keywords: "coaching, développement personnel, entrepreneuriat, formation, méthode LIFT, transformation professionnelle",
      ogTitle: "Méthode LIFT - Transformez votre vie professionnelle",
      ogDescription: "Le système en 4 étapes pour libérer votre potentiel et créer une activité alignée"
    },
    branding: {
      companyName: "Méthode LIFT",
      tagline: "Libérez votre potentiel professionnel",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=100&q=80",
      logoAlt: "Logo Méthode LIFT",
      primaryColor: "#0d9488",
      secondaryColor: "#059669",
      accentColor: "#f59e0b",
      backgroundColor: "#ffffff",
      textColor: "#1f2937"
    },
    hero: {
      title: "Méthode LIFT",
      subtitle: "Le système en 4 étapes pour libérer votre potentiel et créer une activité alignée avec vos aspirations",
      cta: "🚀 Accéder à la formation offerte",
      bonus: "+ 1 heure de coaching stratégique offerte"
    },
    problemes: {
      title: "Vous reconnaissez-vous dans",
      subtitle: "Ces défis sont plus fréquents que vous ne le pensez. La bonne nouvelle ? Ils ont une solution.",
      problems: [
        {
          title: "Manque de direction",
          description: "Vous avez le potentiel, mais pas le plan ni le cadre pour avancer efficacement.",
          details: "Beaucoup d'idées mais pas de priorité, Difficulté à passer à l'action"
        },
        {
          title: "Trop d'outils, peu de résultats",
          description: "Vous testez plein de méthodes sans voir d'impact réel sur votre activité.",
          details: "Formations qui s'accumulent, Résultats en dessous des attentes"
        },
        {
          title: "Solitude et doute",
          description: "Pas de soutien ni de retour sur vos actions, le doute s'installe.",
          details: "Manque de communauté, Remise en question constante"
        }
      ]
    },
    methode: {
      title: "Les 4 piliers de la transformation",
      subtitle: "Un système éprouvé pour passer de l'idée à la réalisation concrète",
      pillars: [
        {
          number: "1",
          title: "Libérez",
          description: "Débarrassez-vous des blocages mentaux et définissez une vision claire.",
          details: "Identifier vos freins, Clarifier vos aspirations"
        },
        {
          number: "2",
          title: "Investissez",
          description: "Apprenez à investir en vous-même avec stratégie et confiance.",
          details: "Prioriser vos investissements, Maximiser votre ROI personnel"
        },
        {
          number: "3",
          title: "Formez",
          description: "Accédez à des contenus à fort impact, faciles à appliquer.",
          details: "Apprentissage ciblé, Méthodes actionnables"
        },
        {
          number: "4",
          title: "Transformez",
          description: "Mettez en place une transformation durable de votre vie pro.",
          details: "Plan d'action personnalisé, Résultats mesurables"
        }
      ]
    },
    resultats: {
      title: "Ce que nos membres accomplissent",
      stats: [
        {
          number: "3x",
          description: "Plus de clarté sur leur projet"
        },
        {
          number: "2.5x",
          description: "Plus de confiance en leur valeur"
        },
        {
          number: "80%",
          description: "Ont lancé leur activité en 3 mois"
        }
      ]
    },
    temoignages: {
      title: "Nos membres racontent",
      testimonials: [
        {
          name: "Sarah",
          role: "Coach en développement personnel",
          content: "J'ai lancé mon activité de coach en 3 mois, sans me brûler. La clarté de la méthode est incroyable.",
          rating: "5.0",
          timeAgo: "Il y a 2 mois",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          name: "Hugo",
          role: "Consultant indépendant",
          content: "Je pensais que j'étais dispersé, en fait j'étais juste mal guidé. LIFT a tout changé.",
          rating: "4.9",
          timeAgo: "Il y a 1 mois",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          name: "Mélanie",
          role: "Designer freelance",
          content: "La meilleure décision pro de mon année. Un boost énorme pour ma reconversion.",
          rating: "5.0",
          timeAgo: "Il y a 3 semaines",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
      ]
    },
    faq: {
      title: "Questions fréquentes",
      subtitle: "Tout ce que vous devez savoir avant de commencer",
      faqs: [
        {
          question: "À qui s'adresse la méthode LIFT ?",
          answer: "La méthode LIFT est conçue pour : Les indépendants et entrepreneurs qui veulent structurer leur activité, Les salariés en reconversion professionnelle, Les porteurs de projet qui cherchent une méthode claire, Toute personne souhaitant aligner sa vie professionnelle avec ses aspirations"
        },
        {
          question: "Combien de temps dure la formation ?",
          answer: "Le parcours principal est structuré sur 6 semaines avec : Modules vidéo à votre rythme (environ 2h/semaine), Rendez-vous live hebdomadaires de coaching (1h/semaine), Exercices pratiques et plan d'action personnalisé, Accès à vie au contenu après la formation"
        },
        {
          question: "Puis-je poser mes questions ou être accompagné ?",
          answer: "Oui, plusieurs options d'accompagnement sont disponibles : Groupe privé pour échanger avec la communauté, Coaching de groupe en live chaque semaine, Option d'accompagnement personnalisé 1:1, Support par email pour les questions techniques. Votre premier appel stratégique est offert avec la formation."
        },
        {
          question: "Quelle est la différence avec d'autres formations ?",
          answer: "La méthode LIFT se distingue par : Une approche holistique (mental, stratégie, action), Un focus sur l'alignement avec vos valeurs, Des outils concrets et immédiatement applicables, Un accompagnement humain et personnalisé, Une communauté bienveillante et engagée"
        }
      ]
    },
    cta: {
      title: "Prêt à transformer votre vie professionnelle ?",
      subtitle: "Rejoignez la méthode LIFT aujourd'hui et recevez immédiatement :",
      bonuses: [
        {
          title: "Module 1 offert",
          value: "Valeur : 97€"
        },
        {
          title: "Appel stratégique",
          value: "Valeur : 150€"
        },
        {
          title: "Outils pratiques",
          value: "Valeur : 47€"
        }
      ],
      buttonText: "🎁 Recevoir mon accès gratuit",
      guarantee: "Sans engagement • Accès immédiat"
    },
    footer: {
      companyName: "Méthode LIFT",
      description: "Le système en 4 étapes pour libérer votre potentiel professionnel et créer une activité alignée.",
      email: "contact@methodelift.com",
      socialLinks: [
        {
          platform: "Twitter",
          url: "https://twitter.com/methodelift"
        },
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/company/methodelift"
        },
        {
          platform: "Instagram",
          url: "https://instagram.com/methodelift"
        }
      ],
      copyright: "© 2025 Méthode LIFT. Tous droits réservés."
    }
  },
  generateHTML: generateMethodeLiftAdvancedHTML
};