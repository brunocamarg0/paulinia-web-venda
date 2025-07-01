
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Home, Palette, Ruler } from 'lucide-react';

const MoveisPlanejadosHero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Móveis Planejados
              <span className="text-amber-600"> Sob Medida</span> para
              <span className="text-orange-600"> Seu Lar</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transformamos seus sonhos em realidade com móveis planejados de alta qualidade. 
              Design exclusivo, materiais premium e acabamento impecável para cada ambiente da sua casa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                Ver Projetos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-amber-600 text-amber-600 hover:bg-amber-50">
                Orçamento Grátis
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">Projeto 3D Grátis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">Materiais Premium</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">Instalação Inclusa</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">Garantia de 2 Anos</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop" 
                alt="Cozinha planejada moderna"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center justify-around text-amber-600">
                <div className="text-center">
                  <Home className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">Design</span>
                </div>
                <div className="text-center">
                  <Ruler className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">Medida</span>
                </div>
                <div className="text-center">
                  <Palette className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">Acabamento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoveisPlanejadosHero;
