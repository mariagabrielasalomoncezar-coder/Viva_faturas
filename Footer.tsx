import { ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV_LINKS, WHATSAPP_NUMBER_DISPLAY, buildWhatsAppLink } from "@/lib/config";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="relative border-t border-base-line bg-base-deep">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <span className="font-display text-lg font-semibold text-ink-primary">
              Viva Connecta
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              Conectando empresas ao que realmente importa.
            </p>
          </div>

          <div>
            <h4 className="section-eyebrow text-[11px] font-medium uppercase text-ink-faint">
              Endereço
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {ADDRESS.street}
              <br />
              {ADDRESS.city} – {ADDRESS.state}
              <br />
              CEP {ADDRESS.zip}
            </p>
          </div>

          <div>
            <h4 className="section-eyebrow text-[11px] font-medium uppercase text-ink-faint">
              Contato
            </h4>
            <div className="mt-3 flex flex-col gap-2.5 text-sm text-ink-muted">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-ink-primary"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {WHATSAPP_NUMBER_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-ink-primary"
              >
                <InstagramIcon className="h-4 w-4" />
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>

          <div>
            <h4 className="section-eyebrow text-[11px] font-medium uppercase text-ink-faint">
              Links
            </h4>
            <nav className="mt-3 flex flex-col gap-2.5 text-sm text-ink-muted">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="transition-colors hover:text-ink-primary">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-14 border-t border-base-line pt-7 text-xs text-ink-faint">
          © 2026 Viva Connecta. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
