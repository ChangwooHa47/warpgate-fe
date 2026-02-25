import Card from "./Card";
import Button from "./Button";
import { BASE_PATH } from "../_lib/constants";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isBest?: boolean;
  delay?: number;
}

export default function PricingCard({
  title,
  price,
  period,
  features,
  isBest = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <Card
      delay={delay}
      className={`relative p-6 md:p-8 ${isBest ? "border-mint-500" : ""}`}
    >
      {isBest && (
        <div className="absolute top-0 right-0 bg-mint-500 text-night-950 text-xs font-bold px-3 py-1 rounded-bl-lg">
          BEST
        </div>
      )}

      <h3 className="text-lg font-semibold text-steel-100 mb-2">{title}</h3>

      <div className="mb-6">
        <span className="text-3xl md:text-4xl font-bold text-mint-400">
          {price}
        </span>
        <span className="text-steel-500 ml-1">/ {period}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-steel-300">
            <svg
              className="w-5 h-5 text-mint-500 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href={`${BASE_PATH}/register`}
        variant={isBest ? "primary" : "secondary"}
        className="w-full"
      >
        등록하기
      </Button>
    </Card>
  );
}
