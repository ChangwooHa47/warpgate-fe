// Shared course data, types, and schedule utilities

export interface Course {
  title: string;
  instructor: string;
  schedule: string;
  capacity: string;
  description: string;
  topics: string[];
  badge?: string;
}

export interface CourseGroup {
  category: string;
  categoryEn: string;
  id: string;
  description: string;
  courses: Course[];
}

export interface ParsedSchedule {
  days: string[];
  startTime: string;
  endTime: string;
  isVariable: boolean;
  raw: string;
}

export interface ScheduleBlock {
  course: Course;
  category: string;
  categoryId: string;
  day: string;
  startTime: string;
  endTime: string;
}

const ALL_DAYS = ["월", "화", "수", "목", "금", "토", "일"];

export function parseSchedule(schedule: string): ParsedSchedule {
  if (schedule.includes("시험") || schedule.includes("문의")) {
    return { days: [], startTime: "", endTime: "", isVariable: true, raw: schedule };
  }

  if (schedule.includes("매일")) {
    const timeMatch = schedule.match(/(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/);
    return {
      days: ALL_DAYS,
      startTime: timeMatch?.[1] ?? "",
      endTime: timeMatch?.[2] ?? "",
      isVariable: false,
      raw: schedule,
    };
  }

  const dayPart = schedule.split(/\d/)[0];
  const days = ALL_DAYS.filter((d) => dayPart.includes(d));
  const timeMatch = schedule.match(/(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/);

  return {
    days,
    startTime: timeMatch?.[1] ?? "",
    endTime: timeMatch?.[2] ?? "",
    isVariable: false,
    raw: schedule,
  };
}

export function generateScheduleBlocks(): ScheduleBlock[] {
  const blocks: ScheduleBlock[] = [];
  for (const group of courseGroups) {
    for (const course of group.courses) {
      const parsed = parseSchedule(course.schedule);
      if (parsed.isVariable) continue;
      for (const day of parsed.days) {
        blocks.push({
          course,
          category: group.category,
          categoryId: group.id,
          day,
          startTime: parsed.startTime,
          endTime: parsed.endTime,
        });
      }
    }
  }
  return blocks;
}

export const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  "01": { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", dot: "bg-blue-400" },
  "02": { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-400" },
  "03": { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", dot: "bg-amber-400" },
  "04": { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-700", dot: "bg-violet-400" },
};

export const courseGroups: CourseGroup[] = [
  {
    category: "고1 정규반",
    categoryEn: "",
    id: "01",
    description:
      "학기별 진도에 맞춰 운영됩니다. 같은 과목을 수준과 시간대별로 나누어 소수 정예로 진행합니다.",
    courses: [
      {
        title: "고1 기본반",
        instructor: "OOO 선생님",
        schedule: "화 · 목 19:00 - 22:00",
        capacity: "정원 12명",
        description:
          "교과 진도에 맞춰 개념을 처음부터 체계적으로 잡아가는 과정입니다. 중학 수학과의 연결점부터 시작해 내신 출제 패턴에 맞춘 훈련을 병행합니다.",
        topics: ["개념 정리", "내신 기본 유형", "중등 연계 보강"],
      },
      {
        title: "고1 심화반",
        instructor: "OOO 선생님",
        schedule: "월 · 수 19:00 - 22:00",
        capacity: "정원 10명",
        description:
          "개념이 잡힌 학생 대상으로 고난도 내신 문항과 모의고사 대비에 초점을 맞춥니다. 1등급 도달을 목표로 변별력 문항을 집중 훈련합니다.",
        topics: ["고난도 내신", "모의고사 유형", "변별력 문항"],
      },
      {
        title: "고1 주말반",
        instructor: "OOO 선생님",
        schedule: "토 19:00 - 22:00",
        capacity: "정원 10명",
        description:
          "평일 수업에 참여하기 어려운 학생을 위한 주말 집중 과정입니다. 한 주간의 진도를 압축하여 핵심 개념과 문제 풀이를 병행합니다.",
        topics: ["주간 핵심 정리", "내신 유형 훈련", "보충 학습"],
      },
    ],
  },
  {
    category: "고2 정규반",
    categoryEn: "",
    id: "02",
    description:
      "수능 수학의 뼈대가 되는 과정입니다. 학기별 진도에 따라 수준별 반 편성으로 운영합니다.",
    courses: [
      {
        title: "고2 기본반",
        instructor: "OOO 선생님",
        schedule: "월 · 수 19:00 - 22:00",
        capacity: "정원 12명",
        description:
          "교과 개념을 꼼꼼히 정리하고, 내신과 모의고사를 동시에 대비할 수 있는 문제 해결력을 키웁니다.",
        topics: ["개념 정리", "내신 대비", "모의고사 기초"],
      },
      {
        title: "고2 심화반",
        instructor: "OOO 선생님",
        schedule: "화 · 목 19:00 - 22:00",
        capacity: "정원 10명",
        description:
          "수학 I·II 통합 심화 과정입니다. 3등급 이상 학생 대상으로 수능 연계 고난도 문항까지 다룹니다.",
        topics: ["통합 심화", "킬러 유형 훈련", "수능 연계"],
      },
      {
        title: "고2 주말반",
        instructor: "OOO 선생님",
        schedule: "일 19:00 - 22:00",
        capacity: "정원 10명",
        description:
          "평일 수업에 참여하기 어려운 고2 학생을 위한 주말 과정입니다. 수학 I·II 핵심 개념을 집중 정리하고 실전 문제를 훈련합니다.",
        topics: ["핵심 개념 압축", "실전 문제 풀이", "모의고사 대비"],
      },
    ],
  },
  {
    category: "고3 수능반",
    categoryEn: "",
    id: "03",
    description:
      "선택과목별로 반이 나뉘어 운영됩니다. 9월 이후에는 파이널 과정으로 전환됩니다.",
    courses: [
      {
        title: "미적분반",
        instructor: "OOO 선생님",
        schedule: "화 · 목 19:00 - 22:00",
        capacity: "정원 10명",
        description:
          "수열의 극한, 미분법, 적분법을 수능 실전 난이도로 다룹니다. 킬러·준킬러 문항 풀이 전략을 체계화합니다.",
        topics: ["수열의 극한", "미분법", "적분법", "킬러 문항 전략"],
      },
      {
        title: "확률과 통계반",
        instructor: "OOO 선생님",
        schedule: "월 · 수 · 금 19:00 - 22:00",
        capacity: "정원 10명",
        description:
          "순열과 조합, 확률, 통계를 수능 출제 경향에 맞춰 집중 훈련합니다. 만점을 목표로 한 정확도 향상에 초점을 둡니다.",
        topics: ["순열과 조합", "확률", "통계", "실전 모의"],
      },
      {
        title: "기하반",
        instructor: "OOO 선생님",
        schedule: "토 · 일 09:00 - 12:00",
        capacity: "정원 8명",
        description:
          "이차곡선, 벡터, 공간도형을 다루는 기하 선택과목 전문 과정입니다. 기하 선택자의 고득점 전략을 설계합니다.",
        topics: ["이차곡선", "평면벡터", "공간도형과 공간좌표"],
      },
      {
        title: "수능 파이널반",
        badge: "9월 전환",
        instructor: "OOO 선생님",
        schedule: "토 · 일 14:00 - 17:00",
        capacity: "정원 12명",
        description:
          "9월 이후 전 과목 통합 실전 과정입니다. 실전 모의고사 + 오답 분석 + 취약 유형 보강을 매일 반복하며 실전 감각을 극대화합니다.",
        topics: ["실전 모의고사", "오답 분석", "취약 유형 집중", "시간 관리"],
      },
    ],
  },
  {
    category: "내신 특강",
    categoryEn: "",
    id: "04",
    description:
      "시험 4주 전 개강합니다. 학교와 학년 조합으로 반이 편성되며, 해당 학교 기출 분석을 기반으로 진행합니다.",
    courses: [
      {
        title: "휘문고 고1반",
        instructor: "OOO 선생님",
        schedule: "시험 4주 전 개강",
        capacity: "정원 8명",
        description:
          "휘문고 고1 기출을 분석하고 출제 경향에 맞춘 집중 대비를 진행합니다. 서술형 비중이 높은 학교 특성에 맞춰 훈련합니다.",
        topics: ["기출 분석", "서술형 대비", "고난도 변별력 문항"],
      },
      {
        title: "휘문고 고2반",
        instructor: "OOO 선생님",
        schedule: "시험 4주 전 개강",
        capacity: "정원 8명",
        description:
          "휘문고 고2 내신 출제 패턴을 반영한 맞춤 대비 과정입니다. 학년별 출제 난이도 변화에 대응합니다.",
        topics: ["기출 분석", "출제 경향 대응", "고난도 대비"],
      },
      {
        title: "단대부고 고1반",
        instructor: "OOO 선생님",
        schedule: "시험 4주 전 개강",
        capacity: "정원 8명",
        description:
          "단대부고 고1 기출과 출제 성향을 반영한 맞춤 대비 과정입니다.",
        topics: ["기출 분석", "핵심 유형 정리", "변별력 문항 훈련"],
      },
      {
        title: "단대부고 고2반",
        instructor: "OOO 선생님",
        schedule: "시험 4주 전 개강",
        capacity: "정원 8명",
        description:
          "단대부고 고2 내신 기출 분석 기반의 집중 대비 과정입니다. 고난도 문항 대비에 중점을 둡니다.",
        topics: ["기출 분석", "고난도 대비", "시간 관리 훈련"],
      },
      {
        title: "그 외 학교 · 학년",
        instructor: "OOO 선생님",
        schedule: "시험 4주 전 개강 (문의)",
        capacity: "정원 8명",
        description:
          "해당 학교·학년 기출 자료를 기반으로 맞춤 내신 대비를 진행합니다. 개강 여부는 상담 시 확인해 주세요.",
        topics: ["학교별 기출 분석", "맞춤 대비", "상담 후 확정"],
      },
    ],
  },
];
