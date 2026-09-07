import { SITE } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <div className="whatsapp-dock">
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Écrire à ${SITE.fullName} sur WhatsApp au ${SITE.whatsappDisplay}`}
        className="orbit-border-button orbit-whatsapp group inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
      >
        <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden="true">
          <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.16 15.06l-.3-.18-3.08.89.9-3-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-3.2 4.05c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.7 4.19 3.68 2.07.82 2.5.66 2.95.62.45-.04 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.33-.74-1.82-.19-.47-.39-.4-.54-.41h-.46Z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
