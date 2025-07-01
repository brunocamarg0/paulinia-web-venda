
import React from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MoveisPlanejadosHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-amber-600 cursor-pointer" onClick={() => scrollToSection('inicio')}>
              Maicon Melo Móveis
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Portfólio
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Contato
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-1" />
              <span>(19) 99999-9999</span>
            </div>
            <a 
              href="http://instagram.com/maiconmelomoveis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button onClick={() => scrollToSection('contato')} className="bg-amber-600 hover:bg-amber-700">
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
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-amber-600 py-2 text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-amber-600 py-2 text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-amber-600 py-2 text-left">
                Portfólio
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-amber-600 py-2 text-left">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-amber-600 py-2 text-left">
                Contato
              </button>
            </nav>
            <Button onClick={() => scrollToSection('contato')} className="w-full mt-4 bg-amber-600 hover:bg-amber-700">
              Solicitar Orçamento
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default MoveisPlanejadosHeader;
