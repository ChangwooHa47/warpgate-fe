export default function AboutPage() {
  return (
    <div className="max-w-[700px] mx-auto px-8 md:px-12 pt-20 pb-32">
      <p className="text-[11px] tracking-[0.2em] text-muted uppercase mb-4">
        About ORDINAR
      </p>
      <h1 className="text-3xl font-light leading-snug mb-16">
        일상을 위한
        <br />
        조용한 선택
      </h1>

      <div className="space-y-8 text-sm text-muted leading-loose">
        <p>
          ORDINAR는 매일 쓰는 것들에 대해 다시 생각해보자는 마음에서
          시작했습니다. 많이 만들거나, 빠르게 바꾸는 데는 관심이 없습니다.
        </p>

        <p>
          오래 쓸 수 있는지, 손에 들었을 때 어색하지 않은지, 공간에 놓았을
          때 튀지 않는지. 그런 것들을 봅니다.
        </p>

        <p>고르는 기준은 간단합니다.</p>

        <div className="py-8 border-y border-line space-y-4">
          <div>
            <p className="text-primary text-base font-light mb-1">
              Designed for daily use.
            </p>
            <p>매일 써도 괜찮은 것.</p>
          </div>
          <div>
            <p className="text-primary text-base font-light mb-1">
              Selected with intention.
            </p>
            <p>이유 있이 고른 것.</p>
          </div>
          <div>
            <p className="text-primary text-base font-light mb-1">
              Made to stay.
            </p>
            <p>오래 곁에 둘 수 있는 것.</p>
          </div>
          <div>
            <p className="text-primary text-base font-light mb-1">
              Balanced in form and function.
            </p>
            <p>모양과 쓰임이 둘 다 괜찮은 것.</p>
          </div>
        </div>

        <p>
          제품은 시즌마다 소량만 소개합니다. 직접 써보고 괜찮은 것들만
          올립니다. 할인 대신, 제품 자체로 이야기하고 싶습니다.
        </p>

        <p>조용하지만 분명한 것들.</p>
      </div>
    </div>
  );
}
