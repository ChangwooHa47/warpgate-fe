interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  features?: string[];
  popular?: boolean;
  className?: string;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
  className = "",
}: PricingCardProps) {
  return (
    <div
      className={`relative border p-8 md:p-10 ${
        popular
          ? "border-mint-500 bg-night-800"
          : "border-night-600 bg-night-800/50"
      } ${className}`}
    >
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-mint-500 text-night-950 text-xs font-bold tracking-wide px-4 py-1.5">
            BEST
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold text-steel-100 mb-2">{title}</h3>

      <div className="mb-4">
        <span className="text-3xl md:text-4xl font-bold text-steel-100">
          {price}
        </span>
      </div>

      {description && (
        <p className="text-steel-500 text-sm mb-8 leading-relaxed">{description}</p>
      )}

      {features && features.length > 0 && (
        <ul className="space-y-3 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-steel-300">
              <svg
                className="w-4 h-4 mt-0.5 text-mint-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <a
        href="/register"
        className={`block text-center text-sm font-medium tracking-wide py-3.5 transition-colors ${
          popular
            ? "bg-mint-500 text-night-950 hover:bg-mint-400"
            : "border border-steel-400 text-steel-200 hover:bg-steel-100 hover:text-night-950"
        }`}
      >
        등록하기
      </a>
    </div>
  );
}
