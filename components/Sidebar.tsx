// @ts-nocheck
import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { DownloadIconDemo, GithubIconDemo, LinkedinIconDemo, TwitterIconDemo } from './icons/DemoIcons'; // Using DemoIcons

const ANIMATED_TITLES = [
  'Digital Marketing Professional',
  'Marketing Automation Expert',
  'Lead Generation Specialist',
  'Email Marketing Strategist',
  'Content Marketing Creator',
  'Funnel Building Specialist',
  'Data-Driven Marketer',
  'Social Media Strategist',
];

interface SidebarProps {
  navItems: NavItem[];
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ navItems, activeSection, isOpen, onClose, onNavigate }) => {
  
  const handleNavLinkClick = (sectionId: string) => {
    onNavigate(sectionId); 
  };

  // Animated title logic
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANIMATED_TITLES.length);
    }, 4000); // Adjusted interval to 4000ms
    return () => clearInterval(interval);
  }, []);

  // Existing fade effect for animated title
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Reset fade on title change to re-trigger animation
    setFade(false);
    const fadeTimeout = setTimeout(() => setFade(true), 50); // Short delay to ensure re-render
    return () => clearTimeout(fadeTimeout);
  }, [index]);

  // Keeping scroll logic commented out as before, uncomment if needed
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + window.innerHeight / 2;

      let currentActive = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          currentActive = section.id;
          break;
        }
      }
      if (currentActive !== activeSection) {
        // This check prevents infinite loops if parent component also manages activeSection
        // onNavigate(currentActive); // If you want sidebar to react to scroll
      }
    };

    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, activeSection]); // Depend on navItems and activeSection if onNavigate is enabled


  return (
    <>
      <aside 
        className={`fixed top-0 left-0 h-screen w-[320px] bg-[#1a1a1a] text-[#cccccc] z-40 
                   transform transition-transform duration-300 ease-in-out flex flex-col relative overflow-hidden
                   ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                    md:translate-x-0 md:flex`}
      >
        {/* Vertical yellow gradient border */}
        <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-[#F4A623] to-[#f4d03f]" />

        {/* Profile Section */}
        <div className="profile-section pt-[40px] px-[30px] pb-[25px] text-center border-b border-[#333333] relative w-full">
          <div className="profile-image w-[120px] h-[120px] border-4 border-[#F4A623] rounded-full mx-auto mb-[20px] overflow-hidden relative shadow-[0_15px_35px_rgba(244,166,35,0.3)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_45px_rgba(244,166,35,0.5)]">
            <img 
              src="https://www.brahim-marketing-resume.online/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-19-at-13.45.20-1.jpg"
              alt="Brahim LAGNAFDI" 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.1]"
            />
          </div>
          <h2 className="text-[24px] font-bold text-white mb-[10px] tracking-[-0.02em]">Brahim LAGNAFDI</h2>
          {/* Animated title - kept as per previous design, but styled to fit */}
           <p
             className={`text-sm mt-1 font-poppins transition-opacity duration-400 ${fade ? 'opacity-100' : 'opacity-0'}`}
             style={{
               minHeight: '1.5em',
               minWidth: '220px',
               display: 'inline-block',
               color: '#F4A623',
               fontWeight: 500,
               textShadow: '0 0 10px #F4A623',
               animation: 'glow 2s ease-in-out infinite alternate',
               whiteSpace: 'nowrap',
               position: current === idx ? 'relative' : 'absolute',
             }}
           >
             {ANIMATED_TITLES[index]}
           </p>
          {/* Open for New Challenges status badge */}
          <div className="inline-flex items-center gap-[8px] bg-gradient-to-r from-[#78cc6d] to-[#6bb85d] text-white px-[20px] py-[8px] rounded-[20px] text-[14px] font-semibold mb-[25px] animate-pulse">
              <span className="w-[8px] h-[8px] bg-white rounded-full animate-blink"></span>
              Open for New Challenges
          </div>
          {/* Social Links */}
          <div className="social-links flex justify-center gap-[15px]">
              <a href="https://github.com/your-github" className="social-link w-[45px] h-[45px] bg-[#0c0c0c] border-2 border-[#333333] rounded-full flex items-center justify-center text-[#cccccc] text-[18px] transition-all duration-300 hover:bg-[#F4A623] hover:text-[#0c0c0c] hover:border-[#F4A623] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(244,166,35,0.4)]" aria-label="GitHub">
                  {/* Replace with actual icon component */}
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,18.21 6.14,18.21C5.67,17.05 5.19,16.78 5.19,16.78C4.71,15.76 5.21,15.75 5.21,15.75C6.27,15.87 6.81,16.95 6.81,16.95C7.73,18.5 9.14,18.03 9.73,17.76C9.83,17.14 10.07,16.71 10.3,16.47C7.11,16.15 3.89,14.95 3.89,9.35C3.89,7.81 4.43,6.56 5.3,5.56C5.14,5.22 4.67,4.03 5.42,2.05C5.42,2.05 6.44,2.37 8.3,3.64C10.17,3.14 12.05,3.14 13.92,3.64C15.78,2.37 16.8,2.05 16.8,2.05C17.55,4.03 17.08,5.22 16.92,5.56C17.77,6.56 18.31,7.81 18.31,9.35C18.31,14.94 15.1,16.15 11.91,16.47C12.15,16.71 12.38,17.14 12.38,17.8C12.38,18.75 12.38,20.29 12.38,21C12.38,21.27 12.54,21.59 13.04,21.5C17,20.17 19.87,16.42 19.87,12A10,10 0 0,0 12,2Z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/brahim-lagnafdi/" className="social-link w-[45px] h-[45px] bg-[#0c0c0c] border-2 border-[#333333] rounded-full flex items-center justify-center text-[#cccccc] text-[18px] transition-all duration-300 hover:bg-[#F4A623] hover:text-[#0c0c0c] hover:border-[#F4A623] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(244,166,35,0.4)]" aria-label="LinkedIn" target="_blank">
                  {/* Replace with actual icon component */}
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.67-48.3 93.18-48.3 99.49 0 118.59 65.9 118.59 151.8V448z"></path></svg>
              </a>
              <a href="mailto:lagnafdi.brahim@gmail.com" className="social-link w-[45px] h-[45px] bg-[#0c0c0c] border-2 border-[#333333] rounded-full flex items-center justify-center text-[#cccccc] text-[18px] transition-all duration-300 hover:bg-[#F4A623] hover:text-[#0c0c0c] hover:border-[#F4A623] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(244,166,35,0.4)]" aria-label="Email">
                  {/* Replace with actual icon component */}
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zm0 12H4V8.315l8 6.222 8-6.222V18z"></path></svg>
              </a>
              {/* Add other social links here if needed */}
          </div>
        </div>

        {/* Navigation */}
        <nav className="navigation flex-1 py-[30px] w-full">
          <ul>
            {navItems.map((item) => (
              <li key={item.id} className="mb-2 last:mb-0 group"> {/* Added group class for hover effects on children */}
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                  className={`nav-link flex items-center gap-[15px] px-[30px] py-[15px] text-[#cccccc] text-[16px] font-medium transition-all duration-300 relative border-l-[3px] border-transparent 
                             ${activeSection === item.id ? 'active text-[#F4A623] bg-[rgba(244,166,35,0.1)] pl-[35px]' : 'hover:text-white hover:bg-[rgba(244,166,35,0.05)] hover:pl-[35px]'}`}
                >
                   {/* Nav icon - replaced placeholder with actual SVG structure example */}
                   <span className={`nav-icon text-[18px] w-[24px] text-center text-[#888888] transition-colors duration-300 ${activeSection === item.id ? 'text-[#F4A623]' : 'group-hover:text-[#F4A623]'}`}> 
                       {/* Placeholder for item.icon - you can replace this with your actual icon components */} 
                       {item.icon} 
                   </span>
                   {item.label}
                   {/* Yellow left border on hover/active */}
                   {activeSection === item.id ? (
                     <span className="absolute left-0 top-0 w-[3px] h-full bg-[#F4A623]" /> // Solid yellow when active
                   ) : (
                     <span className="absolute left-0 top-0 w-[3px] h-full bg-[#F4A623] transform scale-y-0 transition-transform duration-300 origin-top group-hover:scale-y-100" /> // Animates on hover
                   )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Download CV Section */}
        <div className="download-section pt-[35px] px-[30px] pb-[35px] border-t border-[#333333]">
          <a 
            href="https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/Brahim-LAGNAFDI-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn w-full bg-gradient-to-br from-[#F4A623] to-[#f4d03f] text-[#0c0c0c] border-none py-[18px] px-[25px] rounded-[30px] text-[18px] font-bold cursor-pointer transition-all duration-300 flex items-center justify-center gap-[12px] shadow-[0_15px_35px_rgba(244,166,35,0.4)] uppercase tracking-[0.5px] hover:-translate-y-[5px] hover:shadow-[0_20px_45px_rgba(244,166,35,0.6)]"
          >
            {/* Download icon - replaced placeholder with actual SVG structure example */}
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path></svg>
            Download CV
          </a>
        </div>
      </aside>
      {/* Keyframes for animations */}
      <style>{`
        @keyframes glow {
          from { text-shadow: 0 0 10px #F4A623; }
          to { text-shadow: 0 0 20px #F4A623, 0 0 30px #F4A623; }
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(120, 204, 109, 0.4); }
            50% { transform: scale(1.02); box-shadow: 0 0 0 8px rgba(120, 204, 109, 0); }
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
      `}</style>
    </>
  );
};
