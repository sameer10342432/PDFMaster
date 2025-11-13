import { Link } from "wouter";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Merge, 
  Layers, 
  Link as LinkIcon, 
  FilePlus2, 
  Copy, 
  FilePlus, 
  FileStack, 
  Files, 
  FileText, 
  Shuffle,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  merge: Merge,
  layers: Layers,
  link: LinkIcon,
  "file-merge": FilePlus2,
  combine: Copy,
  "file-plus": FilePlus,
  "file-add": FileStack,
  files: Files,
  "file-text": FileText,
  shuffle: Shuffle,
};

interface ToolCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export function ToolCard({ id, title, description, icon }: ToolCardProps) {
  const Icon = iconMap[icon] || FileText;
  
  return (
    <Link href={`/tool/${id}`}>
      <Card 
        className="h-full hover-elevate active-elevate-2 transition-all cursor-pointer group"
        data-testid={`card-tool-${id}`}
      >
        <CardHeader className="p-8 space-y-4">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1 space-y-2">
              <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
