
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Edit, Download } from "lucide-react";
import { Link } from "react-router-dom";


interface Template {
  id: number;
  name: string;
  description?: string;
  category: 'landing' | 'formation' | string;
  image?: string;
  html: string;
}


interface TemplateCardProps {
  template: Template;
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'landing':
        return 'bg-blue-100 text-blue-800';
      case 'formation':
        return 'bg-green-100 text-green-800';
      //   case 'blog':
      //     return 'bg-purple-100 text-purple-800';
      //   case 'portfolio':
      //     return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={template.image}
          alt={template.name}
          className="w-full h-48 object-cover"
        />
        <Badge className={`absolute top-2 right-2 ${getCategoryColor(template.category)}`}>
          {template.category}
        </Badge>
      </div>

      <CardHeader>
        <CardTitle className="text-lg">{template.name}</CardTitle>
        <CardDescription>{template.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex gap-2 flex-wrap">
          <Link to={`/preview/${template.id}`}>
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              Aperçu
            </Button>
          </Link>
          <Link to={`/template-edit/${template.id}`}>
            <Button size="sm" className="flex items-center gap-1">
              <Edit className="h-4 w-4" />
              Éditer
            </Button>
          </Link>
          <a
            href={template.html}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" variant="ghost" className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              Télécharger
            </Button>
          </a>

        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;