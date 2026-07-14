import { Icon } from "@/components/ui/Icon";
import { whatsappLink } from "@/config/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Apex Lab pelo WhatsApp"
      title="Conversar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-glow transition-colors hover:bg-foreground hover:text-canvas"
      data-conversion="whatsapp"
      data-location="floating-button"
    >
      <Icon name="whatsapp" size={25} />
    </a>
  );
}
