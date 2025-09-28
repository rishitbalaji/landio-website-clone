"use client";

import { useState } from "react";
import Image from "next/image";
import { WandSparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const processData = [
  {
    number: "01",
    title: "Discover & Analyze",
    description:
      "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
  },
  {
    number: "02",
    title: "Build & Integrate",
    description:
      "We construct custom AI agents and automation flows, integrating them seamlessly with your existing software stack for a unified workflow.",
  },
  {
    number: "03",
    title: "Optimize & Scale",
    description:
      "We continuously monitor performance, providing real-time analytics to refine and scale your automations, ensuring lasting impact and growth.",
  },
];

const ProcessSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="process" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-primary-background" />
        <div className="absolute inset-x-0 top-1/2 -z-10 h-[500px] w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(88,166,255,0.1),rgba(88,166,255,0))]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-4">
            <WandSparkles className="h-4 w-4 text-primary" />
            <span>PROCESS</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-primary-text sm:text-5xl">
            Our Simple & Smart <span className="font-accent italic">Process</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground">
            Everything you need to collaborate, create, and scale, all in one place.
          </p>
        </div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-8">
          {["STEP 1", "STEP 2", "STEP 3"].map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "rounded-lg px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                activeTab === index
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card text-muted-foreground hover:bg-secondary"
              )}
            >
              {step}
            </button>
          ))}
        </div>

        <div className="relative rounded-3xl border border-border bg-card/50 p-6 sm:p-8 lg:p-12 shadow-2xl shadow-black/30 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative mb-8 lg:mb-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/LMV9IYKI2TkgMh5KmQhbeIV2A-2.png?"
                alt="Process Dashboard"
                width={1602}
                height={1049}
                className="rounded-xl shadow-lg"
              />
            </div>
            
            <div className="flex flex-col text-left lg:pl-4">
              <p className="text-[80px] leading-none font-semibold text-primary">
                {processData[activeTab].number}
              </p>
              <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-primary-text">
                {processData[activeTab].title}
              </h3>
              <p className="mt-4 text-base text-secondary-foreground leading-relaxed">
                {processData[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;