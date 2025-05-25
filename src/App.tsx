import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ResumeSection } from '../components/sections/ResumeSection';
import { ToolStackSection } from '../components/sections/ToolStackSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { ContactSection } from '../components/sections/ContactSection';

const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'resume', label: 'Resume', icon: '📄' },
  { id: 'tools', label: 'Tools', icon: '🛠️' },
  { id: 'certifications', label: 'Certifications', icon: '🏆' },
  { id: 'contact', label: 'Contact', icon: '📧' },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-custom-dark-bg flex">
      <Sidebar 
        navItems={navItems}
        activeSection={activeSection}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={handleNavigate}
      />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ToolStackSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App; 