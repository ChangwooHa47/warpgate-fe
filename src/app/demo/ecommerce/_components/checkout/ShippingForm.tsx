"use client";

import { ShippingAddress } from "../../_lib/types";

interface ShippingFormProps {
  address: ShippingAddress;
  onChange: (address: ShippingAddress) => void;
  onNext: () => void;
}

export default function ShippingForm({
  address,
  onChange,
  onNext,
}: ShippingFormProps) {
  const update = (field: keyof ShippingAddress, value: string) => {
    onChange({ ...address, [field]: value });
  };

  const isValid =
    address.name && address.phone && address.zipCode && address.address;

  return (
    <div className="max-w-lg">
      <h2 className="text-lg font-light mb-8">배송 정보</h2>

      <div className="space-y-5">
        <div>
          <label className="block text-xs text-muted mb-2">
            수령인
          </label>
          <input
            type="text"
            value={address.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="이름을 입력해 주세요"
            className="w-full border border-line bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors placeholder:text-border"
          />
        </div>

        <div>
          <label className="block text-xs text-muted mb-2">
            연락처
          </label>
          <input
            type="tel"
            value={address.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="010-0000-0000"
            className="w-full border border-line bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors placeholder:text-border"
          />
        </div>

        <div>
          <label className="block text-xs text-muted mb-2">
            우편번호
          </label>
          <input
            type="text"
            value={address.zipCode}
            onChange={(e) => update("zipCode", e.target.value)}
            placeholder="00000"
            className="w-full border border-line bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors placeholder:text-border"
          />
        </div>

        <div>
          <label className="block text-xs text-muted mb-2">주소</label>
          <input
            type="text"
            value={address.address}
            onChange={(e) => update("address", e.target.value)}
            placeholder="기본 주소를 입력해 주세요"
            className="w-full border border-line bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors placeholder:text-border"
          />
        </div>

        <div>
          <label className="block text-xs text-muted mb-2">
            상세 주소
          </label>
          <input
            type="text"
            value={address.addressDetail}
            onChange={(e) => update("addressDetail", e.target.value)}
            placeholder="상세 주소 (선택)"
            className="w-full border border-line bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors placeholder:text-border"
          />
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!isValid}
        className="mt-8 w-full bg-primary text-base py-4 text-sm tracking-wider hover:bg-primary/90 transition-colors disabled:bg-line disabled:text-muted disabled:cursor-not-allowed"
      >
        결제로 진행
      </button>
    </div>
  );
}
