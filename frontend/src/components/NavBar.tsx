import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Search, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar = () => {
  const isMobile = useIsMobile();
  
  const navLinks = (
    <>
      <Link to="/" className="text-gray-700 hover:text-brand-purple transition-colors">
        Home
      </Link>
      <Link to="/summary/1" className="text-gray-700 hover:text-brand-purple transition-colors">
        Summary Demo
      </Link>
      <Link to="#" className="text-gray-700 hover:text-brand-purple transition-colors">
        Features
      </Link>
      <Link to="#" className="text-gray-700 hover:text-brand-purple transition-colors">
        Pricing
      </Link>
    </>
  );
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-brand-purple">Know-It-All Hub</span>
          </Link>
        </div>
        
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6 pt-10">
              <div className="flex flex-col gap-4">
                {navLinks}
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" className="w-full justify-start">Sign In</Button>
                <Button size="sm" className="w-full justify-start">Sign Up</Button>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center gap-6">
            {navLinks}
          </nav>
        )}
        
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm">Sign In</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
