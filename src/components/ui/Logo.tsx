import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/assets";

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath("/assets/brand/logo.svg")}
          alt=""
          width={34}
          height={34}
          className="h-8 w-8"
        />
      </span>
      {showWordmark && (
        <span className="font-display text-lg font-semibold text-foreground">
          {siteConfig.name}
        </span>
      )}
    </span>
  );
}
