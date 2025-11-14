'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HomeSection from '@/components/HomeSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
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
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <TechStackSection />
        {/* <PricingSection /> */}
        {/* <ClientsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

