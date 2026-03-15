"use client";

import { useInView } from "@/lib/useInView";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function RevealOnScroll({ children, className = "", stagger = false }: RevealOnScrollProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`${stagger ? "stagger-children" : "reveal"} ${isInView ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
