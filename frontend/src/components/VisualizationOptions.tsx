
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart2, PieChart, LineChart, GitBranch, Download, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VisualizationOptionsProps {
  title: string;
  summary: string;
  keyPoints: string[];
}

export default function VisualizationOptions({
  title,
  summary,
  keyPoints,
}: VisualizationOptionsProps) {
  const [visualType, setVisualType] = useState('mindmap');
  const { toast } = useToast();
  
  const handleGenerate = () => {
    toast({
      title: "Visualization generated",
      description: `Your ${visualType} has been created successfully`,
    });
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-1">
          <BarChart2 className="h-4 w-4" />
          Visualize
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Visualize Summary</DialogTitle>
        </DialogHeader>
        
        <div className="pt-4 space-y-6">
          <Tabs value={visualType} onValueChange={setVisualType}>
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="mindmap" className="flex items-center gap-1">
                <GitBranch className="h-4 w-4" />
                <span className="hidden sm:inline">Mind Map</span>
              </TabsTrigger>
              <TabsTrigger value="barchart" className="flex items-center gap-1">
                <BarChart2 className="h-4 w-4" />
                <span className="hidden sm:inline">Bar Chart</span>
              </TabsTrigger>
              <TabsTrigger value="piechart" className="flex items-center gap-1">
                <PieChart className="h-4 w-4" />
                <span className="hidden sm:inline">Pie Chart</span>
              </TabsTrigger>
              <TabsTrigger value="timeline" className="flex items-center gap-1">
                <LineChart className="h-4 w-4" />
                <span className="hidden sm:inline">Timeline</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="mindmap" className="pt-4">
              <div className="border rounded-lg overflow-hidden p-6 h-[300px] flex items-center justify-center bg-gray-50">
                {/* This would be a real mind map in a production app */}
                <div className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white rounded-full px-4 py-2 text-sm font-medium">
                    Main Topic
                  </div>
                  <div className="flex items-center justify-center">
                    {keyPoints.slice(0, 4).map((point, index) => (
                      <div 
                        key={index} 
                        className="absolute flex flex-col items-center"
                        style={{
                          top: Math.sin(index * Math.PI/2) * 100,
                          left: Math.cos(index * Math.PI/2) * 100,
                        }}
                      >
                        <div className="w-[1px] h-[40px] bg-brand-purple-light"></div>
                        <div className="bg-brand-purple-light text-brand-purple rounded-lg px-3 py-1 text-xs max-w-[100px] text-center">
                          {point.substring(0, 30)}...
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Mind maps help visualize connections between concepts from your summary.
              </p>
            </TabsContent>
            
            <TabsContent value="barchart" className="pt-4">
              <div className="border rounded-lg overflow-hidden p-6 h-[300px] flex items-center justify-center bg-gray-50">
                <div className="w-full h-full flex items-end justify-around gap-4 pb-10 relative">
                  {keyPoints.slice(0, 5).map((point, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div 
                        className="bg-brand-purple w-12 rounded-t-sm"
                        style={{ height: `${(index + 1) * 30}px` }}
                      ></div>
                      <div className="text-xs text-brand-gray-dark font-medium">
                        Point {index + 1}
                      </div>
                    </div>
                  ))}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300"></div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Bar charts help visualize comparative data from your content.
              </p>
            </TabsContent>
            
            <TabsContent value="piechart" className="pt-4">
              <div className="border rounded-lg overflow-hidden p-6 h-[300px] flex items-center justify-center bg-gray-50">
                <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden">
                  {keyPoints.slice(0, 5).map((point, index) => (
                    <div 
                      key={index} 
                      className="absolute w-full h-full"
                      style={{
                        clipPath: `polygon(50% 50%, ${50 + 50*Math.cos(index * 2*Math.PI/5)}% ${50 + 50*Math.sin(index * 2*Math.PI/5)}%, ${50 + 50*Math.cos((index+1) * 2*Math.PI/5)}% ${50 + 50*Math.sin((index+1) * 2*Math.PI/5)}%)`,
                        background: index % 2 === 0 ? '#7E69AB' : '#9b87f5',
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Pie charts are great for showing proportional data relationships.
              </p>
            </TabsContent>
            
            <TabsContent value="timeline" className="pt-4">
              <div className="border rounded-lg overflow-hidden p-6 h-[300px] flex items-center justify-center bg-gray-50">
                <div className="relative w-full">
                  <div className="absolute w-full h-[2px] bg-brand-purple top-1/2 -translate-y-1/2"></div>
                  {keyPoints.slice(0, 4).map((point, index) => (
                    <div 
                      key={index} 
                      className="absolute flex flex-col items-center gap-2"
                      style={{
                        left: `${index * 30}%`,
                        top: index % 2 === 0 ? '20%' : '70%',
                      }}
                    >
                      <div className={`w-[1px] h-[40px] bg-brand-purple ${index % 2 === 0 ? 'order-1' : 'order-3'}`}></div>
                      <div className="w-4 h-4 rounded-full bg-brand-purple order-2"></div>
                      <div className="bg-white border border-brand-purple-light rounded-lg px-3 py-1 text-xs max-w-[120px] text-center order-3">
                        {point.substring(0, 30)}...
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Timelines help visualize sequential events or processes.
              </p>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-end gap-2">
            <Button onClick={handleGenerate}>
              Generate Visualization
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
