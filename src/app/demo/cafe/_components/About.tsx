"use client";

import Image from "next/image";
import { type Easing, motion } from "framer-motion";

const sections = [
  {
    label: "Brand",
    title: "작은 공간,\n긴 여유.",
    paragraphs: [
      "우리는 크기를 키우기보다\n밀도를 고르는 쪽을 택했습니다.",
      "빠른 도시의 한가운데서\n속도를 낮추는 선택.",
      "Mellow는\n조용함을 설계한 공간입니다.",
    ],
    image: "/images/landing_brand.jpg",
    imageAlt: "Mellow 브랜드",
  },
  {
    label: "Space",
    title: "여백이 중심이\n되는 자리.",
    paragraphs: [
      "빛은 천천히 들어오고,\n소리는 멀리 머뭅니다.",
      "무언가를 채우기보다\n덜어내는 방식으로 완성했습니다.",
      "이곳에서는\n말보다 시간이 먼저 흐릅니다.",
    ],
    image: "/images/landing_space.jpg",
    imageAlt: "카페 공간",
  },
  {
    label: "Coffee",
    title: "매일 같은 온도.",
    paragraphs: [
      "과한 향보다\n균형을 택합니다.",
      "한 잔이 지나간 뒤에도\n마음이 흔들리지 않도록.",
      "우리는 그 정도면 충분하다고 믿습니다.",
    ],
    image: "/images/landing_coffee.jpg",
    imageAlt: "커피 한 잔",
  },
];

function SectionBlock({
  section,
  index,
}: {
  section: (typeof sections)[number];
  index: number;
}) {
  const isReversed = index % 2 !== 0;

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <motion.div
            className={`${isReversed ? "md:order-2" : "md:order-1"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" as Easing }}
          >
            <span className="text-[10px] tracking-[0.35em] text-caramel uppercase">
              {section.label}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso mt-6 mb-10 leading-snug whitespace-pre-line">
              {section.title}
            </h2>
            <div className="space-y-6 text-walnut leading-[1.9] text-[15px]">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="whitespace-pre-line">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className={`${isReversed ? "md:order-1" : "md:order-2"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut" as Easing,
            }}
          >
            <div className="relative aspect-[4/5] bg-milk rounded-sm overflow-hidden">
              {section.image ? (
                <>
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-cover sepia-[.3] saturate-[.8] brightness-[.92] contrast-[.95]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-latte text-[10px] tracking-[0.3em] uppercase">
                    Photo
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      {sections.map((section, i) => (
        <SectionBlock key={section.label} section={section} index={i} />
      ))}
    </>
  );
}
