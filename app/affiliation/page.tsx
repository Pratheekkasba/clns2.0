"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const affiliations = [
  {
    title: "United Nation",
    logo: "/logos/un-logo.png",
    description:
      "CLNS is affiliated with the United Nations, contributing to global legal frameworks and sustainable development initiatives. This partnership enables us to align our services with international standards and best practices.",
  },
  {
    title: "UIA – Union of International Association",
    logo: "/logos/uia-logo.png",
    description:
      "As a member of the Union of International Associations, CLNS participates in a global network of organizations dedicated to fostering international cooperation and knowledge sharing in the legal domain.",
  },
  {
    title: "FICL – Federation of Indian Corporate Lawyer",
    logo: "/logos/ficl-logo.png",
    description:
      "CLNS is proudly affiliated with the Federation of Indian Corporate Lawyers, strengthening our commitment to corporate legal excellence and professional development across India.",
  },
];

export default function AffiliationPage() {
  return (
    <div className="min-h-screen w-full bg-[#020712] text-white">
      <div className="mx-auto max-w-6xl px-4 py-28 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Affiliation
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70">
            Our strategic partnerships and affiliations with leading global and national organizations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {affiliations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-teal-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              {/* Logo and Content */}
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                {/* Logo Container */}
                <div className="flex-shrink-0 rounded-lg border border-white/10 bg-white/10 p-2">
                  <Image
                    src={item.logo}
                    alt={`${item.title} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                {/* Text Content */}
                <div className="text-center sm:text-left">
                  <h3 className="mb-2 text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
