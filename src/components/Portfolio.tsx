
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Kalifa Burger Shop",
      category: "Alimentação",
      description: "Site de hamburgueria com cardápio online e sistema de pedidos delivery.",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop",
      tags: ["Delivery", "Cardápio Online", "Pedidos"],
      url: "https://kalifa-burger-shop-online.vercel.app/"
    },
    {
      title: "Willa Wedding",
      category: "Eventos",
      description: "Website elegante para casamentos com galeria de fotos e informações do evento.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      tags: ["Casamento", "Galeria", "Eventos"],
      url: "https://willa-wedding-website.vercel.app/"
    },
    {
      title: "Móveis Planejados",
      category: "Móveis",
      description: "Site profissional para empresa de móveis planejados com portfólio e orçamentos.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      tags: ["Móveis Planejados", "Portfólio", "Orçamentos"],
      url: "https://moveis-insta-site-maker.vercel.app/"
    },
    {
      title: "Clínica Odontológica Sorrir",
      category: "Odontologia",
      description: "Site completo com agendamento online e informações sobre tratamentos.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
      tags: ["Agendamento", "SEO Local", "WhatsApp"]
    },
    {
      title: "Dr. Silva - Cardiologista",
      category: "Consultório Médico",
      description: "Website profissional com área do paciente e informações médicas.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      tags: ["Área do Paciente", "Responsivo", "SSL"]
    },
    {
      title: "Farmácia Central Paulínia",
      category: "Comércio",
      description: "Site com catálogo de produtos e delivery integrado.",
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&h=300&fit=crop",
      tags: ["E-commerce", "Delivery", "Catálogo"]
    },
    {
      title: "Clínica de Fisioterapia Movimenta",
      category: "Clínica",
      description: "Portal com informações sobre tratamentos e equipe médica.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      tags: ["Equipe Médica", "Blog", "Contato"]
    },
    {
      title: "Restaurante Sabor Caseiro",
      category: "Alimentação",
      description: "Website com cardápio online e sistema de pedidos.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      tags: ["Cardápio Online", "Pedidos", "Localização"]
    },
    {
      title: "Consultório Psicológico Bem-Estar",
      category: "Psicologia",
      description: "Site profissional com informações sobre terapias e agendamento.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      tags: ["Terapias", "Blog", "Agendamento"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Trabalhos Realizados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns dos sites que desenvolvemos para nossos clientes em Paulínia e região.
            Cada projeto é único e personalizado para as necessidades específicas do negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 ${project.url ? 'cursor-pointer' : ''}`}
              onClick={() => project.url && window.open(project.url, '_blank')}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  {project.url && (
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.url && (
                  <div className="mt-4">
                    <span className="text-sm text-blue-600 font-medium flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Ver site
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
