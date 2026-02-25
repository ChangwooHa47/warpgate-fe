interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative text-white py-16 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #0e50a8, #1265c8, #1780e8)' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/4" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-sm md:text-base text-blue-100/80 font-light">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
