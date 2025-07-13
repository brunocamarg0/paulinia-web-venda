
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const MoveisPlanejadosPortfolio = () => {
  const projects = [
    {
      title: "Site Profissional - Móveis Planejados",
      category: "Website",
      description: "Site completo para empresa de móveis planejados com portfólio e sistema de orçamentos.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      tags: ["Portfólio", "Orçamentos", "Responsivo"],
      url: "https://moveis-insta-site-maker.vercel.app/"
    },
    {
      title: "Cozinha Moderna Americana",
      category: "Cozinha",
      description: "Cozinha planejada com ilha central e acabamento em laca branca.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      tags: ["Laca Branca", "Ilha Central", "Cooktop"]
    },
    {
      title: "Quarto Casal Elegante",
      category: "Dormitório",
      description: "Quarto planejado com guarda-roupa de 6 portas e penteadeira integrada.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
      tags: ["Guarda-roupa", "Penteadeira", "Criado-mudo"]
    },
    {
      title: "Closet Luxuoso",
      category: "Closet",
      description: "Closet amplo com iluminação LED e espelhos de corpo inteiro.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      tags: ["LED", "Espelhos", "Organização"]
    },
    {
      title: "Home Theater Completo",
      category: "Sala",
      description: "Sala de estar com rack planejado para TV e sistema de som.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      tags: ["Rack TV", "Som", "Iluminação"]
    },
    {
      title: "Home Office Produtivo",
      category: "Escritório",
      description: "Escritório planejado com mesa em L e estantes organizadoras.",
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c19e15?w=400&h=300&fit=crop",
      tags: ["Mesa em L", "Estantes", "Ergonomia"]
    },
    {
      title: "Quarto Infantil Colorido",
      category: "Infantil",
      description: "Quarto infantil com cama com gavetas e área de estudos.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
      tags: ["Cama com Gavetas", "Mesa Estudos", "Cores Alegres"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Projetos Realizados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns dos projetos que desenvolvemos para nossos clientes.
            Cada móvel é único e personalizado para suas necessidades específicas.
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
                  <span className="text-sm text-amber-600 font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.url && (
                  <div className="mt-4">
                    <span className="text-sm text-amber-600 font-medium flex items-center gap-1">
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

export default MoveisPlanejadosPortfolio;
