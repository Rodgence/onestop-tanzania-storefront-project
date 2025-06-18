
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Package, ChevronDown, Menu, X, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-500 text-white relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">Onestop Store</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-orange-300 transition-colors">
              Why Savo Store?
            </a>
            
            {/* How it Works Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-orange-300 transition-colors">
                How it Works
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-gray-900">
                <DropdownMenuItem>
                  <div className="flex items-center space-x-3 p-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Shipping Only - Air</div>
                      <div className="text-sm text-gray-600">Shop online, use our U.S. address at checkout. We then ship to you.</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center space-x-3 p-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Shipping Only - Ocean</div>
                      <div className="text-sm text-gray-600">Shop online, use our U.S. address at checkout. We then ship to you.</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center space-x-3 p-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Buy & Ship</div>
                      <div className="text-sm text-gray-600">We shop for you in the U.S. and deliver to your doorstep in Tanzania.</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center space-x-3 p-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Tanzanians in the USA</div>
                      <div className="text-sm text-gray-600">Do you live in the US? Ship gifts and essentials back home hassle-free.</div>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#shipping" className="text-white hover:text-orange-300 transition-colors">
              Shipping Rates
            </a>
            <a href="#calculator" className="text-white hover:text-orange-300 transition-colors">
              Help Center
            </a>
            
            {/* Contact Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-orange-300 transition-colors">
                Contact
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-gray-900">
                <DropdownMenuItem>Contact Support</DropdownMenuItem>
                <DropdownMenuItem>Live Chat</DropdownMenuItem>
                <DropdownMenuItem>Phone Support</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-blue-500"
            >
              Log In
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Create Account
            </Button>
            <Button 
              size="icon" 
              className="bg-green-500 hover:bg-green-600 rounded-full"
              onClick={() => window.open('https://wa.me/your-number', '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button 
              size="icon" 
              className="bg-green-500 hover:bg-green-600 rounded-full"
              onClick={() => window.open('https://wa.me/your-number', '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-white hover:bg-blue-600"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-blue-400">
            <nav className="flex flex-col space-y-4 mt-4">
              <a 
                href="#services" 
                className="text-white hover:text-orange-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Savo Store?
              </a>
              
              <div className="space-y-2">
                <div className="text-white font-semibold">How it Works</div>
                <div className="pl-4 space-y-2">
                  <div className="text-white text-sm">Shipping Only - Air</div>
                  <div className="text-white text-sm">Shipping Only - Ocean</div>
                  <div className="text-white text-sm">Buy & Ship</div>
                  <div className="text-white text-sm">Tanzanians in the USA</div>
                </div>
              </div>
              
              <a 
                href="#shipping" 
                className="text-white hover:text-orange-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shipping Rates
              </a>
              <a 
                href="#calculator" 
                className="text-white hover:text-orange-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Help Center
              </a>
              
              <div className="space-y-2">
                <div className="text-white font-semibold">Contact</div>
                <div className="pl-4 space-y-2">
                  <div className="text-white text-sm">Contact Support</div>
                  <div className="text-white text-sm">Live Chat</div>
                  <div className="text-white text-sm">Phone Support</div>
                </div>
              </div>
              
              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-3 pt-4">
                <Button 
                  variant="outline" 
                  className="text-white border-white hover:bg-white hover:text-blue-500 w-full"
                >
                  Log In
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                  Create Account
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
