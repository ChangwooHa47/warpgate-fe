import HeroBackground from "./_components/HeroBackground";
import Section from "./_components/Section";
import Button from "./_components/Button";
import Card from "./_components/Card";

const RESTAURANT_BASE = "/demo/restaurant";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroBackground className="flex items-center justify-center min-h-[85vh] md:min-h-[90vh]">
        <div className="text-center px-5 py-24 md:py-32">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-stone-300 mb-4 md:mb-6">
            한정식 &middot; 코스 요리
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-ivory-100 leading-tight mb-6 md:mb-8">
            계절이 차린 한 상
          </h1>
          <p className="max-w-md mx-auto text-stone-300 text-sm md:text-base leading-relaxed mb-10 md:mb-12">
            소담은 자연이 내어주는 제철 식재료를
            <br className="hidden md:block" />
            정성스러운 손길로 한 상에 담아냅니다.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              href={`${RESTAURANT_BASE}/menu`}
              variant="primary"
              className="!bg-ivory-100 !text-charcoal-700 hover:!bg-ivory-200 active:!bg-ivory-300 w-full md:w-auto"
            >
              메뉴 보기
            </Button>
            <Button
              href={`${RESTAURANT_BASE}/reservation`}
              variant="secondary"
              className="!border-ivory-200 !text-ivory-100 hover:!bg-ivory-100 hover:!text-charcoal-700 w-full md:w-auto"
            >
              예약하기
            </Button>
          </div>
        </div>
      </HeroBackground>

      {/* ── 소담의 이야기 ── */}
      <Section className="py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-stone-400 mb-4">
            소담의 이야기
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-charcoal-700 leading-snug mb-8">
            전통에 뿌리를 두고
            <br />
            계절을 따릅니다.
          </h2>
          <div className="w-8 h-px bg-stone-300 mx-auto mb-8" />
          <div className="text-stone-600 leading-[1.9] text-sm md:text-base space-y-5">
            <p>
              한정식은 단순한 식사가 아니라,
              <br />
              균형을 다루는 미학입니다.
            </p>
            <p>
              소담의 모든 코스는
              <br />
              신뢰할 수 있는 농가와 해안에서 들여온
              <br />
              제철 식재료로 시작됩니다.
            </p>
            <p>
              궁중 요리의 전통을 잇되,
              <br />
              기교보다 재료 본연의 맛을 존중합니다.
            </p>
            <p>
              발효하고, 말리고, 절이고, 굽는
              <br />
              모든 과정에 충분한 시간을 들입니다.
            </p>
            <p className="text-charcoal-500 font-medium">
              좋은 맛은, 서두르지 않기 때문입니다.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 소담의 경험 ── */}
      <Section className="py-24 md:py-32 bg-ivory-200">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm tracking-[0.25em] uppercase text-stone-400 mb-4">
            소담의 경험
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-charcoal-700">
            한 끼의 풍경
          </h2>
          <div className="w-8 h-px bg-stone-300 mx-auto mt-6" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <Card
            icon={<SeasonIcon />}
            title="계절 코스"
            description={`재료는 절기를 따릅니다.\n불과 손이 시간을 더하고\n한 상이 무르익습니다.`}
            image="/images/restaurant/food-image.jpg"
          />
          <Card
            icon={<RoomIcon />}
            title="별실"
            description={`문을 닫으면 고요뿐입니다.\n온돌 위 낮은 상, 느린 시간.\n대화만 남는 자리.`}
            image="/images/restaurant/restraunt-image.jpg"
          />
          <Card
            icon={<TeaIcon />}
            title="차 페어링"
            description={`식사의 여운을 전통차 한 잔으로.\n계절의 향이 입안을 고요히 감싸며\n한 끼의 마무리가 깊어집니다.`}
            image="/images/restaurant/tea-image.jpg"
          />
        </div>
      </Section>

      {/* ── 오시는 길 ── */}
      <Section className="py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="text-sm tracking-[0.25em] uppercase text-stone-400 mb-4">
              오시는 길
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-charcoal-700 mb-8">
              위치 &amp; 영업시간
            </h2>
            <div className="space-y-6 text-sm text-stone-600">
              <div>
                <h3 className="text-xs tracking-widest uppercase text-stone-400 mb-2">
                  주소
                </h3>
                <address className="not-italic leading-relaxed">
                  서울특별시 강남구 테헤란로 79길 V582 6
                  <br />
                  06159
                </address>
              </div>
              <div>
                <h3 className="text-xs tracking-widest uppercase text-stone-400 mb-2">
                  영업시간
                </h3>
                <dl className="space-y-1">
                  <div className="flex justify-between max-w-xs">
                    <dt>점심</dt>
                    <dd>오전 11:30 &ndash; 오후 2:30</dd>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <dt>저녁</dt>
                    <dd>오후 5:30 &ndash; 오후 9:30</dd>
                  </div>
                  <div className="flex justify-between max-w-xs text-stone-400">
                    <dt>휴무</dt>
                    <dd>매주 월요일</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-xs tracking-widest uppercase text-stone-400 mb-2">
                  연락처
                </h3>
                <p>
                  <a
                    href="tel:+8220000000"
                    className="hover:text-charcoal-700 transition-colors"
                  >
                    02-000-0000
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:hello@nws.xyz"
                    className="hover:text-charcoal-700 transition-colors"
                  >
                    hello@nws.xyz
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 지도 placeholder */}
          <div className="w-full aspect-[4/3] bg-stone-100 border border-stone-200 flex items-center justify-center">
            <div className="text-center text-stone-400">
              <MapPinIcon />
              <p className="mt-3 text-xs tracking-widest uppercase">
                지도 영역
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ── Inline SVG icons ── */

function SeasonIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20" />
      <path d="M12 2c3 2.5 5 6 5 10" />
    </svg>
  );
}

function RoomIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function TeaIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="mx-auto" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
