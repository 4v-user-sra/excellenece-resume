import { motion } from "motion/react";
import React from "react";

export const BezelCard = ({ children, className = "", delay = 0, autoAnimate = true }: { children: React.ReactNode; className?: string; delay?: number; autoAnimate?: boolean }) => {
  const InnerContent = () => (
    <div className="double-bezel-inner flex flex-col p-6 md:p-8 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  );

  if (autoAnimate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.32, 0.72, 0, 1] }}
        className={`h-full w-full double-bezel ${className}`}
      >
        <InnerContent />
      </motion.div>
    );
  }

  return (
    <div className={`h-full w-full double-bezel ${className}`}>
      <InnerContent />
    </div>
  );
};

export const Tag = ({ children, variant = "neutral" }: { children: React.ReactNode; variant?: "neutral" | "high" | "medium" | "good" }) => {
  const variants = {
    neutral: "bg-white/5 border-white/10 text-white/80",
    high: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    medium: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    good: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium border rounded-full whitespace-nowrap ${variants[variant]}`}>
      {children}
    </span>
  );
};

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">
    {children}
  </div>
);

export const Heading2 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`font-display text-2xl md:text-3xl font-medium tracking-tight text-white mb-6 ${className}`}>
    {children}
  </h2>
);

export const Metric = ({ label, value, note }: { label: string; value: string; note: string }) => (
  <div className="flex flex-col p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
    <span className="text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">{label}</span>
    <span className="text-xl md:text-2xl font-light tracking-tight text-white mb-3">{value}</span>
    <span className="text-xs text-white/40 leading-relaxed mt-auto pt-4 border-t border-white/5">{note}</span>
  </div>
);
