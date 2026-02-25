"use client";

import { useState } from "react";
import type { Case } from "@/types";

const categoryColor: Record<string, string> = {
  민사: "bg-blue-50 text-blue-700",
  형사: "bg-red-50 text-red-700",
  기업법무: "bg-violet-50 text-violet-700",
  부동산: "bg-green-50 text-green-700",
  "이혼/가사": "bg-pink-50 text-pink-700",
  상속: "bg-amber-50 text-amber-700",
};

export default function CaseCard({ caseItem }: { caseItem: Case }) {
  const [open, setOpen] = useState(false);
  const colorClass = categoryColor[caseItem.category] || "bg-slate-50 text-slate-700";
  const hasDetail = !!caseItem.detail;

  return (
    <div className={open ? "col-span-full" : ""}>
      <div
        className={`rounded-lg border border-slate-200 bg-white p-8 shadow-sm ${hasDetail ? "cursor-pointer" : ""}`}
        onClick={() => hasDetail && setOpen(!open)}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className={`rounded-full px-4 py-1.5 text-sm font-medium ${colorClass}`}>
            {caseItem.category}
          </span>
          <span className="text-sm text-slate-400">{caseItem.year}</span>
        </div>

        <h3 className="mb-3 font-serif text-xl font-bold text-navy-900">
          {caseItem.title}
        </h3>

        <p className="mb-4 text-base leading-relaxed text-slate-600">
          {caseItem.summary}
        </p>

        {open && caseItem.detail && (
          <div className="mb-4 grid gap-4 border-t border-slate-100 pt-4 md:grid-cols-2">
            <div>
              <h4 className="mb-1 text-sm font-bold text-navy-800">경위</h4>
              <p className="text-sm leading-relaxed text-slate-600">{caseItem.detail.background}</p>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-bold text-navy-800">사건의 특징</h4>
              <p className="text-sm leading-relaxed text-slate-600">{caseItem.detail.characteristics}</p>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-bold text-navy-800">조력 내용</h4>
              <p className="text-sm leading-relaxed text-slate-600">{caseItem.detail.assistance}</p>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-bold text-navy-800">사건의 결과</h4>
              <p className="text-sm leading-relaxed text-slate-600">{caseItem.detail.outcome}</p>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-bold text-navy-800">사건결과의 의의</h4>
              <p className="text-sm leading-relaxed text-slate-600">{caseItem.detail.significance}</p>
            </div>
            <div className="flex items-end">
              <div className="rounded-lg bg-slate-50 px-4 py-3">
                <span className="text-sm text-slate-400">담당 변호사: </span>
                <span className="text-sm font-medium text-navy-800">{caseItem.detail.attorney}</span>
              </div>
            </div>
          </div>
        )}

        <div className="rounded-lg bg-gold-50 p-4 flex items-center justify-between">
          <p className="text-base font-medium text-gold-600">
            결과: {caseItem.result}
          </p>
          {hasDetail && (
            <span className="text-sm text-gold-400">
              {open ? "접기" : "자세히"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
