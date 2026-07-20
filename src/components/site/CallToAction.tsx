import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { business } from "@/lib/business";

export function CallToAction() {
  return (
    <section className="mt-20 bg-brand text-brand-foreground">
      <div className="container-x py-12 grid gap-6 md:grid-cols-[1fr_auto] items-center">
        <div>
          <h2 className="text-brand-foreground">Think you have a mold problem?</h2>
          <p className="mt-2 text-white/85 max-w-2xl">Talk to a local specialist today. We answer the phone, give straight answers, and can be at your door fast.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${business.phoneRaw}`} className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-brand hover:bg-white/90">
            <Phone className="h-4 w-4" /> Call {business.phoneDisplay}
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10">
            Request a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
