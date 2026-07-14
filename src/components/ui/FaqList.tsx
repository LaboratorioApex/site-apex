import type { Faq } from "@/data/faqs";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold marker:hidden">
            <span>{item.question}</span>
            <span className="text-xl font-normal text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="max-w-3xl pb-5 pr-10 text-sm leading-relaxed text-muted sm:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
