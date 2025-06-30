
import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">SitesPaulínia</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfólio</a>
            <a href="#precos" className="text-gray-700 hover:text-blue-600 transition-colors">Preços</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-1" />
              <span>(19) 9999-9999</span>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              Solicitar Orçamento
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 py-2">Início</a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 py-2">Serviços</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 py-2">Portfólio</a>
              <a href="#precos" className="text-gray-700 hover:text-blue-600 py-2">Preços</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 py-2">Contato</a>
            </nav>
            <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
              Solicitar Orçamento
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
