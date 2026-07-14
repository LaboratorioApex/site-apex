import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/data/navigation";
import { services } from "@/data/services";
import { siteConfig, whatsappLink, mailtoLink } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface text-white">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          <div>
            <Logo className="[&_span:last-child]:text-white" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              {siteConfig.tagline} Sites, e-commerces e soluções digitais para empresas em todo o Brasil.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-sm font-semibold text-white">Navegação</h2>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link className="text-sm text-white/65 hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Serviços">
            <h2 className="text-sm font-semibold text-white">Serviços</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link className="text-sm text-white/65 hover:text-white" href={service.href}>
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-white">Comece uma conversa</h2>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
              data-conversion="whatsapp"
              data-location="footer"
            >
              <Icon name="whatsapp" size={19} />
              Falar no WhatsApp
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-white/65 hover:text-white"
              data-conversion="whatsapp"
              data-location="footer-phone"
            >
              <Icon name="phone" size={17} />
              {siteConfig.contact.phoneDisplay}
            </a>
            {mailtoLink && (
              <a href={mailtoLink} className="mt-3 flex items-center gap-2 break-all text-sm text-white/65 hover:text-white">
                <Icon name="mail" size={17} className="shrink-0" />
                {siteConfig.contact.email}
              </a>
            )}
            <p className="mt-3 text-sm text-white/55">{siteConfig.contact.city}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/15 py-6 text-xs text-white/55 sm:flex-row">
          <p>© {year} {siteConfig.legalName}. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href="/politica-de-privacidade" className="hover:text-white">Privacidade</Link>
            <Link href="/termos-de-uso" className="hover:text-white">Termos</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
