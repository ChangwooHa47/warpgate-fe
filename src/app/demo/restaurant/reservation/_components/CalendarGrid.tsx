import type { CalendarDay } from "../_lib/types";
import { WEEKDAY_HEADERS } from "../_lib/constants";

interface CalendarGridProps {
  days: CalendarDay[];
  monthLabel: string;
  canGoPrev: boolean;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onSelectDate: (dateString: string) => void;
}

export default function CalendarGrid({
  days,
  monthLabel,
  canGoPrev,
  onPrevMonth,
  onNextMonth,
  onSelectDate,
}: CalendarGridProps) {
  return (
    <div className="w-full max-w-sm mx-auto select-none">
      {/* Month navigation header */}
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={onPrevMonth}
          disabled={!canGoPrev}
          aria-label="이전 달"
          className={`w-9 h-9 flex items-center justify-center transition-colors ${
            canGoPrev
              ? "text-charcoal-600 hover:text-charcoal-700 hover:bg-ivory-200"
              : "text-stone-300 cursor-not-allowed"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <span className="text-base font-medium text-charcoal-700 tracking-wide">
          {monthLabel}
        </span>

        <button
          type="button"
          onClick={onNextMonth}
          aria-label="다음 달"
          className="w-9 h-9 flex items-center justify-center text-charcoal-600 hover:text-charcoal-700 hover:bg-ivory-200 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 mb-2">
        {WEEKDAY_HEADERS.map((day, i) => (
          <div
            key={day}
            className={`text-center text-xs tracking-wider py-2 ${
              i === 0 ? "text-red-400/70" : i === 6 ? "text-blue-400/70" : "text-stone-400"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7" role="grid" aria-label="날짜 선택 캘린더">
        {days.map((cell) => {
          const dayOfWeek = cell.date.getDay();
          const isSunday = dayOfWeek === 0 && cell.isCurrentMonth && !cell.isDisabled;
          const isSaturday = dayOfWeek === 6 && cell.isCurrentMonth && !cell.isDisabled;

          return (
            <div key={cell.dateString} className="flex items-center justify-center py-0.5">
              <button
                type="button"
                role="gridcell"
                aria-selected={cell.isSelected}
                aria-disabled={cell.isDisabled}
                aria-label={
                  cell.isCurrentMonth
                    ? `${cell.date.getMonth() + 1}월 ${cell.day}일`
                    : undefined
                }
                disabled={cell.isDisabled}
                onClick={() => !cell.isDisabled && onSelectDate(cell.dateString)}
                className={`
                  relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center
                  text-sm transition-all duration-150
                  ${
                    cell.isSelected
                      ? "bg-warm-500 text-ivory-50 font-medium"
                      : cell.isDisabled
                        ? "text-stone-300 cursor-not-allowed"
                        : cell.isCurrentMonth
                          ? isSunday
                            ? "text-red-400/80 hover:bg-ivory-200"
                            : isSaturday
                              ? "text-blue-400/80 hover:bg-ivory-200"
                              : "text-charcoal-600 hover:bg-ivory-200"
                          : "text-stone-300/50"
                  }
                `}
                style={{ borderRadius: "50%" }}
              >
                {cell.isCurrentMonth && cell.day}

                {/* Today indicator dot */}
                {cell.isToday && !cell.isSelected && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-warm-500"
                    style={{ borderRadius: "50%" }}
                  />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
