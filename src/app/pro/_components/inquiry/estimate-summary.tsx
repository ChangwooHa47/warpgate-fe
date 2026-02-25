import { cn } from '../../_lib/utils';

interface EstimateSummaryProps {
  totalDays: number;
  minPrice: number;
  maxPrice: number;
  averagePrice: number;
  depositPercentage?: number;
  className?: string;
}

function formatPrice(price: number): string {
  if (price >= 10000) {
    return `${(price / 10000).toLocaleString()}억원`;
  }
  return `${price.toLocaleString()}만원`;
}

export function EstimateSummary({
  totalDays,
  minPrice,
  maxPrice,
  averagePrice,
  depositPercentage = 10,
  className,
}: EstimateSummaryProps) {
  const depositAmount = Math.round(averagePrice * (depositPercentage / 100));

  return (
    <div
      className={cn('flex flex-col p-8 rounded-2xl relative', className)}
      style={{
        gap: '28px',
        background: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Gradient border using mask technique */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          padding: '1.5px',
          background: 'linear-gradient(180deg, rgba(100, 103, 122, 1) 0%, rgba(49, 51, 62, 1) 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      {/* Main content wrapper */}
      <div className="flex flex-col self-stretch">
        {/* Top section - Development period and price range */}
        <div className="flex flex-col pb-3" style={{ borderBottom: '1px solid #373944' }}>
          <div className="flex flex-col gap-2 px-5 py-3">
            <div className="flex justify-between items-center gap-2">
              <span
                className="text-lg font-medium text-text-neutral"
                style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
              >
                총 예상 개발 기간
              </span>
              <span
                className="text-2xl font-medium text-white"
                style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
              >
                {totalDays}일
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-5 py-3">
            <div className="flex justify-between items-center gap-2">
              <span
                className="text-lg font-medium text-text-neutral"
                style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
              >
                예상 금액 범위
              </span>
              <span
                className="text-2xl font-medium text-white"
                style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
              >
                {formatPrice(minPrice)} ~ {formatPrice(maxPrice)}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom section - Average price and deposit */}
        <div className="flex flex-col pt-3" style={{ gap: '12px' }}>
          <div className="flex flex-col gap-2 px-5 py-3">
            <div className="flex justify-between items-center gap-2">
              <span
                className="text-lg font-medium text-white"
                style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
              >
                중간 예상가
              </span>
              <span
                className="text-2xl font-medium text-[#9FCEFE]"
                style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
              >
                {formatPrice(averagePrice)}
              </span>
            </div>
          </div>

          {/* Deposit highlight box */}
          <div
            className="flex flex-col gap-2 p-5 rounded-xl self-stretch"
            style={{
              background: 'rgba(159, 206, 254, 0.1)',
              border: '1px solid #9FCEFE',
            }}
          >
            <div className="flex justify-between items-center gap-2">
              <div className="flex flex-col" style={{ gap: '4px' }}>
                <span
                  className="text-lg font-medium text-white"
                  style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
                >
                  선금 ({depositPercentage}%)
                </span>
                <span
                  className="text-base font-medium text-text-neutral"
                  style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
                >
                  프로토타입 확인 후 불만족 시 전액 환불
                </span>
              </div>
              <span
                className="text-2xl font-medium text-[#9FCEFE]"
                style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
              >
                {formatPrice(depositAmount)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-3 self-stretch">
        <p
          className="text-base font-medium text-text-assistive"
          style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
        >
          * 본 견적은 AI가 생성한 예상치이며, 실제 견적은 상담 후 확정됩니다.
        </p>
      </div>
    </div>
  );
}
