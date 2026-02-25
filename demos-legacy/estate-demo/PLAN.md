# Warpgate 부동산 홈페이지 구현 계획

## 기술 스택
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Map**: Kakao Map SDK
- **Data**: Mock JSON 데이터
- **Design**: 모던 미니멀 (화이트 톤, 넓은 여백, 고급스러운 느낌)

## 페이지 구조

### 1. 메인 페이지 (`/`)
- 히어로 섹션 (풀스크린 배경 + 검색바)
- 추천 매물 섹션 (카드 그리드)
- 지역 정보 미리보기
- 상담 예약 CTA

### 2. 매물 검색 (`/properties`)
- 좌측: 카카오맵 (매물 마커 표시)
- 우측: 매물 리스트 패널
- 필터: 매매/전세/월세, 가격, 면적, 지역

### 3. 매물 상세 (`/properties/[id]`)
- 이미지 갤러리
- 매물 정보 (가격, 면적, 층수, 설명)
- 평면도
- 위치 지도
- 상담 예약 버튼

### 4. 지역 정보 (`/areas`)
- 지역별 카드 (강남, 서초, 송파 등)
- 지역 시세 정보
- 주변 인프라 (학교, 병원, 교통)

### 5. 상담 예약 (`/consultation`)
- 예약 폼 (이름, 연락처, 관심 매물, 희망 일시)
- 예약 확인 UI

## 컴포넌트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   ├── properties/
│   │   ├── page.tsx        # 매물 검색
│   │   └── [id]/page.tsx   # 매물 상세
│   ├── areas/
│   │   └── page.tsx        # 지역 정보
│   └── consultation/
│       └── page.tsx        # 상담 예약
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedProperties.tsx
│   │   ├── AreaPreview.tsx
│   │   └── ConsultationCTA.tsx
│   ├── properties/
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyList.tsx
│   │   ├── PropertyFilter.tsx
│   │   └── PropertyDetail.tsx
│   ├── map/
│   │   └── KakaoMap.tsx
│   └── consultation/
│       └── ConsultationForm.tsx
├── data/
│   ├── properties.ts       # 매물 Mock 데이터
│   └── areas.ts            # 지역 Mock 데이터
├── types/
│   └── index.ts            # TypeScript 타입 정의
└── lib/
    └── utils.ts            # 유틸리티 함수
```

## 구현 순서

### Phase 1: 프로젝트 초기화
1. Next.js 프로젝트 생성 + Tailwind 설정
2. 타입 정의 + Mock 데이터
3. 공통 레이아웃 (Header, Footer)

### Phase 2: 메인 페이지
4. 히어로 섹션
5. 추천 매물 섹션
6. 지역 미리보기 + CTA

### Phase 3: 매물 검색
7. 카카오맵 컴포넌트
8. 매물 리스트 + 필터
9. 매물 상세 페이지

### Phase 4: 부가 기능
10. 지역 정보 페이지
11. 상담 예약 페이지
12. 반응형 + 마무리
