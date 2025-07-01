
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat, Bed, Shirt, Sofa, Briefcase, Baby } from 'lucide-react';

const MoveisPlanejadosServices = () => {
  const services = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Cozinhas Planejadas",
      description: "Cozinhas modernas e funcionais com aproveitamento máximo do espaço.",
      features: ["Projeto 3D", "Materiais de qualidade", "Instalação completa"]
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Dormitórios",
      description: "Quartos planejados com guarda-roupas, camas e bancadas personalizadas.",
      features: ["Guarda-roupas", "Camas com gavetas", "Penteadeiras"]
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Closets",
      description: "Closets organizados e elegantes para otimizar seu espaço.",
      features: ["Organização inteligente", "Iluminação LED", "Espelhos integrados"]
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Salas de Estar",
      description: "Móveis para sala que combinam conforto e sofisticação.",
      features: ["Home theaters", "Estantes", "Racks personalizados"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Home Office",
      description: "Escritórios planejados para máxima produtividade em casa.",
      features: ["Mesas ergonômicas", "Estantes para livros", "Organização eficiente"]
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Quartos Infantis",
      description: "Ambientes seguros e criativos para as crianças.",
      features: ["Móveis seguros", "Cores alegres", "Espaço para brincar"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Criamos móveis planejados para todos os ambientes da sua casa, 
            sempre priorizando qualidade, funcionalidade e design exclusivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="text-amber-600 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoveisPlanejadosServices;
