import Link from "next/link";

export default function OrderConfirmation() {
  const orderId = "ORD-240215-001";

  return (
    <div className="max-w-lg text-center py-12">
      <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h2 className="text-xl font-light mb-3">주문이 완료되었습니다</h2>
      <p className="text-sm text-muted mb-1">주문번호</p>
      <p className="text-sm mb-8 font-mono tracking-wider">{orderId}</p>

      <p className="text-sm text-muted leading-loose mb-12 max-w-sm mx-auto">
        주문 확인 내역이 이메일로 발송되었습니다.
        배송 상태는 주문 조회에서 확인하실 수 있습니다.
      </p>

      <div className="flex flex-col gap-3 max-w-xs mx-auto">
        <Link
          href={`/orders/${orderId}`}
          className="block w-full bg-primary text-base py-3 text-sm tracking-wider hover:bg-primary/90 transition-colors text-center"
        >
          주문 조회
        </Link>
        <Link
          href="/products"
          className="block w-full border border-line py-3 text-sm text-muted hover:border-primary hover:text-primary transition-colors text-center"
        >
          쇼핑 계속하기
        </Link>
      </div>
    </div>
  );
}
