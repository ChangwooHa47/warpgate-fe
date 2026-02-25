interface MenuItem {
  name: string;
  eng?: string;
  price: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "COFFEE",
    items: [
      { name: "에스프레소", eng: "Espresso", price: "4,000" },
      { name: "아메리카노", eng: "Americano", price: "4,500" },
      { name: "카페라떼", eng: "Café Latte", price: "5,000" },
      { name: "바닐라 라떼", eng: "Vanilla Latte", price: "5,500" },
      { name: "카푸치노", eng: "Cappuccino", price: "5,000" },
      { name: "콜드브루", eng: "Cold Brew", price: "5,500" },
      { name: "아인슈페너", eng: "Einspänner", price: "6,000" },
    ],
  },
  {
    title: "BEVERAGE",
    items: [
      { name: "말차 라떼", eng: "Matcha Latte", price: "5,500" },
      { name: "얼그레이 밀크티", eng: "Earl Grey Milk Tea", price: "5,500" },
      { name: "유자차", eng: "Yuzu Tea", price: "5,000" },
      { name: "핫초코", eng: "Hot Chocolate", price: "5,500" },
      { name: "레모네이드", eng: "Lemonade", price: "5,000" },
    ],
  },
  {
    title: "DESSERT",
    items: [
      { name: "바스크 치즈케이크", price: "7,000" },
      { name: "당근 케이크", price: "6,500" },
      { name: "크루아상", price: "4,000" },
      { name: "마들렌", price: "3,500" },
      { name: "티라미수", price: "7,000" },
    ],
  },
];

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-baseline py-3 group">
      <div className="flex-shrink-0">
        <span className="text-espresso text-[15px]">{item.name}</span>
        {item.eng && (
          <span className="text-warm-gray text-xs ml-2">{item.eng}</span>
        )}
      </div>
      <span className="dot-leader" />
      <span className="flex-shrink-0 text-walnut text-sm">{item.price}</span>
    </div>
  );
}

export default function Menu() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-milk/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="divider mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Menu
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {menuData.map((category) => (
            <div key={category.title}>
              <h3 className="text-xs tracking-[0.25em] text-caramel mb-6 font-medium">
                {category.title}
              </h3>
              <div className="divide-y divide-latte/30">
                {category.items.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-warm-gray text-xs mt-16 tracking-wide">
          모든 음료는 HOT / ICE 선택 가능합니다
        </p>
      </div>
    </section>
  );
}
