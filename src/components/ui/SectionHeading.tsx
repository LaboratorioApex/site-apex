import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal as="p" className={cn("eyebrow mb-4", align === "center" && "justify-center")}>
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={60}
        className="font-display text-3xl font-semibold leading-tight sm:text-4xl"
      >
        {title}
      </Reveal>
      {description && (
        <Reveal
          as="p"
          delay={120}
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </Reveal>
      )}
    </div>
  );
}

