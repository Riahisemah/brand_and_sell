import React from 'react';
import { TemplateField, TemplateSection } from '../types/templates';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import ImageUpload from '../components/ImageUpload';
import { Plus, Trash2, GripVertical } from 'lucide-react';

interface DynamicFormBuilderProps {
  section: TemplateSection;
  data: any;
  onChange: (sectionId: string, data: any) => void;
}

const DynamicFormBuilder: React.FC<DynamicFormBuilderProps> = ({
  section,
  data,
  onChange
}) => {
  const handleFieldChange = (fieldId: string, value: any) => {
    const newData = { ...data, [fieldId]: value };
    onChange(section.id, newData);
  };

  const handleArrayItemChange = (fieldId: string, index: number, itemData: any) => {
    const currentArray = data[fieldId] || [];
    const newArray = [...currentArray];
    newArray[index] = itemData;
    handleFieldChange(fieldId, newArray);
  };

  const addArrayItem = (fieldId: string, template: TemplateField[]) => {
    const currentArray = data[fieldId] || [];
    const newItem: any = {};
    
    template.forEach(field => {
      newItem[field.id] = field.defaultValue || '';
    });
    
    handleFieldChange(fieldId, [...currentArray, newItem]);
  };

  const removeArrayItem = (fieldId: string, index: number) => {
    const currentArray = data[fieldId] || [];
    const newArray = currentArray.filter((_: any, i: number) => i !== index);
    handleFieldChange(fieldId, newArray);
  };

  const renderField = (field: TemplateField, value: any = '') => {
    switch (field.type) {
      case 'text':
        return (
          <Input
            value={value || ''}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            placeholder={field.placeholder}
          />
        );

      case 'textarea':
        return (
          <Textarea
            value={value || ''}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            rows={3}
          />
        );

      case 'image':
        return (
          <ImageUpload
            value={value || ''}
            onChange={(url) => handleFieldChange(field.id, url)}
            label=""
            placeholder={field.placeholder}
          />
        );

      case 'color':
        return (
          <div className="flex gap-2">
            <Input
              type="color"
              value={value || '#000000'}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              className="w-16 h-10 p-1 border rounded cursor-pointer"
            />
            <Input
              value={value || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              placeholder={field.placeholder || '#000000'}
              className="flex-1"
            />
          </div>
        );

      case 'array':
        const arrayValue = value || [];
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-medium">{field.label}</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => addArrayItem(field.id, field.arrayItemTemplate || [])}
              >
                <Plus className="h-4 w-4 mr-1" />
                Ajouter
              </Button>
            </div>
            
            {arrayValue.map((item: any, index: number) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <GripVertical className="h-4 w-4 text-gray-400" />
                      Élément {index + 1}
                    </CardTitle>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeArrayItem(field.id, index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {field.arrayItemTemplate?.map((subField) => (
                    <div key={subField.id} className="space-y-1">
                      <Label className="text-xs">{subField.label}</Label>
                      {renderSubField(subField, item[subField.id], (newValue) => {
                        const newItem = { ...item, [subField.id]: newValue };
                        handleArrayItemChange(field.id, index, newItem);
                      })}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
            
            {arrayValue.length === 0 && (
              <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="text-2xl mb-2">📝</div>
                <p className="text-sm">Aucun élément ajouté</p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem(field.id, field.arrayItemTemplate || [])}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Ajouter le premier élément
                </Button>
              </div>
            )}
          </div>
        );

      default:
        return (
          <Input
            value={value || ''}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            placeholder={field.placeholder}
          />
        );
    }
  };

  const renderSubField = (field: TemplateField, value: any, onChange: (value: any) => void) => {
    switch (field.type) {
      case 'text':
        return (
          <Input
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className="text-sm"
          />
        );

      case 'textarea':
        return (
          <Textarea
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            rows={2}
            className="text-sm"
          />
        );

      case 'image':
        return (
          <ImageUpload
            value={value || ''}
            onChange={onChange}
            label=""
            placeholder={field.placeholder}
          />
        );

      default:
        return (
          <Input
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className="text-sm"
          />
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-xl">{section.icon}</span>
          {section.title}
        </CardTitle>
        <p className="text-sm text-gray-600">{section.description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {section.fields.map((field) => (
          <div key={field.id} className="space-y-2">
            {field.type !== 'array' && (
              <Label htmlFor={field.id} className="text-sm font-medium">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </Label>
            )}
            {renderField(field, data[field.id])}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DynamicFormBuilder;