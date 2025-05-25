// @ts-nocheck
import * as React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import { BoltIconDemo } from '../icons/DemoIcons';

const TOOL_CATEGORIES = [
  {
    icon: '🤖',
    name: 'AI & Intelligence',
    tools: ['ChatGPT', 'Claude', 'Google Gemini', 'Microsoft Copilot', 'Midjourney'],
  },
  {
    icon: '🎨',
    name: 'Design & Visual',
    tools: ['Figma', 'Canva'],
  },
  {
    icon: '🌐',
    name: 'Web Development & CMS',
    tools: ['WordPress', 'Shopify'],
  },
  {
    icon: '📧',
    name: 'Email Marketing',
    tools: ['Klaviyo', 'MailerLite', 'ActiveCampaign', 'Brevo'],
  },
  {
    icon: '📋',
    name: 'Project Management',
    tools: ['Trello', 'ClickUp', 'Slack', 'Notion'],
  },
  {
    icon: '📊',
    name: 'Analytics & Tracking',
    tools: ['Google Tag Manager', 'GA4', 'Search Console', 'SEMrush'],
  },
  {
    icon: '🤝',
    name: 'CRM & Sales',
    tools: ['HubSpot', 'Zoho CRM', 'Sales Navigator', 'Apollo.io', 'ZoomInfo'],
  },
  {
    icon: '📱',
    name: 'Social Media Management',
    tools: ['Hootsuite', 'Buffer', 'Meta Business Suite'],
  },
  {
    icon: '💬',
    name: 'Communication & Webinars',
    tools: ['WebinarJam', 'ManyChat', 'Twilio'],
  },
  {
    icon: '⚡',
    name: 'Marketing Automation',
    tools: ['Systeme.io', 'Make', 'Zapier', 'Workato', 'ClickFunnels'],
  },
  {
    icon: '🗃️',
    name: 'Data Management',
    tools: ['Airtable'],
  },
];

const ToolBadge = ({ tool }: { tool: string }) => (
  <span
    className="tool-tag relative inline-block bg-[#1a1a1a] border border-[#333333] text-[#cccccc] px-[12px] py-[6px] rounded-[15px] text-[14px] font-medium mr-[8px] mb-[8px] transition-all duration-300 overflow-hidden cursor-pointer hover:bg-[#F4A623] hover:text-[#0c0c0c] hover:border-[#F4A623] hover:shadow-[0_8px_20px_rgba(244,166,35,0.4)] hover:-translate-y-[3px]"
  >
    <span className="absolute left-0 top-0 w-full h-full z-0 transition-all duration-500" />
    <span className="relative z-10">{tool}</span>
  </span>
);

export const ToolStackSection: React.FC = () => {
  // Replace with your actual tool stack data and rendering logic
  const tools = [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '💻' },
    { name: 'React', icon: '⚛️' },
    // Add more tools with their icons
  ];

  return (
    <SectionWrapper
      id="tools"
      titleTag="My Toolkit"
      mainTitle="DIGITAL TOOLKIT"
      icon={<BoltIconDemo className="w-6 h-6 text-[#F4A623]" />}
    >
      <div className="toolkit-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-12">
        {TOOL_CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className="toolkit-category group bg-[#1a1a1a] rounded-[25px] p-[40px] border border-[#333333] shadow-lg relative overflow-hidden transition-all duration-400 hover:-translate-y-[10px] hover:bg-[#252525] hover:border-[rgba(244,166,35,0.3)] hover:shadow-[0_20px_40px_rgba(244,166,35,0.15)]"
          >
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F4A623] to-[#f4d03f] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

            <div className="category-header flex items-center mb-6">
              <div className="category-icon w-[50px] h-[50px] rounded-[15px] flex items-center justify-center mr-[20px] text-[24px] shadow-[0_8px_20px_rgba(244,166,35,0.3)] transition-transform duration-300 bg-gradient-to-br from-[#F4A623] to-[#f4d03f] group-hover:scale-[1.1] group-hover:rotate-[3deg]">
                {cat.icon}
              </div>
              <div className="category-title text-[20px] font-semibold text-white leading-tight">
                {cat.name}
              </div>
            </div>
            <div className="tools-grid flex flex-wrap gap-[8px]">
              {cat.tools.map((tool) => (
                <ToolBadge key={tool} tool={tool} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
