"use client";

import { useState } from "react";
import { SITE } from "@/data/siteData";
import PageHero from "@/components/PageHero";
import CustomSelect from "@/components/CustomSelect";

const inputClass =
  "w-full border border-gray-200 rounded-md px-4 py-3 text-base bg-white placeholder:text-gray-300 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 transition";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHero title="상담·문의" />
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2 tracking-tight">문의가 접수되었습니다</h2>
          <p className="text-base text-gray-400 mb-8">확인 후 연락드리겠습니다.</p>
          <div className="flex justify-center gap-4">
            <a
              href="/"
              className="text-base font-medium text-gray-400 hover:text-gray-600 transition"
            >
              홈으로
            </a>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", phone: "", email: "", subject: "", message: "" });
              }}
              className="text-base font-medium text-[var(--accent)] hover:underline"
            >
              새로운 문의하기
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero title="상담·문의" subtitle="궁금하신 사항을 문의해주세요" />

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  이름 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  연락처 <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-700 mb-2">
                문의 유형 <span className="text-red-400">*</span>
              </label>
              <CustomSelect
                name="subject"
                required
                value={form.subject}
                onChange={(val) => setForm({ ...form, subject: val })}
                options={[
                  { value: "진료 상담", label: "진료 상담" },
                  { value: "수술 상담", label: "수술 상담" },
                  { value: "비용 문의", label: "비용 문의" },
                  { value: "기타 문의", label: "기타 문의" },
                ]}
              />
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-700 mb-2">
                문의 내용 <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="문의 내용을 입력해주세요"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white py-3.5 rounded-full text-sm font-bold hover:brightness-90 active:scale-[0.99] transition-all"
              style={{ backgroundColor: '#1265c8', color: 'white' }}
            >
              문의하기
            </button>
          </form>

          {/* Sidebar */}
          <aside className="space-y-5 md:mt-9">
            <div className="bg-white border border-gray-200 rounded-xl py-6 px-7 shadow-[0_0_20px_rgba(0,0,0,0.06)]">
              <h3 className="font-bold text-base mb-3">전화 문의</h3>
              <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="text-lg font-bold text-[var(--primary)] hover:underline block">
                {SITE.phone}
              </a>
              <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">평일 09:00 ~ 18:00<br />토요일 09:00 ~ 13:00</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl py-6 px-7 shadow-[0_0_20px_rgba(0,0,0,0.06)]">
              <h3 className="font-bold text-base mb-3">카카오톡 상담</h3>
              <p className="text-base text-gray-500">
                카카오톡 ID: <strong className="text-gray-700">{SITE.kakao}</strong>
              </p>
              <p className="text-sm text-gray-400 mt-1.5">카카오톡 채널에서 문의하시면 빠른 답변을 드립니다.</p>
            </div>

            <div className="bg-gradient-to-br from-[var(--primary-light)] to-[var(--accent-light)] rounded-xl py-6 px-7">
              <h3 className="font-bold text-base mb-3">진료 시간</h3>
              <ul className="text-sm text-gray-500 space-y-1.5">
                <li className="flex">
                  <span>평일</span>
                  <span className="ml-auto">{SITE.hours.weekday}</span>
                </li>
                <li className="flex">
                  <span>토요일</span>
                  <span className="ml-auto">{SITE.hours.saturday}</span>
                </li>
                <li className="flex">
                  <span>점심</span>
                  <span className="ml-auto">{SITE.hours.lunch}</span>
                </li>
                <li className="flex text-gray-400">
                  <span>일요일·공휴일</span>
                  <span className="ml-auto text-red-400">휴진</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
