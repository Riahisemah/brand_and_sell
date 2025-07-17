import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label: string;
  placeholder?: string;
  altText?: string;
  onAltTextChange?: (alt: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  label,
  placeholder = "URL de l'image",
  altText = "",
  onAltTextChange
}) => {
  const [uploadMode, setUploadMode] = useState<'url' | 'upload'>('url');
  const [dragActive, setDragActive] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      // Convert file to base64 for preview (in a real app, you'd upload to a server)
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        onChange(result);
      };
      reader.readAsDataURL(file);
    }
  }, [onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: false,
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false)
  });

  const removeImage = () => {
    onChange('');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">{label}</Label>
        <div className="flex gap-2">
          <Button
            type="button"
            variant={uploadMode === 'url' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setUploadMode('url')}
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            URL
          </Button>
          <Button
            type="button"
            variant={uploadMode === 'upload' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setUploadMode('upload')}
          >
            <Upload className="h-3 w-3 mr-1" />
            Upload
          </Button>
        </div>
      </div>

      {uploadMode === 'url' ? (
        <div className="space-y-2">
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
            ${isDragActive || dragActive 
              ? 'border-emerald-400 bg-emerald-50' 
              : 'border-gray-300 hover:border-emerald-300 hover:bg-emerald-25'
            }
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-2">
            <Upload className={`h-8 w-8 ${isDragActive ? 'text-emerald-500' : 'text-gray-400'}`} />
            <div className="text-sm">
              <span className="font-medium">Cliquez pour uploader</span> ou glissez-déposez
            </div>
            <div className="text-xs text-gray-500">
              PNG, JPG, GIF jusqu'à 10MB
            </div>
          </div>
        </div>
      )}

      {onAltTextChange && (
        <div className="space-y-2">
          <Label className="text-sm">Texte alternatif</Label>
          <Input
            value={altText}
            onChange={(e) => onAltTextChange(e.target.value)}
            placeholder="Description de l'image"
          />
        </div>
      )}

      {value && (
        <div className="relative group">
          <div className="relative overflow-hidden rounded-lg border border-gray-200">
            <img
              src={value}
              alt={altText || "Aperçu"}
              className="w-full h-32 object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/400x200?text=Image+non+trouvée";
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={removeImage}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4 mr-1" />
                Supprimer
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;