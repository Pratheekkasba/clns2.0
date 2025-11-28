"use client";

import Link from "next/link";
import {
  Building2,
  GraduationCap,
  Shield,
  Scale,
  Rocket,
} from "lucide-react";

const serviceCategories = [
  {
    title: "Clients",
    icon: Shield,
    description: "Transparent, affordable legal access for everyone",
    gradient: "from-teal-500/20 via-cyan-500/10 to-blue-500/20",
    borderGradient: "from-teal-400/50 via-cyan-400/30 to-blue-400/50",
    hash: "clients",
  },
  {
    title: "Students",
    icon: GraduationCap,
    description: "Real-world exposure, mentorship, and career growth",
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
    borderGradient: "from-sky-400/50 via-blue-400/30 to-indigo-400/50",
    hash: "students",
  },
  {
    title: "Advocates",
    icon: Scale,
    description: "Digital-first tools for modern legal practice",
    gradient: "from-cyan-500/20 via-teal-500/10 to-emerald-500/20",
    borderGradient: "from-cyan-400/50 via-teal-400/30 to-emerald-400/50",
    hash: "advocates",
  },
  {
    title: "Startups",
    icon: Rocket,
    description: "Fast legal & documentation support for early-stage founders registration, compliance, and access to government benefits.",
    gradient: "from-purple-500/20 via-pink-500/10 to-rose-500/20",
    borderGradient: "from-purple-400/50 via-pink-400/30 to-rose-400/50",
    hash: "startups",
  },
  {
    title: "MSME",
    icon: Building2,
    description: "Quick MSME registration, compliance assistance, certificate handling, and advisory for subsidies & credit support.",
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
    borderGradient: "from-orange-400/50 via-amber-400/30 to-yellow-400/50",
    hash: "msme",
  },
];

interface ServiceCategoriesSectionProps {
  showTitle?: boolean;
  className?: string;
}

export function ServiceCategoriesSection({ 
  showTitle = true, 
  className = "" 
}: ServiceCategoriesSectionProps) {
  return (
    <section className={`relative px-6 py-32 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#010308] via-[#030a15] to-[#010205]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        {showTitle && (
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white sm:text-5xl">Service Categories</h2>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <ServiceCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCategoryCard({
  category,
}: {
  category: (typeof serviceCategories)[0];
}) {
  const Icon = category.icon;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl">
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-70`} />

      {/* Gradient Border */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.borderGradient} opacity-0`} />

      <div className="relative z-10 flex flex-1 flex-col text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <Icon className="h-8 w-8 text-teal-300" />
          </div>
        </div>
        <h3 className="mb-3 text-2xl font-bold text-white">{category.title}</h3>
        <p className="mb-6 flex-1 text-white/70">{category.description}</p>
        
        {/* Explore Button */}
        <Link
          href={`/services#${category.hash}`}
          className="mt-auto inline-flex items-center justify-center rounded-full border border-teal-500/50 bg-transparent px-6 py-2.5 text-sm font-medium text-teal-400 transition-all duration-300 hover:border-teal-400 hover:bg-teal-500/10 hover:text-teal-300"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

export { serviceCategories };
