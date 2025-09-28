"use client";

import { useState } from "react";
import { Check, ArrowUpRight, Gift, Star } from "lucide-react";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const PricingSection = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const pricingPlans = [
        {
            name: "Starter",
            priceMonthly: 50,
            priceYearly: 40, // per month when billed yearly
            features: [
                "3 Automated Workflows",
                "Basic AI Assistant Access",
                "Email + Slack Integration",
                "Monthly Performance Reports",
                "Email Support",
            ],
            isPopular: false,
        },
        {
            name: "Pro",
            priceMonthly: 90,
            priceYearly: 72, // per month when billed yearly
            features: [
                "10+ Automated Workflows",
                "Advanced AI Assistant Features",
                "Bi-Weekly Strategy Reviews",
                "CRM + Marketing Tool Integrations",
                "Priority Support",
            ],
            isPopular: true,
        },
        {
            name: "Enterprise",
            priceMonthly: "Custom",
            priceYearly: "Custom",
            features: [
                "Unlimited Custom Workflows",
                "Dedicated AI Strategist",
                "API & Private Integrations",
                "Real-Time Performance Dashboards",
                "24/7 Premium Support + SLA",
            ],
            isPopular: false,
        },
    ];

    return (
        <section id="pricing" className="bg-primary-background text-primary-text py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center gap-2 mb-4 rounded-full border border-border bg-card px-3 py-1 text-sm font-semibold text-primary-text">
                       <Star className="w-3.5 h-3.5 mr-1.5 text-primary-text" fill="currentColor"/> PRICING
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-primary-text tracking-tight">Flexible Plans for Everyone</h2>
                    <p className="mt-6 text-lg leading-8 text-secondary-text">
                        Choose a plan that fits your goals and scale as you grow
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="mt-16 flex justify-center items-center">
                    <div className="inline-flex items-center p-1 bg-secondary rounded-full border border-border">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={cn(
                                "px-6 py-1.5 text-sm font-medium rounded-full transition-colors focus:outline-none",
                                billingCycle === "monthly" 
                                    ? "bg-muted text-primary-text" 
                                    : "bg-transparent text-secondary-text hover:text-primary-text"
                            )}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className={cn(
                                "px-6 py-1.5 text-sm font-medium rounded-full transition-colors focus:outline-none",
                                billingCycle === "yearly" 
                                    ? "bg-muted text-primary-text" 
                                    : "bg-transparent text-secondary-text hover:text-primary-text"
                            )}
                        >
                            Yearly
                        </button>
                    </div>
                    <p className="ml-4 text-sm font-medium text-success-green">Save 20%</p>
                </div>

                {/* Pricing Cards */}
                <div className="mt-12 grid max-w-md grid-cols-1 gap-8 mx-auto lg:max-w-none lg:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "flex flex-col rounded-2xl bg-card border p-8 relative",
                                plan.isPopular ? "border-primary ring-2 ring-primary/30" : "border-border"
                            )}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold leading-8 text-primary-text">{plan.name}</h3>
                                {plan.isPopular && (
                                    <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary-text">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                        Popular
                                    </div>
                                )}
                            </div>
                           
                            <div className="mt-6 flex items-baseline gap-x-1">
                                {typeof plan.priceMonthly === 'number' && typeof plan.priceYearly === 'number' ? (
                                    <>
                                        <span className="text-5xl font-bold tracking-tight text-primary-text">
                                            ${billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly}
                                        </span>
                                        <span className="text-sm font-semibold leading-6 text-secondary-text">/month</span>
                                    </>
                                ) : (
                                    <span className="text-5xl font-bold tracking-tight text-primary-text">Custom</span>
                                )}
                            </div>

                            <a
                                href="https://framer.link/D4dc7gs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 flex items-center justify-center rounded-lg border border-border bg-background py-2 text-sm font-semibold text-primary-text transition-colors hover:bg-secondary/20 relative overflow-hidden"
                            >
                                Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
                                {plan.isPopular && <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-white/5 to-transparent rounded-b-lg"></div>}
                            </a>
                            
                            <hr className="my-8 border-border" />
                            
                            <ul role="list" className="space-y-4 text-sm leading-6">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <Check className="h-6 w-5 flex-none text-success-green" aria-hidden="true" />
                                        <span className="text-primary-text">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Donation Note */}
                <div className="mt-16 flex justify-center">
                    <div className="inline-flex items-center gap-x-3 rounded-full bg-secondary border border-border px-4 py-2 text-sm text-secondary-text">
                        <Gift className="h-5 w-5 text-primary-text" />
                        <span className="text-primary-text">We donate 2% of your membership to pediatric wellbeing</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;