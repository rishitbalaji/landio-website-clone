import {
  Grid3x3,
  Facebook,
  Printer,
  Framer,
  Twitter,
  Linkedin,
  FileText,
  Instagram,
  Chrome,
  Cloud,
  Wallet,
} from 'lucide-react';
import React from 'react';

const iconComponents = [
  Facebook,
  Printer,
  Framer,
  Twitter,
  Linkedin,
  FileText,
  Instagram,
  Chrome,
  Cloud,
  Wallet,
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="relative py-20 sm:py-24 bg-background overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full" 
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(88, 166, 255, 0.15) 0%, rgba(88, 166, 255, 0) 100%)',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-3 py-1">
            <svg
              className="h-4 w-4 text-primary"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.3335H5.33333M5.33333 1.00016V5.3335M5.33333 5.3335H1M5.33333 5.3335V1.00016M1 5.3335V10.6668M1 5.3335H5.33333M1 10.6668H5.33333M1 10.6668V5.3335M5.33333 10.6668H1M5.33333 10.6668V15.0002M5.33333 10.6668V5.3335M10.6667 1.00016V5.3335M10.6667 5.3335H15M10.6667 5.3335H5.33333M10.6667 5.3335V1.00016M10.6667 10.6668V5.3335M10.6667 10.6668H5.33333M10.6667 10.6668H15M10.6667 10.6668V5.3335M15 10.6668V5.3335M15 10.6668H10.6667M15 10.6668V15.0002M15 10.6668V5.3335M5.33333 15.0002V10.6668M5.33333 15.0002H10.6667M5.33333 15.0002H1M5.33333 15.0002V10.6668"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
              INTEGRATIONS
            </p>
          </div>

          {/* Title */}
          <h2 className="text-[48px] font-semibold leading-tight text-primary-text">
            Seamless <span className="font-accent italic">Integrations</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground">
            Interact with all your favorite software without unnecessary fuss
          </p>
        </div>

        {/* Icon Grid */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 md:gap-8">
            {iconComponents.map((Icon, index) => (
              <div
                key={index}
                className="flex aspect-square items-center justify-center rounded-xl border border-border p-8 shadow-[0_4px_24px_rgba(0,0,0,0.1)]"
                style={{
                  backgroundColor: 'rgba(22, 27, 34, 0.8)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Icon className="h-10 w-10 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <p className="mx-auto max-w-3xl text-xl italic text-foreground">
            "Our AI automation plugs into your stack to create a unified, intelligent workflow"
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;