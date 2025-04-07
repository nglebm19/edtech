
import React from 'react';
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, MessageSquare, BookOpen, Clock, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// This would normally be fetched from an API based on the URL params
const mockResource = {
  id: '1',
  title: 'The Future of AI: Opportunities and Challenges',
  description: 'Artificial intelligence is rapidly transforming industries. This article explores the potential benefits and risks as AI becomes more integrated into our daily lives.',
  source: 'techinsights.com',
  url: 'https://techinsights.com/article/future-of-ai',
  imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  date: 'Apr 1, 2025',
  categories: ['Article', 'Research'],
  readingTime: '8 min read',
  content: `
    <p>Artificial intelligence (AI) is no longer a concept confined to science fiction. It's a rapidly evolving technology that's changing how we live, work, and interact with the world around us.</p>
    <h2>The Current State of AI</h2>
    <p>Today's AI systems can perform a wide range of tasks that once required human intelligence. From voice assistants that can understand and respond to natural language, to recommendation algorithms that predict what products you might like, AI is already deeply integrated into our daily lives.</p>
    <p>Machine learning, a subset of AI, has made particularly impressive advances in recent years. By training models on vast datasets, researchers have created systems that can recognize patterns, make predictions, and even generate content that's nearly indistinguishable from human-created work.</p>
    <h2>Opportunities for Innovation</h2>
    <p>The potential applications of AI are vast and growing. In healthcare, AI systems are helping doctors diagnose diseases earlier and more accurately. In transportation, self-driving vehicles promise to make our roads safer and more efficient. In education, personalized learning platforms can adapt to each student's needs and pace.</p>
    <p>AI also has the potential to help address some of our most pressing global challenges. Climate models powered by AI can improve our understanding of environmental changes and help develop more effective responses. AI systems can optimize resource allocation and distribution, potentially reducing waste and improving sustainability.</p>
    <h2>Ethical and Societal Challenges</h2>
    <p>Despite its promise, AI also presents significant challenges. As AI systems make more decisions that affect people's lives, questions of fairness, transparency, and accountability become increasingly important. Biased training data can lead to biased outcomes, potentially reinforcing existing inequalities.</p>
    <p>The rapid advancement of AI also raises concerns about job displacement. While new technologies have historically created more jobs than they've eliminated, the transition can be difficult for affected workers and industries.</p>
    <h2>The Path Forward</h2>
    <p>Navigating the future of AI will require thoughtful collaboration between technologists, policymakers, and the public. Developing ethical frameworks and regulatory approaches that maximize benefits while minimizing harms is essential.</p>
    <p>Education and workforce development programs will also be crucial in helping people adapt to a changing economy. By investing in both technological innovation and human capabilities, we can work toward a future where AI enhances human potential rather than replacing it.</p>
    <p>The future of AI is neither predetermined nor beyond our influence. It will be shaped by the choices we make today about how to develop, deploy, and govern these powerful technologies.</p>
  `,
};

const ResourcePage = () => {
  const { toast } = useToast();
  
  const handleSummarize = () => {
    toast({
      title: "Summary in progress",
      description: "We're generating your AI summary. This may take a moment.",
    });
    
    // In a real app, this would trigger the API call to generate a summary
    setTimeout(() => {
      window.location.href = '/summary/1';
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {mockResource.categories.map((category) => (
                  <Badge key={category}>{category}</Badge>
                ))}
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{mockResource.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" />
                  {mockResource.source}
                </span>
                
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {mockResource.readingTime}
                </span>
                
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {mockResource.date}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 mb-6">
                <Button variant="outline" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  View Original
                </Button>
                
                <Button onClick={handleSummarize} size="sm" className="gap-1">
                  <MessageSquare className="h-4 w-4" />
                  Summarize with AI
                </Button>
              </div>
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-0">
                <img
                  src={mockResource.imageUrl}
                  alt={mockResource.title}
                  className="w-full h-[300px] object-cover"
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: mockResource.content }}></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <footer className="border-t bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-brand-purple">Know-It-All Hub</span>
              <span className="text-sm text-muted-foreground">© 2025</span>
            </div>
            <div className="flex items-center gap-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-brand-purple transition-colors">Terms</a>
              <a href="#" className="hover:text-brand-purple transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-purple transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResourcePage;
