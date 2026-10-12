import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../data/content";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with VishvaTech on WhatsApp"
      title="Chat with VishvaTech on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex min-h-[56px] items-center gap-2 rounded-full bg-[#25D366] py-3 pl-4 pr-4 text-white shadow-[0_16px_36px_-12px_rgba(37,211,102,0.7)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:pr-5"
    >
      <MessageCircle size={22} aria-hidden="true" />
      <span className="hidden text-[14.5px] font-bold sm:inline">Chat</span>
    </a>
  );
}
