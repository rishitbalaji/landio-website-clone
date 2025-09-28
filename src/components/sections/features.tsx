import {
  BarChart3,
  Bot,
  BrainCircuit,
  PlugZap,
  SlidersHorizontal,
  UserSearch,
  Waypoints,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: BrainCircuit,
    title: "Workflow Automation",
    description: "Automate complex business processes to boost speed, clarity, and efficiency.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom AI Solutions",
    description: "Build tailored AI systems that align with your business goals and challenges.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Deploy intelligent virtual agents to streamline tasks.",
  },
  {
    icon: UserSearch,
    title: "Sales & Marketing",
    description: "Leverage AI to optimize campaigns, track leads, and personalize outreach.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Track automation results in real time to improve and scale your workflows.",
  },
  {
    icon: PlugZap,
    title: "Seamless Integrations",
    description: "Connect your tools and apps for smooth, unified AI-powered workflows.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm">
            <Waypoints className="h-4 w-4 text-primary" />
            <span className="font-medium uppercase text-primary-text">FEATURES</span>
          </div>
          <h2 className="mt-6 text-4xl font-semibold text-primary-text md:text-5xl">
            All features in one place
          </h2>
          <p className="mt-4 text-lg text-secondary-text">
            Everything you need to automate operations, boost productivity
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-card p-8">
      <div className="absolute -z-0 left-1/2 top-0 h-[150px] w-[150%] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col">
        <div className="h-[148px]">
          <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-lg border border-border bg-background">
            <Icon className="absolute h-10 w-10 text-primary opacity-20 blur-sm" />
            <Icon className="relative h-10 w-10 text-primary-text" />
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-primary-text">{title}</h3>
        <p className="mt-2 text-base text-secondary-text">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesSection;