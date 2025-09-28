import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const RealTimeIcon = () => (
  <div className="relative w-24 h-24">
    <div className="absolute top-0 left-0 w-full h-12 overflow-hidden">
      <div className="w-24 h-24 rounded-full border-[22px] border-[#1d222a]"></div>
    </div>
    <div className="absolute w-full h-full flex justify-center">
      <div className="w-[1.5px] h-[34px] bg-muted-foreground/30 origin-bottom mt-[14px]" style={{ transform: 'rotate(315deg)' }}></div>
    </div>
    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1d222a]"></div>
  </div>
);

const ImpactIcon = () => (
    <div className="w-24 h-24 flex items-end justify-center gap-1">
      <div className="w-3 h-3.5 bg-secondary rounded-t-[2px]" />
      <div className="w-3 h-10 bg-secondary rounded-t-[2px]" />
      <div className="w-3 h-6 bg-secondary rounded-t-[2px]" />
      <div className="w-3 h-2.5 bg-secondary rounded-t-[2px]" />
    </div>
);

const IntegrationIcon = () => {
    const assetUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/icons/EdYwMQFSY0q3kCvKPrFpiTV5w-1.png?";

    const NodeAndLine = ({ rotation }: { rotation: number }) => (
        <div
            className="absolute top-1/2 left-1/2"
            style={{ transform: `rotate(${rotation}deg) translateX(28px)` }}
        >
            <div className="relative w-8 h-8">
                 <div className="w-full h-px bg-border absolute top-1/2 left-0 -translate-y-1/2" />
                 <div className="w-1.5 h-1.5 bg-border rounded-full absolute top-1/2 right-0 -translate-y-1/2" />
            </div>
        </div>
    );
    
    return (
        <div className="relative w-24 h-24">
            <div className='scale-90'>
                <NodeAndLine rotation={300} />
                <NodeAndLine rotation={240} />
                <NodeAndLine rotation={180} />
                <NodeAndLine rotation={120} />
                <NodeAndLine rotation={60} />
                <NodeAndLine rotation={0} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <Image src={assetUrl} width={56} height={56} alt="Seamless Integration Icon"/>
            </div>
        </div>
    );
};


const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 flex flex-col relative overflow-hidden">
        <div className="absolute -top-12 -left-12 w-[320px] h-[250px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(43,85,140,0.15)_0%,_rgba(43,85,140,0)_100%)]"></div>
        <div className="h-24">{icon}</div>
        <h3 className="text-2xl font-semibold text-primary-text mt-4 mb-2">{title}</h3>
        <p className="text-base text-secondary-text">{description}</p>
    </div>
  );
};


const Benefits = () => {
  return (
    <section id="benefits" className="relative bg-background py-24 border-t border-border">
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 60% 80%, #1e3a5f 0%, transparent 40%)',
        }}
        />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full text-xs font-semibold tracking-wider text-secondary-text mb-4 bg-card">
            <Star className="w-3.5 h-3.5 text-primary" fill="currentColor" />
            <span>BENEFITS</span>
          </div>
          
          <h2 className="text-5xl font-semibold text-primary-text leading-tight">
            Why Choose <span className="font-accent italic font-normal text-primary">Us?</span>
          </h2>

          <p className="text-lg text-secondary-text mt-6">
            Everything you need to automate, optimize, and scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <BenefitCard
            icon={<RealTimeIcon />}
            title="Real-Time Intelligence"
            description="Access accurate, real-time data to drive smarter decisions"
          />

          <BenefitCard
            icon={<ImpactIcon />}
            title="Measurable Impact"
            description="Track performance, uncover insights, and achieve data-backed growth"
          />

          <BenefitCard
            icon={<IntegrationIcon />}
            title="Seamless Integration"
            description="Connect tools, teams, and workflows with intelligent automation"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;