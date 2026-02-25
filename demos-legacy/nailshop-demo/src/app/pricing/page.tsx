import Link from "next/link";

const pricingData = [
  {
    title: "GEL NAIL",
    items: [
      { name: "원컬러 젤 (핸드)", price: "45,000" },
      { name: "그라데이션 젤", price: "55,000" },
      { name: "프렌치 젤", price: "55,000" },
      { name: "글리터 젤", price: "50,000" },
      { name: "캣아이 젤", price: "55,000" },
      { name: "마그넷 젤", price: "60,000" },
    ],
  },
  {
    title: "NAIL ART",
    items: [
      { name: "핸드페인팅 (1ea)", price: "5,000~" },
      { name: "스톤 & 파츠 (1ea)", price: "3,000~" },
      { name: "스탬핑 아트 (전체)", price: "15,000" },
      { name: "3D 아트 (1ea)", price: "8,000~" },
      { name: "시즌 아트 (전체)", price: "20,000~" },
      { name: "맞춤 디자인", price: "상담" },
    ],
  },
  {
    title: "NAIL CARE",
    items: [
      { name: "기본 손 케어", price: "20,000" },
      { name: "스파 손 케어", price: "35,000" },
      { name: "젤 오프", price: "10,000" },
      { name: "젤 오프 + 케어", price: "25,000" },
      { name: "손톱 보강", price: "15,000" },
    ],
  },
  {
    title: "PEDICURE",
    items: [
      { name: "젤 페디 (원컬러)", price: "50,000" },
      { name: "젤 페디 (아트)", price: "60,000~" },
      { name: "스파 페디큐어", price: "45,000" },
      { name: "기본 풋 케어", price: "30,000" },
      { name: "각질 스페셜", price: "40,000" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.4em] text-primary mb-4">PRICE LIST</p>
        <h1 className="text-3xl md:text-4xl font-extralight tracking-[0.08em]">가격 안내</h1>
        <p className="text-xs text-muted mt-4 tracking-wider">VAT INCLUDED</p>
      </div>

      {/* Price Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pricingData.map((cat) => (
          <div key={cat.title} className="bg-card-bg border border-border rounded p-10">
            <p className="text-xs tracking-[0.3em] text-primary mb-8">{cat.title}</p>
            <ul className="space-y-5">
              {cat.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between">
                  <span className="text-sm font-light">{item.name}</span>
                  <span className="flex-1 mx-4 border-b border-dotted border-border" />
                  <span className="text-sm font-light text-primary tabular-nums">
                    {item.price === "상담" ? item.price : `₩${item.price}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="mt-24 border border-border bg-card-bg rounded p-10 md:p-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.3em] text-primary mb-4">BENEFITS</p>
            <ul className="space-y-3 text-sm text-foreground/60 leading-relaxed">
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 bg-primary rounded-full" />
                첫 방문 전 메뉴 10% OFF
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 bg-primary rounded-full" />
                생일 당일 15% OFF
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 bg-primary rounded-full" />
                추천 시 양쪽 ₩5,000 OFF
              </li>
            </ul>
          </div>
          <Link
            href="/booking"
            className="px-10 py-3.5 rounded border border-primary text-primary text-xs tracking-[0.25em] hover:bg-primary hover:text-background transition-all duration-500"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
