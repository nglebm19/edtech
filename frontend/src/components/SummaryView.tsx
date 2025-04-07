
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Share2, Image, BarChart2, Download, ExternalLink } from 'lucide-react';
import SocialShareButtons from './SocialShareButtons';
import { Link } from 'react-router-dom';
import SummaryToImageConverter from './SummaryToImageConverter';
import VisualizationOptions from './VisualizationOptions';

interface SummaryViewProps {
  title: string;
  source: string;
  imageUrl: string;
  categories: string[];
  originalContent: string;
  summary: {
    short: string;
    medium: string;
    full: string;
    keyPoints: string[];
  };
}

export default function SummaryView({
  title,
  source,
  imageUrl,
  categories,
  originalContent,
  summary,
}: SummaryViewProps) {
  const [selectedLength, setSelectedLength] = useState('medium');
  const [showShareOptions, setShowShareOptions] = useState(false);
  
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      article: 'bg-brand-blue-light text-brand-blue hover:bg-brand-blue-light/80',
      video: 'bg-brand-orange-light text-brand-orange hover:bg-brand-orange-light/80',
      research: 'bg-brand-purple-light text-brand-purple hover:bg-brand-purple-light/80',
      podcast: 'bg-brand-green-light text-brand-green hover:bg-brand-green-light/80',
      news: 'bg-brand-yellow-light text-brand-yellow hover:bg-brand-yellow-light/80',
      thread: 'bg-brand-pink-light text-brand-pink hover:bg-brand-pink-light/80',
    };
    
    return colors[category.toLowerCase()] || 'bg-brand-gray-light text-brand-gray hover:bg-brand-gray-light/80';
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className={getCategoryColor(category)}>
              {category}
            </Badge>
          ))}
        </div>
        
        <h1 className="text-3xl font-bold">{title}</h1>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Source: {source}</span>
          <Button variant="ghost" size="sm" className="gap-1 h-8 px-2 py-0">
            <ExternalLink className="h-3 w-3" />
            Original
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/3">
          <div className="sticky top-20">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
              <img
                src={imageUrl || '/placeholder.svg'}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
            
            <Card>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-medium">Key Points</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {summary.keyPoints.map((point, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-brand-purple font-medium">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="w-full lg:w-2/3 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">AI Summary</h3>
                <Tabs value={selectedLength} onValueChange={setSelectedLength}>
                  <TabsList className="grid grid-cols-3 w-[240px]">
                    <TabsTrigger value="short">Brief</TabsTrigger>
                    <TabsTrigger value="medium">Standard</TabsTrigger>
                    <TabsTrigger value="full">Detailed</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="prose max-w-none">
                <Tabs value={selectedLength} className="hidden">
                  <TabsContent value="short">
                    <p>{summary.short}</p>
                  </TabsContent>
                  
                  <TabsContent value="medium">
                    <p>{summary.medium}</p>
                  </TabsContent>
                  
                  <TabsContent value="full">
                    <p>{summary.full}</p>
                  </TabsContent>
                </Tabs>
                
                {/* Render the current selected summary directly */}
                {selectedLength === 'short' && <p>{summary.short}</p>}
                {selectedLength === 'medium' && <p>{summary.medium}</p>}
                {selectedLength === 'full' && <p>{summary.full}</p>}
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between border-t pt-4">
              <div className="flex items-center gap-2">
                <Button onClick={() => setShowShareOptions(!showShareOptions)} variant="outline" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                
                <SummaryToImageConverter 
                  title={title}
                  source={source}
                  summary={summary.medium}
                  keyPoints={summary.keyPoints}
                />
                
                <VisualizationOptions
                  title={title}
                  summary={summary.medium}
                  keyPoints={summary.keyPoints}
                />
              </div>
              
              <Button variant="ghost" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </CardFooter>
          </Card>
          
          {showShareOptions && (
            <Card>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-medium">Share Summary</h3>
              </CardHeader>
              <CardContent>
                <SocialShareButtons url={`https://know-it-all-hub.com/summary/${encodeURIComponent(title)}`} title={title} />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
