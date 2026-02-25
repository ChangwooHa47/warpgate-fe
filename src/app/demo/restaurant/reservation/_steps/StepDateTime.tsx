import useCalendar from "../_hooks/useCalendar";
import CalendarGrid from "../_components/CalendarGrid";
import { LUNCH_TIMES, DINNER_TIMES } from "../_lib/constants";
import ErrorText from "../../_components/form/ErrorText";

interface StepDateTimeProps {
  date: string | null;
  time: string | null;
  onDateChange: (dateString: string) => void;
  onTimeChange: (time: string) => void;
  dateError?: string;
  timeError?: string;
}

function TimeSlotGroup({
  label,
  icon,
  times,
  selected,
  onSelect,
}: {
  label: string;
  icon: React.ReactNode;
  times: { value: string; label: string }[];
  selected: string | null;
  onSelect: (time: string) => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-stone-400">{icon}</span>
        <span className="text-xs tracking-[0.2em] uppercase text-stone-400">
          {label}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {times.map((t) => {
          const isSelected = selected === t.value;
          return (
            <button
              key={t.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(t.value)}
              className={`
                py-2.5 text-sm text-center border transition-all duration-200
                ${
                  isSelected
                    ? "border-warm-500 bg-warm-500 text-ivory-50 font-medium"
                    : "border-stone-200 bg-ivory-50 text-charcoal-600 hover:border-stone-400 hover:bg-ivory-100"
                }
              `}
            >
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function StepDateTime({
  date,
  time,
  onDateChange,
  onTimeChange,
  dateError,
  timeError,
}: StepDateTimeProps) {
  const calendar = useCalendar(date);

  const sunIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" /><path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" /><path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );

  const moonIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );

  return (
    <div className="md:flex md:gap-10 md:items-start">
      {/* Left: Calendar */}
      <div className="md:flex-1">
        <CalendarGrid
          days={calendar.days}
          monthLabel={calendar.monthLabel}
          canGoPrev={calendar.canGoPrev}
          onPrevMonth={calendar.goToPrevMonth}
          onNextMonth={calendar.goToNextMonth}
          onSelectDate={onDateChange}
        />
        {dateError && (
          <div className="mt-3 text-center">
            <ErrorText>{dateError}</ErrorText>
          </div>
        )}

        {/* Selected date - mobile only */}
        {date && (
          <p className="text-sm text-center mt-4 md:hidden">
            <span className="text-charcoal-700 font-medium">
              {new Date(date + "T00:00:00").toLocaleDateString("ko-KR", {
                month: "long",
                day: "numeric",
                weekday: "short",
              })}
            </span>
          </p>
        )}
      </div>

      {/* Right: Time picker (desktop: always visible, mobile: after date select) */}
      <div
        className={`
          md:flex-1 md:border-l md:border-stone-200 md:pl-10 md:min-h-[360px]
          ${date ? "mt-8 md:mt-0" : "hidden md:flex md:items-center md:justify-center"}
        `}
      >
        {date ? (
          <div className="animate-slide-down md:animate-none">
            {/* Selected date - desktop */}
            <p className="text-sm mb-6 hidden md:block">
              <span className="text-charcoal-700 font-medium">
                {new Date(date + "T00:00:00").toLocaleDateString("ko-KR", {
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                })}
              </span>
            </p>

            {/* Divider - mobile only */}
            <div className="flex items-center gap-4 mb-6 md:hidden">
              <div className="flex-1 h-px bg-stone-200" />
              <span className="text-xs tracking-[0.15em] text-stone-400">시간 선택</span>
              <div className="flex-1 h-px bg-stone-200" />
            </div>

            {/* Time slots */}
            <div className="space-y-5" role="radiogroup" aria-label="시간 선택">
              <TimeSlotGroup
                label="점심"
                icon={sunIcon}
                times={LUNCH_TIMES}
                selected={time}
                onSelect={onTimeChange}
              />

              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-stone-100" />
                <span className="text-[11px] text-stone-300">Break</span>
                <div className="flex-1 h-px bg-stone-100" />
              </div>

              <TimeSlotGroup
                label="저녁"
                icon={moonIcon}
                times={DINNER_TIMES}
                selected={time}
                onSelect={onTimeChange}
              />
            </div>

            {timeError && (
              <div className="mt-3 text-center">
                <ErrorText>{timeError}</ErrorText>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-stone-400 text-center">
            날짜를 먼저 선택해 주세요
          </p>
        )}
      </div>
    </div>
  );
}
