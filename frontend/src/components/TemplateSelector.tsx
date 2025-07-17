import React from 'react';
import { Template } from '@/types/templates';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface TemplateSelectorProps {
  templates: Template[];
  onSelectTemplate: (template: Template) => void;
  selectedTemplateId?: string;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  onSelectTemplate,
  selectedTemplateId
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Choisissez votre Template
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Sélectionnez un template pour commencer à créer votre page. 
          Vous pourrez le personnaliser entièrement selon vos besoins.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card 
            key={template.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              selectedTemplateId === template.id 
                ? 'ring-2 ring-emerald-500 shadow-lg' 
                : 'hover:shadow-md'
            }`}
            onClick={() => onSelectTemplate(template)}
          >
            <CardHeader className="p-0">
              <div className="relative">
                <img 
                  src={template.thumbnail} 
                  alt={template.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge 
                  className="absolute top-3 right-3 bg-emerald-500 text-white"
                >
                  {template.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2 text-gray-800">
                {template.name}
              </CardTitle>
              <CardDescription className="text-gray-600 mb-4">
                {template.description}
              </CardDescription>
              <Button 
                className={`w-full ${
                  selectedTemplateId === template.id
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-gray-600 hover:bg-gray-700'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTemplate(template);
                }}
              >
                {selectedTemplateId === template.id ? 'Sélectionné' : 'Utiliser ce Template'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {templates.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Aucun template disponible
          </h3>
          <p className="text-gray-500">
            Les templates seront bientôt disponibles.
          </p>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;