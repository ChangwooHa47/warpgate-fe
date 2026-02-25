"use client";

import { useState, useEffect } from "react";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

const MOCK_PRICES: Record<string, string> = {
  "고1 기본반": "450,000",
  "고1 심화반": "480,000",
  "고1 주말반": "280,000",
  "고2 기본반": "450,000",
  "고2 심화반": "480,000",
  "고2 주말반": "280,000",
  "미적분반": "520,000",
  "확률과 통계반": "550,000",
  "기하반": "480,000",
  "수능 파이널반": "600,000",
};

type Step = "info" | "payment" | "done";

export default function EnrollmentModal({ isOpen, onClose, courseName }: EnrollmentModalProps) {
  const [step, setStep] = useState<Step>("info");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [payMethod, setPayMethod] = useState("card");

  const price = MOCK_PRICES[courseName] ?? "400,000";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setStep("info");
      setName("");
      setPhone("");
      setPayMethod("card");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  function handleInfoSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep("payment");
  }

  function handlePayment() {
    setStep("done");
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl max-w-md w-full mx-4 shadow-xl overflow-hidden">
        {/* Progress bar */}
        <div className="flex">
          {["info", "payment", "done"].map((s, i) => (
            <div
              key={s}
              className={`h-1 flex-1 transition-colors duration-300 ${
                i <= ["info", "payment", "done"].indexOf(step) ? "bg-black" : "bg-gray-100"
              }`}
            />
          ))}
        </div>

        <div className="p-8">
          {/* Step 1: Info */}
          {step === "info" && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  수강 신청
                </h3>
                <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors p-1" aria-label="닫기">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 mb-6">
                <div>
                  <p className="text-xs text-gray-400 mb-1">선택 강좌</p>
                  <p className="text-sm font-semibold">{courseName}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-1">월 수강료</p>
                  <p className="text-base font-bold">₩{price}</p>
                </div>
              </div>

              <form onSubmit={handleInfoSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">학생 이름</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">연락처</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white text-sm font-semibold tracking-wide py-3.5 rounded-lg hover:bg-gray-800 transition-colors mt-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  결제하기
                </button>
              </form>
            </>
          )}

          {/* Step 2: Payment */}
          {step === "payment" && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  결제 수단
                </h3>
                <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors p-1" aria-label="닫기">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Order summary */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{courseName}</span>
                  <span className="font-medium">₩{price}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between text-sm">
                  <span className="font-semibold">총 결제 금액</span>
                  <span className="font-bold text-base">₩{price}</span>
                </div>
              </div>

              {/* Payment methods */}
              <div className="space-y-2 mb-6">
                {[
                  { id: "card", label: "신용/체크카드" },
                  { id: "transfer", label: "계좌이체" },
                  { id: "kakao", label: "카카오페이" },
                  { id: "naver", label: "네이버페이" },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPayMethod(method.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg border text-sm transition-colors ${
                      payMethod === method.id
                        ? "border-black bg-gray-50 font-medium"
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        payMethod === method.id ? "border-black" : "border-gray-300"
                      }`}
                    >
                      {payMethod === method.id && <span className="w-2 h-2 rounded-full bg-black" />}
                    </span>
                    {method.label}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep("info")}
                  className="flex-1 text-sm font-semibold tracking-wide py-3.5 rounded-lg border border-gray-300 hover:border-black transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  이전
                </button>
                <button
                  onClick={handlePayment}
                  className="flex-[2] bg-black text-white text-sm font-semibold tracking-wide py-3.5 rounded-lg hover:bg-gray-800 transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  ₩{price} 결제하기
                </button>
              </div>
            </>
          )}

          {/* Step 3: Done */}
          {step === "done" && (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                결제가 완료되었습니다
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                {courseName} 수강 등록이 완료되었습니다.
              </p>
              <p className="text-xs text-gray-400 mb-8">
                수업 안내는 등록된 연락처로 발송됩니다.
              </p>
              <button
                onClick={onClose}
                className="text-sm font-semibold tracking-wide px-8 py-2.5 border border-gray-300 rounded-lg hover:border-black transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                확인
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
