"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { User } from "lucide-react";

const successStoriesData = [
  {
    title: "Max's SaaS Revolution",
    description: "Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth and expand faster.",
    metrics: [
      { value: 50, label: "increase in ROI" },
      { value: 75, label: "boost in revenue" }
    ],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/46yWpjkwWiKJojGTr2NKnNPtJ1c-3.jpg?",
    imageAlt: "Success Story - Max"
  },
  {
    title: "Emily's E-commerce Success",
    description: "Emily, the CEO of BloomTech, transformed their marketing efforts using AI-powered tools. This shift resulted in a 60% increase in ROI and a 45% improvement in customer personalization, leading to a surge in brand loyalty.",
    metrics: [
      { value: 70, label: "growth in sales" },
      { value: 50, label: "rise in engagement" }
    ],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/GuFZFCQnRSOpKJkAPlCkaRUGIjc-4.png?",
    imageAlt: "Success Story - Emily"
  },
  {
    title: "Sophia's Retail Breakthrough",
    description: "Sophia, the marketing lead at Trendify, used AI-driven analytics to dive deep into customer behavior. The insights led to a 40% increase in engagement and a 30% rise in repeat purchases, creating long-term customer relationships.",
    metrics: [
      { value: 40, label: "gain in retention" },
      { value: 30, label: "surge in profits" }
    ],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/images/TXdiLXbrEnofSFENzswfxpdKpc-5.png?",
    imageAlt: "Success Story - Sophia"
  }
];

type Metric = {
  value: number;
  label: string;
};

type SuccessStory = {
  title: string;
  description: string;
  metrics: Metric[];
  imageSrc: string;
  imageAlt: string;
};

const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value === 0) return;
    const duration = 1500;
    let start = 0;
    const end = value;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
};

const SuccessStoryCard = ({ story }: { story: SuccessStory }) => {
  return (
    <div className="bg-card border border-border rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex flex-col h-full justify-between gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-primary-text">{story.title}</h3>
          <p className="mt-4 text-secondary-text text-base leading-relaxed">{story.description}</p>
        </div>
        <div className="flex gap-12">
          {story.metrics.map((metric, index) => (
            <div key={index}>
              <h3 className="text-primary-text font-semibold">
                <span className="text-6xl"><AnimatedCounter value={metric.value} /></span>
                <span className="text-3xl">%</span>
              </h3>
              <p className="text-secondary-text text-base">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full aspect-square relative rounded-lg overflow-hidden">
        <Image 
          src={story.imageSrc} 
          alt={story.imageAlt} 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover" 
        />
      </div>
    </div>
  );
};

export default function SuccessStories() {
  return (
    <section id="clients" className="py-20 lg:py-24 bg-primary-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 mb-6">
            <User className="w-4 h-4 text-secondary-text" />
            <p className="text-sm font-semibold uppercase text-secondary-text tracking-wide">OUR CLIENTS</p>
          </div>
          <h2 className="text-5xl font-semibold text-primary-text leading-tight">
            Success Stories to <span className="font-accent italic">Inspire</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-text">
            Discover how businesses and creators achieve results
          </p>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto flex flex-col gap-8">
          {successStoriesData.map((story, index) => (
            <SuccessStoryCard key={index} story={story} />
          ))}
        </div>
        
        <div className="flex justify-center mt-12 gap-2">
            <span className="w-2.5 h-2.5 bg-border rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-border rounded-full"></span>
        </div>
      </div>
    </section>
  );
}