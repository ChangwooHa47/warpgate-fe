"use client";

import { useState } from "react";
import type { ConsultationType } from "../../_lib/types";

const CONSULTATION_TYPES: { value: ConsultationType; label: string }[] = [
  { value: "구매상담", label: "구매 상담" },
  { value: "매물문의", label: "매물 문의" },
  { value: "시세상담", label: "시세 상담" },
  { value: "기타", label: "기타 문의" },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  consultationType: ConsultationType;
  preferredArea: string;
  budget: string;
  message: string;
  privacyAgreed: boolean;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    consultationType: "구매상담",
    preferredArea: "",
    budget: "",
    message: "",
    privacyAgreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          상담 신청이 완료되었습니다
        </h3>
        <p className="text-muted mb-6">
          담당 컨설턴트가 24시간 내에 연락드리겠습니다.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              consultationType: "구매상담",
              preferredArea: "",
              budget: "",
              message: "",
              privacyAgreed: false,
            });
          }}
          className="px-6 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors"
        >
          새로운 상담 신청
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="홍길동"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="010-1234-5678"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            이메일
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="email@example.com"
          />
        </div>

        {/* Consultation Type */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            상담 유형 <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={formData.consultationType}
            onChange={(e) =>
              setFormData({
                ...formData,
                consultationType: e.target.value as ConsultationType,
              })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          >
            {CONSULTATION_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Area */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            관심 지역
          </label>
          <input
            type="text"
            value={formData.preferredArea}
            onChange={(e) =>
              setFormData({ ...formData, preferredArea: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="예: 강남구, 서초구"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            예산
          </label>
          <input
            type="text"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="예: 10억 이내"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">
            상담 내용
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
            placeholder="상담 받고 싶은 내용을 자유롭게 작성해 주세요."
          />
        </div>

        {/* Privacy Agreement */}
        <div className="md:col-span-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.privacyAgreed}
              onChange={(e) =>
                setFormData({ ...formData, privacyAgreed: e.target.checked })
              }
              className="w-5 h-5 mt-0.5 rounded border-border text-primary focus:ring-primary"
            />
            <span className="text-sm text-muted">
              개인정보 수집 및 이용에 동의합니다.{" "}
              <span className="text-red-500">*</span>
              <br />
              <span className="text-xs">
                수집된 개인정보는 상담 목적으로만 사용되며, 상담 완료 후
                파기됩니다.
              </span>
            </span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 text-base font-medium bg-primary text-background rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              처리중...
            </span>
          ) : (
            "상담 신청하기"
          )}
        </button>
      </div>
    </form>
  );
}
