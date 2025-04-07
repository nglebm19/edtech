
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Image, Download, Share2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import SocialShareButtons from './SocialShareButtons';

interface SummaryToImageConverterProps {
  title: string;
  source: string;
  summary: string;
  keyPoints: string[];
}

export default function SummaryToImageConverter({
  title,
  source,
  summary,
  keyPoints,
}: SummaryToImageConverterProps) {
  const [template, setTemplate] = useState('default');
  const [activeTab, setActiveTab] = useState('preview');
  const { toast } = useToast();
  
  const handleDownload = () => {
    toast({
      title: "Image downloaded",
      description: "Your summary has been saved as an image",
    });
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-1">
          <Image className="h-4 w-4" />
          Save as Image
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Convert Summary to Image</DialogTitle>
        </DialogHeader>
        
        <div className="pt-4 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="space-y-2 w-full sm:w-auto">
              <p className="text-sm font-medium">Template Style</p>
              <Select value={template} onValueChange={setTemplate}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Select template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="minimal">Minimal</SelectItem>
                  <SelectItem value="colorful">Colorful</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="share">Share</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <TabsContent value="preview" className="mt-0 space-y-4">
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className={`p-6 ${
                template === 'colorful' 
                  ? 'bg-gradient-to-br from-brand-purple-light to-brand-blue-light' 
                  : template === 'minimal' 
                    ? 'bg-gray-50' 
                    : template === 'modern' 
                      ? 'bg-brand-gray-dark text-white' 
                      : 'bg-brand-purple text-white'
              }`}>
                <div className="max-w-2xl mx-auto">
                  <div className="text-xs uppercase tracking-wider mb-2">
                    {source} • SUMMARY
                  </div>
                  <h3 className="text-xl font-bold mb-4">{title}</h3>
                  <p className={`text-sm mb-4 ${
                    template === 'modern' || template === 'default' ? 'text-gray-200' : 'text-gray-600'
                  }`}>
                    {summary}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold">KEY TAKEAWAYS:</p>
                    <ul className="space-y-1">
                      {keyPoints.slice(0, 3).map((point, index) => (
                        <li key={index} className="text-xs flex gap-2">
                          <span>•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 text-xs">Summarized with Know-It-All Hub</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={handleDownload} className="gap-1">
                <Download className="h-4 w-4" />
                Download Image
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="share" className="mt-0">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Share your summary image directly to your social media platforms.
              </p>
              <SocialShareButtons 
                url={`https://know-it-all-hub.com/summary/image/${encodeURIComponent(title)}`} 
                title={`Check out my summary of "${title}"`} 
                isImage={true}
              />
            </div>
          </TabsContent>
        </div>
      </DialogContent>
    </Dialog>
  );
}
