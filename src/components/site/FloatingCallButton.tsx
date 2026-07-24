import { Phone } from "lucide-react";
import { business } from "@/lib/business";

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${business.phoneRaw}`}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand hover:bg-brand-dark text-brand-foreground shadow-lg transition-all duration-200 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
      aria-label="Call now"
      title={`Call ${business.phoneDisplay}`}
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
