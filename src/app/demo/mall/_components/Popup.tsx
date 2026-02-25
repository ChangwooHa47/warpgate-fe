"use client";

import { useState, useEffect } from "react";

const POPUP_DISMISS_KEY = "premia_popup_dismissed";

export default function Popup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(POPUP_DISMISS_KEY);
    if (dismissed) {
      const dismissedDate = new Date(dismissed).toDateString();
      const today = new Date().toDateString();
      if (dismissedDate === today) return;
    }
    const timer = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setOpen(false);

  const handleDismissToday = () => {
    localStorage.setItem(POPUP_DISMISS_KEY, new Date().toISOString());
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={handleClose}
      />

      {/* Popup content */}
      <div className="relative bg-white w-full max-w-[420px] animate-scale-in shadow-2xl">
        {/* Image area */}
        <div
          className="aspect-[4/3] flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #f5f0eb 0%, #e8e0d8 100%)",
          }}
        >
          <div className="text-center p-8">
            <p
              className="text-[#b8965a] text-xs tracking-[0.3em] mb-4"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              PREMIA
            </p>
            <h3
              className="text-2xl md:text-3xl text-gray-800 font-light leading-snug"
            >
              2026 설 연휴
              <br />
              영업일 안내
            </h3>
            <div className="w-10 h-[1px] bg-[#b8965a] mx-auto my-5" />
            <div className="text-sm text-gray-600 space-y-1.5">
              <p>
                <span className="text-gray-400 text-xs">설 연휴 휴무</span>
              </p>
              <p className="font-medium">1월 28일(화) ~ 1월 30일(목)</p>
              <p className="mt-3">
                <span className="text-gray-400 text-xs">정상 영업</span>
              </p>
              <p className="font-medium">1월 31일(금)부터</p>
            </div>
            <button className="mt-6 bg-[#b8965a] text-white text-sm px-6 py-2.5 hover:bg-[#96783e] transition-colors">
              자세히보기
            </button>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
          <button
            onClick={handleDismissToday}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            오늘 하루 열지 않음
          </button>
          <button
            onClick={handleClose}
            className="text-xs text-gray-600 hover:text-black transition-colors flex items-center gap-1"
          >
            닫기
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
