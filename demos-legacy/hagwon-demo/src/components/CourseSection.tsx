"use client";

import { useState } from "react";
import { courseGroups } from "@/data/courses";
import EnrollmentModal from "@/components/EnrollmentModal";

export default function CourseSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalCourse, setModalCourse] = useState<string | null>(null);

  const filteredGroups = courseGroups
    .map((group) => ({
      ...group,
      courses: group.courses.filter((course) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          course.title.toLowerCase().includes(q) ||
          course.description.toLowerCase().includes(q) ||
          course.instructor.toLowerCase().includes(q) ||
          course.topics.some((t) => t.toLowerCase().includes(q)) ||
          group.category.toLowerCase().includes(q)
        );
      }),
    }))
    .filter((group) => group.courses.length > 0);

  return (
    <section className="py-32 px-6 sm:px-10 md:px-16 lg:px-20" id="programs">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <span
            className="text-sm lg:text-base tracking-[0.3em] text-gray-400 uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Courses
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            강좌 소개
          </h2>
        </div>

        {/* Search bar */}
        <div className="relative mb-20">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="강좌명, 강사명, 주제로 검색"
            className="w-full border border-gray-200 rounded-full pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:border-black transition-colors"
          />
        </div>

        {/* Course groups */}
        {filteredGroups.length > 0 ? (
          <div className="space-y-24">
            {filteredGroups.map((group) => (
              <div key={group.id} id={`course-${group.id}`} className="scroll-mt-28">
                {/* Category header */}
                <div className="mb-4">
                  <div className="flex items-end gap-4">
                    <span
                      className="text-sm lg:text-base text-gray-300 font-medium"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {group.id}
                    </span>
                    <h3
                      className="text-2xl md:text-3xl lg:text-4xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {group.category}
                    </h3>
                  </div>
                  <p className="text-base lg:text-lg text-gray-500 mt-3 max-w-2xl">
                    {group.description}
                  </p>
                </div>

                {/* Course cards within group */}
                <div className="border-t border-gray-200 mt-8">
                  {group.courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="py-10 lg:py-14 border-b border-gray-200"
                    >
                      {/* Row 1: Title + badge + button */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <h4 className="text-xl lg:text-2xl font-bold">
                            {course.title}
                          </h4>
                          {course.badge && (
                            <span className="text-xs font-medium text-white bg-black rounded-full px-2.5 py-0.5">
                              {course.badge}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => setModalCourse(course.title)}
                          className="flex items-center gap-2 bg-white text-black border border-gray-300 px-5 py-2.5 rounded-lg hover:border-black transition-colors shrink-0"
                        >
                          <span
                            className="text-xs font-semibold tracking-wide"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            수강 신청
                          </span>
                          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                      {/* Row 2: Description */}
                      <p className="text-base lg:text-lg text-gray-600 leading-[1.8] mb-6 max-w-3xl">
                        {course.description}
                      </p>

                      {/* Row 3: Meta info (horizontal) + topics */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex flex-wrap gap-x-8 gap-y-3">
                          <div className="flex items-baseline gap-2">
                            <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider">
                              담당
                            </p>
                            <p className="text-sm lg:text-base font-medium">
                              {course.instructor}
                            </p>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider">
                              시간
                            </p>
                            <p className="text-sm lg:text-base font-medium">
                              {course.schedule}
                            </p>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <p className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider">
                              규모
                            </p>
                            <p className="text-sm lg:text-base font-medium">
                              {course.capacity}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {course.topics.map((topic) => (
                            <span
                              key={topic}
                              className="text-xs lg:text-sm text-gray-500 border border-gray-200 rounded-full px-3 py-1"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">검색 결과가 없습니다</p>
            <p className="text-gray-300 text-sm mt-2">다른 검색어를 입력해 보세요</p>
          </div>
        )}
      </div>

      <EnrollmentModal
        isOpen={modalCourse !== null}
        onClose={() => setModalCourse(null)}
        courseName={modalCourse ?? ""}
      />
    </section>
  );
}
