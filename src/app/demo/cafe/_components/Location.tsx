export default function Location() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="divider mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Visit
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xs tracking-[0.25em] text-caramel mb-4 font-medium">
                ADDRESS
              </h3>
              <p className="text-walnut leading-relaxed text-[15px]">
                서울특별시 강남구 테헤란로 79길 V586 6
              </p>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.25em] text-caramel mb-4 font-medium">
                HOURS
              </h3>
              <div className="space-y-2 text-[15px]">
                <div className="flex justify-between max-w-xs">
                  <span className="text-walnut">화 — 금</span>
                  <span className="text-espresso">10:00 — 22:00</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className="text-walnut">토 — 일</span>
                  <span className="text-espresso">11:00 — 22:00</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className="text-walnut">월요일</span>
                  <span className="text-warm-gray">정기 휴무</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.25em] text-caramel mb-4 font-medium">
                CONTACT
              </h3>
              <p className="text-walnut text-[15px]">02-332-0000</p>
              <p className="text-walnut text-[15px] mt-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-caramel transition-colors"
                >
                  @mellow_yeonnam
                </a>
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="aspect-square md:aspect-auto bg-milk rounded-sm overflow-hidden min-h-[360px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0!2d127.0276!3d37.4979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a8e530a3d%3A0x9fcf543e4b7fa06c!2z7YWM7Zyk656A66Gc!5e0!3m2!1sko!2skr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mellow 위치"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
