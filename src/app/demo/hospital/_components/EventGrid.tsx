"use client";

import { useState } from "react";
import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

interface Event {
  id: number;
  title: string;
  period: string;
  image: null;
  description: string;
  content: string;
}

export default function EventGrid({ events }: { events: Event[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? events : events.slice(0, 3);
  const hasMore = events.length > 3;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {visible.map((event) => (
          <Link key={event.id} href={`/demo/hospital/events/${event.id}`} className="group">
            <div className="relative rounded-xl overflow-hidden mb-3">
              <ImagePlaceholder
                height="220px"
                label="이벤트 배너 이미지"
                className="!rounded-none !border-0 group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="inline-block px-2.5 py-1 text-sm font-bold bg-white/20 backdrop-blur-sm rounded-md mb-2">
                  {event.period}
                </span>
                <h3 className="font-bold text-lg leading-snug">{event.title}</h3>
              </div>
            </div>
            <p className="text-base text-gray-500 truncate px-1">{event.description}</p>
          </Link>
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 text-base text-gray-400 hover:text-[#1265c8] transition font-medium"
          >
            {showAll ? "접기" : `이벤트 더보기 (${events.length - 3}개)`}
            <svg
              className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
