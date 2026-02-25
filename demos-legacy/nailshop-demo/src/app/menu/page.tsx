const menuCategories = [
  {
    id: "gel",
    title: "GEL NAIL",
    ko: "젤 네일",
    items: [
      { name: "원컬러 젤", desc: "깔끔한 단색 젤. 자연스러운 광택과 오래가는 지속력.", duration: "60min" },
      { name: "그라데이션 젤", desc: "두 가지 이상의 색상이 자연스럽게 블렌딩되는 기법.", duration: "70min" },
      { name: "프렌치 젤", desc: "클래식한 프렌치 스타일. 화이트 팁 또는 컬러 프렌치.", duration: "70min" },
      { name: "글리터 젤", desc: "섬세한 글리터 파티클로 완성하는 스파클링 네일.", duration: "60min" },
      { name: "캣아이 젤", desc: "마그넷으로 연출하는 신비로운 빛의 흐름.", duration: "65min" },
      { name: "마그넷 젤", desc: "갤럭시, 오로라 등 다양한 마그넷 이펙트.", duration: "65min" },
    ],
  },
  {
    id: "art",
    title: "NAIL ART",
    ko: "네일 아트",
    items: [
      { name: "핸드페인팅", desc: "아티스트가 직접 그리는 맞춤 아트. 꽃, 추상, 캐릭터.", duration: "90min" },
      { name: "스톤 & 파츠", desc: "스와로브스키 크리스탈, 진주, 메탈 파츠 데코레이션.", duration: "80min" },
      { name: "스탬핑 아트", desc: "정교한 패턴 스탬프 기법. 균일하고 디테일한 표현.", duration: "70min" },
      { name: "3D 아트", desc: "입체적인 조형 아트. 꽃, 리본 등 볼륨감 있는 디자인.", duration: "100min" },
    ],
  },
  {
    id: "care",
    title: "NAIL CARE",
    ko: "네일 케어",
    items: [
      { name: "기본 케어", desc: "큐티클 정리, 셰이핑, 버핑, 영양 오일 도포.", duration: "30min" },
      { name: "스파 케어", desc: "기본 케어 + 각질 제거, 핸드 마사지, 보습 팩.", duration: "50min" },
      { name: "젤 오프", desc: "기존 젤을 안전하게 제거 후 손톱 표면 정리.", duration: "30min" },
    ],
  },
  {
    id: "pedi",
    title: "PEDICURE",
    ko: "페디큐어",
    items: [
      { name: "젤 페디큐어", desc: "오래 지속되는 젤 컬러 페디큐어.", duration: "60min" },
      { name: "스파 페디큐어", desc: "각질 제거, 풋 마사지, 보습 팩 포함 프리미엄 풋 케어.", duration: "70min" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.4em] text-primary mb-4">SERVICE MENU</p>
        <h1 className="text-3xl md:text-4xl font-extralight tracking-[0.08em]">시술 메뉴</h1>
      </div>

      {/* Categories */}
      <div className="space-y-24">
        {menuCategories.map((cat) => (
          <section key={cat.id}>
            <div className="flex items-center gap-6 mb-10">
              <p className="text-xs tracking-[0.3em] text-primary">{cat.title}</p>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-card-bg border border-border p-8 hover:bg-card-hover hover:border-primary/30 transition-all duration-500 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-base font-light tracking-wide group-hover:text-primary transition-colors duration-500">
                      {item.name}
                    </h3>
                    <span className="text-xs tracking-wider text-primary/70 shrink-0 ml-4">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
