import React from 'react';
import Image from 'next/image';
import { X, Instagram, Facebook, ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-background text-primary-text overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="https://framerusercontent.com/assets/1g8IkhtJmlWcC4zEYWKUmeGWzI.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.15]"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(26,37,111,0.4)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_60%,_hsl(var(--background))_100%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] pt-24 pb-12 text-center">
        <div className="flex flex-col items-center w-full max-w-5xl">
          <div className="mb-8 bg-card/70 border border-border rounded-[32px] backdrop-blur-md shadow-[0_0_100px_0_#1a256f]">
            <div className="p-4">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/svgs/5BVUI56YoqDFZ1xvzbir5lf9sZA-2.svg?"
                alt="AI Logo"
                width={74}
                height={74}
                priority
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/50 backdrop-blur-sm py-1 pr-4 pl-2">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
              <p className="text-sm font-medium text-primary-text tracking-wider">NEW GEN AI AUTOMATION PARTNER</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-tight text-primary-text">
              Automate Smarter. Grow Faster. <span className="font-accent italic">With AI.</span>
            </h1>

            <p className="text-lg text-secondary-text max-w-xl">
              AI Automation for Modern Businesses Made Simple
            </p>

            <a
              href="https://framer.link/D4dc7gs"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 shadow-[0_5px_30px_-5px_hsl(var(--primary))] hover:shadow-[0_8px_40px_-5px_hsl(var(--primary))]"
            >
              Book A Free Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-4 mt-4">
              <a href="https://x.com/home" aria-label="X" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm transition-colors hover:bg-border/80">
                <X className="h-4 w-4 text-secondary-text" />
              </a>
              <div className="h-5 w-px bg-border"></div>
              <a href="https://www.instagram.com/" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm transition-colors hover:bg-border/80">
                <Instagram className="h-4 w-4 text-secondary-text" />
              </a>
              <div className="h-5 w-px bg-border"></div>
              <a href="https://www.facebook.com/" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm transition-colors hover:bg-border/80">
                <Facebook className="h-4 w-4 text-secondary-text" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#founder-note" aria-label="Scroll down">
          <ChevronDown className="h-6 w-6 text-secondary-text animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;