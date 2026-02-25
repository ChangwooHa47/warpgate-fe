"use client";

import { useState, useEffect } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setName("");
      setPhone("");
      setGrade("");
      setMessage("");
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl">
        {!submitted ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                상담 신청
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-black transition-colors p-1"
                aria-label="닫기"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">학년</label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors appearance-none bg-white"
                >
                  <option value="">선택해 주세요</option>
                  <option value="고1">고1</option>
                  <option value="고2">고2</option>
                  <option value="고3">고3</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">
                  문의 사항 <span className="normal-case tracking-normal text-gray-300">(선택)</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="궁금한 점을 남겨주세요"
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white text-sm font-semibold tracking-wide py-3.5 rounded-lg hover:bg-gray-800 transition-colors mt-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                상담 신청하기
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              상담 신청이 완료되었습니다
            </h3>
            <p className="text-sm text-gray-500 mb-8">
              빠른 시일 내에 연락드리겠습니다.
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
  );
}
