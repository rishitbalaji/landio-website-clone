"use client";

import type { FC, ElementType } from 'react';
import Image from 'next/image';
import { Star, Twitter, Instagram, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  socials: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ikta Sollork',
    title: 'Founder / Data Analyst',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/cy4wavbyt81gvoWNZYNvS2mmo8-12.png?',
    socials: { twitter: '#', instagram: '#', linkedin: '#' },
  },
  {
    name: 'Gwen Chase',
    title: 'AI Strategist',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/JIIlDuVwdfJZuOpFYqQevpNQRrU-13.png?',
    socials: { twitter: '#', instagram: '#', linkedin: '#' },
  },
  {
    name: 'James Bond',
    title: 'Automation Engineer',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/meD9qS8xpKRajRR77S85wY5Mv8A-14.jpg?',
    socials: { twitter: '#', instagram: '#', linkedin: '#' },
  },
  {
    name: 'Jenny Will',
    title: 'SEO / Others',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/XFFLjET4kskD3uCeXXbsOEjE-15.png?',
    socials: { twitter: '#', instagram: '#', linkedin: '#' },
  },
  {
    name: 'Jan Wink',
    title: 'Integration Specialist',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/JR3P7kajBqC7kAHbwF66sBvACw-16.png?',
    socials: { twitter: '#', instagram: '#', linkedin: '#' },
  },
  {
    name: 'Lilli Math',
    title: 'Client Manager',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/XNaoO5zh0Xr50RaXTmjSPo-17.jpg?',
    socials: { twitter: '#', instagram: '#', linkedin: '#' },
  },
];

const SocialLink: FC<{ href: string; icon: ElementType }> = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-secondary-text transition-colors hover:bg-secondary hover:text-primary-text"
  >
    <Icon className="h-4 w-4" />
  </a>
);

const TeamMemberCard: FC<{ member: TeamMember }> = ({ member }) => (
  // Based on computed styles: height: 151.2px -> h-[152px], border-radius: 16px -> rounded-2xl, bg-color: rgb(22, 27, 34) -> bg-card
  <div className="flex h-[152px] items-center justify-between overflow-hidden rounded-2xl border border-border bg-card p-0">
    {/* Padding is applied to the content div to not affect the image */}
    <div className="flex_grow p-6">
      <h3 className="text-xl font-semibold text-primary-text">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-secondary-text">{member.title}</p>
      <div className="mt-4 flex gap-3">
        <SocialLink href={member.socials.twitter} icon={Twitter} />
        <SocialLink href={member.socials.instagram} icon={Instagram} />
        <SocialLink href={member.socials.linkedin} icon={Linkedin} />
      </div>
    </div>
    {/* Based on computed styles: width: 119px -> w-[119px] */}
    <div className="relative h-full w-[119px] flex-shrink-0">
      <Image
        src={member.image}
        alt={`Profile picture of ${member.name}`}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 119px"
        className="object-cover"
      />
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section className="bg-background py-20 lg:py-24" id="team">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-secondary-text">
            <Star className="h-3 w-3 text-secondary-text" fill="currentColor" />
            OUR AMAZING TEAM
          </div>
          <h2 className="text-5xl font-semibold leading-tight text-primary-text">
            Get to Know <span className="text-accent-italic">Us</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-text">
            Everything you need to collaborate, create, and scale, all in one place.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;