import type { Metadata } from "next";
import Section from "@/components/Section";
import ReservationForm from "./ReservationForm";

export const metadata: Metadata = {
  title: "예약",
  description:
    "소담에서의 식사를 예약하세요. 점심과 저녁, 제철 한정식 코스를 준비합니다.",
};

export default function ReservationPage() {
  return (
    <>
      <Section className="pt-16 md:pt-24 pb-12 md:pb-16 text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-stone-400 mb-4">
          예약 안내
        </p>
        <h1 className="text-4xl md:text-5xl font-light text-charcoal-700 mb-6">
          예약
        </h1>
        <div className="w-8 h-px bg-stone-300 mx-auto mb-6" />
        <p className="max-w-lg mx-auto text-stone-500 text-sm md:text-base leading-relaxed">
          아래 단계를 따라 예약을 진행해 주세요.
        </p>
      </Section>

      <Section className="pb-20 md:pb-28">
        <div className="max-w-2xl mx-auto">
          <ReservationForm />
        </div>
      </Section>
    </>
  );
}
