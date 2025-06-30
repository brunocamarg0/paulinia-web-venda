
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Informações de Contato</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start">
          <Phone className="w-6 h-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900">Telefone</h4>
            <a href="tel:+5519999999999" className="text-gray-600 hover:text-blue-600 transition-colors">
              (19) 99999-9999
            </a>
            <p className="text-sm text-gray-500">WhatsApp disponível</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="w-6 h-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900">E-mail</h4>
            <a href="mailto:brunocamargocontato@hotmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              brunocamargocontato@hotmail.com
            </a>
            <p className="text-sm text-gray-500">Respondemos em até 2h</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900">Localização</h4>
            <p className="text-gray-600">Paulínia - SP</p>
            <p className="text-sm text-gray-500">Atendemos toda a região</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900">Horário</h4>
            <p className="text-gray-600">Seg à Sex: 8h às 18h</p>
            <p className="text-gray-600">Sáb: 8h às 12h</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
