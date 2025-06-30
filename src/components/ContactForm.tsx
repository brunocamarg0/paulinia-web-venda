
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Dados do formulário:', formData);
    
    try {
      const emailBody = `
        Nova solicitação de orçamento - SitesPaulínia
        
        Nome: ${formData.name}
        E-mail: ${formData.email}
        WhatsApp: ${formData.phone}
        Tipo de Negócio: ${formData.business || 'Não informado'}
        Serviço de Interesse: ${formData.service || 'Não informado'}
        
        Mensagem:
        ${formData.message || 'Sem mensagem adicional'}
        
        ---
        Enviado através do site SitesPaulínia
      `;

      const mailtoLink = `mailto:brunocamargocontato@hotmail.com?subject=Nova Solicitação de Orçamento - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Formulário enviado!",
        description: "Seu cliente de email foi aberto. Confirme o envio para completar a solicitação.",
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        service: '',
        message: ''
      });
      
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
                Tipo de Negócio
              </label>
              <Select onValueChange={(value) => handleChange('business', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione seu negócio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultorio">Consultório Médico</SelectItem>
                  <SelectItem value="clinica">Clínica</SelectItem>
                  <SelectItem value="comercio">Comércio</SelectItem>
                  <SelectItem value="restaurante">Restaurante</SelectItem>
                  <SelectItem value="farmacia">Farmácia</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Serviço de Interesse
            </label>
            <Select onValueChange={(value) => handleChange('service', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Que tipo de site você precisa?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basico">Site Básico</SelectItem>
                <SelectItem value="profissional">Site Profissional</SelectItem>
                <SelectItem value="premium">Site Premium</SelectItem>
                <SelectItem value="personalizado">Projeto Personalizado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mensagem
            </label>
            <Textarea 
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Conte-nos mais sobre seu projeto e suas necessidades..."
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Solicitação de Orçamento'}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            Responderemos em até 2 horas úteis com um orçamento personalizado
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
