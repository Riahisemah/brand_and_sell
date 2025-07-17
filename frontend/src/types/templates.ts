export interface TemplateField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'image' | 'color' | 'array' | 'object';
  placeholder?: string;
  required?: boolean;
  defaultValue?: any;
  arrayItemTemplate?: TemplateField[];
  objectFields?: TemplateField[];
}

export interface TemplateSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  fields: TemplateField[];
  visible: boolean;
  order: number;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: string;
  sections: TemplateSection[];
  defaultData: any;
  generateHTML: (data: any) => string;
}

export interface TemplateData {
  [key: string]: any;
}