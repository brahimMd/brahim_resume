// @ts-nocheck
import * as React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { TimelineEvent } from '../../types';
import { BriefcaseIconDemo, AcademicCapIconDemo, UsersIconDemo } from '../icons/DemoIcons';

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

const ResumeSectionHeading: React.FC<{icon: React.ReactNode, title: string}> = ({icon, title}) => (
  <div className="flex items-center mb-6">
    <div className="w-8 h-8 rounded-full bg-custom-accent/10 flex items-center justify-center mr-3">
       {React.cloneElement(icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: 'w-4 h-4 text-custom-accent' })}
    </div>
    <h3 className="text-xl font-poppins font-semibold text-custom-heading-text uppercase tracking-wider">{title}</h3>
  </div>
);

export const ResumeSection: React.FC = () => {
  return (
    <SectionWrapper 
      id="journey" 
      titleTag="My Journey"
      mainTitle="MY JOURNEY & EXPERTISE"
      icon={<BriefcaseIconDemo className="w-6 h-6 text-[#F4A623]" />}
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
            {extracurricularData.map((extra, idx) => (
              <TimelineCard key={idx} {...extra} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};