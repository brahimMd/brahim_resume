// @ts-nocheck
import * as React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { TimelineEvent, CircularSkillItem, LanguageSkillDetail } from '../../types'; // Removed SkillType.Certification as it's no longer directly used here
import { BriefcaseIconDemo, AcademicCapIconDemo, UsersIconDemo, CogIconDemo, LanguageIconDemo, CheckBadgeIconDemo, BoltIconDemo } from '../icons/DemoIcons';

const experienceData = [
  { date: 'Sep 2024 - Present', title: 'Assistant Marketing Digital', institution: 'IAWEB.DEV', location: 'Marrakech', description: 'Elaboration and implementation of B2B and B2C marketing strategies for a cosmetics brand. Management of online presence, content creation, sales funnels, and lead generation. Collaboration with the marketing team on inbound and outbound strategies.', logo: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/iaweb-logo-2-1.png' },
  { date: 'Feb 2024 - May 2024', title: 'Marketing Intern (PFE)', institution: 'Digital Speak', location: 'Marrakech', description: 'Developed marketing strategies, automated email campaigns, and integrated third-party tools. Established an automated marketing ecosystem for lead acquisition.', logo: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/DS_Nv_Logo_DS.png' },
  { date: 'Feb 2024 - May 2024', title: 'UX Research Intern', institution: 'Capturelife', location: 'Béni Mellal', description: 'Conducted UX research for the agency\'s website including analysis, design exercises, and usability tests. Formulated recommendations to improve UX.', logo: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/logos-capturelife-2-1.png' },
  { date: 'Jun 2022 - Jul 2022', title: 'Sales Intern', institution: 'Afourar Auto Renault - Dacia', location: 'Béni Mellal', description: 'Assisted with sales presentations and client file management. Gained exposure to automotive sales processes and customer service best practices.', logo: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/490592685_681919381457843_3336590087781981604_n.jpg' },
  { date: 'Jul 2022 - Aug 2022', title: 'Observation Intern', institution: 'OCP Group', location: 'Khouribga', description: 'Acquired knowledge on inventory management and internal collaboration within a large organization.', logo: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/6.png' },
];

const educationData = [
  { date: 'Sep 2019 - Jun 2024', title: 'Master in Digital Marketing', institution: 'ENCG (National School of Commerce and Management)', location: 'Béni Mellal', description: 'Graduated with a comprehensive Master\'s degree focusing on modern digital marketing strategies and practices.', logo: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/04/logo-encg-beni-mellal.png' },
];

const extracurricularData = [
  { date: '2022', title: 'Treasurer', institution: 'Rotaract-ENCG Béni Mellal', description: 'Managed club finances and ensured appropriate allocation of funds for initiatives.', logo: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/md_sWCIbKZLyG1816nN.png' },
  { date: '2022', title: 'Assistant Treasurer', institution: 'ADE-ENCG Béni Mellal', description: 'Supported treasury functions and contributed to organizing various club events and activities.', logo: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/images-1.png' },
];

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

const GeneralSkillBadge: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="flex items-center mb-2 text-custom-heading-text text-sm font-poppins">
    <span className="text-custom-accent mr-2 text-lg">✔️</span> {skill}
  </span>
);

// certificationsList is removed from here and will be in CertificationsSection.tsx

const TimelineCard = ({ date, title, institution, location, description, logo }) => (
  <div className="relative flex items-start mb-8 group">
    <div className="flex flex-col items-center mr-6">
      <span className="w-3 h-3 rounded-full bg-[#F4A623] mb-1"></span>
      <div className="w-[2px] flex-1 bg-[#333333]"></div>
    </div>
    <div className="bg-[#1a1a1a] rounded-[20px] shadow-lg p-[35px] flex flex-col w-full max-w-xl relative transition-all duration-400 hover:-translate-y-[5px] hover:bg-[#252525] hover:border-[rgba(244,166,35,0.3)] shadow-[0_25px_50px_rgba(244,166,35,0.15)]">
      <div className="flex items-center mb-4">
        {logo && (
          <img
            src={logo}
            alt={institution}
            className="w-[60px] h-[60px] object-contain rounded-full mr-4 bg-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_15px_35px_rgba(244,166,35,0.3)]"
            style={{ border: '2px solid #F4A623' }}
          />
        )}
        <span className="text-[14px] font-medium text-[#cccccc] bg-[#0c0c0c] px-3 py-1 rounded-full mr-2">{date}</span>
      </div>
      <h3 className="text-[20px] font-bold text-white mb-2">{title}</h3>
      <p className="text-[14px] text-[#cccccc] mb-3 uppercase tracking-wide">{institution}{location ? `, ${location}` : ''}</p>
      <p className="text-[16px] text-[#cccccc] leading-[1.6]">{description}</p>
      <span className="absolute left-5 right-5 bottom-0 h-[3px] bg-[#F4A623] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
    </div>
  </div>
);

const CircularSkillDisplay: React.FC<CircularSkillItem> = ({ name, level }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative w-28 h-28 mb-2">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle className="text-custom-border-color" strokeWidth="8" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
        <circle 
          className="text-custom-accent"
          strokeWidth="8"
          strokeDasharray={2 * Math.PI * 42}
          strokeDashoffset={(2 * Math.PI * 42) * (1 - level / 100)}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="42" cx="50" cy="50"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-poppins font-semibold text-custom-heading-text">{level}%</span>
      </div>
    </div>
    <p className="text-sm font-poppins text-custom-text-primary">{name}</p>
  </div>
);

const LanguageSkillItemDisplay: React.FC<LanguageSkillDetail> = ({ name, level, levelDescription }) => (
  <div className="mb-3">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-poppins text-custom-heading-text">{name}</span>
      <span className="text-xs font-poppins text-custom-text-secondary">{levelDescription}</span>
    </div>
    <div className="flex space-x-1">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className={`h-1.5 flex-1 rounded-sm ${i < level ? 'bg-custom-accent' : 'bg-custom-border-color'}`}></span>
      ))}
    </div>
  </div>
);

// KnowledgeItem component is removed as certifications are handled in CertificationsSection

const ResumeSectionHeading: React.FC<{icon: React.ReactNode, title: string}> = ({icon, title}) => (
  <div className="flex items-center mb-6">
    <div className="w-8 h-8 rounded-full bg-custom-accent/10 flex items-center justify-center mr-3">
       {React.cloneElement(icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: 'w-4 h-4 text-custom-accent' })}
    </div>
    <h3 className="text-xl font-poppins font-semibold text-custom-heading-text uppercase tracking-wider">{title}</h3>
  </div>
);

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

// --- MAIN RESUME SECTION ---
export const ResumeSection: React.FC = () => {
  return (
    <SectionWrapper 
      id="resume" 
      titleTag="Skills"
      mainTitle="SKILLS"
    >
      {/* Timeline (Experience, Education, Extracurricular) */}
      <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10 mb-16">
        {/* Experience Left */}
        <div>
          <h4 className="text-[24px] font-bold text-white mb-8">Experience</h4>
          <div className="relative ml-4">
            <div className="absolute left-0 top-0 w-[2px] h-full bg-[#333333]"></div>
            {experienceData.map((exp, idx) => (
              <TimelineCard key={idx} {...exp} />
            ))}
          </div>
        </div>
        {/* Education + Extracurricular Right */}
        <div>
          <h4 className="text-[24px] font-bold text-white mb-8">Education</h4>
          <div className="relative ml-4 mb-10">
            <div className="absolute left-0 top-0 w-[2px] h-full bg-[#333333]"></div>
            {educationData.map((edu, idx) => (
              <TimelineCard key={idx} {...edu} />
            ))}
          </div>
          <h4 className="text-[24px] font-bold text-white mb-8 mt-10">Extracurricular</h4>
          <div className="relative ml-4">
            <div className="absolute left-0 top-0 w-[2px] h-full bg-[#333333]"></div>
            {extracurricularData.map((activity, idx) => (
              <TimelineCard key={idx} {...activity} />
            ))}
          </div>
        </div>
      </div>

      {/* Professional Skills Subsection */}
      <div className="bg-[#1a1a1a] rounded-[30px] p-[60px] border border-[#333333] relative overflow-hidden mb-16">
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#F4A623] to-[#f4d03f]" />
        
        <div className="text-left mb-[60px]">
          <div className="inline-flex items-center gap-[10px] bg-[rgba(244,166,35,0.1)] border border-[rgba(244,166,35,0.3)] px-[24px] py-[12px] rounded-[25px] text-[16px] font-semibold text-[#F4A623] mb-[25px] uppercase tracking-[1px]">
            <span>⚡</span>
            <span>Professional Skills</span>
          </div>
          <p className="text-[16px] text-[#cccccc] max-w-[500px] leading-[1.6]">Specialized skills and tools I've mastered through hands-on experience and continuous learning in digital marketing.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {professionalSkills.map(skill => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>

      {/* Languages and General Skills side by side */}
      <div className="grid md:grid-cols-2 gap-8">
        <LanguageCard />
        <GeneralSkillsCard />
      </div>
    </SectionWrapper>
  );
};