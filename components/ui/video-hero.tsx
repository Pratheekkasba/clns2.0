"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const HERO_VIDEO_SRC =
  "/video-hero/motion2Fast_Ultrarealistic_cinematic_video_of_a_modern_Indian__0.mp4";

function StateEmblem() {
  return (
    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#f5c351]/40 bg-[#f5c351]/10 shadow-[0_0_35px_rgba(245,195,81,0.45)]">
      <svg viewBox="0 0 64 64" className="h-12 w-12 text-[#f5c351]" fill="currentColor">
        <path d="M28 10h8l4 12v12h-4v12l4 6h-16l4-6V34h-4V22l4-12z" opacity="0.85" />
        <path d="M22 22h20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M20 46h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Optimized animations - reduced delays
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export function VideoHero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Use intersection observer for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            // Start loading video when visible
            if (videoRef.current && videoRef.current.readyState < 2) {
              videoRef.current.load();
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-[#020817] text-white"
    >
      {/* Poster image fallback */}
      {!videoLoaded && (
        <div 
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/video-hero/image_for_supremcort.jpg)' }}
        />
      )}
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/video-hero/image_for_supremcort.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
          style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,20,35,0.78)_0%,rgba(5,20,35,0.55)_60%,rgba(5,20,35,0.65)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(37,99,235,0.35),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(2,8,23,0)_0%,rgba(5,20,35,0.65)_100%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants}>
          <StateEmblem />
        </motion.div>
        <motion.p variants={itemVariants} className="text-base uppercase tracking-[0.4em] text-white/70">
          A next-generation legal ecosystem.
        </motion.p>

        <motion.div variants={itemVariants} className="space-y-6">
          <h1
            className="text-[2.6rem] font-bold leading-tight tracking-tight sm:text-5xl md:text-[3.4rem]"
            style={{ textShadow: "0px 2px 16px rgba(0,0,0,0.4)" }}
          >
            Centralised Legal Network Solutions
          </h1>
          <p
            className="text-lg leading-relaxed text-white/85 sm:text-xl"
            style={{ textShadow: "0px 2px 12px rgba(0,0,0,0.35)" }}
          >
            Fast, transparent, tech-enabled legal services for clients, students & advocates & officials.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-6 flex w-full justify-center">
          <a
            href="https://calendly.com/your-clns-meet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-10 py-4 text-base font-semibold text-white shadow-[0_20px_50px_rgba(37,99,235,0.5)] transition-all duration-300 ease-in-out hover:brightness-110 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-[#020817]"
            aria-label="Schedule a meet with CLNS"
          >
            Schedule a Meet
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}


