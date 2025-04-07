
import React from 'react';
import NavBar from '@/components/NavBar';
import SummaryView from '@/components/SummaryView';
import SummaryToImageConverter from '@/components/SummaryToImageConverter';
import VisualizationOptions from '@/components/VisualizationOptions';
import SocialShareButtons from '@/components/SocialShareButtons';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Share2 } from 'lucide-react';

// This would normally be fetched from an API based on the URL params
const mockSummary = {
  id: "1",
  title: "The Future of AI: Opportunities and Challenges",
  source: "techinsights.com",
  url: "https://techinsights.com/article/future-of-ai",
  imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  categories: ["Article", "Research"],
  originalContent: "This would be the full original content...",
  summary: {
    short: "AI is transforming industries with opportunities in healthcare, transportation, and education, while raising concerns about ethics, bias, and job displacement. Collaboration between technologists, policymakers, and the public is needed to navigate AI's future development and governance.",
    medium: "Artificial intelligence is rapidly evolving and becoming integrated into daily life through voice assistants, recommendation algorithms, and more. Machine learning advances have created systems that recognize patterns and generate human-like content. AI offers opportunities in healthcare (improved diagnostics), transportation (self-driving vehicles), education (personalized learning), and addressing global challenges like climate change. However, ethical challenges include fairness concerns, bias from training data, and potential job displacement. Moving forward requires collaboration between technologists, policymakers, and the public to develop ethical frameworks, regulatory approaches, and education programs to help people adapt to economic changes. The future of AI will be shaped by today's development, deployment, and governance choices.",
    full: "Artificial intelligence (AI) has evolved from science fiction to a transformative technology affecting how we live, work, and interact with the world. Current AI systems perform tasks once requiring human intelligence, from voice assistants understanding natural language to recommendation algorithms predicting preferences. Machine learning has made significant advances by training models on vast datasets to recognize patterns, make predictions, and generate nearly human-indistinguishable content.\n\nAI's applications span numerous fields. In healthcare, AI assists doctors with earlier and more accurate diagnoses. In transportation, self-driving vehicles promise safer and more efficient roads. In education, personalized learning platforms adapt to individual student needs. AI also addresses global challenges, with climate models improving environmental understanding and response development, while optimizing resource allocation for reduced waste and improved sustainability.\n\nDespite its promise, AI presents significant challenges. As AI increasingly affects people's lives, questions about fairness, transparency, and accountability become crucial. Biased training data can produce biased outcomes, potentially reinforcing existing inequalities. Rapid AI advancement also raises concerns about job displacement, although historically new technologies have created more jobs than eliminated, though transitions can be difficult for affected workers and industries.\n\nNavigating AI's future requires thoughtful collaboration between technologists, policymakers, and the public. Developing ethical frameworks and regulatory approaches that maximize benefits while minimizing harms is essential. Education and workforce development programs will be crucial in helping people adapt to a changing economy. By investing in both technological innovation and human capabilities, we can work toward a future where AI enhances human potential rather than replacing it. The future of AI is neither predetermined nor beyond our influence—it will be shaped by today's choices about development, deployment, and governance of these powerful technologies.",
    keyPoints: [
      "AI is rapidly evolving and already integrated into daily life through various applications.",
      "Machine learning advances have created systems that can recognize patterns and generate human-like content.",
      "Major opportunities exist in healthcare, transportation, education, and addressing global challenges.",
      "Ethical concerns include fairness, transparency, bias in training data, and potential job displacement.",
      "Collaboration between technologists, policymakers, and the public is needed for ethical frameworks and regulations.",
      "Education and workforce development programs are crucial for adapting to AI-driven economic changes.",
      "The future of AI will be shaped by today's choices about development, deployment, and governance.",
    ],
  },
};

const SummaryPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl font-bold">AI Summary</h1>
            
            <div className="flex flex-wrap gap-2">
              <SummaryToImageConverter 
                title={mockSummary.title}
                source={mockSummary.source}
                summary={mockSummary.summary.medium}
                keyPoints={mockSummary.summary.keyPoints}
              />
              
              <VisualizationOptions
                title={mockSummary.title}
                summary={mockSummary.summary.medium}
                keyPoints={mockSummary.summary.keyPoints}
              />
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-1">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Share Summary</DialogTitle>
                  </DialogHeader>
                  <SocialShareButtons 
                    url={`https://know-it-all-hub.com/summary/${mockSummary.id}`}
                    title={mockSummary.title}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <SummaryView
            title={mockSummary.title}
            source={mockSummary.source}
            imageUrl={mockSummary.imageUrl}
            categories={mockSummary.categories}
            originalContent={mockSummary.originalContent}
            summary={mockSummary.summary}
          />
        </div>
      </main>
      
      <footer className="border-t bg-white py-6 mt-10">
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

export default SummaryPage;
