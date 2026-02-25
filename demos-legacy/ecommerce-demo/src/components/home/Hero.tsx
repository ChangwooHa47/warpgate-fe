import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] flex items-end">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 md:px-12 pb-24">
        <p className="text-[11px] tracking-[0.2em] text-muted uppercase mb-5">
          Curated for everyday life
        </p>
        <h1 className="text-[32px] md:text-[42px] font-extralight leading-[1.3] mb-5 max-w-lg">
          조용한 일상에
          <br />
          어울리는 것들
        </h1>
        <p className="text-muted text-[14px] leading-relaxed mb-10 max-w-[420px]">
          매일 쓰는 것일수록 잘 골라야 하니까.
          <br />
          오래 써도 질리지 않는 것들만 모았습니다.
        </p>
        <Link
          href="/products"
          className="inline-block text-[13px] tracking-wider border border-primary px-10 py-3.5 hover:bg-primary hover:text-base transition-all duration-500"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
