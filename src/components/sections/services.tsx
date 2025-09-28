import type { FC, ReactNode } from 'react';
import {
  Briefcase,
  DollarSign,
  CreditCard,
  Users,
  Twitter,
  Check,
  Sparkles,
  Search,
  ArrowUpRight,
  AppWindow,
  DraftingCompass,
  Target,
  LineChart,
  BrainCircuit,
  Settings,
  Code2,
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, children, className = '' }) => {
  return (
    <div className={`flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-1 ${className}`}>
      <div className="flex h-56 flex-grow items-center justify-center p-8">
        {children}
      </div>
      <div className="mt-auto p-8 pt-0">
        <h3 className="text-2xl font-semibold text-primary-text">{title}</h3>
        <p className="mt-2 text-secondary-text">{description}</p>
      </div>
    </div>
  );
};

const Pill: FC<{ icon: ReactNode; text: string; checked?: boolean; className?: string }> = ({ icon, text, checked, className }) => (
  <div className={`absolute flex items-center gap-2 rounded-lg border border-border bg-card p-2 px-3 text-sm text-secondary-text shadow-md ${className}`}>
    {icon}
    <span>{text}</span>
    {checked && <Check className="h-4 w-4 text-success-green" />}
  </div>
);

const CostManagementVisual = () => (
  <div className="relative h-full w-full">
    <Pill icon={<DollarSign className="h-4 w-4" />} text="Cost Management" className="left-4 top-8 -rotate-6" />
    <Pill icon={<CreditCard className="h-4 w-4" />} text="Payment reminder" className="right-4 top-20 rotate-6" />
    <Pill icon={<Users className="h-4 w-4" />} text="Employee Tracking" className="left-12 top-2/3 -translate-y-1/2 rotate-3" />
    <Pill icon={<Twitter className="h-4 w-4" />} text="Social media post" checked className="right-10 top-1/2 -translate-y-1/2 -rotate-3" />
  </div>
);

const AutomatedWorkflowsVisual = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="absolute h-36 w-36 rounded-full bg-primary/10" />
    <div className="absolute h-24 w-24 animate-ping rounded-full bg-primary/20" />
    <Sparkles className="relative z-10 h-16 w-16 text-primary" />
  </div>
);

const ResearchToolsVisual = () => (
  <div className="flex w-full max-w-sm flex-col rounded-lg border border-border bg-secondary/30 p-4">
    <div className="flex items-center justify-between rounded-md border border-border bg-card p-2">
      <div className="flex items-center gap-2 text-secondary-text">
        <Search className="h-4 w-4" />
        <span className="text-sm">Research anything...</span>
      </div>
      <button className="rounded bg-primary-text px-3 py-1 text-sm font-medium text-background">Research</button>
    </div>
    <div className="mt-3 flex flex-col gap-2">
      <div className="flex items-center justify-between rounded-md bg-card/50 p-2 text-sm text-secondary-text">
        <div className="flex items-center gap-2"><AppWindow className="h-4 w-4" /> Software & App Industry</div>
        <ArrowUpRight className="h-4 w-4" />
      </div>
      <div className="flex items-center justify-between rounded-md bg-card/50 p-2 text-sm text-secondary-text">
        <div className="flex items-center gap-2"><DraftingCompass className="h-4 w-4" /> UX & UI Design Industry</div>
        <ArrowUpRight className="h-4 w-4" />
      </div>
      <div className="flex items-center justify-between rounded-md bg-card/50 p-2 text-sm text-secondary-text">
        <div className="flex items-center gap-2"><Target className="h-4 w-4" /> High Converting Customer</div>
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </div>
  </div>
);

const RealTimeIntelligenceVisual = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <LineChart className="absolute h-32 w-32 text-border" />
    <div className="absolute h-px w-20 bg-border rotate-45" />
    <div className="absolute h-px w-20 bg-border -rotate-45" />
    <div className="absolute h-3 w-3 rounded-full bg-border top-[35%] left-[35%]" />
    <div className="absolute h-2 w-2 rounded-full bg-border top-[60%] left-[25%]" />
    <div className="absolute h-3 w-3 rounded-full bg-border top-[40%] right-[30%]" />
    <div className="absolute h-2.5 w-2.5 rounded-full bg-border top-[65%] right-[40%]" />
    <Sparkles className="relative z-10 h-10 w-10 text-primary" />
  </div>
);


const CodeVisual = () => (
  <div className="w-full max-w-md rounded-lg border border-border bg-secondary/30 font-mono text-xs">
    <div className="flex items-center gap-2 border-b border-border px-4 py-2">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/50"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/50"></div>
      </div>
      <div className="ml-auto flex items-center gap-2 text-secondary-text">
        Code <Code2 className="h-4 w-4" />
      </div>
    </div>
    <pre className="p-4 text-secondary-text">
      <code>
        <span className="text-blue-400">class</span> <span className="text-green-400">AutomationAgent</span>:<br />
        {'  '}<span className="text-blue-400">def</span> <span className="text-purple-400">__init__</span>(<span className="text-orange-400">self</span>, activation_limit):<br />
        {'    '}<span className="text-orange-400">self</span>.activation_limit = activation_limit<br />
        {'    '}<span className="text-orange-400">self</span>.current_mode = <span className="text-yellow-400">"idle"</span><br />
        <br />
        {'  '}<span className="text-blue-400">def</span> <span className="text-purple-400">evaluate_task</span>(<span className="text-orange-400">self</span>, workload_value):<br />
        {'    '}<span className="text-blue-400">if</span> workload_value &gt; <span className="text-orange-400">self</span>.activation_limit:<br />
        {'      '}<span className="text-orange-400">self</span>.current_mode = <span className="text-yellow-400">"engaged"</span><br />
        {'      '}<span className="text-blue-400">return</span> <span className="text-yellow-400">"Automation agent activated!"</span><br />
        {'    '}<span className="text-blue-400">else</span>:<br />
        {'      '}<span className="text-blue-400">return</span> <span className="text-yellow-400">"No activation needed."</span>
      </code>
    </pre>
  </div>
);

const AIStrategyVisual = () => (
    <div className="flex h-full w-full items-center justify-center gap-4">
        <div className="rounded-xl border border-border bg-secondary/30 p-6">
            <BrainCircuit className="h-12 w-12 text-primary"/>
        </div>
        <div className="rounded-xl border border-border bg-secondary/30 p-6">
            <Settings className="h-12 w-12 text-primary"/>
        </div>
    </div>
);


const serviceCardsData = [
    {
      title: 'Automate repetitive tasks',
      description: 'We help you streamline internal operations by automating manual workflows.',
      visual: <CostManagementVisual />,
    },
    {
      title: 'Automated Workflows',
      description: 'Boost efficiency across teams with smart automation that connects tools and platforms.',
      visual: <AutomatedWorkflowsVisual />,
    },
    {
      title: 'Research tools',
      description: 'Get insights faster with AI-powered search and data analysis.',
      visual: <ResearchToolsVisual />,
    },
    {
      title: 'Real-Time Intelligence',
      description: 'Make smarter decisions with live data insights and tap into real-time analytics.',
      visual: <RealTimeIntelligenceVisual />,
    },
    {
      title: 'Custom AI Agent development',
      description: 'We develop custom AI agents that integrate seamlessly with your existing tools.',
      visual: <CodeVisual />,
    },
    {
      title: 'AI Strategy Consulting',
      description: 'Get expert guidance to implement AI solutions that drive measurable business growth.',
      visual: <AIStrategyVisual />,
    },
  ];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-4 py-1.5 text-sm font-semibold text-secondary-text">
                <Briefcase className="h-4 w-4 text-primary" />
                SERVICES
            </div>
          <h2 className="text-4xl font-semibold text-primary-text md:text-5xl">
            Smarter Services, <span className="text-accent-italic">Built with AI</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-text">
            Everything you need to automate operations, boost productivity
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {serviceCardsData.map((card, index) => (
            <ServiceCard key={index} title={card.title} description={card.description}>
              {card.visual}
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;