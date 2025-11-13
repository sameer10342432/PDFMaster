import { useCallback, useState } from "react";
import { Upload, X, File, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface UploadedFile {
  id: string;
  file: File;
  name: string;
  size: number;
}

interface FileUploadZoneProps {
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
}

export function FileUploadZone({ onFilesChange, maxFiles = 10 }: FileUploadZoneProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  const handleFiles = useCallback((newFiles: FileList | null) => {
    if (!newFiles) return;
    
    const pdfFiles = Array.from(newFiles).filter(file => file.type === "application/pdf");
    const uploadedFiles: UploadedFile[] = pdfFiles.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      file,
      name: file.name,
      size: file.size,
    }));

    const updatedFiles = [...files, ...uploadedFiles].slice(0, maxFiles);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles.map(f => f.file));
  }, [files, maxFiles, onFilesChange]);

  const removeFile = (id: string) => {
    const updatedFiles = files.filter(f => f.id !== id);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles.map(f => f.file));
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  return (
    <div className="space-y-6">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          border-2 border-dashed rounded-lg p-12 text-center transition-all min-h-64
          flex flex-col items-center justify-center gap-4
          ${isDragging 
            ? "border-primary bg-primary/5 scale-[1.02]" 
            : "border-border hover:border-primary/50 hover:bg-accent/30"
          }
        `}
        data-testid="dropzone-upload"
      >
        <div className="rounded-full bg-primary/10 p-4">
          <Upload className="h-12 w-12 text-primary" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">
            {isDragging ? "Drop your PDF files here" : "Upload PDF Files"}
          </h3>
          <p className="text-sm text-muted-foreground">
            Drag and drop your PDF files here, or click to browse
          </p>
        </div>

        <input
          type="file"
          id="file-upload"
          multiple
          accept=".pdf,application/pdf"
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
          data-testid="input-file"
        />
        
        <Button 
          onClick={() => document.getElementById("file-upload")?.click()}
          size="lg"
          data-testid="button-select-files"
        >
          Select PDF Files
        </Button>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-3 w-3" />
          <span>Your files are secure and will be deleted after processing</span>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">
              Uploaded Files ({files.length}/{maxFiles})
            </h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setFiles([]);
                onFilesChange([]);
              }}
              data-testid="button-clear-all"
            >
              Clear All
            </Button>
          </div>
          
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={file.id}
                className="flex items-center gap-3 p-4 rounded-lg border bg-card hover-elevate"
                data-testid={`file-item-${index}`}
              >
                <div className="rounded bg-primary/10 p-2">
                  <File className="h-5 w-5 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                </div>

                <Badge variant="secondary" className="shrink-0">
                  {index + 1}
                </Badge>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFile(file.id)}
                  data-testid={`button-remove-${index}`}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
