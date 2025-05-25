import React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { EnvelopeIconDemo, PhoneIconDemo, MapPinIconDemo } from '../icons/DemoIcons';

const CONTACT_CARDS = [
  {
    icon: '📞',
    label: 'Call Me',
    value: '+212 7 08 55 16 41',
    href: 'tel:+212708551641',
  },
  {
    icon: '✉️',
    label: 'Email Me',
    value: 'lagnafdi.brahim@gmail.com',
    href: 'mailto:lagnafdi.brahim@gmail.com',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Marrakech, Morocco',
  },
];

export const ContactSection: React.FC = () => {
  return (
    <SectionWrapper
      id="contact"
      titleTag="Contact"
      mainTitle="Get In Touch"
      subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
    >
      <div className="contact-info grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {CONTACT_CARDS.map((item) => (
          <div
            key={item.label}
            className="contact-card group relative bg-[#1a1a1a] rounded-[25px] p-[40px] border border-[#333333] shadow-lg flex items-center gap-[20px] transition-all duration-400 hover:-translate-y-[5px] hover:bg-[#252525] hover:border-[rgba(244,166,35,0.3)] hover:shadow-[0_20px_40px_rgba(244,166,35,0.15)] overflow-hidden">

            <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F4A623] to-[#f4d03f] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

            <div className="contact-icon w-[50px] h-[50px] rounded-[15px] flex items-center justify-center text-[24px] bg-gradient-to-br from-[#F4A623] to-[#f4d03f] text-[#0c0c0c] shadow-[0_8px_20px_rgba(244,166,35,0.3)]">
              {item.icon}
            </div>
            <div className="contact-details flex-1">
              <h3 className="text-[16px] text-[#cccccc] font-medium mb-1">{item.label}</h3>
              {item.href ? (
                <a href={item.href} className="text-[16px] text-white font-semibold hover:text-[#F4A623] transition-colors break-all">{item.value}</a>
              ) : (
                <p className="text-[16px] text-white font-semibold break-all">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="cta-section relative bg-[#1a1a1a] rounded-[25px] p-[50px] md:p-[60px] text-center border border-[#333333] overflow-hidden mt-10">
        <div className="absolute left-0 right-0 top-0 h-[4px] bg-gradient-to-r from-[#F4A623] to-[#f4d03f]" />
        
        <div className="cta-icon w-[80px] h-[80px] bg-gradient-to-br from-[#F4A623] to-[#f4d03f] rounded-[20px] flex items-center justify-center text-[36px] mx-auto mb-8 shadow-[0_8px_20px_rgba(244,166,35,0.3)] animate-pulse">🚀</div>
        
        <h2 className="cta-title text-[32px] md:text-[42px] font-bold text-white mb-4 leading-tight">
          Ready for New <span className="cta-highlight text-[#F4A623]">Opportunities</span> & Challenges
        </h2>
        <p className="cta-description text-[16px] text-[#cccccc] leading-[1.6] mb-8 max-w-2xl mx-auto">
          I'm actively seeking exciting career opportunities where I can apply my marketing automation expertise and passion for data-driven growth. If you're looking for a dedicated marketing professional who thrives on challenges and delivers measurable results - let's connect!
        </p>
        <div className="cta-buttons flex flex-wrap justify-center gap-5">
          <a
            href="mailto:lagnafdi.brahim@gmail.com"
            className="cta-button inline-flex items-center gap-3 bg-[#F4A623] text-[#0c0c0c] px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 border-2 border-[#F4A623] shadow-lg hover:bg-transparent hover:text-[#F4A623] hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(244,166,35,0.15)]"
          >
            <span>💬</span>
            <span>Contact Me</span>
          </a>
          <a
            href="https://www.linkedin.com/in/brahim-lagnafdi/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center gap-3 bg-transparent text-[#F4A623] border-2 border-[#F4A623] px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:bg-[#F4A623] hover:text-[#0c0c0c] hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(244,166,35,0.15)]"
          >
            <span>View LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};
