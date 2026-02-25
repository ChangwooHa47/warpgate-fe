"use client";

import { useState } from "react";
import type { ConsultationFormData } from "@/types";

const consultationTypes = [
  "민사",
  "형사",
  "기업법무",
  "부동산",
  "이혼/가사",
  "상속",
  "기타",
];

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function ConsultationForm() {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: "",
    phone: "",
    email: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) newErrors.name = "이름을 입력해 주세요.";
    if (!formData.phone.trim()) {
      newErrors.phone = "연락처를 입력해 주세요.";
    } else if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(formData.phone.replace(/-/g, ""))) {
      newErrors.phone = "올바른 연락처를 입력해 주세요.";
    }
    if (!formData.consultationType)
      newErrors.consultationType = "상담 분야를 선택해 주세요.";
    if (!formData.preferredDate)
      newErrors.preferredDate = "희망 일자를 선택해 주세요.";
    if (!formData.preferredTime)
      newErrors.preferredTime = "희망 시간을 선택해 주세요.";
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

  // Get tomorrow's date as min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  if (submitted) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-12 text-center">
        <div className="mb-6 text-5xl">✓</div>
        <h3 className="mb-4 font-serif text-2xl font-bold text-navy-900">
          상담 예약이 접수되었습니다
        </h3>
        <p className="mb-2 text-lg text-slate-600">
          {formData.name}님, 상담 예약 신청이 완료되었습니다.
        </p>
        <p className="mb-8 text-lg text-slate-600">
          담당 변호사가 확인 후 연락드리겠습니다.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              consultationType: "",
              preferredDate: "",
              preferredTime: "",
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

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-slate-200 bg-white p-8 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-base font-medium text-navy-900">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3.5 text-base text-slate-700 outline-none transition-colors focus:border-gold-400 focus:ring-1 focus:ring-gold-400 ${
              errors.name ? "border-red-400" : "border-slate-200"
            }`}
            placeholder="홍길동"
          />
          {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
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
            className={`w-full rounded-lg border px-4 py-3.5 text-base text-slate-700 outline-none transition-colors focus:border-gold-400 focus:ring-1 focus:ring-gold-400 ${
              errors.phone ? "border-red-400" : "border-slate-200"
            }`}
            placeholder="010-1234-5678"
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
            className="w-full rounded-lg border border-slate-200 px-4 py-3.5 text-base text-slate-700 outline-none transition-colors focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
            placeholder="example@email.com"
          />
        </div>

        {/* Consultation Type */}
        <div>
          <label
            htmlFor="consultationType"
            className="mb-2 block text-base font-medium text-navy-900"
          >
            상담 분야 <span className="text-red-500">*</span>
          </label>
          <select
            id="consultationType"
            name="consultationType"
            value={formData.consultationType}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3.5 text-base text-slate-700 outline-none transition-colors focus:border-gold-400 focus:ring-1 focus:ring-gold-400 ${
              errors.consultationType ? "border-red-400" : "border-slate-200"
            }`}
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

        {/* Preferred Date */}
        <div>
          <label
            htmlFor="preferredDate"
            className="mb-2 block text-base font-medium text-navy-900"
          >
            희망 일자 <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            min={minDate}
            className={`w-full rounded-lg border px-4 py-3.5 text-base text-slate-700 outline-none transition-colors focus:border-gold-400 focus:ring-1 focus:ring-gold-400 ${
              errors.preferredDate ? "border-red-400" : "border-slate-200"
            }`}
          />
          {errors.preferredDate && (
            <p className="mt-1.5 text-sm text-red-500">{errors.preferredDate}</p>
          )}
        </div>

        {/* Preferred Time */}
        <div>
          <label
            htmlFor="preferredTime"
            className="mb-2 block text-base font-medium text-navy-900"
          >
            희망 시간 <span className="text-red-500">*</span>
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3.5 text-base text-slate-700 outline-none transition-colors focus:border-gold-400 focus:ring-1 focus:ring-gold-400 ${
              errors.preferredTime ? "border-red-400" : "border-slate-200"
            }`}
          >
            <option value="">시간을 선택해 주세요</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.preferredTime && (
            <p className="mt-1.5 text-sm text-red-500">{errors.preferredTime}</p>
          )}
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
          className={`w-full rounded-lg border px-4 py-3.5 text-base text-slate-700 outline-none transition-colors focus:border-gold-400 focus:ring-1 focus:ring-gold-400 ${
            errors.message ? "border-red-400" : "border-slate-200"
          }`}
          placeholder="상담받고 싶은 내용을 간략히 작성해 주세요."
        />
        {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-8 w-full rounded-lg bg-gold-400 py-4 text-base font-medium text-navy-950 transition-colors hover:bg-gold-300 md:w-auto md:px-14"
      >
        상담 예약 신청
      </button>
    </form>
  );
}
