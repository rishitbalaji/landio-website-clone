import Image from "next/image";
import { Check, X, Scaling, Copy } from "lucide-react";

const landioFeatures = [
  "Fast setup with ready AI workflows",
  "Built to grow and adapt with you",
  "Real-time, AI-powered analytics",
  "Automates tasks, reducing overhead",
  "Expert support + AI guidance",
];

const othersFeatures = [
  "Slower execution and manual setup",
  "Requires manual updates as you scale",
  "Limited or delayed reporting",
  "Higher labor costs, less automation",
  "Generic support or none at all",
];

const ComparisonSection = () => {
  return (
    <section id="comparison" className="relative bg-primary-background py-20 sm:py-24 lg:py-32 border-t border-border-outline overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 border border-border-outline rounded-full px-3 py-1 text-xs mb-4">
            <Scaling className="h-4 w-4 text-primary" />
            <span className="font-semibold tracking-widest text-primary-text uppercase">COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-text leading-tight">
            Why Choose Us <span className="font-accent italic">Over Others</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary-text">
            See how we compare against others in performance, growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Landio Card */}
          <div className="bg-secondary-background/80 border border-border-outline rounded-xl p-8 lg:p-10 backdrop-blur-sm">
            <div className="mb-8">
              <a href="#hero" className="inline-block">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1a36de7-93ac-4d50-aa83-226bb7bb1e82-landio-framer-website/assets/svgs/04vJJZ3D2ponPv6rzLBq6sf2PZU-1.svg?"
                  alt="Landio Logo"
                  width={103}
                  height={39}
                  className="h-8 w-auto"
                  unoptimized
                />
              </a>
            </div>
            <ul className="space-y-5">
              {landioFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Check className="h-5 w-5 text-success-green flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-base text-primary-text">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Others Card */}
          <div className="bg-secondary-background/80 border border-border-outline rounded-xl p-8 lg:p-10 backdrop-blur-sm">
            <div className="mb-8 flex items-center gap-4">
               <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-border-outline">
                  <Copy className="h-5 w-5 text-secondary-text" />
              </div>
              <h3 className="text-xl font-semibold text-primary-text">Others</h3>
            </div>
            <ul className="space-y-5">
              {othersFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <X className="h-5 w-5 text-secondary-text flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-base text-secondary-text">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-accent-blue/10 rounded-full blur-[180px] -z-0" />
    </section>
  );
};

export default ComparisonSection;