import Link from "next/link";

const BASE_PATH = "/demo/ecommerce";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center bg-surface overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop')",
        }}
      />

      {/* Content */}
      <div className="relative text-center px-6 max-w-xl">
        <p className="text-[11px] tracking-[0.3em] text-muted uppercase mb-4">
          Minimal Living
        </p>
        <h1 className="text-3xl md:text-4xl font-light leading-snug mb-6">
          본질에 집중하는
          <br />
          일상의 물건들
        </h1>
        <p className="text-sm text-muted leading-loose mb-10 max-w-md mx-auto">
          불필요한 것을 덜어내고, 진정으로 필요한 것에 집중합니다.
          <br />
          단순함 속에서 발견하는 풍요로움.
        </p>
        <Link
          href={`${BASE_PATH}/products`}
          className="inline-block text-sm tracking-wider border border-primary px-10 py-3.5 hover:bg-primary hover:text-base transition-all duration-500"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
