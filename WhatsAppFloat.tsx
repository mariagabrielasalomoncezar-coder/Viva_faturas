import { buildWhatsAppLink } from "@/lib/config";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Viva Connecta pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-signal-teal text-base-deep shadow-glow transition-transform hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 rounded-full bg-signal-teal/60 animate-ping" />
      <WhatsAppIcon className="relative h-6 w-6" />
    </a>
  );
}
