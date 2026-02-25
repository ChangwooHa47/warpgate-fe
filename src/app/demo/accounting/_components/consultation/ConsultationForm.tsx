"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import type { ConsultationFormData } from "../../_lib/types";

const consultationTypes = [
  "법인세",
  "종합소득세",
  "부가가치세",
  "급여/4대보험",
  "회계 서비스",
  "경영 컨설팅",
  "기타",
];

export default function ConsultationForm() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type") ?? "";
  const initialType = consultationTypes.includes(typeParam) ? typeParam : "";

  const [formData, setFormData] = useState<ConsultationFormData>({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    consultationType: initialType,
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: typeof errors = {};

    if (!formData.companyName.trim()) newErrors.companyName = "회사명 또는 성함을 입력해 주세요.";
    if (!formData.contactName.trim()) newErrors.contactName = "담당자 이름을 입력해 주세요.";
    if (!formData.phone.trim()) {
      newErrors.phone = "연락처를 입력해 주세요.";
    } else if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(formData.phone.replace(/-/g, ""))) {
      newErrors.phone = "올바른 연락처를 입력해 주세요.";
    }
    if (!formData.consultationType)
      newErrors.consultationType = "상담 분야를 선택해 주세요.";
    if (!formData.message.trim())
      newErrors.message = "상담 내용을 입력해 주세요.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ConsultationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-12 text-center">
        <div className="mb-6 text-5xl">✓</div>
        <h3 className="mb-4 text-2xl font-bold text-navy-900">
          상담 예약이 접수되었습니다
        </h3>
        <p className="mb-2 text-lg text-slate-600">
          {formData.companyName}의 {formData.contactName}님, 상담 예약 신청이 완료되었습니다.
        </p>
        <p className="mb-8 text-lg text-slate-600">
          담당 세무사가 확인 후 연락드리겠습니다.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              companyName: "",
              contactName: "",
              phone: "",
              email: "",
              consultationType: "",
              message: "",
            });
          }}
          className="rounded bg-navy-900 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-navy-800"
        >
          새로운 예약
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof ConsultationFormData) =>
    `w-full rounded-lg border px-4 py-3.5 text-base text-slate-700 outline-none transition-colors focus:border-accent-400 focus:ring-1 focus:ring-accent-400 ${
      errors[field] ? "border-red-400" : "border-slate-200"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-slate-200 bg-white p-8 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* Consultation Type - 최상단 */}
        <div className="md:col-span-2">
          <label htmlFor="consultationType" className="mb-2 block text-base font-medium text-navy-900">
            상담 분야 <span className="text-red-500">*</span>
          </label>
          <select
            id="consultationType"
            name="consultationType"
            value={formData.consultationType}
            onChange={handleChange}
            className={inputClass("consultationType")}
          >
            <option value="">분야를 선택해 주세요</option>
            {consultationTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.consultationType && (
            <p className="mt-1.5 text-sm text-red-500">{errors.consultationType}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="mb-2 block text-base font-medium text-navy-900">
            회사명 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={inputClass("companyName")}
            placeholder="(주)한빛테크"
          />
          {errors.companyName && <p className="mt-1.5 text-sm text-red-500">{errors.companyName}</p>}
        </div>

        {/* Contact Name */}
        <div>
          <label htmlFor="contactName" className="mb-2 block text-base font-medium text-navy-900">
            담당자 이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className={inputClass("contactName")}
            placeholder="홍길동"
          />
          {errors.contactName && <p className="mt-1.5 text-sm text-red-500">{errors.contactName}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-base font-medium text-navy-900">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass("phone")}
            placeholder="010-OOOO-OOOO"
          />
          {errors.phone && <p className="mt-1.5 text-sm text-red-500">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-base font-medium text-navy-900">
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 px-4 py-3.5 text-base text-slate-700 outline-none transition-colors focus:border-accent-400 focus:ring-1 focus:ring-accent-400"
            placeholder="example@OOO.co.kr"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block text-base font-medium text-navy-900">
          상담 내용 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={inputClass("message")}
          placeholder="상담받고 싶은 내용을 간략히 작성해 주세요."
        />
        {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-8 w-full rounded-lg bg-accent-400 py-4 text-base font-medium text-white transition-colors hover:bg-accent-300 md:w-auto md:px-14"
      >
        상담 예약 신청
      </button>
    </form>
  );
}
