"use client";

import { useEffect } from "react";

type HeaderScrollStateProps = {
  targetId: string;
};

export default function HeaderScrollState({
  targetId,
}: HeaderScrollStateProps) {
  useEffect(() => {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;

      target.classList.toggle("bg-transparent", !isScrolled);
      target.classList.toggle("py-6", !isScrolled);
      target.classList.toggle("bg-cream/95", isScrolled);
      target.classList.toggle("backdrop-blur-md", isScrolled);
      target.classList.toggle("shadow-sm", isScrolled);
      target.classList.toggle("py-4", isScrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetId]);

  return null;
}
