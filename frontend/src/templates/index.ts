import { Template } from '../types/templates';
import { salesPageTemplate } from './salesPageTemplate';
import { brandSellTemplate } from './brandSellTemplate';
import { methodeLiftTemplate } from './methodeLiftTemplate';
import { flowStackTemplate } from './flowStackTemplate';
// import { boostBookTemplate } from './boostBookTemplate';
// import { methodeLiftAdvancedTemplate } from './methodeLiftAdvancedTemplate';

export const templates: Template[] = [
  salesPageTemplate,
  brandSellTemplate,
  methodeLiftTemplate,
  flowStackTemplate,
  // boostBookTemplate,
  // methodeLiftAdvancedTemplate
];

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id);
};

export const getTemplatesByCategory = (category: string): Template[] => {
  return templates.filter(template => template.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = templates.map(template => template.category);
  return [...new Set(categories)];
};