import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  children,
  className,
  containerClassName,
  as: Tag = "section",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "footer";
}) {
  return (
    <Tag id={id} className={cn("scroll-mt-20 py-16 sm:py-20 lg:py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}

