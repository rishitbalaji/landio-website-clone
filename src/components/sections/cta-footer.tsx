import React from 'react';
import { Twitter, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const CtaFooter = () => {
  return (
    <footer className="w-full bg-background flex flex-col items-center pt-[120px] pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container flex flex-col items-center gap-10 text-center">
        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-border" />
          <p className="text-xl text-secondary-text text-accent-italic">
            Reach out anytime
          </p>
          <div className="h-px w-20 bg-border" />
        </div>

        <h2 className="max-w-4xl text-[60px] font-bold leading-[1.1] text-primary-text">
          Ready to Automate Smarter? <br />
          <span className="text-accent-italic">Let’s Build Together</span>
        </h2>

        <p className="text-secondary-text">Schedule a Call and Begin Automating</p>

        <a
          href="https://framer.link/D4dc7gs"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/80 py-3 px-6 font-semibold text-primary-text transition-colors hover:border-primary"
        >
          Book A Free Call
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <div className="flex items-center gap-5">
          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-secondary-text transition-colors hover:border-primary hover:text-primary"
            aria-label="Follow us on X"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-secondary-text transition-colors hover:border-primary hover:text-primary"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-secondary-text transition-colors hover:border-primary hover:text-primary"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>

        <p className="text-base font-semibold text-primary-text">landio@support.com</p>
      </div>

      <div className="container mt-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="flex items-center justify-center gap-2.5 pt-10">
          <a
            href="https://framer.link/D4dc7gs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary-text transition-colors hover:text-primary"
          >
            Edit Landio
          </a>
          <span className="text-border">·</span>
          <a
            href="https://www.framer.com/"
            title="Create a free website with Framer, the website builder loved by startups, designers and agencies."
            className="text-secondary-text transition-opacity hover:opacity-75"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://framerusercontent.com/images/Y9nKmzEFEB39z5g5rLwnSAa9s.svg"
              alt="Framer logo"
              width={76}
              height={20}
              className="h-5 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CtaFooter;