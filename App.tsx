import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import ProfessionalSection from './components/ProfessionalSection';
import HistorySection from './components/HistorySection';
import AnniversarySection from './components/AnniversarySection';
import LaunchCarousel from './components/LaunchCarousel';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-sans bg-white">
        <Header />
        <main className="flex-1">
          <Hero />
          <FeaturedSection />
          <ProfessionalSection />
          <HistorySection />
          <AnniversarySection />
          <LaunchCarousel />
          <BlogSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;