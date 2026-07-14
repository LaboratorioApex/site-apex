import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Largura máxima e padding lateral consistentes em todo o site. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("container", className)}>{children}</div>;
}
