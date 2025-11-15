import { Link } from "wouter";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toolEmojis } from "@shared/schema";

interface ToolCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export function ToolCard({ id, title, description }: ToolCardProps) {
  const emoji = toolEmojis[id] || "📄";
  
  return (
    <Link href={`/tool/${id}`}>
      <Card 
        className="h-full hover-elevate active-elevate-2 transition-all cursor-pointer group"
        data-testid={`card-tool-${id}`}
      >
        <CardHeader className="p-8 space-y-4">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors flex items-center justify-center min-w-[56px]">
              <span className="text-4xl" role="img" aria-label={title}>
                {emoji}
              </span>
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
