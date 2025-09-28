"use client";

import Link from "next/link";
import { Orbit, ExternalLink } from "lucide-react";

const navItems = [
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[rgba(8,9,10,0.75)] backdrop-blur-sm">
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-10">
        {/* The original logo asset was not provided. Using a placeholder with an icon and text. */}
        <Link href="/#hero" className="flex items-center gap-2 text-foreground">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26Z"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M14.0001 20.9999C17.8661 20.9999 21.0001 17.8659 21.0001 13.9999C21.0001 10.1339 17.8661 6.99991 14.0001 6.99991"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-bold">Landio</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-x-1 bg-card/50 border border-border rounded-full p-1.5 backdrop-blur-sm">
          {navItems.map((item) => (
            <li key={item.name} className="list-none">
              <a
                href={item.href}
                className="px-4 py-1.5 block rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                {item.name}
              </a>
            </li>
          ))}
        </nav>

        <a
          href="https://framer.link/D4dc7gs"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
        >
          Get Template
          <ExternalLink className="h-4 w-4" />
        </a>

        {/* Placeholder for mobile menu icon */}
        <div className="md:hidden">
          <button className="text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}