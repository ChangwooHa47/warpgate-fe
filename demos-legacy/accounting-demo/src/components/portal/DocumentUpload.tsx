"use client";

import { useState } from "react";
import { mockDocuments } from "@/data/mock-documents";

const documentTypes = [
  "매출자료",
  "매입자료",
  "급여대장",
  "통장거래내역",
  "사업자등록증",
  "기타",
];

const statusColors: Record<string, string> = {
  접수완료: "bg-blue-100 text-blue-700",
  검토중: "bg-amber-100 text-amber-700",
  처리완료: "bg-green-100 text-green-700",
};

export default function DocumentUpload() {
  const [selectedType, setSelectedType] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleUpload = () => {
    if (selectedType) {
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }
  };

  return (
    <div className="space-y-8">
      {/* Upload Area */}
      <div className="rounded-lg border border-slate-200 bg-white p-8">
        <h3 className="mb-6 text-lg font-bold text-navy-900">서류 제출</h3>

        <div className="mb-6">
          <label htmlFor="docType" className="mb-2 block text-base font-medium text-navy-900">
            서류 유형
          </label>
          <select
            id="docType"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-3.5 text-base text-slate-700 outline-none transition-colors focus:border-accent-400 focus:ring-1 focus:ring-accent-400 md:w-80"
          >
            <option value="">유형을 선택해 주세요</option>
            {documentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Drop zone */}
        <div className="rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center transition-colors hover:border-accent-400 hover:bg-accent-50/30">
          <div className="mb-4 text-4xl text-slate-400">📁</div>
          <p className="mb-2 text-base font-medium text-slate-700">
            파일을 여기에 끌어다 놓거나
          </p>
          <button
            onClick={handleUpload}
            className="rounded bg-accent-400 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-300"
          >
            파일 선택
          </button>
          <p className="mt-3 text-sm text-slate-400">
            PDF, Excel, CSV, 이미지 파일 (최대 50MB)
          </p>
        </div>

        {uploadSuccess && (
          <div className="mt-4 rounded-lg bg-green-50 p-4 text-sm font-medium text-green-700">
            ✓ 파일이 성공적으로 제출되었습니다.
          </div>
        )}
      </div>

      {/* Submitted Documents */}
      <div className="rounded-lg border border-slate-200 bg-white p-8">
        <h3 className="mb-6 text-lg font-bold text-navy-900">제출 내역</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 text-sm font-medium text-slate-500">
                <th className="pb-3 pr-4">파일명</th>
                <th className="pb-3 pr-4">유형</th>
                <th className="pb-3 pr-4">제출일</th>
                <th className="pb-3 pr-4">크기</th>
                <th className="pb-3">상태</th>
              </tr>
            </thead>
            <tbody>
              {mockDocuments.map((doc) => (
                <tr
                  key={doc.id}
                  className="border-b border-slate-100 text-base text-slate-700 last:border-0"
                >
                  <td className="py-4 pr-4 font-medium">{doc.name}</td>
                  <td className="py-4 pr-4 text-sm text-slate-500">{doc.type}</td>
                  <td className="py-4 pr-4 text-sm text-slate-500">{doc.submittedDate}</td>
                  <td className="py-4 pr-4 text-sm text-slate-500">{doc.fileSize}</td>
                  <td className="py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${statusColors[doc.status]}`}
                    >
                      {doc.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
