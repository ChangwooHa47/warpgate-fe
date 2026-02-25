import type { ReservationData } from "../_lib/types";
import { ALL_TIMES } from "../_lib/constants";

interface ReservationSummaryProps {
  data: ReservationData;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });
}

function formatTime(timeValue: string): string {
  const hour = parseInt(timeValue.split(":")[0], 10);
  const minute = timeValue.split(":")[1];
  const period = hour < 12 ? "오전" : "오후";
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `${period} ${displayHour}:${minute}`;
}

export default function ReservationSummary({ data }: ReservationSummaryProps) {
  const timeOption = ALL_TIMES.find((t) => t.value === data.time);

  return (
    <div className="border border-stone-200 bg-ivory-100 p-5 md:p-6">
      <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">
        예약 요약
      </p>
      <div className="space-y-3">
        {data.partySize && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-stone-500">인원</span>
            <span className="text-sm text-charcoal-700 font-medium">
              {data.partySize}명
            </span>
          </div>
        )}
        {data.date && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-stone-500">날짜</span>
            <span className="text-sm text-charcoal-700 font-medium">
              {formatDate(data.date)}
            </span>
          </div>
        )}
        {data.time && timeOption && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-stone-500">시간</span>
            <span className="text-sm text-charcoal-700 font-medium">
              {formatTime(timeOption.value)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
