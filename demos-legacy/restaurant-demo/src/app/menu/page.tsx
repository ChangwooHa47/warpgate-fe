import type { Metadata } from "next";
import Section from "@/components/Section";
import {
  menuPhilosophy,
  courseSections,
  teaSection,
  liquorSection,
} from "@/data/menu";

export const metadata: Metadata = {
  title: "메뉴",
  description:
    "소담의 제철 한정식 코스와 전통차. 계절의 흐름을 따르는 구성입니다.",
};

export default function MenuPage() {
  return (
    <>
      {/* ── Page header ── */}
      <Section className="pt-28 md:pt-36 pb-12 md:pb-16 text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-stone-400 mb-4">
          {menuPhilosophy.subtitle}
        </p>
        <h1 className="text-4xl md:text-5xl font-light text-charcoal-700 mb-6">
          {menuPhilosophy.title}
        </h1>
        <div className="w-8 h-px bg-stone-300 mx-auto mb-6" />
        <p className="max-w-md mx-auto text-stone-500 text-sm leading-[1.9] whitespace-pre-line">
          {menuPhilosophy.body}
        </p>
      </Section>

      {/* ── Course sections ── */}
      {courseSections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          className="pb-16 md:pb-20"
        >
          <div className="max-w-xl mx-auto">
            {/* Section header: English → Korean → Time */}
            <div className="text-center mb-10 md:mb-12">
              <p className="text-sm tracking-[0.25em] uppercase text-stone-400 mb-2">
                {section.english}
              </p>
              <h2 className="text-2xl md:text-3xl font-light text-charcoal-700 mb-3">
                {section.title}
              </h2>
              <p className="text-base md:text-lg text-charcoal-500">
                {section.time}
              </p>
            </div>

            {/* Courses */}
            <div className="space-y-12 md:space-y-14">
              {section.courses.map((course) => (
                <div key={course.id}>
                  {/* Course title + price */}
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-lg md:text-xl font-medium text-charcoal-700">
                      {course.title}
                    </h3>
                    <p className="text-lg md:text-xl font-medium text-charcoal-600 whitespace-nowrap ml-6">
                      ₩{course.price}
                    </p>
                  </div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-stone-400 mb-3">
                    {course.english}
                  </p>

                  {/* Short description - prominent */}
                  <p className="text-sm md:text-base text-charcoal-500 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Dishes */}
                  <ul className="space-y-2.5">
                    {course.dishes.map((dish) => (
                      <li
                        key={dish.name}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <span className="text-sm text-charcoal-600">
                          {dish.name}
                        </span>
                        {dish.note && (
                          <span className="text-[11px] text-stone-400 text-right shrink-0">
                            {dish.note}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* ── Tea & Liquor ── */}
      <Section className="pb-16 md:pb-20">
        <div className="max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Tea */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-light text-charcoal-700 mb-1">
                  {teaSection.title}
                </h2>
                <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 mb-3">
                  {teaSection.english}
                </p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {teaSection.description}
                </p>
              </div>

              <ul className="space-y-3">
                {teaSection.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-medium text-charcoal-600">
                        {item.name}
                      </span>
                      <span className="text-[11px] tracking-wider uppercase text-stone-400">
                        {item.english}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 mt-0.5">
                      {item.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Liquor */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-light text-charcoal-700 mb-1">
                  {liquorSection.title}
                </h2>
                <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 mb-3">
                  {liquorSection.english}
                </p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {liquorSection.description}
                </p>
              </div>

              <ul className="space-y-3">
                {liquorSection.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-medium text-charcoal-600">
                        {item.name}
                      </span>
                      <span className="text-[11px] tracking-wider uppercase text-stone-400">
                        {item.english}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 mt-0.5">
                      {item.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 안내 ── */}
      <Section className="py-14 md:py-18">
        <div className="max-w-xl mx-auto">
          <div className="border border-stone-200 bg-ivory-100 px-6 py-6 md:px-8 md:py-7">
            <p className="text-sm font-medium text-charcoal-600 mb-4">
              안내
            </p>
            <ul className="space-y-2.5 text-sm text-stone-500 leading-relaxed">
              <li className="flex gap-2.5">
                <span className="text-stone-300 shrink-0" aria-hidden="true">·</span>
                <span>계절과 재료의 특성에 따라 일부 구성은 변경될 수 있습니다.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-stone-300 shrink-0" aria-hidden="true">·</span>
                <span>식이 제한이 있으신 경우, 예약 시 함께 알려주시기 바랍니다.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-stone-300 shrink-0" aria-hidden="true">·</span>
                <span>소담의 식사는 한정식 코스로만 준비됩니다.</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-stone-300 shrink-0" aria-hidden="true">·</span>
                <span>전통주는 식사 중, 차는 식사의 끝에 이어집니다.</span>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-stone-200">
              <p className="text-xs text-stone-400 tracking-wider">
                채식 · 비건 · 글루텐프리 · 견과류 포함 · 매운맛
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
