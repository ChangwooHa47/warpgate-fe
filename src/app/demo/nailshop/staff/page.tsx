const artists = [
  {
    name: "OOO",
    nameEn: "OOO",
    role: "CREATIVE DIRECTOR",
    career: "15 YEARS",
    specialties: ["3D Art", "Bridal Nail", "VIP Custom"],
    bio: "일본 네일 아카데미 수료. 고객의 라이프스타일에 맞춘 맞춤 디자인을 제안하며, 웨딩 네일과 VIP 고객 전담 아티스트로 활동 중.",
    certifications: ["JNA 1급", "대한네일협회 마스터"],
  },
  {
    name: "OOO",
    nameEn: "OOO",
    role: "SENIOR ARTIST",
    career: "10 YEARS",
    specialties: ["Hand Painting", "Trend Art", "Character"],
    bio: "섬세한 핸드페인팅의 장인. 시즌별 트렌드를 리드하며, SNS 20만 팔로워의 네일 인플루언서로도 활동 중.",
    certifications: ["JNA 2급", "네일 아트 전문가"],
  },
  {
    name: "OOO",
    nameEn: "OOO",
    role: "ARTIST",
    career: "7 YEARS",
    specialties: ["Gel Sculpture", "Glitter", "Gradation"],
    bio: "볼륨감 있는 젤 스컬프처와 글리터 아트가 전문. 특별한 날을 위한 화려한 네일을 디자인합니다.",
    certifications: ["국가자격증", "젤 전문가 과정"],
  },
  {
    name: "OOO",
    nameEn: "OOO",
    role: "ARTIST",
    career: "4 YEARS",
    specialties: ["Minimal", "Office Nail", "Nail Care"],
    bio: "미니멀하고 세련된 디자인이 전문. 오피스 네일과 손톱 건강 케어에 집중하며, 자연스러운 아름다움을 추구합니다.",
    certifications: ["국가자격증"],
  },
];

export default function StaffPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.4em] text-primary mb-4">OUR ARTISTS</p>
        <h1 className="text-3xl md:text-4xl font-extralight tracking-[0.08em]">아티스트</h1>
      </div>

      {/* Artists */}
      <div className="space-y-4">
        {artists.map((artist, i) => (
          <div
            key={artist.name}
            className="bg-card-bg border border-border rounded hover:bg-card-hover hover:border-primary/30 transition-all duration-500 group"
          >
            <div className="p-10 md:p-14 md:flex md:gap-16">
              {/* Left: Identity */}
              <div className="md:w-1/3 mb-8 md:mb-0">
                <p className="text-xs tracking-[0.3em] text-primary mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="text-2xl font-extralight tracking-wide mb-1">
                  {artist.name}
                </h2>
                <p className="text-xs tracking-[0.2em] text-muted mb-1">
                  {artist.nameEn}
                </p>
                <p className="text-xs tracking-[0.2em] text-primary">
                  {artist.role}
                </p>
                <p className="text-xs tracking-wider text-muted mt-3">
                  EXP. {artist.career}
                </p>
              </div>

              {/* Right: Details */}
              <div className="md:w-2/3">
                <p className="text-sm text-foreground/55 leading-relaxed mb-8">
                  {artist.bio}
                </p>

                <div className="flex flex-col sm:flex-row gap-8">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-muted mb-3">SPECIALTY</p>
                    <div className="flex flex-wrap gap-2">
                      {artist.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-xs tracking-wider border border-border px-3 py-1.5 text-foreground/70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.2em] text-muted mb-3">CERTIFICATION</p>
                    <ul className="space-y-1.5">
                      {artist.certifications.map((c) => (
                        <li key={c} className="text-xs tracking-wider text-foreground/70 flex items-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
