export const WHATSAPP_NUMBER = "+91 86238 13105";
export const WHATSAPP_INTL = "918623813105";
export const WHATSAPP_MESSAGE = "Hi VishvaTech, I’d like to discuss a project/service.";

/** Build a WhatsApp link with any plain-text message (encoded exactly once). */
export function whatsappLink(message: string = WHATSAPP_MESSAGE): string {
  return "https://wa.me/" + WHATSAPP_INTL + "?text=" + encodeURIComponent(message);
}

export const WHATSAPP_LINK = whatsappLink();
export const INSTAGRAM_HANDLE = "@vishva_the_creator";
export const INSTAGRAM_URL = "https://www.instagram.com/vishva_the_creator/";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
