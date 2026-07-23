import { Phone } from "lucide-react";
import { business } from "@/lib/business";

export function FloatingCallButton() {
  return (\n    <a\n      href={`tel:${business.phoneRaw}`}\n      className=\"fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand hover:bg-brand-dark text-brand-foreground shadow-lg transition-all duration-200 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2\"\n      aria-label=\"Call now\"\n      title={`Call ${business.phoneDisplay}`}\n    >\n      <Phone className=\"w-6 h-6\" />\n    </a>\n  );\n}
