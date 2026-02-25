import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="tracking-[0.3em] text-sm font-light text-primary mb-4">
              MAISON NAIL
            </p>
            <p className="text-sm text-muted leading-loose max-w-xs">
              서울 강남구 압구정로 123, 2F
              <br />
              Luxury Nail Art & Care Studio
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-muted mb-4">HOURS</h4>
            <ul className="text-sm text-foreground/70 space-y-2 leading-relaxed">
              <li>MON — FRI &nbsp; 10:00 — 21:00</li>
              <li>SAT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:00 — 19:00</li>
              <li>SUN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CLOSED</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-muted mb-4">CONTACT</h4>
            <ul className="text-sm text-foreground/70 space-y-2 leading-relaxed">
              <li>T. 02-1234-5678</li>
              <li>K. @maison-nail</li>
              <li>I. @maison.nail</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted tracking-wider">
            &copy; 2026 MAISON NAIL. ALL RIGHTS RESERVED.
          </p>
          <Link
            href="/demo/nailshop/booking"
            className="text-xs tracking-[0.2em] text-primary hover:text-foreground transition-colors"
          >
            BOOK NOW &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
