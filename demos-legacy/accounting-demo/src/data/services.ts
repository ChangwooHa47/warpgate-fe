import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "tax",
    title: "세무 서비스",
    subtitle: "Tax Service",
    description:
      "법인세, 종합소득세, 부가가치세 신고부터 세무조사 대응까지, 기업의 세무 리스크를 최소화하는 전문 서비스를 제공합니다.",
    features: [
      "법인세·종합소득세 신고 및 조정",
      "부가가치세 신고 대리",
      "세무조사 대응 및 조세 불복",
      "절세 컨설팅 및 세금 플래닝",
      "양도소득세·상속세·증여세 신고",
    ],
    pricing: "월 33만원~",
    pricingNote: "매출 규모에 따라 상이",
    icon: "📋",
  },
  {
    id: "accounting",
    title: "회계 서비스",
    subtitle: "Accounting Service",
    description:
      "정확한 기장대리와 재무제표 작성으로 기업의 재무 건전성을 관리합니다. 결산 업무부터 내부감사 지원까지 원스톱으로 처리합니다.",
    features: [
      "기장대리 및 장부 작성",
      "재무제표(B/S, I/S) 작성",
      "월별·분기별·연간 결산 업무",
      "내부감사 지원 및 회계 자문",
      "비영리법인 회계 처리",
    ],
    pricing: "월 22만원~",
    pricingNote: "거래 건수에 따라 상이",
    icon: "📊",
  },
  {
    id: "consulting",
    title: "경영 컨설팅",
    subtitle: "Management Consulting",
    description:
      "사업계획 수립부터 자금조달, 기업가치평가, M&A 자문까지 기업 성장의 모든 단계를 함께합니다.",
    features: [
      "사업계획서 작성 및 검토",
      "자금조달 전략 수립",
      "기업가치평가 및 실사",
      "M&A 자문 및 구조조정",
      "정부 지원사업 컨설팅",
    ],
    pricing: "건별 상담",
    pricingNote: "프로젝트 규모에 따라 별도 견적",
    icon: "💼",
  },
  {
    id: "payroll",
    title: "급여 관리",
    subtitle: "Payroll Management",
    description:
      "4대보험 관리, 급여 계산, 연말정산까지 인사·급여 업무의 부담을 덜어드립니다. 정확하고 빠른 처리를 약속합니다.",
    features: [
      "4대보험 취득·상실 신고",
      "급여 계산 및 명세서 발행",
      "연말정산 대행",
      "퇴직금 계산 및 관리",
      "일용직·프리랜서 소득 신고",
    ],
    pricing: "인당 1.5만원~",
    pricingNote: "직원 수 기준, 10인 이상 할인",
    icon: "💰",
  },
];
