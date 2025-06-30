
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Store, Building, Smartphone, Search, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Sites para Consultórios",
      description: "Sites especializados para médicos, dentistas, psicólogos e outros profissionais da saúde.",
      features: ["Agendamento online", "Área do paciente", "Informações médicas"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Sites para Clínicas",
      description: "Soluções completas para clínicas médicas, odontológicas e estéticas.",
      features: ["Múltiplos profissionais", "Sistema de agendas", "Convênios médicos"]
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Sites para Comércios",
      description: "Websites atrativos para lojas, restaurantes e empresas locais.",
      features: ["Catálogo de produtos", "WhatsApp integrado", "Localização GPS"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Design Responsivo",
      description: "Todos os sites são otimizados para funcionar perfeitamente em qualquer dispositivo.",
      features: ["Mobile-first", "Tablets e desktops", "Carregamento rápido"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Otimizado",
      description: "Seu site será encontrado no Google pelos seus clientes em Paulínia e região.",
      features: ["Google My Business", "Palavras-chave locais", "Velocidade otimizada"]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Suporte Completo",
      description: "Oferecemos suporte técnico e manutenção contínua para seu site.",
      features: ["Suporte via WhatsApp", "Atualizações mensais", "Backup automático"]
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
            Criamos sites personalizados para cada tipo de negócio em Paulínia e região, 
            com foco em resultados e conversão de clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="text-blue-600 mb-4">
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

export default Services;
