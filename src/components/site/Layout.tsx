import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CallToAction } from "./CallToAction";
import { localBusinessSchema } from "./SchemaMarkup";

export function Layout({ children, hideCTA }: { children: ReactNode; hideCTA?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {!hideCTA && <CallToAction />}
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
    </div>
  );
}
