
import React from 'react';
import MoveisPlanejadosHeader from '@/components/moveis/MoveisPlanejadosHeader';
import MoveisPlanejadosHero from '@/components/moveis/MoveisPlanejadosHero';
import MoveisPlanejadosServices from '@/components/moveis/MoveisPlanejadosServices';
import MoveisPlanejadosPortfolio from '@/components/moveis/MoveisPlanejadosPortfolio';
import MoveisPlanejadosTestimonials from '@/components/moveis/MoveisPlanejadosTestimonials';
import MoveisPlanejadosContact from '@/components/moveis/MoveisPlanejadosContact';
import Footer from '@/components/Footer';

const MoveisPlanejados = () => {
  return (
    <div className="min-h-screen">
      <MoveisPlanejadosHeader />
      <MoveisPlanejadosHero />
      <MoveisPlanejadosServices />
      <MoveisPlanejadosPortfolio />
      <MoveisPlanejadosTestimonials />
      <MoveisPlanejadosContact />
      <Footer />
    </div>
  );
};

export default MoveisPlanejados;
