
import React from 'react';
import NavBar from '@/components/NavBar';
import AddResourceForm from '@/components/AddResourceForm';
import SavedResourcesList from '@/components/SavedResourcesList';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Your Knowledge Hub
              </h1>
              <p className="text-lg text-brand-purple-light max-w-[600px]">
                Save, organize, and summarize content from across the web. Transform information into insights.
              </p>
              <div className="pt-4">
                <AddResourceForm />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <SavedResourcesList />
          </div>
        </section>
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

export default Index;
