// @ts-nocheck
import * as React from 'react';
import { SectionWrapper } from '../SectionWrapper';

const certificates = [
  {
    title: 'Meta Social Media Marketing Certificate',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/04/Meta-Logo-scaled.png',
    link: 'https://www.credly.com/badges/e418cc48-ac07-4d38-aa46-b82d7e622e89/linked_in_profile',
  },
  {
    title: 'Google UX Design Certificate',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/image-3.png',
    link: 'https://www.coursera.org/account/accomplishments/specialization/HWNE53WXYQ8X',
  },
  {
    title: 'Google Project Management Certificate',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/linkedin_thumb_GCC_badge_PGM_1000x1000-1.png',
    link: 'https://www.coursera.org/account/accomplishments/specialization/H7MHZ8DBY87Q',
  },
  {
    title: 'Google Digital Marketing & Ecommerce Certificate',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/image-2.png',
    link: 'https://www.coursera.org/account/accomplishments/specialization/ULX4XEDSXCBX',
  },
  {
    title: 'Hootsuite Social Media Marketing Certification',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/04/Hootsuite_logo.png',
    link: 'https://www.credential.net/e19e3f08-e91d-4902-a75c-0418dc813640',
  },
  {
    title: 'Hootsuite Platform Certification',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/04/Hootsuite_logo.png',
    link: 'https://www.credential.net/e19e3f08-e91d-4902-a75c-0418dc813640',
  },
  {
    title: 'HubSpot Marketing Hub Software',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/Hubspot.png',
    link: 'https://app-eu1.hubspot.com/academy/achievements/57jw373s/en/1/brahim-lagnafdi/hubspot-marketing-hub-software',
  },
  {
    title: 'Meta Certified Digital Marketing Associate',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/04/filters_no_upscale.webp',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/TZYUREBT3PG3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof',
  },
  {
    title: 'System.io Automation & Funnels Certificate',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/5396e5aa505a6f94c3b35e94269b415e.png',
    link: 'https://drive.google.com/file/d/1x0l_jDHTEMVwJDecStQQlitRIcsq6ruK/view?usp=sharing',
  },
  {
    title: 'Klaviyo Product Certification',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/KlaviyoBadge.png',
    link: 'https://verify.skilljar.com/c/y8ua4n4jwxj6',
  },
  {
    title: 'ZoomInfo Marketing Certification',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/blob.png',
    link: 'https://www.credly.com/badges/098d64fa-3ed0-4c85-a820-05707a8910a6/public_url',
  },
  {
    title: 'Make Intermediate Automation Certificate',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/image-4.png',
    link: 'https://www.credly.com/badges/bd828292-5b21-4d6d-80c7-058480e4d06d/public_url',
  },
  {
    title: 'Workato automation pro 1 certification',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/workato-logo.f22aef0b7644290f8398b50981abd75e8f419c6e.png',
    link: 'https://verify.skilljar.com/c/cjcv28pzcqsu',
  },
  {
    title: 'HubSpot SEO Certificate',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/Hubspot.png',
    link: 'https://app-eu1.hubspot.com/academy/achievements/csmsfj5t/en/1/brahim-lagnafdi/seo',
  },
  {
    title: 'Email Marketing Certificate',
    image: 'https://www.brahim-marketing-resume.online/wp-content/uploads/2025/05/Brevo-Logo.png',
    link: 'https://mycourse.app/uX6tUCH18zxxGpUw9',
  },
];

const placeholderImg = 'https://via.placeholder.com/200x200?text=Certificate';

const CertificateCard = ({ cert }) => (
  <a
    href={cert.link || '#'}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative bg-[#1a1a1a] border border-[#333333] rounded-[25px] p-[40px] flex flex-col items-center shadow-lg transition-all duration-400 hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(244,166,35,0.15)] hover:border-[rgba(244,166,35,0.3)] focus:outline-none overflow-hidden ${!cert.link ? 'pointer-events-none opacity-60' : ''}`}
    tabIndex={cert.link ? 0 : -1}
  >
    <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F4A623] to-[#f4d03f] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

    <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center overflow-hidden rounded-[10px] bg-[#0c0c0c] mb-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
      <img
        src={cert.image || placeholderImg}
        alt={cert.title}
        className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110 group-hover:brightness-110"
        loading="lazy"
      />
    </div>
    <div className="text-center mt-2">
      <span className="block text-[15px] font-semibold text-white leading-tight">
        {cert.title}
      </span>
    </div>
  </a>
);

export const CertificationsSection: React.FC = () => (
  <SectionWrapper
    id="certifications"
    titleTag="Certificates"
    mainTitle="Professional Certifications"
    subtitle="A selection of my verified certificates from leading platforms."
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {certificates.map((cert, idx) => (
        <CertificateCard key={cert.title + idx} cert={cert} />
      ))}
    </div>
  </SectionWrapper>
);