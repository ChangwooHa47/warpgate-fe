"use client";

import { useState } from "react";
import Link from "next/link";
import { generateScheduleBlocks, CATEGORY_COLORS, courseGroups, type ScheduleBlock } from "@/data/courses";

const DAYS = ["월", "화", "수", "목", "금", "토", "일"];

const TIME_SLOTS = [
  { label: "오전", time: "09:00 - 12:00", start: "09:00", end: "12:00" },
  { label: "오후", time: "14:00 - 17:00", start: "14:00", end: "17:00" },
  { label: "저녁", time: "19:00 - 22:00", start: "19:00", end: "22:00" },
];

function getBlocksForSlot(blocks: ScheduleBlock[], day: string, slotStart: string, slotEnd: string) {
  return blocks.filter(
    (b) => b.day === day && b.startTime === slotStart && b.endTime === slotEnd
  );
}

export default function ScheduleSection() {
  const [selectedDay, setSelectedDay] = useState("월");
  const blocks = generateScheduleBlocks();

  const variableCourses = courseGroups
    .flatMap((g) =>
      g.courses
        .filter((c) => c.schedule.includes("시험") || c.schedule.includes("문의"))
        .map((c) => ({ ...c, category: g.category, categoryId: g.id }))
    );

  return (
    <section className="py-32 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span
            className="text-sm lg:text-base tracking-[0.3em] text-gray-400 uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Schedule
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            주간 시간표
          </h2>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mb-10">
          {courseGroups.filter((g) => g.id !== "04").map((group) => {
            const colors = CATEGORY_COLORS[group.id];
            return (
              <div key={group.id} className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
                <span className="text-xs text-gray-500">{group.category}</span>
              </div>
            );
          })}
        </div>

        {/* Desktop: Slot-based table */}
        <div className="hidden md:block">
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            {/* Day header row */}
            <div className="grid grid-cols-[80px_repeat(7,1fr)] bg-gray-50 border-b border-gray-200">
              <div />
              {DAYS.map((day) => (
                <div key={day} className="py-3 text-center border-l border-gray-200">
                  <span
                    className="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {day}
                  </span>
                </div>
              ))}
            </div>

            {/* Time slot rows */}
            {TIME_SLOTS.map((slot, slotIdx) => (
              <div
                key={slot.label}
                className={`grid grid-cols-[80px_repeat(7,1fr)] ${slotIdx < TIME_SLOTS.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                {/* Time label */}
                <div className="py-4 px-3 flex flex-col items-center justify-start border-r border-gray-200 bg-gray-50">
                  <span className="text-[11px] font-semibold text-gray-400" style={{ fontFamily: "var(--font-display)" }}>
                    {slot.label}
                  </span>
                  <span className="text-[10px] text-gray-300 mt-0.5" style={{ fontFamily: "var(--font-display)" }}>
                    {slot.time}
                  </span>
                </div>

                {/* Day cells */}
                {DAYS.map((day) => {
                  const cellBlocks = getBlocksForSlot(blocks, day, slot.start, slot.end);
                  return (
                    <div
                      key={day}
                      className="border-l border-gray-200 p-1.5 min-h-[80px]"
                    >
                      {cellBlocks.length > 0 ? (
                        <div className="relative" style={{ minHeight: `${64 + (cellBlocks.length - 1) * 24}px` }}>
                          {cellBlocks.map((block, idx) => {
                            const colors = CATEGORY_COLORS[block.categoryId];
                            return (
                              <Link
                                href={`/courses#course-${block.categoryId}`}
                                key={idx}
                                className={`block rounded-lg p-2.5 ${colors.bg} ${colors.border} border shadow-sm hover:shadow-lg hover:z-30 hover:-translate-y-0.5 transition-all relative`}
                                style={{
                                  zIndex: idx + 1,
                                  marginTop: idx > 0 ? "-12px" : "0",
                                }}
                              >
                                <p className={`text-[10px] ${colors.text} opacity-70 leading-tight`}>
                                  {block.category}
                                </p>
                                <p className={`text-xs font-bold ${colors.text} leading-tight mt-0.5`}>
                                  {block.course.title}
                                </p>
                                <p className="text-[11px] text-gray-500 mt-1">
                                  {block.course.instructor} · {block.course.capacity}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="h-full" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Day tabs + slot cards */}
        <div className="md:hidden">
          {/* Day tabs */}
          <div className="flex gap-1 mb-8 overflow-x-auto">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDay === day
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Slots for selected day */}
          {(() => {
            const dayHasBlocks = TIME_SLOTS.some(
              (slot) => getBlocksForSlot(blocks, selectedDay, slot.start, slot.end).length > 0
            );

            if (!dayHasBlocks) {
              return (
                <div className="text-center py-16">
                  <p className="text-gray-300 text-base">이 요일에는 수업이 없습니다</p>
                </div>
              );
            }

            return (
              <div className="space-y-6">
                {TIME_SLOTS.map((slot) => {
                  const cellBlocks = getBlocksForSlot(blocks, selectedDay, slot.start, slot.end);
                  if (cellBlocks.length === 0) return null;
                  return (
                    <div key={slot.label}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
                          {slot.label}
                        </span>
                        <span className="text-[11px] text-gray-300" style={{ fontFamily: "var(--font-display)" }}>
                          {slot.time}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {cellBlocks.map((block, idx) => {
                          const colors = CATEGORY_COLORS[block.categoryId];
                          return (
                            <Link
                              href={`/courses#course-${block.categoryId}`}
                              key={idx}
                              className={`block rounded-xl p-5 ${colors.bg} ${colors.border} border hover:shadow-md transition-shadow`}
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <p className={`text-sm font-bold ${colors.text}`}>
                                    {block.course.title}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {block.course.instructor} · {block.course.capacity}
                                  </p>
                                </div>
                                <span className="text-xs text-gray-400">{block.category}</span>
                              </div>
                              <div className="flex flex-wrap gap-1.5 mt-3">
                                {block.course.topics.slice(0, 3).map((topic) => (
                                  <span
                                    key={topic}
                                    className={`text-[10px] ${colors.text} opacity-70 border ${colors.border} rounded-full px-2 py-0.5`}
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>

        {/* Variable schedule notice */}
        {variableCourses.length > 0 && (
          <div className="mt-16 border border-violet-200 bg-violet-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2.5 h-2.5 rounded-full ${CATEGORY_COLORS["04"].dot}`} />
              <h4 className="text-sm font-bold text-violet-700">내신 특강</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              시험 4주 전 개강하며, 학교·학년별로 반이 편성됩니다. 정확한 일정은 상담을 통해 확인해 주세요.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {variableCourses.map((c) => (
                <span
                  key={c.title}
                  className="text-xs text-violet-600 border border-violet-200 rounded-full px-3 py-1"
                >
                  {c.title}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
