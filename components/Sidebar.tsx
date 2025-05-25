import React from 'react';
import { NavItem } from '../types';
import { DownloadIconDemo, GithubIconDemo, LinkedinIconDemo, TwitterIconDemo } from './icons/DemoIcons';

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

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-30 md:hidden backdrop-blur-sm"
          onClick={onClose}
        ></div>
      )}
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-screen w-[280px] md:w-[300px] bg-[#1a1a1a] text-[#cccccc] p-6 md:p-7 z-40 
                   transform transition-all duration-300 ease-in-out flex flex-col items-center shadow-2xl
                   ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                   md:translate-x-0 md:flex`}
      >
        {/* Vertical yellow gradient border */}
        <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-[#F4A623] to-[#f4d03f]" />

        <div className="flex flex-col items-center text-center w-full mb-6">
          <div className="relative mb-4">
            <img 
              src="https://www.brahim-marketing-resume.online/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-19-at-13.45.20-1.jpg"
              alt="Brahim LAGNAFDI" 
              className="rounded-full w-28 h-28 md:w-36 md:h-36 border-4 border-[#F4A623] object-cover shadow-[0_15px_35px_rgba(244,166,35,0.3)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_45px_rgba(244,166,35,0.5)]"
            />
          </div>
          <h1 className="text-xl md:text-3xl font-poppins font-bold text-white mb-2">Brahim LAGNAFDI</h1>
          <p className="text-sm text-[#F4A623] mt-1 font-poppins font-medium tracking-wide">
            Digital Marketer
          </p>

          <div className="flex space-x-3 my-4 md:my-5">
            <a href="#" aria-label="GitHub" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0c0c0c] border border-[#333333] flex items-center justify-center text-[#cccccc] hover:text-[#F4A623] hover:border-[#F4A623] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(244,166,35,0.4)] transition-all duration-300">
                <GithubIconDemo className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
            <a href="https://www.linkedin.com/in/brahimlagnafdi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0c0c0c] border border-[#333333] flex items-center justify-center text-[#cccccc] hover:text-[#F4A623] hover:border-[#F4A623] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(244,166,35,0.4)] transition-all duration-300">
                <LinkedinIconDemo className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0c0c0c] border border-[#333333] flex items-center justify-center text-[#cccccc] hover:text-[#F4A623] hover:border-[#F4A623] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(244,166,35,0.4)] transition-all duration-300">
                <TwitterIconDemo className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0c0c0c] border border-[#333333] flex items-center justify-center text-[#cccccc] hover:text-[#F4A623] hover:border-[#F4A623] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(244,166,35,0.4)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
            </a>
          </div>
        </div>

        <nav className="w-full flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-[#333333] scrollbar-track-transparent pr-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item.id);
                  }}
                  className={`flex items-center py-2.5 md:py-3 px-3 md:px-4 rounded-lg transition-all duration-300 ease-in-out group relative
                              ${activeSection === item.id 
                                ? 'text-[#F4A623] bg-[#252525]'
                                : 'text-[#cccccc] hover:text-white hover:bg-[#252525]'
                              }`}
                >
                  {activeSection === item.id && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-3/4 w-[3px] bg-gradient-to-b from-[#F4A623] to-[#f4d03f] rounded-r-sm"></span>
                  )}
                  {item.icon && React.cloneElement(item.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { 
                    className: `w-3.5 h-3.5 md:w-4 md:h-4 mr-3 md:mr-3.5 flex-shrink-0 ${activeSection === item.id ? 'text-[#F4A623]' : 'text-[#cccccc] group-hover:text-[#F4A623]'}`
                  })}
                  <span className="font-poppins text-[13px] md:text-[14px] font-medium tracking-wide">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
          
        <a 
          href="https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/Brahim-LAGNAFDI-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto mb-1 w-full bg-gradient-to-br from-[#F4A623] to-[#f4d03f] text-[#0c0c0c] py-2.5 md:py-3 px-4 rounded-lg flex items-center justify-center font-poppins text-[14px] md:text-[15px] font-bold tracking-wide hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(244,166,35,0.4)] transition-all duration-300"
        >
          <DownloadIconDemo className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          Download CV
        </a>
      </aside>
    </>
  );
}; 