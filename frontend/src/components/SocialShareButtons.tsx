
import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Link, MessageSquare, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SocialShareButtonsProps {
  url: string;
  title: string;
  isImage?: boolean;
}

export default function SocialShareButtons({ url, title, isImage = false }: SocialShareButtonsProps) {
  const { toast } = useToast();
  
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Link copied",
      description: "The link has been copied to your clipboard",
    });
  };
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Button variant="outline" size="lg" className="w-full flex justify-center items-center gap-2">
          <Facebook className="h-5 w-5 text-blue-600" />
          <span className="hidden sm:inline">Facebook</span>
        </Button>
        
        <Button variant="outline" size="lg" className="w-full flex justify-center items-center gap-2">
          <Twitter className="h-5 w-5 text-sky-500" />
          <span className="hidden sm:inline">X</span>
        </Button>
        
        <Button variant="outline" size="lg" className="w-full flex justify-center items-center gap-2">
          <Linkedin className="h-5 w-5 text-blue-700" />
          <span className="hidden sm:inline">LinkedIn</span>
        </Button>
        
        <Button variant="outline" size="lg" className="w-full flex justify-center items-center gap-2">
          <MessageSquare className="h-5 w-5 text-green-500" />
          <span className="hidden sm:inline">Message</span>
        </Button>
      </div>
      
      <div className="flex items-center gap-2 pt-2 border-t">
        <div className="bg-gray-100 text-sm px-3 py-2 rounded flex-1 truncate">
          {url}
        </div>
        <Button size="sm" onClick={handleCopy} className="gap-1">
          <Copy className="h-4 w-4" />
          Copy
        </Button>
      </div>
    </div>
  );
}
