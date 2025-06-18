
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
import { Package, ChevronDown, Menu, X } from "lucide-react";

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
              Why Onestop Store?
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
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button 
              size="icon" 
              className="bg-green-500 hover:bg-green-600 rounded-full"
              onClick={() => window.open('https://wa.me/your-number', '_blank')}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
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
                Why Onestop Store?
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
