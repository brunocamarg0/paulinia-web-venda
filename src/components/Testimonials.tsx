
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Ricardo Santos",
      profession: "Cardiologista",
      location: "Paulínia",
      content: "O site desenvolvido superou nossas expectativas. Aumentamos em 40% o número de agendamentos online e nossa presença digital melhorou significativamente.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Ana Paula Silva",
      profession: "Proprietária - Clínica Estética",
      location: "Campinas",
      content: "Profissionais muito competentes! O site ficou lindo e funcional. Nossos clientes elogiam muito a facilidade para agendar procedimentos online.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b056b102?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Carlos Mendes",
      profession: "Dono - Farmácia Central",
      location: "Sumaré",
      content: "Desde que lançamos o site, nossas vendas online cresceram 60%. A integração com WhatsApp facilitou muito o atendimento aos clientes.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Dra. Mariana Costa",
      profession: "Psicóloga",
      location: "Hortolândia",
      content: "O site transmite exatamente a seriedade e acolhimento que eu queria passar para meus pacientes. O sistema de agendamento funciona perfeitamente.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "João Roberto",
      profession: "Restaurante Sabor Caseiro",
      location: "Paulínia",
      content: "Nosso cardápio online trouxe muitos clientes novos. O sistema de pedidos é prático e nossos clientes adoraram a facilidade.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Dra. Fernanda Lima",
      profession: "Dentista",
      location: "Americana",
      content: "Recomendo para todos os colegas! Site profissional, rápido e com todas as funcionalidades que precisávamos. Suporte excelente também.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja os depoimentos de profissionais e empresários que confiaram em nosso trabalho
            e obtiveram excelentes resultados em Paulínia e região.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-blue-200" />
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.profession}</p>
                    <p className="text-sm text-blue-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
