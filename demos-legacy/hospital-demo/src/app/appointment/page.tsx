"use client";

import { useState } from "react";
import { SITE, DEPARTMENTS } from "@/data/siteData";
import PageHero from "@/components/PageHero";
import CustomSelect from "@/components/CustomSelect";

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
];

const inputClass =
  "w-full border border-gray-200 rounded-md px-4 py-3 text-base bg-white placeholder:text-gray-300 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 transition";

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
    time: "",
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
        <PageHero title="진료 예약" subtitle="온라인 진료 예약" />
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2 tracking-tight">예약 신청이 완료되었습니다</h2>
          <p className="text-base text-gray-400 mb-8">
            확인 후 연락드리겠습니다. 감사합니다.
          </p>
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
                setForm({ name: "", phone: "", department: "", date: "", time: "", message: "" });
              }}
              className="text-base font-medium text-[var(--accent)] hover:underline"
            >
              새로운 예약하기
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero title="진료 예약" subtitle="온라인으로 편리하게 예약하세요" />

      <div className="max-w-4xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
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
                placeholder="이름을 입력해주세요"
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
                placeholder="010-0000-0000"
              />
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-700 mb-2">
                진료 항목 <span className="text-red-400">*</span>
              </label>
              <CustomSelect
                name="department"
                required
                value={form.department}
                onChange={(val) => setForm({ ...form, department: val })}
                options={[
                  ...DEPARTMENTS.map((dept) => ({ value: dept.name, label: dept.name })),
                  { value: "기타", label: "기타" },
                ]}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  희망 날짜 <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">
                  희망 시간 <span className="text-red-400">*</span>
                </label>
                <CustomSelect
                  name="time"
                  required
                  value={form.time}
                  onChange={(val) => setForm({ ...form, time: val })}
                  placeholder="선택"
                  options={TIME_SLOTS.map((t) => ({ value: t, label: t }))}
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-700 mb-2">
                추가 메시지
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="증상이나 문의사항을 입력해주세요"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white py-3.5 rounded-full text-sm font-bold hover:brightness-90 active:scale-[0.99] transition-all"
              style={{ backgroundColor: '#1265c8', color: 'white' }}
            >
              예약 신청
            </button>
          </form>

          {/* Sidebar info */}
          <aside className="space-y-5 md:mt-9">
            <div className="bg-white border border-gray-200 rounded-xl py-6 px-7 shadow-[0_0_20px_rgba(0,0,0,0.06)]">
              <h3 className="font-bold text-base mb-3">예약 안내</h3>
              <p className="text-sm text-gray-400 leading-relaxed">온라인 예약 접수 후 담당 직원이 확인하여 예약을 확정해 드립니다. 당일 예약은 전화 문의 바랍니다.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl py-6 px-7 shadow-[0_0_20px_rgba(0,0,0,0.06)]">
              <h3 className="font-bold text-base mb-3">전화 예약</h3>
              <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="text-lg font-bold text-[var(--primary)] hover:underline block">
                {SITE.phone}
              </a>
              <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">평일 09:00 ~ 18:00<br />토요일 09:00 ~ 13:00</p>
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
