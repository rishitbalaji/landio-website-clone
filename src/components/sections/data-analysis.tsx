import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const DataAnalysisSection = () => {
  return (
    <section id="founder-note" className="relative bg-background py-20 px-10">
      {/* Background radial gradient shape */}
      <div
        className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(88,166,255,0.1)_0%,rgba(88,166,255,0)_100%)]"
        aria-hidden="true"
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-[1200px] px-0">
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-2.5 backdrop-blur-sm">
            <Star className="h-4 w-4 text-primary" fill="currentColor" />
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              WE ANALYZE YOUR DATA
            </p>
          </div>

          <h3 className="max-w-[890px] text-center font-body text-[32px] font-normal leading-[1.4] text-primary-text">
            We find what to <span className="font-accent italic">automate</span>, who your users
            are &amp; how AI can optimize your <span className="font-accent italic">workflow</span>
            . Best part is we also build and launch{' '}
            <span className="font-accent italic">real solutions</span>.”
          </h3>

          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 flex-shrink-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/W7xYkGKzPzvnPv58ZBNzxS3JZI-1.jpg?"
                alt="Co-founder & AI Strategy Lead"
                width={48}
                height={48}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="font-body text-base font-normal text-secondary-text">
              Co-founder &amp; AI Strategy Lead
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysisSection;