'use client';

import { useState, useEffect } from 'react';
import {
  ProgressBar,
  ProductCard,
  TextField,
  CTAButton,
  LoadingSpinner,
  LevelChip,
  FeatureCard,
  EstimateSummary,
  ProjectSummaryCard,
  InputField,
  TextareaField,
} from '../_components/inquiry';

type Step = '설명' | '분석' | '견적 확인' | '문의';
type ProductSize = 'mvp-lite' | 'full-mvp' | 'production' | null;
type Level = '낮음' | '보통' | '높음';

const products = [
  {
    id: 'mvp-lite' as const,
    title: 'MVP Lite',
    description: '핵심 기능만 빠르게 검증',
  },
  {
    id: 'full-mvp' as const,
    title: 'Full MVP',
    description: '주요 기능 완성 + 런칭 가능',
  },
  {
    id: 'production' as const,
    title: 'Production',
    description: '상용 수준의 완성도',
  },
];

// Mock data - will be replaced with API response
const mockEstimateData = {
  productSize: 'MVP Lite' as const,
  projectTitle: '매칭 플랫폼',
  projectDescription: '프리랜서와 기업을 연결하는 매칭 플랫폼의 핵심 기능',
  techStack: ['React', 'Node.js', 'MongoDB'],
  features: [
    {
      id: '1',
      title: '프리랜서 포트폴리오 등록',
      description: '프리랜서가 자신의 프로필과 포트폴리오를 등록할 수 있는 기능',
      level: '보통' as Level,
      estimatedDays: 5,
    },
    {
      id: '2',
      title: '프로젝트 등록 및 검색',
      description: '기업이 프로젝트를 등록하고 프리랜서를 검색할 수 있는 기능',
      level: '낮음' as Level,
      estimatedDays: 4,
    },
    {
      id: '3',
      title: '실시간 채팅 시스템',
      description: '프리랜서와 기업 간 실시간 커뮤니케이션을 위한 채팅 기능',
      level: '높음' as Level,
      estimatedDays: 8,
    },
  ],
  estimate: {
    totalDays: 17,
    minPrice: 850,
    maxPrice: 1360,
    averagePrice: 1105,
  },
};

export default function InquiryPage() {
  // Step state
  const [currentStep, setCurrentStep] = useState<Step>('설명');

  // Step 1: 설명 state
  const [selectedProduct, setSelectedProduct] = useState<ProductSize>(null);
  const [description, setDescription] = useState('');

  // Step 2: 분석 state
  const [progress, setProgress] = useState(0);

  // Step 4: 문의 state
  const [contactForm, setContactForm] = useState({
    name: '',
    contact: '',
    email: '',
    additionalRequest: '',
  });

  // Validation
  const isDescriptionValid = selectedProduct !== null && description.length >= 10;
  const isContactValid =
    contactForm.name.trim() !== '' &&
    contactForm.contact.trim() !== '' &&
    contactForm.email.trim() !== '';

  // Step 2: Analysis progress simulation
  useEffect(() => {
    if (currentStep !== '분석') return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setCurrentStep('견적 확인');
          return 100;
        }
        return prev + 20;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentStep]);

  // Reset progress when returning to analysis
  useEffect(() => {
    if (currentStep === '분석') {
      setProgress(0);
    }
  }, [currentStep]);

  // Handlers
  const handleStartAnalysis = () => {
    if (!isDescriptionValid) return;
    // TODO: Send data to backend API
    console.log({ selectedProduct, description });
    setCurrentStep('분석');
  };

  const handleGoToContact = () => {
    setCurrentStep('문의');
  };

  const handleGoBackToDescription = () => {
    setCurrentStep('설명');
  };

  const handleGoBackToEstimate = () => {
    setCurrentStep('견적 확인');
  };

  const handleSubmitContact = () => {
    if (!isContactValid) return;
    // TODO: Submit form data to API
    console.log('Form submitted:', contactForm);
    // Navigate to success page or show confirmation
  };

  const updateContactField = (field: keyof typeof contactForm) => (value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  // Render header (common across all steps)
  const renderHeader = () => (
    <div
      className="flex flex-col items-center gap-[68px] px-[98px] pt-[100px] pb-[60px]"
      style={{
        background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(40, 62, 90, 1) 0%, rgba(3, 4, 6, 0) 100%)',
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <h1
          className="text-5xl font-bold text-white text-center"
          style={{ letterSpacing: '-0.0175em', lineHeight: '1.4' }}
        >
          프로젝트 시작하기
        </h1>
        <p
          className="text-xl font-medium text-text-neutral whitespace-nowrap"
          style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
        >
          원하시는 웹 서비스를 설명해주세요. AI가 분석해드립니다.
        </p>
      </div>
      <ProgressBar currentStep={currentStep} />
    </div>
  );

  // Step 1: 설명
  const renderDescriptionStep = () => (
    <div className="flex-1 flex flex-col items-center gap-20 px-[98px] pt-[60px] pb-[120px]">
      <div className="w-full max-w-[1084px] flex flex-col items-center gap-[70px] px-20">
        {/* Product size selection */}
        <section className="flex flex-col gap-6 w-full">
          <h2
            className="text-2xl font-semibold text-text-neutral"
            style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
          >
            프로덕트 사이즈를 선택하세요
          </h2>
          <div className="flex items-center gap-8 w-full">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                selected={selectedProduct === product.id}
                onClick={() => setSelectedProduct(product.id)}
              />
            ))}
          </div>
        </section>

        {/* Description input */}
        <section className="flex flex-col gap-6 w-full">
          <h2
            className="text-2xl font-semibold text-text-neutral"
            style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
          >
            어떤 웹 서비스를 만들고 싶으신가요?
          </h2>
          <TextField
            value={description}
            onChange={setDescription}
            placeholder="예: 프리랜서와 기업을 연결하는 매칭 플랫폼을 만들고 싶습니다. 프리랜서는 포트폴리오를 등록하고, 기업은 프로젝트를 올려서 적합한 프리랜서를 찾을 수 있어야 합니다. 실시간 채팅, 결제 시스템, 리뷰 기능도 필요합니다..."
            minLength={10}
          />
        </section>

        {/* CTA Button */}
        <CTAButton active={isDescriptionValid} onClick={handleStartAnalysis}>
          AI 분석 시작
        </CTAButton>
      </div>
    </div>
  );

  // Step 2: 분석
  const renderAnalysisStep = () => (
    <div className="flex-1 flex flex-col items-center gap-6 px-[98px] pt-[60px] pb-[180px]">
      <LoadingSpinner size={60} />
      <p
        className="text-base font-semibold text-primary text-center"
        style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
      >
        AI가 분석 중입니다. ({progress}%)
        <br />
        핵심 기능을 추출하고 견적을 산출하고 있습니다...
      </p>
    </div>
  );

  // Step 3: 견적 확인
  const renderEstimateStep = () => (
    <div className="flex flex-col items-center px-[178px] pb-[180px]" style={{ gap: '70px' }}>
      {/* Project Summary Card */}
      <ProjectSummaryCard
        productSize={mockEstimateData.productSize}
        projectTitle={mockEstimateData.projectTitle}
        projectDescription={mockEstimateData.projectDescription}
        techStack={mockEstimateData.techStack}
      />

      {/* Extracted Features Section */}
      <section className="flex flex-col w-full" style={{ gap: '24px' }}>
        <div className="flex justify-between items-center">
          <h2
            className="text-xl font-semibold text-text-neutral"
            style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
          >
            추출된 핵심 기능
          </h2>
          <div className="flex items-center gap-5">
            <span
              className="text-base font-medium text-text-neutral"
              style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
            >
              작업 난이도
            </span>
            <div className="flex items-center gap-3">
              <LevelChip level="낮음" />
              <LevelChip level="보통" />
              <LevelChip level="높음" />
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="flex flex-wrap gap-5">
          {mockEstimateData.features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              level={feature.level}
              estimatedDays={feature.estimatedDays}
            />
          ))}
        </div>
      </section>

      {/* Estimate Summary Section */}
      <section className="flex flex-col w-full" style={{ gap: '24px' }}>
        <h2
          className="text-xl font-semibold text-text-neutral"
          style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
        >
          예상 견적
        </h2>
        <EstimateSummary
          totalDays={mockEstimateData.estimate.totalDays}
          minPrice={mockEstimateData.estimate.minPrice}
          maxPrice={mockEstimateData.estimate.maxPrice}
          averagePrice={mockEstimateData.estimate.averagePrice}
        />
      </section>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="w-[600px]">
          <CTAButton active onClick={handleGoToContact}>
            최종 문의하기
          </CTAButton>
        </div>
        <button
          onClick={handleGoBackToDescription}
          className="text-lg font-medium text-text-alternative hover:text-text-neutral transition-colors"
          style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
        >
          설명 다시 작성하기
        </button>
      </div>
    </div>
  );

  // Step 4: 문의
  const renderContactStep = () => (
    <div className="flex flex-col items-center px-[98px] pb-[180px]" style={{ gap: '80px' }}>
      <div className="flex flex-col items-center self-stretch px-20" style={{ gap: '70px' }}>
        {/* Form fields */}
        <div className="flex flex-col self-stretch" style={{ gap: '32px' }}>
          <InputField
            label="이름"
            placeholder="홍길동"
            value={contactForm.name}
            onChange={updateContactField('name')}
          />
          <InputField
            label="연락처"
            placeholder="010-1234-5678"
            type="tel"
            value={contactForm.contact}
            onChange={updateContactField('contact')}
          />
          <InputField
            label="이메일"
            placeholder="example@email.com"
            type="email"
            value={contactForm.email}
            onChange={updateContactField('email')}
          />
          <TextareaField
            label="추가 요청 사항"
            placeholder="추가로 전달하고 싶은 내용이 있다면 입력해주세요."
            value={contactForm.additionalRequest}
            onChange={updateContactField('additionalRequest')}
            required={false}
          />
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6 w-[600px]">
          <CTAButton active={isContactValid} onClick={handleSubmitContact}>
            문의 접수하기
          </CTAButton>
          <button
            onClick={handleGoBackToEstimate}
            className="text-lg font-medium text-text-alternative hover:text-text-neutral transition-colors"
            style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
          >
            견적 다시 보기
          </button>
        </div>
      </div>
    </div>
  );

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case '설명':
        return renderDescriptionStep();
      case '분석':
        return renderAnalysisStep();
      case '견적 확인':
        return renderEstimateStep();
      case '문의':
        return renderContactStep();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#030406]">
      {renderHeader()}
      {renderStepContent()}
    </div>
  );
}
