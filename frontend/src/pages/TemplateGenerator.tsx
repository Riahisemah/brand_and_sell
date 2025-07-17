import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Download, Eye, ArrowRight, ArrowLeft, Check, Sparkles, Settings, Grid3X3, EyeOff, ChevronUp, ChevronDown, ExternalLink } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import Navbar from '../components/Navbar';
import TemplateSelector from '../components/TemplateSelector';
import DynamicFormBuilder from '../components/DynamicFormBuilder';
import { templates } from '../templates';
import { Template, TemplateSection, TemplateData } from '../types/templates';

const TemplateGenerator = () => {
  const { toast } = useToast();
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [preview, setPreview] = useState<string | null>(null);
  const [templateData, setTemplateData] = useState<TemplateData>({});
  const [sectionsConfig, setSectionsConfig] = useState<TemplateSection[]>([]);

  // Check for data from ProductGenerator on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('templateData');
    if (storedData) {
      try {
        const { templateId, data } = JSON.parse(storedData);
        const template = templates.find(t => t.id === templateId);
        
        if (template) {
          setSelectedTemplate(template);
          
          // Map the JSON data to template structure
          const mappedData = mapJSONToTemplateData(data, template);
          setTemplateData(mappedData);
          setSectionsConfig([...template.sections]);
          
          // Clear the stored data
          localStorage.removeItem('templateData');
          
          toast({
            title: "Template chargé",
            description: "Votre contenu généré a été appliqué au template sélectionné.",
          });
        }
      } catch (error) {
        console.error('Error loading template data:', error);
      }
    }
  }, []);

  // Function to map JSON data to template structure
  const mapJSONToTemplateData = (jsonData: any, template: Template): TemplateData => {
    const mappedData: TemplateData = {};
    
    // Map each section based on the template structure
    template.sections.forEach(section => {
      const sectionData: any = {};
      
      section.fields.forEach(field => {
        // Map JSON data to template fields based on field IDs and section IDs
        switch (section.id) {
           case 'seo':
            if (jsonData.seo) {
              sectionData[field.id] = jsonData.seo[field.id] || field.defaultValue;
            } else {
              sectionData[field.id] = field.defaultValue;
            }
            break;
            
          case 'branding':
            if (jsonData.branding) {
              sectionData[field.id] = jsonData.branding[field.id] || field.defaultValue;
            }
            break;
            
          case 'hero':
            if (jsonData.hero) {
              sectionData[field.id] = jsonData.hero[field.id] || field.defaultValue;
            }
            break;
            
          case 'problemes':
            if (jsonData.problemes) {
              if (field.id === 'problems' && jsonData.problemes.problems) {
                sectionData[field.id] = jsonData.problemes.problems;
              } else {
                sectionData[field.id] = jsonData.problemes[field.id] || field.defaultValue;
              }
            }
            break;
            
          case 'solution':
            if (jsonData.solution) {
              if (field.id === 'benefits' && jsonData.solution.benefits) {
                sectionData[field.id] = jsonData.solution.benefits;
              } else {
                sectionData[field.id] = jsonData.solution[field.id] || field.defaultValue;
              }
            }
            break;
            
          case 'fonctionnalites':
            if (jsonData.fonctionnalites) {
              if (field.id === 'features' && jsonData.fonctionnalites.features) {
                sectionData[field.id] = jsonData.fonctionnalites.features;
              } else {
                sectionData[field.id] = jsonData.fonctionnalites[field.id] || field.defaultValue;
              }
            }
            break;
            
          case 'pourquoi':
            if (jsonData.pourquoi) {
              if (field.id === 'reasons' && jsonData.pourquoi.reasons) {
                sectionData[field.id] = jsonData.pourquoi.reasons.map((reason: string) => ({ title: reason, description: reason }));
              } else {
                sectionData[field.id] = jsonData.pourquoi[field.id] || field.defaultValue;
              }
            }
            break;
            
          case 'temoignages':
            if (jsonData.temoignages) {
              if (field.id === 'testimonials' && jsonData.temoignages.testimonials) {
                sectionData[field.id] = jsonData.temoignages.testimonials;
              } else {
                sectionData[field.id] = jsonData.temoignages[field.id] || field.defaultValue;
              }
            }
            break;
            
          case 'bonus':
            if (jsonData.bonus) {
              sectionData[field.id] = jsonData.bonus[field.id] || field.defaultValue;
            }
            break;
            
          case 'faq':
            if (jsonData.faq) {
              if (field.id === 'faqs' && jsonData.faq.faqs) {
                sectionData[field.id] = jsonData.faq.faqs;
              } else {
                sectionData[field.id] = jsonData.faq[field.id] || field.defaultValue;
              }
            }
            break;
            
          case 'cta':
            if (jsonData.cta) {
              sectionData[field.id] = jsonData.cta[field.id] || field.defaultValue;
            }
            break;
            
          default:
            sectionData[field.id] = field.defaultValue;
        }
      });
      
      mappedData[section.id] = sectionData;
    });
    
    return mappedData;
  };

  // Initialize template data when template is selected
  useEffect(() => {
    if (selectedTemplate && Object.keys(templateData).length === 0) {
      setTemplateData(selectedTemplate.defaultData);
      setSectionsConfig([...selectedTemplate.sections]);
      setCurrentStep(0);
    }
  }, [selectedTemplate]);

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleSectionDataChange = (sectionId: string, data: any) => {
    setTemplateData(prev => ({
      ...prev,
      [sectionId]: data
    }));
  };

  const handleNext = () => {
    const visibleSections = sectionsConfig.filter(s => s.visible);
    if (currentStep < visibleSections.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
    const openPreviewInNewTab = () => {
    if (!preview) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez d'abord générer un aperçu.",
      });
      return;
    }
    const blob = new Blob([preview], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    // URL.revokeObjectURL(url); // Revoke after a short delay to allow the new tab to load. Some browsers might need more time.
    // For simplicity and to avoid issues, we can let the browser manage the blob URL lifecycle, or revoke it on component unmount/page unload.
    toast({
      title: "Aperçu Ouvert",
      description: "L'aperçu a été ouvert dans un nouvel onglet.",
    });
  };


  const toggleSectionVisibility = (sectionId: string) => {
    setSectionsConfig(prev => 
      prev.map(section => 
        section.id === sectionId 
          ? { ...section, visible: !section.visible }
          : section
      )
    );
  };

  const moveSectionUp = (sectionId: string) => {
    setSectionsConfig(prev => {
      const index = prev.findIndex(s => s.id === sectionId);
      if (index > 0) {
        const newConfig = [...prev];
        [newConfig[index - 1], newConfig[index]] = [newConfig[index], newConfig[index - 1]];
        return newConfig.map((section, i) => ({ ...section, order: i }));
      }
      return prev;
    });
  };

  const moveSectionDown = (sectionId: string) => {
    setSectionsConfig(prev => {
      const index = prev.findIndex(s => s.id === sectionId);
      if (index < prev.length - 1) {
        const newConfig = [...prev];
        [newConfig[index], newConfig[index + 1]] = [newConfig[index + 1], newConfig[index]];
        return newConfig.map((section, i) => ({ ...section, order: i }));
      }
      return prev;
    });
  };

  const generatePreview = () => {
    if (!selectedTemplate) return;
    
    // Filter data to only include visible sections
    const visibleSectionIds = sectionsConfig.filter(s => s.visible).map(s => s.id);
    const filteredData: TemplateData = {};
    
    visibleSectionIds.forEach(sectionId => {
      if (templateData[sectionId]) {
        filteredData[sectionId] = templateData[sectionId];
      }
    });

    const html = selectedTemplate.generateHTML(filteredData);
    setPreview(html);
    toast({
      title: "Aperçu généré",
      description: "Votre aperçu a été mis à jour avec succès.",
    });
  };

  const downloadHTML = () => {
    if (!selectedTemplate) return;
    
    // Filter data to only include visible sections
    const visibleSectionIds = sectionsConfig.filter(s => s.visible).map(s => s.id);
    const filteredData: TemplateData = {};
    
    visibleSectionIds.forEach(sectionId => {
      if (templateData[sectionId]) {
        filteredData[sectionId] = templateData[sectionId];
      }
    });

    const html = selectedTemplate.generateHTML(filteredData);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedTemplate.name.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Téléchargement réussi",
      description: "Votre fichier HTML a été téléchargé avec succès.",
    });
  };

  const visibleSections = sectionsConfig.filter(s => s.visible);
  const currentSection = visibleSections[currentStep];

  // Progress Indicator
  const ProgressIndicator = () => (
    <div className="mb-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-emerald-700 flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Étape {currentStep + 1} sur {visibleSections.length}
          </span>
          <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            {Math.round(((currentStep + 1) / visibleSections.length) * 100)}% complété
          </span>
        </div>
        <Progress 
          value={((currentStep + 1) / visibleSections.length) * 100} 
          className="h-4 bg-emerald-50 rounded-full overflow-hidden"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {visibleSections.map((section, index) => (
          <div
            key={section.id}
            className={`
              relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center hover:scale-105
              ${index === currentStep 
                ? "border-emerald-400 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg shadow-emerald-100" 
                : index < currentStep 
                  ? "border-teal-300 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-md" 
                  : "border-slate-200 bg-white hover:border-emerald-200 hover:bg-emerald-25"
              }
            `}
            onClick={() => setCurrentStep(index)}
          >
            <div className="text-xl mb-2">{section.icon}</div>
            <div className={`text-xs font-medium ${
              index === currentStep 
                ? "text-emerald-700" 
                : index < currentStep 
                  ? "text-teal-700" 
                  : "text-slate-600"
            }`}>
              {section.title}
            </div>
            {index < currentStep && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
                <Check className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // Section Manager
  const SectionManager = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Gestionnaire de Sections
        </CardTitle>
        <CardDescription>
          Gérez l'ordre et la visibilité de vos sections
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {sectionsConfig.map((section, index) => (
            <div
              key={section.id}
              className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                section.visible ? 'bg-emerald-50 border-emerald-200' : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{section.icon}</span>
                <span className={`font-medium ${section.visible ? 'text-emerald-700' : 'text-gray-500'}`}>
                  {section.title}
                </span>
              </div>
              
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => moveSectionUp(section.id)}
                  disabled={index === 0}
                  className="h-8 w-8 p-0"
                >
                  <ChevronUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => moveSectionDown(section.id)}
                  disabled={index === sectionsConfig.length - 1}
                  className="h-8 w-8 p-0"
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleSectionVisibility(section.id)}
                  className={`h-8 w-8 p-0 ${section.visible ? 'text-emerald-600' : 'text-gray-400'}`}
                >
                  {section.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (!selectedTemplate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <div className="mb-6 mt-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <Grid3X3 className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Générateur Multi-Template
              </h1>
            </div>
            <p className="text-slate-600 ml-15">
              Choisissez un template et créez votre page personnalisée
            </p>
          </div>

          <TemplateSelector
            templates={templates}
            onSelectTemplate={handleTemplateSelect}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6 mt-20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {selectedTemplate.name}
                </h1>
                <p className="text-slate-600">{selectedTemplate.description}</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setSelectedTemplate(null)}
              className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
            >
              Changer de Template
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div className="space-y-6">
            <SectionManager />
            <ProgressIndicator />
            
            {currentSection && (
              <div className="space-y-6">
                <DynamicFormBuilder
                  section={currentSection}
                  data={templateData[currentSection.id] || {}}
                  onChange={handleSectionDataChange}
                />
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Précédent
                  </Button>
                  
                  {currentStep === visibleSections.length - 1 ? (
                    <Button 
                      onClick={generatePreview} 
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Eye className="mr-2 h-4 w-4" /> Générer l'aperçu
                    </Button>
                  ) : (
                    <Button onClick={handleNext}>
                      Suivant <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="sticky top-6">
            <Card className="shadow-xl border-emerald-200 bg-white">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
                <CardTitle className="text-emerald-800 flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Aperçu de la Page
                </CardTitle>
                <CardDescription className="text-emerald-600">
                  Prévisualisation en temps réel de votre page
                </CardDescription>
                <div className="flex gap-2 mt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={generatePreview} 
                    className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400"
                  >
                    <Eye className="mr-1 h-4 w-4" /> Aperçu
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={downloadHTML} 
                    className="border-teal-300 text-teal-700 hover:bg-teal-50 hover:border-teal-400"
                  >
                    <Download className="mr-1 h-4 w-4" /> Télécharger
                  </Button>
                   <Button
                    size="sm"
                    variant="outline"
                    onClick={openPreviewInNewTab}
                    className="border-teal-300 text-teal-700 hover:bg-teal-50 hover:border-teal-400"
                    disabled={!preview}
                    aria-label="Ouvrir dans un nouvel onglet"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" /> Nouvel Onglet
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="bg-slate-50 rounded-b-lg min-h-[400px] max-h-[600px] overflow-auto border border-emerald-100">
                  {preview ? (
                    <iframe
                      srcDoc={preview}
                      className="w-full h-full min-h-[400px] border-0"
                      title="Aperçu de la page"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-[400px] text-slate-500">
                      <div className="text-center">
                        <div className="text-4xl mb-4">🎨</div>
                        <p>Remplissez le formulaire pour voir l'aperçu</p>
                        <Button 
                          onClick={generatePreview} 
                          className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                        >
                          Générer l'aperçu
                        </Button>
                      </div>
                    </div>
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

export default TemplateGenerator;