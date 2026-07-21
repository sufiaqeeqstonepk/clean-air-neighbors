import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { business, services, locations } from "@/lib/business";
import logo from "@/assets/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt={`${business.name} logo`} width={40} height={40} className="h-10 w-10" />
          <span className="hidden sm:inline text-sm font-bold leading-tight text-brand">
            Greensboro Mold<br/>Removal Company
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-brand">Home</Link>
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-brand">Services <ChevronDown className="h-3 w-3" /></button>
            <div className="invisible group-hover:visible absolute left-1/2 top-full -translate-x-1/2 pt-3">
              <div className="grid w-[560px] grid-cols-2 gap-1 rounded-lg border bg-popover p-3 shadow-lg">
                {services.map((s) => (
                  <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="rounded px-3 py-2 text-sm hover:bg-brand-light hover:text-brand">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/areas-we-serve" className="hover:text-brand">Areas We Serve</Link>

          <Link to="/about" className="hover:text-brand">About</Link>
          <Link to="/process" className="hover:text-brand">Process</Link>
          <Link to="/reviews" className="hover:text-brand">Reviews</Link>
          <Link to="/faq" className="hover:text-brand">FAQ</Link>
          <Link to="/blog" className="hover:text-brand">Blog</Link>
          <Link to="/contact" className="hover:text-brand">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${business.phoneRaw}`} className="hidden sm:inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:bg-brand-dark">
            <Phone className="h-4 w-4" /> {business.phoneDisplay}
          </a>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background max-h-[80vh] overflow-y-auto">
          <div className="container-x py-4 space-y-1 text-sm">
            <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <details className="group"><summary className="cursor-pointer py-2 font-medium">Services</summary>
              <div className="pl-3 py-1 space-y-1">
                {services.map(s => <MobileLink key={s.slug} to="/services/$slug" params={{ slug: s.slug }} onClick={() => setOpen(false)}>{s.title}</MobileLink>)}
              </div>
            </details>
            <MobileLink to="/areas-we-serve" onClick={() => setOpen(false)}>Areas We Serve</MobileLink>

            <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <MobileLink to="/process" onClick={() => setOpen(false)}>Process</MobileLink>
            <MobileLink to="/team" onClick={() => setOpen(false)}>Team</MobileLink>
            <MobileLink to="/certifications" onClick={() => setOpen(false)}>Certifications</MobileLink>
            <MobileLink to="/case-studies" onClick={() => setOpen(false)}>Case Studies</MobileLink>
            <MobileLink to="/reviews" onClick={() => setOpen(false)}>Reviews</MobileLink>
            <MobileLink to="/faq" onClick={() => setOpen(false)}>FAQ</MobileLink>
            <MobileLink to="/blog" onClick={() => setOpen(false)}>Blog</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
            <a href={`tel:${business.phoneRaw}`} className="mt-3 flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 font-semibold text-brand-foreground">
              <Phone className="h-4 w-4" /> Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileLink({ to, params, children, onClick }: any) {
  return <Link to={to} params={params} onClick={onClick} className="block rounded px-2 py-2 hover:bg-brand-light">{children}</Link>;
}
