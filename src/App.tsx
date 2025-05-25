import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ResumeSection } from '../components/sections/ResumeSection';
import { ToolStackSection } from '../components/sections/ToolStackSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { HomeIconDemo, UserIconDemo, ResumeIconDemo, ToolsIconDemo, CheckBadgeIconDemo, ContactIconDemo } from '../components/icons/DemoIcons';
import { MenuIcon, XIcon } from '../components/icons/MenuIcons';

const navItems = [
  { id: 'home', label: 'Home', icon: <HomeIconDemo className="w-4 h-4" /> },
  { id: 'about', label: 'About', icon: <UserIconDemo className="w-4 h-4" /> },
  { id: 'journey', label: 'My Journey & Expertise', icon: <ResumeIconDemo className="w-4 h-4" /> },
  { id: 'skills', label: 'Skills', icon: <ToolsIconDemo className="w-4 h-4" /> },
  { id: 'tools', label: 'Digital Toolkit', icon: <ToolsIconDemo className="w-4 h-4" /> },
  { id: 'certifications', label: 'Certifications', icon: <CheckBadgeIconDemo className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', icon: <ContactIconDemo className="w-4 h-4" /> },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSidebarOpen(false); // Close sidebar after navigation on mobile
  };

  return (
    <div className="min-h-screen bg-custom-dark-bg">
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-[#1a1a1a] z-50 px-4 py-3 flex justify-between items-center border-b border-[#333333] shadow-lg">
        <a 
          href="#home" 
          onClick={(e) => { 
            e.preventDefault(); 
            handleNavigate('home');
          }} 
          className="text-xl font-poppins font-bold text-white"
        >
          Brahim<span className="text-[#F4A623]">L.</span>
        </a>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="w-10 h-10 rounded-lg bg-[#252525] border border-[#333333] flex items-center justify-center text-[#F4A623] hover:bg-[#333333] transition-all duration-300"
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={isSidebarOpen}
        >
          {isSidebarOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </header>

      <Sidebar 
        navItems={navItems}
        activeSection={activeSection}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={handleNavigate}
      />

      <main className="md:ml-[300px] pt-16 md:pt-0">
        <div id="home"><HeroSection /></div>
        <div id="about"><AboutSection /></div>
        <div id="journey"><ResumeSection /></div>
        <div id="skills"><SkillsSection /></div>
        <div id="tools"><ToolStackSection /></div>
        <div id="certifications"><CertificationsSection /></div>
        <div id="contact"><ContactSection /></div>
      </main>
    </div>
  );
};

export default App; 