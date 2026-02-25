import { BASE_PATH } from "../_lib/constants";

export const NAV_ITEMS = [
  { href: `${BASE_PATH}/programs`, label: "프로그램 소개" },
  { href: `${BASE_PATH}/pricing`, label: "가격표" },
  { href: `${BASE_PATH}/trainers`, label: "PT 소개" },
  { href: `${BASE_PATH}/gallery`, label: "시설 갤러리" },
  { href: `${BASE_PATH}/register`, label: "회원 등록" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
