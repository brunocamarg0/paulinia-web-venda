
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MoveisPlanejadosContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    ambiente: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const emailBody = `
        Nova solicitação de orçamento - Maicon Melo Móveis
        
        Nome: ${formData.name}
        E-mail: ${formData.email}
        WhatsApp: ${formData.phone}
        Ambiente de Interesse: ${formData.ambiente || 'Não informado'}
        
        Mensagem:
        ${formData.mensagem || 'Sem mensagem adicional'}
        
        ---
        Enviado através do site Maicon Melo Móveis
      `;

      const mailtoLink = `mailto:maiconmelo@email.com?subject=Nova Solicitação de Orçamento - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Formulário enviado!",
        description: "Seu cliente de email foi aberto. Confirme o envio para completar a solicitação.",
        duration: 5000,
      });

      setFormData({ name: '', email: '', phone: '', ambiente: '', mensagem: '' });
      
    } catch (error) {
      console.error('Erro ao processar formulário:', error);
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao processar seu formulário. Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato Conosco
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para ter seus móveis planejados dos sonhos? Entre em contato e receba um orçamento 
            personalizado sem compromisso. Atendemos toda a região de Campinas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">WhatsApp</h4>
                    <a href="tel:+5519999999999" className="text-gray-600 hover:text-amber-600 transition-colors">
                      (19) 99999-9999
                    </a>
                    <p className="text-sm text-gray-500">Atendimento rápido</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">E-mail</h4>
                    <a href="mailto:maiconmelo@email.com" className="text-gray-600 hover:text-amber-600 transition-colors">
                      maiconmelo@email.com
                    </a>
                    <p className="text-sm text-gray-500">Respondemos rapidamente</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Instagram className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Instagram</h4>
                    <a 
                      href="http://instagram.com/maiconmelomoveis" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      @maiconmelomoveis
                    </a>
                    <p className="text-sm text-gray-500">Veja nossos projetos</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Localização</h4>
                    <p className="text-gray-600">Região de Campinas - SP</p>
                    <p className="text-sm text-gray-500">Atendemos toda a região</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-amber-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Horário</h4>
                    <p className="text-gray-600">Seg à Sex: 8h às 18h</p>
                    <p className="text-gray-600">Sáb: 8h às 14h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Solicite Seu Orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <Input 
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp *
                      </label>
                      <Input 
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="(19) 99999-9999"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ambiente de Interesse
                      </label>
                      <Select onValueChange={(value) => handleChange('ambiente', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o ambiente" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cozinha">Cozinha</SelectItem>
                          <SelectItem value="dormitorio">Dormitório</SelectItem>
                          <SelectItem value="closet">Closet</SelectItem>
                          <SelectItem value="sala">Sala de Estar</SelectItem>
                          <SelectItem value="homeoffice">Home Office</SelectItem>
                          <SelectItem value="infantil">Quarto Infantil</SelectItem>
                          <SelectItem value="varios">Vários Ambientes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <Textarea 
                      value={formData.mensagem}
                      onChange={(e) => handleChange('mensagem', e.target.value)}
                      placeholder="Conte-nos mais sobre seu projeto, medidas do ambiente, estilo desejado..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-amber-600 hover:bg-amber-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento Gratuito'}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Responderemos em até 2 horas com um orçamento personalizado e projeto 3D
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoveisPlanejadosContact;
