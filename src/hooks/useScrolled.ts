"use client";

import { useEffect, useState } from "react";

/**
 * Retorna `true` quando a página passou de um limite de rolagem.
 * Usado pelo Header para aplicar o fundo sólido/blur ao rolar.
 */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
