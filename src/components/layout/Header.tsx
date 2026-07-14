"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav } from "@/data/navigation";
import { whatsappLink } from "@/config/site";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export function Header() {
  const scrolled = useScrolled();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled ? "border-border bg-canvas/95 backdrop-blur" : "border-transparent bg-canvas",
      )}
    >
      <div className="container flex h-16 items-center justify-between lg:h-20">
        <Link href="/" aria-label="Ir para a página inicial" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {mainNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active ? "bg-surface-2 text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-conversion="whatsapp"
            data-location="header"
          >
            Iniciar projeto
            <Icon name="arrow-right" size={18} />
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface text-foreground lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} size={23} />
        </button>
      </div>

      <div
        className={cn(
          "absolute inset-x-0 top-full border-b border-border bg-canvas px-5 py-5 shadow-soft lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav aria-label="Menu mobile">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-surface-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full"
            size="lg"
            data-conversion="whatsapp"
            data-location="mobile-menu"
          >
            Iniciar projeto
            <Icon name="arrow-right" size={18} />
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
