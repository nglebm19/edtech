
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, ExternalLink, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  title: string;
  description: string;
  source: string;
  imageUrl: string;
  date: string;
  categories: string[];
  hasSummary?: boolean;
  className?: string;
}

export default function ResourceCard({
  title,
  description,
  source,
  imageUrl,
  date,
  categories,
  hasSummary = false,
  className,
}: ResourceCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      article: 'bg-brand-blue-light text-brand-blue-light hover:bg-brand-blue-light/80',
      video: 'bg-brand-orange-light text-brand-orange hover:bg-brand-orange-light/80',
      research: 'bg-brand-purple-light text-brand-purple hover:bg-brand-purple-light/80',
      podcast: 'bg-brand-green-light text-brand-green hover:bg-brand-green-light/80',
      news: 'bg-brand-yellow-light text-brand-yellow hover:bg-brand-yellow-light/80',
      thread: 'bg-brand-pink-light text-brand-pink hover:bg-brand-pink-light/80',
    };
    
    return colors[category.toLowerCase()] || 'bg-brand-gray-light text-brand-gray hover:bg-brand-gray-light/80';
  };
  
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl || '/placeholder.svg'}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <CardHeader className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className={getCategoryColor(category)}>
              {category}
            </Badge>
          ))}
        </div>
        <h3 className="text-lg font-semibold leading-tight line-clamp-2">{title}</h3>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex flex-col items-start gap-2">
        <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <ExternalLink className="h-3 w-3" />
            {source}
          </span>
          
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
        </div>
        
        <div className="flex items-center justify-between w-full mt-2">
          <Button variant="ghost" size="sm" className="text-brand-purple hover:text-brand-purple-dark hover:bg-brand-purple-light/50">
            <ExternalLink className="h-4 w-4 mr-1" />
            Open
          </Button>
          
          <Button 
            variant={hasSummary ? "outline" : "default"} 
            size="sm" 
            className={hasSummary ? "text-brand-purple bg-brand-purple-light/50 hover:bg-brand-purple-light" : ""}
          >
            <MessageSquare className="h-4 w-4 mr-1" />
            {hasSummary ? "View Summary" : "Summarize"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
