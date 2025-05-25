// @ts-nocheck
import * as React from 'react';

const TITLES = [
  'Digital Marketing Professional',
  'Marketing Automation Expert',
  'Lead Generation Specialist',
  'Email Marketing Strategist',
  'Content Marketing Creator',
  'Funnel Building Specialist',
  'Data-Driven Marketer',
  'Social Media Strategist',
];

export const HeroSection: React.FC = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TITLES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-[#0c0c0c] text-white min-h-[60vh] flex items-center px-4 md:px-10 py-20 md:py-32">
      <div className="hero-container max-w-4xl mx-auto w-full">
        {/* Greeting + Animated Titles */}
        <div className="greeting text-[24px] font-normal mb-5 text-[#cccccc] flex items-center">
          <span>Hello, I'm </span>
          <span className="relative ml-2 animated-titles-wrapper" style={{ minWidth: '320px', display: 'inline-block' }}>
            {TITLES.map((title, idx) => (
              <span
                key={title}
                className={`animated-title absolute left-0 top-0 transition-opacity duration-500 ${current === idx ? 'is-visible opacity-100' : 'opacity-0'}`}
                style={{
                  color: '#F4A623',
                  fontWeight: 500,
                  fontSize: '24px',
                  animation: 'glow 2s ease-in-out infinite alternate',
                  textShadow: '0 0 10px #F4A623',
                  whiteSpace: 'nowrap',
                  position: current === idx ? 'relative' : 'absolute',
                }}
              >
                {title}
              </span>
            ))}
          </span>
        </div>
        {/* Main Heading */}
        <h1 className="main-heading text-[42px] md:text-[56px] font-bold leading-tight mb-6 md:mb-10 tracking-tight text-white">
          I&apos;m <span className="highlight-bubble bg-[#F4A623] text-[#0c0c0c] px-5 py-2 rounded-full font-semibold mx-2 inline-block">Brahim LAGNAFDI</span>, Marketing Professional Based in Marrakech, Morocco.
        </h1>
        <span
          className="block cta-text text-[#F4A623] font-bold mt-2 mb-8"
          style={{
            fontSize: '40px',
            textShadow: '0 0 10px #F4A623',
            animation: 'pulse 2s ease-in-out infinite',
            lineHeight: 1.1,
          }}
        >
          Open for New Challenges
        </span>
        {/* Stats Section */}
        <div className="stats-container flex gap-16 md:gap-24 mt-16 flex-wrap">
          <div className="stat-item text-left">
            <div className="stat-number text-[48px] md:text-[64px] font-bold text-white leading-none mb-2">2+</div>
            <div className="stat-label text-[16px] text-[#888888] font-medium leading-snug">Years of<br />Experience</div>
          </div>
          <div className="stat-item text-left">
            <div className="stat-number text-[48px] md:text-[64px] font-bold text-white leading-none mb-2">10+</div>
            <div className="stat-label text-[16px] text-[#888888] font-medium leading-snug">Completed<br />Projects</div>
          </div>
          <div className="stat-item text-left">
            <div className="stat-number text-[48px] md:text-[64px] font-bold text-white leading-none mb-2">14+</div>
            <div className="stat-label text-[16px] text-[#888888] font-medium leading-snug">Certifications<br />Earned</div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes glow {
          from { text-shadow: 0 0 10px #F4A623; }
          to { text-shadow: 0 0 20px #F4A623, 0 0 30px #F4A623; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        .animated-title.is-visible {
          opacity: 1 !important;
          position: relative !important;
        }
      `}</style>
    </section>
  );
};
