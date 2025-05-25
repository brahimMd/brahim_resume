import React from 'react';
import { SectionWrapper } from '../SectionWrapper';

// Personal Info data - can be expanded
const personalInfo = [
  { label: 'Full Name', value: 'Brahim LAGNAFDI' },
  { label: 'Email', value: 'lagnafdi.brahim@gmail.com', href: 'mailto:lagnafdi.brahim@gmail.com' },
  { label: 'Location', value: 'Marrakech, Morocco' },
  { label: 'Availability', value: 'Open to Opportunities', status: 'available' },
];

export const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about" titleTag="About Me" mainTitle="Know Me More">
      {/* Main Content */}
      <div className="about-content grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="profile-section relative">
          <div className="profile-image w-full h-[420px] md:h-[500px] rounded-[25px] overflow-hidden shadow-2xl relative group transition-transform duration-300 hover:-translate-y-[5px]">
            <img
              src="https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/DSC03065-1-scaled.jpg"
              alt="Brahim LAGNAFDI"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="profile-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0c0c0c]/90 to-transparent px-8 py-8 text-white">
              <h3 className="text-[20px] font-bold mb-1">Brahim LAGNAFDI</h3>
              <p className="text-[#F4A623] font-semibold">Digital Marketing Specialist</p>
            </div>
          </div>
        </div>
        {/* Content Section */}
        <div className="content-section pt-4">
          <h2 className="intro-title text-[32px] md:text-[42px] font-bold text-white mb-4">
            I&apos;m <span className="intro-highlight text-[#F4A623]">Brahim LAGNAFDI</span>, a Passionate Digital Marketer
          </h2>
          <div className="passion-badge inline-flex items-center gap-2 bg-gradient-to-r from-[#78cc6d] to-[#6bb85d] text-white px-5 py-2 rounded-full text-[15px] font-semibold mb-8 animate-pulse">
            <span>🚀</span>
            <span>Driven by Innovation & Results</span>
          </div>
          <div className="description text-[16px] text-[#cccccc] leading-[1.6] mb-8">
            <p className="mb-4">
              Fresh <strong className="text-white font-semibold">ENCG graduate</strong> with a <span className="highlight-text text-[#F4A623] font-semibold">Master&apos;s in Digital Marketing</span>, I&apos;m passionate about transforming businesses through intelligent automation and data-driven strategies. My expertise lies in crafting <strong className="text-white font-semibold">sophisticated lead generation systems</strong> and building automated marketing ecosystems that work 24/7.
            </p>
            <p className="mb-4">
              What excites me most? <span className="highlight-text text-[#F4A623] font-semibold">Turning complex marketing challenges into streamlined, profitable solutions.</span> I thrive on combining creativity with cutting-edge technology to deliver campaigns that don&apos;t just look good—they perform exceptionally. From email automation sequences to multi-channel funnels, I&apos;m committed to continuous learning and staying ahead in this dynamic digital landscape.
            </p>
            <p>
              <strong className="text-white font-semibold">My mission:</strong> Help businesses scale efficiently through smart marketing automation while building meaningful connections with their audiences.
            </p>
          </div>
          <div className="personal-info grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {personalInfo.map((info) => (
              <div key={info.label} className="info-item bg-[#1a1a1a] border border-[#333333] rounded-[20px] p-[35px] relative overflow-hidden transition-all duration-300 hover:bg-[#252525] hover:border-[#F4A623] hover:-translate-y-[5px]">
                <div className="info-label text-xs text-[#cccccc] font-medium uppercase mb-1 tracking-wider">{info.label}</div>
                <div className="info-value text-[16px] text-white font-semibold flex items-center gap-2">
                  {info.href ? (
                    <a href={info.href} className="hover:text-[#F4A623] transition-colors">{info.value}</a>
                  ) : info.status === 'available' ? (
                    <span className="status-available flex items-center gap-2 text-[#78cc6d] font-semibold">
                      <span className="status-dot w-2 h-2 bg-[#78cc6d] rounded-full animate-pulse"></span>
                      {info.value}
                    </span>
                  ) : (
                    info.value
                  )}
                </div>
                <span className="absolute left-5 right-5 top-0 h-[3px] bg-gradient-to-r from-[#F4A623] to-[#f4d03f] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
          <div className="cta-section mt-10 text-center">
            <a
              href="mailto:lagnafdi.brahim@gmail.com"
              className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-[#F4A623] to-[#f4d03f] text-[#0c0c0c] px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 shadow-lg hover:-translate-y-[5px] hover:shadow-xl"
            >
              <span>💬</span>
              <span>Let&apos;s Work Together</span>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
