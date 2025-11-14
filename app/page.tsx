'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import TechStackSection from '@/components/TechStackSection';
import PricingSection from '@/components/PricingSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <PricingSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

