"use client";

import { useState } from "react";
import { ConsultationRequest } from "@/types";

interface ConsultationFormProps {
  defaultPropertyId?: string;
}

export default function ConsultationForm({
  defaultPropertyId,
}: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<ConsultationRequest>({
    name: "",
    phone: "",
    email: "",
    propertyId: defaultPropertyId || "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    type: "매매",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
        <h2 className="text-2xl font-bold mb-2">예약이 완료되었습니다</h2>
        <p className="text-muted mb-6">
          담당 컨설턴트가 빠른 시일 내에 연락드리겠습니다.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              phone: "",
              email: "",
              propertyId: "",
              preferredDate: "",
              preferredTime: "",
              message: "",
              type: "매매",
            });
          }}
          className="px-6 py-2.5 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors"
        >
          새 예약하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="홍길동"
            className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="010-1234-5678"
            className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">이메일</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="email@example.com"
          className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">관심 유형</label>
        <div className="flex gap-3">
          {(["매매", "전세", "월세", "기타"] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setForm({ ...form, type })}
              className={`px-5 py-2.5 text-sm rounded-xl border transition-colors ${
                form.type === type
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-muted border-border hover:border-gray-400"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            희망 상담일 <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="preferredDate"
            required
            value={form.preferredDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            희망 시간 <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-4 gap-2">
            {["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setForm({ ...form, preferredTime: time })}
                className={`py-2.5 text-[13px] rounded-xl border transition-colors ${
                  form.preferredTime === time
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-muted border-border hover:border-gray-400"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          문의 내용
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="관심 지역, 예산, 원하는 조건 등을 알려주세요"
          className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-lg"
      >
        상담 예약하기
      </button>

      <p className="text-xs text-muted text-center">
        예약 후 담당 컨설턴트가 확인 전화를 드립니다. 영업시간: 평일 09:00 - 18:00
      </p>
    </form>
  );
}
