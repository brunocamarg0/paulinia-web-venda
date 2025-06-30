
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Empresa */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">SitesPaulínia</h3>
            <p className="text-gray-300 mb-4">
              Especialistas em criação de sites para consultórios, clínicas e comércios 
              em Paulínia e região.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Sites para Consultórios</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Sites para Clínicas</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Sites para Comércios</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Design Responsivo</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">SEO Local</a></li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#precos" className="text-gray-300 hover:text-white transition-colors">Preços</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-gray-300">(19) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-gray-300">contato@sitespaulinia.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-gray-300">Paulínia - SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 SitesPaulínia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
