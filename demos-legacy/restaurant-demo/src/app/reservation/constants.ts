import type { StepConfig } from "./types";

export const STEPS: StepConfig[] = [
  { step: 1, title: "인원", subtitle: "몇 분이 방문하시나요?" },
  { step: 2, title: "일시", subtitle: "날짜와 시간을 선택해 주세요" },
  { step: 3, title: "정보", subtitle: "예약 정보를 입력해 주세요" },
];

export const LUNCH_TIMES = [
  { value: "11:30", label: "11:30" },
  { value: "12:00", label: "12:00" },
  { value: "12:30", label: "12:30" },
  { value: "13:00", label: "13:00" },
  { value: "13:30", label: "13:30" },
  { value: "14:00", label: "14:00" },
];

export const DINNER_TIMES = [
  { value: "17:30", label: "17:30" },
  { value: "18:00", label: "18:00" },
  { value: "18:30", label: "18:30" },
  { value: "19:00", label: "19:00" },
  { value: "19:30", label: "19:30" },
  { value: "20:00", label: "20:00" },
  { value: "20:30", label: "20:30" },
];

export const ALL_TIMES = [...LUNCH_TIMES, ...DINNER_TIMES];

export const PARTY_SIZES = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export const SEATING_OPTIONS = [
  { value: "hall", label: "홀" },
  { value: "room", label: "룸" },
];

export const WEEKDAY_HEADERS = ["일", "월", "화", "수", "목", "금", "토"];

export const INITIAL_DATA = {
  partySize: null,
  date: null,
  time: null,
  name: "",
  contact: "",
  seating: "",
  notes: "",
} as const;
