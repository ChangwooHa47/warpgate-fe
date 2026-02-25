import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,169,110,0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="relative text-center px-6">
          <p className="text-xs tracking-[0.5em] text-muted mb-8 uppercase">
            Luxury Nail Art & Care
          </p>
          <h1 className="text-5xl md:text-8xl font-extralight tracking-[0.15em] mb-6 text-foreground">
            MAISON
          </h1>
          <div className="w-12 h-px bg-primary mx-auto mb-6" />
          <h2 className="text-lg md:text-xl font-extralight tracking-[0.4em] text-primary mb-12">
            NAIL STUDIO
          </h2>
          <p className="text-sm text-muted font-light leading-loose max-w-md mx-auto mb-16 tracking-wide">
            손끝에서 시작되는 럭셔리.
            <br />
            당신만을 위한 맞춤 네일 아트를 경험하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo/nailshop/booking"
              className="px-10 py-3.5 rounded border border-primary text-primary text-xs tracking-[0.25em] hover:bg-primary hover:text-background transition-all duration-500"
            >
              RESERVATION
            </Link>
            <Link
              href="/demo/nailshop/portfolio"
              className="px-10 py-3.5 rounded border border-border text-muted text-xs tracking-[0.25em] hover:border-foreground hover:text-foreground transition-all duration-500"
            >
              PORTFOLIO
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-6 py-4">
        <div className="w-20 h-px bg-border" />
        <span className="text-xs text-muted tracking-[0.3em]">EST. 2024</span>
        <div className="w-20 h-px bg-border" />
      </div>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] text-primary mb-4">OUR SERVICES</p>
          <h2 className="text-2xl md:text-3xl font-extralight tracking-[0.1em]">
            시술 안내
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "GEL NAIL", ko: "젤 네일", desc: "오래 지속되는 광택과 선명한 컬러. 원컬러부터 프렌치, 그라데이션까지.", href: "/demo/nailshop/menu" },
            { title: "NAIL ART", ko: "네일 아트", desc: "핸드페인팅, 3D 아트, 스톤 데코까지. 아티스트의 손끝에서 완성되는 작품.", href: "/demo/nailshop/menu" },
            { title: "NAIL CARE", ko: "네일 케어", desc: "건강한 손톱을 위한 프리미엄 케어. 스파 트리트먼트와 영양 관리.", href: "/demo/nailshop/menu" },
          ].map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group bg-card-bg border border-border p-10 md:p-12 hover:bg-card-hover hover:border-primary/30 transition-all duration-500"
            >
              <p className="text-xs tracking-[0.3em] text-primary mb-4">{s.title}</p>
              <h3 className="text-xl font-light mb-5 group-hover:text-primary transition-colors duration-500">
                {s.ko}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
              <div className="mt-10 text-xs tracking-[0.2em] text-muted group-hover:text-primary transition-colors duration-500">
                VIEW MORE &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="border-y border-border">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <blockquote className="text-lg md:text-xl font-extralight leading-loose tracking-wide text-foreground/80">
            &ldquo;네일은 단순한 시술이 아닌,<br />
            당신의 개성을 표현하는 예술입니다&rdquo;
          </blockquote>
          <p className="mt-8 text-xs tracking-[0.3em] text-muted">
            — MAISON NAIL PHILOSOPHY
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-10 md:p-16 border border-border bg-card-bg rounded">
          <div>
            <p className="text-xs tracking-[0.3em] text-primary mb-4">FIRST VISIT</p>
            <h3 className="text-2xl font-light mb-4">첫 방문 고객 10% 할인</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              메종 네일을 처음 방문하시는 분께 전 시술 10% 할인을 드립니다.
            </p>
          </div>
          <Link
            href="/demo/nailshop/booking"
            className="shrink-0 px-10 py-3.5 rounded border border-primary text-primary text-xs tracking-[0.25em] hover:bg-primary hover:text-background transition-all duration-500"
          >
            BOOK NOW
          </Link>
        </div>
      </section>
    </>
  );
}
