"use client";

import { useState, type FormEvent } from "react";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import Textarea from "@/components/form/Textarea";
import Button from "@/components/Button";

interface FormData {
  name: string;
  phone: string;
  email: string;
  program: string;
  membership: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  program?: string;
  membership?: string;
}

const PROGRAM_OPTIONS = [
  { value: "weight", label: "웨이트 트레이닝" },
  { value: "cardio", label: "유산소 프로그램" },
  { value: "group", label: "그룹 운동" },
  { value: "pt", label: "PT (개인 트레이닝)" },
  { value: "fatloss", label: "8 Week Fat Loss Program" },
  { value: "bodyprofile", label: "Body Profile Package" },
  { value: "beginner", label: "Beginner Start Program" },
  { value: "all", label: "전체 이용" },
];

const MEMBERSHIP_OPTIONS = [
  { value: "1month", label: "1개월 — ₩150,000" },
  { value: "3month", label: "3개월 — ₩420,000" },
  { value: "6month", label: "6개월 — ₩780,000" },
  { value: "12month", label: "12개월 — ₩1,380,000" },
];

const initial: FormData = {
  name: "",
  phone: "",
  email: "",
  program: "",
  membership: "",
  notes: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "이름을 입력해 주세요.";
  }

  if (!data.phone.trim()) {
    errors.phone = "전화번호를 입력해 주세요.";
  } else {
    const isPhone = /^[\d\s\-+()]{9,}$/.test(data.phone);
    if (!isPhone) {
      errors.phone = "올바른 전화번호를 입력해 주세요. (예: 010-0000-0000)";
    }
  }

  if (data.email.trim()) {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    if (!isEmail) {
      errors.email = "올바른 이메일 주소를 입력해 주세요.";
    }
  }

  if (!data.program) {
    errors.program = "관심 프로그램을 선택해 주세요.";
  }

  if (!data.membership) {
    errors.membership = "이용권을 선택해 주세요.";
  }

  return errors;
}

export default function RegisterForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-night-600 bg-night-800 p-8 md:p-12 text-center">
        <div className="mb-6 text-mint-400">
          <svg
            className="mx-auto"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl text-steel-100 mb-4">
          등록 요청이 접수되었습니다
        </h2>
        <p className="text-sm text-steel-400 leading-relaxed mb-2">
          {form.name}님, 감사합니다.
        </p>
        <p className="text-sm text-steel-400 leading-relaxed mb-2">
          <strong className="text-steel-200 font-medium">
            {PROGRAM_OPTIONS.find((p) => p.value === form.program)?.label}
          </strong>
          {" / "}
          <strong className="text-steel-200 font-medium">
            {MEMBERSHIP_OPTIONS.find((m) => m.value === form.membership)?.label}
          </strong>
          을 선택하셨습니다.
        </p>
        <p className="text-sm text-steel-500 mb-8">
          24시간 이내에 담당자가 연락드리겠습니다.
        </p>
        <Button
          variant="secondary"
          onClick={() => {
            setSubmitted(false);
            setForm(initial);
          }}
        >
          새로 등록하기
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="border border-night-600 bg-night-800/60 p-6 md:p-10">
        {/* Step 1 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-6 h-6 bg-mint-500 text-night-950 text-xs font-bold">
              1
            </span>
            <h3 className="text-sm font-semibold text-steel-200 tracking-wide">
              기본 정보
            </h3>
          </div>
          <div className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="이름"
                name="name"
                type="text"
                placeholder="홍길동"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                required
                autoComplete="name"
              />
              <Input
                label="전화번호"
                name="phone"
                type="tel"
                placeholder="010-0000-0000"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
                required
                autoComplete="tel"
              />
            </div>
            <Input
              label="이메일 (선택)"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              autoComplete="email"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-6 h-6 bg-mint-500 text-night-950 text-xs font-bold">
              2
            </span>
            <h3 className="text-sm font-semibold text-steel-200 tracking-wide">
              프로그램 선택
            </h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Select
              label="관심 프로그램"
              name="program"
              options={PROGRAM_OPTIONS}
              placeholder="프로그램을 선택해 주세요"
              value={form.program}
              onChange={handleChange}
              error={errors.program}
              required
            />
            <Select
              label="이용권"
              name="membership"
              options={MEMBERSHIP_OPTIONS}
              placeholder="이용권을 선택해 주세요"
              value={form.membership}
              onChange={handleChange}
              error={errors.membership}
              required
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-6 h-6 bg-mint-500 text-night-950 text-xs font-bold">
              3
            </span>
            <h3 className="text-sm font-semibold text-steel-200 tracking-wide">
              요청사항
            </h3>
          </div>
          <Textarea
            label="문의 및 요청사항 (선택)"
            name="notes"
            placeholder="문의사항이나 요청사항을 적어주세요"
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        <div className="border-t border-night-600 pt-6">
          <Button type="submit" className="w-full">
            등록 요청하기
          </Button>
        </div>
      </div>
    </form>
  );
}
