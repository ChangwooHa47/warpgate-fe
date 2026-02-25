"use client";

import { useState } from "react";
import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

interface Procedure {
  name: string;
  desc: string;
}

interface Department {
  slug: string;
  name: string;
  category: string;
  summary: string;
  procedures: Procedure[];
}

interface Category {
  id: string;
  name: string;
}

export default function DepartmentTabs({
  categories,
  departments,
}: {
  categories: Category[];
  departments: Department[];
}) {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const filtered = departments.filter((d) => d.category === activeTab);

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex border-b border-gray-200 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-6 py-3 text-sm font-bold transition-colors relative ${
              activeTab === cat.id
                ? "text-[var(--primary)]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {cat.name}
            {activeTab === cat.id && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--primary)]" />
            )}
          </button>
        ))}
      </div>

      {/* Department cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((dept) => (
          <Link
            key={dept.slug}
            href={`/demo/hospital/departments/${dept.slug}`}
            className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.06)] hover:shadow-[0_0_24px_rgba(0,0,0,0.12)]"
          >
            <div className="flex h-full">
              {/* Thumbnail */}
              <div className="w-36 md:w-44 shrink-0 bg-gradient-to-b from-gray-100 to-gray-50">
                <ImagePlaceholder
                  height="100%"
                  label={dept.name}
                  className="!rounded-none !border-0 h-full min-h-[160px]"
                />
              </div>

              {/* Info */}
              <div className="flex-1 p-5 min-w-0 flex flex-col">
                <h3 className="font-bold text-base group-hover:text-[#1265c8] transition mb-1.5">
                  {dept.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{dept.summary}</p>

                {/* Sub-procedures */}
                <div className="space-y-1">
                  {dept.procedures.map((proc, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[var(--primary)] shrink-0" />
                      <div className="min-w-0">
                        <span className="text-sm font-semibold text-gray-600">
                          {proc.name}
                        </span>
                        <span className="text-sm text-gray-400 ml-1.5">
                          {proc.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <span className="mt-auto pt-3 self-end text-xs font-semibold text-gray-400 group-hover:text-[#1265c8] transition-colors">
                  자세히 보기 &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
