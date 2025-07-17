import { Template, TemplateSection } from '../types/templates';

const methodeLiftSections: TemplateSection[] = [
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
        placeholder: "Ex: Méthode LIFT - Libérez votre potentiel professionnel",
        required: true,
        defaultValue: "Méthode LIFT – Libérez votre potentiel professionnel"
      },
      {
        id: "metaDescription",
        label: "Meta Description",
        type: "textarea",
        placeholder: "Description de 150-160 caractères pour les moteurs de recherche",
        defaultValue: "La méthode LIFT vous aide à créer une activité libre, rentable et alignée. Coaching, stratégie et mindset pour transformer votre vie professionnelle."
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
        placeholder: "Ex: La Méthode LIFT",
        required: true,
        defaultValue: "La Méthode LIFT"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Décrivez brièvement votre méthode",
        defaultValue: "Libérez votre potentiel, Investissez en vous, Formez-vous efficacement, Transformez votre vie professionnelle."
      },
      {
        id: "cta",
        label: "Texte du Bouton CTA",
        type: "text",
        placeholder: "Ex: Commencez maintenant – Formation offerte",
        defaultValue: "🚀 Commencez maintenant – Formation offerte"
      },
      {
        id: "image",
        label: "Image Hero",
        type: "image",
        placeholder: "https://example.com/hero.jpg",
        defaultValue: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Coaching professionnel"
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
        placeholder: "Ex: Vous sentez-vous bloqué dans votre carrière ou projet ?",
        defaultValue: "Vous sentez-vous bloqué dans votre carrière ou projet ?"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez les problèmes",
        defaultValue: "Trop d'idées, pas assez de clarté. Une envie de changement mais pas de méthode. Vous n'êtes pas seul."
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
          }
        ],
        defaultValue: [
          {
            title: "Manque de direction",
            description: "Vous avez le potentiel, mais pas le plan ni le cadre pour avancer efficacement."
          },
          {
            title: "Trop d'outils, peu de résultats",
            description: "Vous testez plein de méthodes sans voir d'impact réel sur votre activité ou votre quotidien."
          },
          {
            title: "Solitude et doute",
            description: "Pas toujours de soutien, pas de retour sur vos actions, le doute s'installe."
          }
        ]
      },
      {
        id: "image",
        label: "Image de la section",
        type: "image",
        placeholder: "https://example.com/problems.jpg",
        defaultValue: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Personne réfléchissant à sa carrière"
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
        placeholder: "Ex: Les 4 piliers de la Méthode LIFT",
        defaultValue: "Les 4 piliers de la Méthode LIFT"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez votre solution",
        defaultValue: "Un système éprouvé pour transformer votre vie professionnelle"
      },
      {
        id: "benefits",
        label: "Piliers de la méthode",
        type: "array",
        arrayItemTemplate: [
          {
            id: "icon",
            label: "Icône",
            type: "text",
            placeholder: "Ex: 🚀",
            defaultValue: "✨"
          },
          {
            id: "title",
            label: "Titre",
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
          }
        ],
        defaultValue: [
          {
            icon: "🔓",
            title: "Libérez",
            description: "Débarrassez-vous des blocages mentaux et définissez une nouvelle vision claire."
          },
          {
            icon: "💰",
            title: "Investissez",
            description: "Apprenez à investir en vous-même avec stratégie et confiance."
          },
          {
            icon: "📚",
            title: "Formez",
            description: "Formez-vous avec des contenus à fort impact, faciles à appliquer."
          },
          {
            icon: "🚀",
            title: "Transformez",
            description: "Mettez en place une transformation durable de votre vie professionnelle."
          }
        ]
      },
      {
        id: "image",
        label: "Image de la section",
        type: "image",
        placeholder: "https://example.com/solution.jpg",
        defaultValue: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Méthode LIFT en action"
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
        placeholder: "Ex: Ce que vous obtenez",
        defaultValue: "Ce que vous obtenez"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez vos fonctionnalités",
        defaultValue: "Un accompagnement complet pour votre transformation professionnelle"
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
            placeholder: "Ex: 🎯",
            defaultValue: "🎯"
          },
          {
            id: "title",
            label: "Titre",
            type: "text",
            placeholder: "Ex: Coaching personnalisé",
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
            title: "Coaching personnalisé",
            description: "Sessions individuelles pour définir votre vision et vos objectifs"
          },
          {
            icon: "📚",
            title: "Modules de formation",
            description: "Contenu structuré pour développer vos compétences étape par étape"
          },
          {
            icon: "👥",
            title: "Communauté privée",
            description: "Échangez avec d'autres entrepreneurs dans le même parcours"
          },
          {
            icon: "📊",
            title: "Suivi des progrès",
            description: "Outils pour mesurer votre évolution et ajuster votre stratégie"
          }
        ]
      },
      {
        id: "image",
        label: "Image de la section",
        type: "image",
        placeholder: "https://example.com/features.jpg",
        defaultValue: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "imageAlt",
        label: "Texte alternatif de l'image",
        type: "text",
        placeholder: "Description de l'image",
        defaultValue: "Formation et coaching"
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
        placeholder: "Ex: Ils ont appliqué LIFT",
        defaultValue: "Ils ont appliqué LIFT"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez les témoignages",
        defaultValue: "Découvrez les transformations de nos membres"
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
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
          },
          {
            name: "Hugo",
            role: "Consultant indépendant",
            content: "Je pensais que j'étais dispersé, en fait j'étais juste mal guidé. LIFT a tout changé.",
            rating: "4.9",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
          },
          {
            name: "Mélanie",
            role: "Designer freelance",
            content: "La meilleure décision pro de mon année. Un boost énorme pour ma reconversion.",
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
        placeholder: "Ex: Nos formules",
        defaultValue: "Nos formules"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Introduisez vos tarifs",
        defaultValue: "Choisissez l'accompagnement qui vous correspond"
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
            placeholder: "Ex: Formation",
            required: true,
            defaultValue: ""
          },
          {
            id: "description",
            label: "Description",
            type: "text",
            placeholder: "Ex: Accès aux modules",
            defaultValue: ""
          },
          {
            id: "price",
            label: "Prix",
            type: "text",
            placeholder: "Ex: €297",
            defaultValue: ""
          },
          {
            id: "period",
            label: "Période",
            type: "text",
            placeholder: "Ex: unique",
            defaultValue: "unique"
          },
          {
            id: "features",
            label: "Fonctionnalités (séparées par des virgules)",
            type: "textarea",
            placeholder: "Ex: 6 modules vidéo, Exercices pratiques, Accès à vie",
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
            name: "Formation",
            description: "Accès aux modules",
            price: "€297",
            period: "unique",
            features: "6 modules vidéo, Exercices pratiques, Accès à vie",
            buttonText: "Commencer",
            popular: "false"
          },
          {
            name: "Coaching",
            description: "Formation + accompagnement",
            price: "€997",
            period: "unique",
            features: "Tout Formation + 3 sessions coaching, Groupe privé, Support email",
            buttonText: "Réserver",
            popular: "true"
          },
          {
            name: "VIP",
            description: "Accompagnement premium",
            price: "€2997",
            period: "unique",
            features: "Tout Coaching + 6 sessions 1:1, Stratégie personnalisée, Accès prioritaire",
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
            answer: "Aux indépendants, porteurs de projet, salariés en reconversion ou entrepreneurs souhaitant clarifier leur vision et structurer leur réussite."
          },
          {
            question: "Combien de temps dure la formation ?",
            answer: "Vous accédez à un parcours structuré sur 6 semaines avec du contenu à votre rythme, et des rendez-vous live hebdomadaires."
          },
          {
            question: "Puis-je poser mes questions ou être accompagné ?",
            answer: "Oui, vous avez accès à un groupe privé + coaching de groupe en live chaque semaine. Un accompagnement personnalisé est aussi disponible."
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
        placeholder: "Ex: Prêt à franchir le cap ?",
        defaultValue: "Prêt à franchir le cap ?"
      },
      {
        id: "subtitle",
        label: "Sous-titre",
        type: "textarea",
        placeholder: "Dernier message avant l'action",
        defaultValue: "Inscrivez-vous pour recevoir immédiatement un accès gratuit au 1er module + un appel stratégique offert."
      },
      {
        id: "buttonText",
        label: "Texte du Bouton",
        type: "text",
        placeholder: "Ex: Accès Immédiat Gratuit",
        defaultValue: "🎁 Accès Immédiat Gratuit"
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

const generateMethodeLiftHTML = (data: any): string => {
  const { branding, seo } = data;
  
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${seo?.title || branding?.companyName || 'Méthode LIFT'} – ${seo?.metaDescription || branding?.tagline || 'Libérez votre potentiel pro'}</title>
  <meta name="description" content="${seo?.metaDescription || 'La méthode LIFT vous aide à créer une activité libre, rentable et alignée. Coaching, stratégie et mindset pour transformer votre vie professionnelle.'}">
  <meta name="keywords" content="${seo?.keywords || 'coaching, développement personnel, entrepreneuriat, formation, méthode LIFT, transformation professionnelle'}">
  
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
</body>
</html>`;
};

const generateHeroSection = (hero: any, branding: any) => `
  <header class="gradient-bg text-white py-20 px-4">
    <div class="max-w-5xl mx-auto text-center">
      <h1 class="text-4xl md:text-6xl font-bold leading-tight">${hero.title}</h1>
      <p class="text-xl md:text-2xl mt-6 mb-8">${hero.subtitle}</p>
      <a href="#cta" class="inline-block gradient-accent text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg transition transform hover:scale-105">
        ${hero.cta}
      </a>
    </div>
  </header>
`;

const generateProblemsSection = (problemes: any) => `
  <section class="py-16 px-4 bg-gray-50">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">${problemes.title}</h2>
      <p class="text-lg text-gray-600 mb-10">${problemes.subtitle}</p>
      <div class="grid md:grid-cols-3 gap-8 text-left">
        ${problemes.problems?.map((problem: any, index: number) => {
          const colors = ['red', 'yellow', 'indigo'];
          const color = colors[index % colors.length];
          return `
        <div class="bg-white p-6 rounded-xl shadow border-l-4 border-${color}-400">
          <h3 class="font-semibold text-${color}-600 mb-2">${problem.title}</h3>
          <p>${problem.description}</p>
        </div>
        `;
        }).join('') || ''}
      </div>
    </div>
  </section>
`;

const generateSolutionSection = (solution: any) => `
  <section class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">${solution.title}</h2>
      <p class="text-xl text-gray-600 mb-12">${solution.subtitle}</p>
      <div class="grid md:grid-cols-4 gap-8 mt-12">
        ${solution.benefits?.map((benefit: any, index: number) => {
          const colors = ['teal', 'emerald', 'yellow', 'orange'];
          const color = colors[index % colors.length];
          return `
        <div class="p-6 rounded-lg bg-${color}-50 border border-${color}-200 shadow">
          <div class="text-4xl mb-4">${benefit.icon}</div>
          <h3 class="text-xl font-semibold text-${color}-700 mb-2">${benefit.title}</h3>
          <p class="text-gray-700">${benefit.description}</p>
        </div>
        `;
        }).join('') || ''}
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
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  <section class="py-16 px-4 bg-gray-100">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">${temoignages.title}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        ${temoignages.testimonials?.map((testimonial: any) => `
        <div class="bg-white p-6 rounded-lg shadow text-center">
          <p class="text-yellow-500 text-2xl">★★★★★</p>
          <h3 class="font-semibold text-lg mt-4">${testimonial.name}</h3>
          <p class="text-gray-500 text-sm">${testimonial.role}</p>
          <p class="text-gray-600 italic mt-2">"${testimonial.content}"</p>
        </div>
        `).join('') || ''}
      </div>
    </div>
  </section>
`;

const generatePricingSection = (tarifs: any) => `
  <section class="py-16 px-4 bg-white">
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
  <section class="py-16 px-4 bg-white">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-10">${faq.title}</h2>
      <div class="space-y-6">
        ${faq.faqs?.map((faq: any) => `
        <details class="bg-gray-50 p-4 rounded-lg border">
          <summary class="font-semibold cursor-pointer">${faq.question}</summary>
          <p class="mt-2 text-gray-700">${faq.answer}</p>
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
      <p class="text-xl mb-8">${cta.subtitle}</p>
      <a href="#" class="inline-block gradient-accent text-white font-semibold px-10 py-4 text-xl rounded-full shadow-lg transition transform hover:scale-105">
        ${cta.buttonText}
      </a>
      <p class="mt-4 text-sm opacity-75">${cta.guarantee}</p>
    </div>
  </section>
`;

export const methodeLiftTemplate: Template = {
  id: 'methode-lift',
  name: 'Méthode LIFT - Coaching',
  description: 'Template pour méthode de coaching avec 4 piliers et témoignages',
  thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
  category: 'Coaching',
  sections: methodeLiftSections,
  defaultData: {
    seo: {
      title: "Méthode LIFT – Libérez votre potentiel professionnel",
      metaDescription: "La méthode LIFT vous aide à créer une activité libre, rentable et alignée. Coaching, stratégie et mindset pour transformer votre vie professionnelle.",
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
      title: "La Méthode LIFT",
      subtitle: "Libérez votre potentiel, Investissez en vous, Formez-vous efficacement, Transformez votre vie professionnelle.",
      cta: "🚀 Commencez maintenant – Formation offerte",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Coaching professionnel"
    },
    problemes: {
      title: "Vous sentez-vous bloqué dans votre carrière ou projet ?",
      subtitle: "Trop d'idées, pas assez de clarté. Une envie de changement mais pas de méthode. Vous n'êtes pas seul.",
      problems: [
        {
          title: "Manque de direction",
          description: "Vous avez le potentiel, mais pas le plan ni le cadre pour avancer efficacement."
        },
        {
          title: "Trop d'outils, peu de résultats",
          description: "Vous testez plein de méthodes sans voir d'impact réel sur votre activité ou votre quotidien."
        },
        {
          title: "Solitude et doute",
          description: "Pas toujours de soutien, pas de retour sur vos actions, le doute s'installe."
        }
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Personne réfléchissant à sa carrière"
    },
    solution: {
      title: "Les 4 piliers de la Méthode LIFT",
      subtitle: "Un système éprouvé pour transformer votre vie professionnelle",
      benefits: [
        {
          icon: "🔓",
          title: "Libérez",
          description: "Débarrassez-vous des blocages mentaux et définissez une nouvelle vision claire."
        },
        {
          icon: "💰",
          title: "Investissez",
          description: "Apprenez à investir en vous-même avec stratégie et confiance."
        },
        {
          icon: "📚",
          title: "Formez",
          description: "Formez-vous avec des contenus à fort impact, faciles à appliquer."
        },
        {
          icon: "🚀",
          title: "Transformez",
          description: "Mettez en place une transformation durable de votre vie professionnelle."
        }
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Méthode LIFT en action"
    },
    fonctionnalites: {
      title: "Ce que vous obtenez",
      subtitle: "Un accompagnement complet pour votre transformation professionnelle",
      features: [
        {
          icon: "🎯",
          title: "Coaching personnalisé",
          description: "Sessions individuelles pour définir votre vision et vos objectifs"
        },
        {
          icon: "📚",
          title: "Modules de formation",
          description: "Contenu structuré pour développer vos compétences étape par étape"
        },
        {
          icon: "👥",
          title: "Communauté privée",
          description: "Échangez avec d'autres entrepreneurs dans le même parcours"
        },
        {
          icon: "📊",
          title: "Suivi des progrès",
          description: "Outils pour mesurer votre évolution et ajuster votre stratégie"
        }
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Formation et coaching"
    },
    temoignages: {
      title: "Ils ont appliqué LIFT",
      subtitle: "Découvrez les transformations de nos membres",
      testimonials: [
        {
          name: "Sarah",
          role: "Coach en développement personnel",
          content: "J'ai lancé mon activité de coach en 3 mois, sans me brûler. La clarté de la méthode est incroyable.",
          rating: "5.0",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          name: "Hugo",
          role: "Consultant indépendant",
          content: "Je pensais que j'étais dispersé, en fait j'étais juste mal guidé. LIFT a tout changé.",
          rating: "4.9",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          name: "Mélanie",
          role: "Designer freelance",
          content: "La meilleure décision pro de mon année. Un boost énorme pour ma reconversion.",
          rating: "5.0",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
      ]
    },
    tarifs: {
      title: "Nos formules",
      subtitle: "Choisissez l'accompagnement qui vous correspond",
      plans: [
        {
          name: "Formation",
          description: "Accès aux modules",
          price: "€297",
          period: "unique",
          features: "6 modules vidéo, Exercices pratiques, Accès à vie",
          buttonText: "Commencer",
          popular: "false"
        },
        {
          name: "Coaching",
          description: "Formation + accompagnement",
          price: "€997",
          period: "unique",
          features: "Tout Formation + 3 sessions coaching, Groupe privé, Support email",
          buttonText: "Réserver",
          popular: "true"
        },
        {
          name: "VIP",
          description: "Accompagnement premium",
          price: "€2997",
          period: "unique",
          features: "Tout Coaching + 6 sessions 1:1, Stratégie personnalisée, Accès prioritaire",
          buttonText: "Nous contacter",
          popular: "false"
        }
      ]
    },
    faq: {
      title: "Questions fréquentes",
      subtitle: "Trouvez les réponses à vos questions",
      faqs: [
        {
          question: "À qui s'adresse la méthode LIFT ?",
          answer: "Aux indépendants, porteurs de projet, salariés en reconversion ou entrepreneurs souhaitant clarifier leur vision et structurer leur réussite."
        },
        {
          question: "Combien de temps dure la formation ?",
          answer: "Vous accédez à un parcours structuré sur 6 semaines avec du contenu à votre rythme, et des rendez-vous live hebdomadaires."
        },
        {
          question: "Puis-je poser mes questions ou être accompagné ?",
          answer: "Oui, vous avez accès à un groupe privé + coaching de groupe en live chaque semaine. Un accompagnement personnalisé est aussi disponible."
        }
      ]
    },
    cta: {
      title: "Prêt à franchir le cap ?",
      subtitle: "Inscrivez-vous pour recevoir immédiatement un accès gratuit au 1er module + un appel stratégique offert.",
      buttonText: "🎁 Accès Immédiat Gratuit",
      guarantee: "Garantie satisfait ou remboursé pendant 30 jours"
    }
  },
  generateHTML: generateMethodeLiftHTML
};