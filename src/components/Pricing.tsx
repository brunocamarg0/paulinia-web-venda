
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Site Básico",
      price: "897",
      originalPrice: "1.200",
      description: "Ideal para consultórios e pequenos comércios",
      features: [
        "Até 5 páginas",
        "Design responsivo",
        "Formulário de contato",
        "Google Maps integrado",
        "WhatsApp integrado",
        "SEO básico",
        "SSL grátis",
        "1 mês de suporte"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Site Profissional",
      price: "1.297",
      originalPrice: "1.800",
      description: "Para clínicas e empresas que querem mais recursos",
      features: [
        "Até 10 páginas",
        "Design responsivo premium",
        "Sistema de agendamento",
        "Área do cliente/paciente",
        "Blog integrado",
        "SEO avançado",
        "Google Analytics",
        "3 meses de suporte",
        "Treinamento incluído"
      ],
      popular: true,
      color: "green"
    },
    {
      name: "Site Premium",
      price: "1.897",
      originalPrice: "2.500",
      description: "Solução completa para grandes clínicas e comércios",
      features: [
        "Páginas ilimitadas",
        "Design personalizado",
        "E-commerce básico",
        "Sistema de agendamento avançado",
        "Múltiplos usuários",
        "Relatórios detalhados",
        "SEO premium",
        "6 meses de suporte",
        "Manutenção mensal incluída"
      ],
      popular: false,
      color: "purple"
    }
  ];

  return (
    <section id="precos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preços Transparentes e Justos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Oferecemos pacotes completos com tudo incluído. Sem taxas escondidas, 
            com pagamento parcelado em até 12x no cartão.
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 mr-2" />
            <span className="font-medium">Promoção válida até o final do mês!</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-2 ${plan.popular ? 'border-green-500 scale-105' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-500 line-through mr-2">R$ {plan.originalPrice}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">à vista ou 12x no cartão</p>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                  size="lg"
                >
                  Escolher Este Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Precisa de algo personalizado? Entre em contato conosco!
          </p>
          <Button variant="outline" size="lg">
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
