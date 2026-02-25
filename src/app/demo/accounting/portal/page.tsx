"use client";

import { useState } from "react";
import { MOCK_USER } from "../_lib/constants";
import DocumentUpload from "../_components/portal/DocumentUpload";
import ProgressTracker from "../_components/portal/ProgressTracker";

const tabs = [
  { id: "documents", label: "서류 제출" },
  { id: "progress", label: "진행 현황" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState<TabId>("documents");

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-medium tracking-wider text-accent-400 uppercase">
            Client Portal
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            고객 포털
          </h1>
          <div className="divider mb-6" />
          <p className="text-lg text-slate-300">
            안녕하세요, <span className="font-medium text-white">{MOCK_USER.name} {MOCK_USER.title}</span>.{" "}
            서류 제출 및 진행 현황을 확인하세요.
          </p>
        </div>
      </section>

      {/* Portal Content */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          {/* Tab Navigation */}
          <div className="mb-8 flex gap-1 rounded-lg border border-slate-200 bg-white p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 rounded-md px-4 py-3 text-base font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-accent-400 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-navy-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "documents" && <DocumentUpload />}
          {activeTab === "progress" && <ProgressTracker />}
        </div>
      </section>
    </>
  );
}
