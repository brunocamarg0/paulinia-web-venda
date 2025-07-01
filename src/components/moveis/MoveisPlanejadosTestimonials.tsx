
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const MoveisPlanejadosTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Campinas - SP",
      content: "Ficamos impressionados com a qualidade dos móveis e o atendimento do Maicon. Nossa cozinha ficou exatamente como sonhávamos!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b056b102?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "João Santos",
      location: "Paulínia - SP",
      content: "Profissional muito competente! O closet superou nossas expectativas. Materiais de primeira qualidade e acabamento perfeito.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      location: "Valinhos - SP",
      content: "O quarto do meu filho ficou lindo! O Maicon entendeu perfeitamente o que queríamos e entregou além do esperado.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Carlos Oliveira",
      location: "Hortolândia - SP",
      content: "Home office perfeito para trabalhar em casa. Móveis funcionais e design moderno. Recomendo para todos!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Fernanda Lima",
      location: "Sumaré - SP",
      content: "Nossa sala ficou incrível com o rack planejado. O Maicon é muito atencioso e caprichoso no que faz.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Roberto Mendes",
      location: "Americana - SP",
      content: "Excelente trabalho! Móveis de qualidade superior e prazo de entrega cumprido. Voltaremos a fazer negócios.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Depoimentos dos Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes falam sobre nossos móveis planejados e atendimento.
            Sua satisfação é nossa maior recompensa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-amber-200" />
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
                    <p className="text-sm text-amber-600">{testimonial.location}</p>
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

export default MoveisPlanejadosTestimonials;
