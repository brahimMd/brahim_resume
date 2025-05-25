// @ts-nocheck
import * as React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { BoltIconDemo, LanguageIconDemo, CheckBadgeIconDemo } from '../icons/DemoIcons';
import { CircularSkillItem, LanguageSkillDetail } from '../../types';

// --- SKILLS DATA ---
const professionalSkills = [
  { name: 'Lead Generation', icon: '🎯', level: 90, description: 'Expert in creating high-converting lead magnets and acquisition funnels' },
  { name: 'Marketing Automation', icon: '⚙️', level: 80, description: 'Building sophisticated automated workflows and customer journeys' },
  { name: 'Email Marketing', icon: '📧', level: 85, description: 'Crafting personalized campaigns that drive engagement and conversions' },
  { name: 'Content Marketing', icon: '✍️', level: 85, description: 'Creating compelling content strategies that attract and convert audiences' },
  { name: 'SEO', icon: '🔍', level: 75, description: 'Optimizing websites and content for better search engine visibility' },
  { name: 'Funnel Building', icon: '🔄', level: 80, description: 'Designing conversion-optimized sales funnels and customer pathways' },
  { name: 'Social Media Marketing', icon: '📱', level: 78, description: 'Managing social presence and creating engaging campaigns across platforms' },
  { name: 'Data Analysis', icon: '📊', level: 85, description: 'Interpreting marketing metrics and KPIs to optimize campaign performance' },
];

const languageSkills = [
  { name: 'Arabic', flag: '🇲🇦', level: 10, levelDescription: 'Native' },
  { name: 'French', flag: '🇫🇷', level: 9, levelDescription: 'Advanced' },
  { name: 'English', flag: '🇺🇸', level: 9, levelDescription: 'Advanced' },
];

const generalSkills = [
  'Team Collaboration',
  'Problem Solving',
  'Time Management',
  'Communication',
  'Adaptability',
  'Strategic Planning',
  'Critical Thinking',
  'Project Management',
];

// --- SKILLS COMPONENTS ---
const SkillCard: React.FC<{ icon: string; name: string; level: number; description: string }> = ({ icon, name, level, description }) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - level / 100);
  return (
    <div className="relative bg-[#0c0c0c] border border-[#333333] rounded-[20px] p-[35px] text-center overflow-hidden transition-all duration-400 hover:-translate-y-[10px] hover:bg-[#1a1a1a] hover:border-[#F4A623]/30 hover:shadow-[0_25px_50px_rgba(244,166,35,0.15)] group">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F4A623] to-[#f4d03f] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
      
      <div className="relative mb-[40px]">
        <div className="w-[120px] h-[120px] mx-auto relative flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r={radius} className="fill-none stroke-[#333333]" strokeWidth="8" />
            <circle
              cx="60" cy="60" r={radius}
              className="fill-none stroke-[#F4A623] drop-shadow-[0_0_10px_rgba(244,166,35,0.5)]"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.4s ease' }}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[32px] transition-all duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
        <div className="absolute -bottom-[35px] left-1/2 -translate-x-1/2 text-[20px] font-bold text-[#F4A623] bg-[#0c0c0c] px-[12px] py-[5px] rounded-[15px] border-2 border-[#F4A623]">
          {level}%
        </div>
      </div>
      
      <h3 className="text-[20px] font-semibold text-white mb-[10px]">{name}</h3>
      <p className="text-[14px] text-[#cccccc] leading-[1.5]">{description}</p>
    </div>
  );
};

const LanguageCard: React.FC = () => (
  <div className="relative bg-[#1a1a1a] border border-[#333333] rounded-[25px] p-[40px] overflow-hidden transition-all duration-400 hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(244,166,35,0.15)] hover:border-[rgba(244,166,35,0.3)] group">
    <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#F4A623] to-[#f4d03f] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
    <div className="flex items-center mb-8 gap-4">
      <div className="w-[50px] h-[50px] rounded-[15px] flex items-center justify-center text-[24px] bg-gradient-to-br from-[#F4A623] to-[#f4d03f] shadow-[0_8px_20px_rgba(244,166,35,0.3)]">🌐</div>
      <h4 className="text-[24px] font-bold text-white uppercase tracking-wide">Languages</h4>
    </div>
    <div className="flex flex-col gap-5">
      {languageSkills.map(lang => (
        <div key={lang.name} className="flex items-center py-3 border-b border-white/5 last:border-b-0 transition-all duration-300 hover:pl-2 hover:bg-[#F4A623]/5 hover:rounded-lg hover:border-b-[#F4A623]">
          <div className="w-[40px] h-[30px] rounded-[6px] mr-[20px] flex items-center justify-center text-lg bg-gradient-to-br from-[#f4f4f4] to-[#e0e0e0] shadow-[0_4px_8px_rgba(0,0,0,0.3)]">{lang.flag}</div>
          <div className="flex-1">
            <div className="text-[16px] font-semibold text-white mb-1">{lang.name}</div>
            <div className="flex items-center gap-4">
              <div className="flex gap-[6px]">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className={`w-[12px] h-[12px] rounded-full ${i < lang.level ? 'bg-[#F4A623] shadow-[0_0_10px_rgba(244,166,35,0.5)] scale-[1.1]' : 'bg-white/10'} transition-all duration-300`}></span>
                ))}
              </div>
              <span className="text-[14px] text-[#cccccc] font-medium min-w-[60px]">{lang.levelDescription}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const GeneralSkillsCard: React.FC = () => (
  <div className="relative bg-[#1a1a1a] border border-[#333333] rounded-[25px] p-[40px] overflow-hidden transition-all duration-400 hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(244,166,35,0.15)] hover:border-[rgba(244,166,35,0.3)] group">
    <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#F4A623] to-[#f4d03f] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
    <div className="flex items-center mb-8 gap-4">
      <div className="w-[50px] h-[50px] rounded-[15px] flex items-center justify-center text-[24px] bg-gradient-to-br from-[#78cc6d] to-[#6bb85d] shadow-[0_8px_20px_rgba(120,204,109,0.3)]">⭐</div>
      <h4 className="text-[24px] font-bold text-white uppercase tracking-wide">General Skills</h4>
    </div>
    <div className="flex flex-col gap-4">
      {generalSkills.map(skill => (
        <div key={skill} className="flex items-center gap-[15px] py-[12px] transition-all duration-300 rounded-md hover:pl-[15px] hover:bg-[#78cc6d]/10 group">
          <span className="w-[24px] h-[24px] rounded-[6px] flex items-center justify-center bg-[#78cc6d] text-white font-bold text-[14px] shadow-[0_4px_8px_rgba(120,204,109,0.3)] transition-transform duration-300 group-hover:scale-[1.1] group-hover:rotate-[5deg]">✓</span>
          <span className="font-medium text-white text-[16px] group-hover:text-[#78cc6d] transition-colors duration-300">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

export const SkillsSection: React.FC = () => {
  return (
    <SectionWrapper
      id="skills"
      titleTag="My Skills"
      mainTitle="SKILLS"
      icon={<BoltIconDemo className="w-6 h-6 text-[#F4A623]" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {professionalSkills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <LanguageCard />
        <GeneralSkillsCard />
      </div>
    </SectionWrapper>
  );
}; 