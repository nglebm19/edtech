import React from 'react';
import { Button } from '@/components/ui/button';
import ResourceCard from './ResourceCard';
import { Link } from 'react-router-dom';

// This would normally be fetched from an API
const mockResources = [
  {
    id: '1',
    title: 'The Future of AI: Opportunities and Challenges',
    description: 'Artificial intelligence is rapidly transforming industries. This article explores the potential benefits and risks as AI becomes more integrated into our daily lives.',
    source: 'techinsights.com',
    url: 'https://techinsights.com/article/future-of-ai',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    date: 'Apr 1, 2025',
    categories: ['Article', 'Research'],
    readingTime: '8 min read',
  },
  {
    id: '2',
    title: 'Understanding Web3 and the Decentralized Internet',
    description: 'Web3 represents the next evolution of the internet. Learn how blockchain and decentralized technologies are reshaping online interactions and digital ownership.',
    source: 'web3insider.com',
    url: 'https://web3insider.com/article/understanding-web3',
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55',
    date: 'Mar 28, 2025',
    categories: ['Tutorial', 'Technology'],
    readingTime: '12 min read',
  },
  {
    id: '3',
    title: 'The Science of Productivity: Work Smarter, Not Harder',
    description: 'Research-based strategies to enhance focus, manage energy, and accomplish more in less time. This comprehensive guide will help you optimize your workflow.',
    source: 'productivitylab.co',
    url: 'https://productivitylab.co/article/science-of-productivity',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
    date: 'Mar 22, 2025',
    categories: ['Productivity', 'Psychology'],
    readingTime: '15 min read',
  },
];

const SavedResourcesList = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Saved Resources</h2>
        <div className="flex gap-2">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Sort</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockResources.map((resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            source={resource.source}
            imageUrl={resource.imageUrl}
            date={resource.date}
            categories={resource.categories}
          />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link to="/summary/1" className="inline-block">
          <Button>View Example Summary</Button>
        </Link>
      </div>
    </div>
  );
};

export default SavedResourcesList;
