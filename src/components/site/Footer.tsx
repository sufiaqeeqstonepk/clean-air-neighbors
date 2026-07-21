import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";
import { business, services } from "@/lib/business";


export function Footer() {
  return (
    <footer className="mt-24 border-t bg-secondary">
      <div className="container-x py-12 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-base font-bold text-brand">{business.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground">Local mold inspection and remediation serving the Greensboro Triad since 2012.</p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-2 font-semibold text-brand"><Phone className="h-4 w-4" /> {business.phoneDisplay}</a>
            <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> {business.address.street}<br />{business.address.city}, {business.address.state} {business.address.zip}</p>
            <p className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5" /> {business.hours}</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Services</h4>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            {services.map(s => (
              <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-brand">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Locations</h4>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            {locations.map(l => (
              <li key={l.slug}><Link to="/locations/$slug" params={{ slug: l.slug }} className="hover:text-brand">{l.city}, {l.state}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-brand">About Us</Link></li>
            <li><Link to="/team" className="hover:text-brand">Meet Our Team</Link></li>
            <li><Link to="/certifications" className="hover:text-brand">Certifications</Link></li>
            <li><Link to="/process" className="hover:text-brand">Our Process</Link></li>
            <li><Link to="/case-studies" className="hover:text-brand">Case Studies</Link></li>
            <li><Link to="/reviews" className="hover:text-brand">Reviews</Link></li>
            <li><Link to="/faq" className="hover:text-brand">FAQs</Link></li>
            <li><Link to="/blog" className="hover:text-brand">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
          <h4 className="mt-4 text-sm font-semibold">Legal</h4>
          <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
            <li><Link to="/privacy-policy" className="hover:text-brand">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-brand">Terms of Service</Link></li>
            <li><Link to="/accessibility" className="hover:text-brand">Accessibility</Link></li>
            <li><Link to="/disclaimer" className="hover:text-brand">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container-x py-4 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Licensed and insured mold remediation contractor.</p>
        </div>
      </div>
    </footer>
  );
}
