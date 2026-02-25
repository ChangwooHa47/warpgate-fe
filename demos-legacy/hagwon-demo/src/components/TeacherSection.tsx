const teachers = [
  {
    id: "01",
    name: "OOO 선생님",
    role: "고1 정규반 · 내신 특강 담당",
    career: [
      "내신 수학 지도 경력 8년",
      "서울대학교 수리과학부 졸업",
      "前 대성학원 수학과 전임강사",
      "現 Warpgate 고1 담당",
    ],
    philosophy:
      "고등 수학의 첫 단추를 제대로 끼우는 것이 가장 중요합니다. 개념의 흐름을 잡아주면 학생 스스로 문제를 풀 수 있는 힘이 생깁니다.",
    currentCourses: [
      { name: "고1 기본반", schedule: "화 · 목 17:00 - 19:30" },
      { name: "고1 심화반", schedule: "월 · 수 17:00 - 19:30" },
      { name: "휘문고 고1 내신반", schedule: "시험 4주 전 개강" },
      { name: "단대부고 고1 내신반", schedule: "시험 4주 전 개강" },
    ],
  },
  {
    id: "02",
    name: "OOO 선생님",
    role: "고2 정규반 담당",
    career: [
      "수능 · 내신 수학 지도 경력 10년",
      "연세대학교 수학과 졸업",
      "前 메가스터디 수학영역 콘텐츠 개발",
      "現 Warpgate 고2 담당",
    ],
    philosophy:
      "수학 I, II는 수능의 뼈대입니다. 개념을 단단히 잡고 문제에 적용하는 반복 훈련이 결국 등급을 만듭니다.",
    currentCourses: [
      { name: "고2 기본반", schedule: "화 · 목 19:00 - 21:30" },
      { name: "고2 심화반", schedule: "월 · 수 19:00 - 21:30" },
      { name: "휘문고 고2 내신반", schedule: "시험 4주 전 개강" },
      { name: "단대부고 고2 내신반", schedule: "시험 4주 전 개강" },
    ],
  },
  {
    id: "03",
    name: "OOO 선생님",
    role: "고3 수능반 · 미적분 담당",
    career: [
      "수능 수학 지도 경력 12년",
      "KAIST 수리과학과 졸업",
      "前 이투스 수능 수학 강사",
      "現 Warpgate 미적분반 · 파이널반 담당",
    ],
    philosophy:
      "킬러 문항은 재능이 아니라 전략입니다. 풀이의 구조를 체계화하면 어떤 문제든 접근할 수 있습니다.",
    currentCourses: [
      { name: "미적분반", schedule: "화 · 목 · 토 14:00 - 17:00" },
      { name: "수능 파이널반", schedule: "매일 09:00 - 12:00 (9월~)" },
    ],
  },
  {
    id: "04",
    name: "OOO 선생님",
    role: "고3 수능반 · 확통 / 기하 담당",
    career: [
      "수능 · 내신 수학 지도 경력 9년",
      "고려대학교 수학교육과 졸업",
      "前 종로학원 수학과 전임강사",
      "現 Warpgate 확통반 · 기하반 담당",
    ],
    philosophy:
      "확률과 통계, 기하는 정확한 개념 이해가 곧 점수입니다. 빈틈없는 개념 위에 실전 감각을 쌓아 올립니다.",
    currentCourses: [
      { name: "확률과 통계반", schedule: "월 · 수 · 금 14:00 - 17:00" },
      { name: "기하반", schedule: "토 · 일 10:00 - 13:00" },
    ],
  },
];

export default function TeacherSection() {
  return (
    <section className="py-32 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <span
            className="text-sm lg:text-base tracking-[0.3em] text-gray-400 uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Instructors
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            강사 소개
          </h2>
        </div>

        {/* Teacher list */}
        <div className="border-t border-gray-200">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="py-12 lg:py-16 border-b border-gray-200"
            >
              {/* Name + Role */}
              <div className="flex items-baseline gap-4 mb-2">
                <span
                  className="text-sm lg:text-base text-gray-300 font-medium"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {teacher.id}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  {teacher.name}
                </h3>
                <span className="text-sm lg:text-base text-gray-400">
                  {teacher.role}
                </span>
              </div>

              {/* Philosophy quote */}
              <p className="text-base lg:text-lg text-gray-500 leading-[1.8] mb-8 max-w-3xl">
                &ldquo;{teacher.philosophy}&rdquo;
              </p>

              {/* Content: career (left) + current courses (right) */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {/* Career */}
                <div className="md:w-1/2">
                  <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider mb-3">
                    경력
                  </p>
                  <ul className="space-y-2">
                    {teacher.career.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm lg:text-base text-gray-600 leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Current Courses */}
                <div className="md:w-1/2">
                  <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider mb-3">
                    현재 담당 강좌
                  </p>
                  <div className="space-y-3">
                    {teacher.currentCourses.map((course, idx) => (
                      <div key={idx} className="flex items-baseline justify-between gap-4">
                        <p className="text-sm lg:text-base font-medium">
                          {course.name}
                        </p>
                        <p className="text-xs lg:text-sm text-gray-400 shrink-0">
                          {course.schedule}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
