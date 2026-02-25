import { useState, useMemo } from "react";
import type { CalendarDay } from "../types";

function formatDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function useCalendar(selectedDate: string | null) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const monthLabel = `${viewYear}년 ${viewMonth + 1}월`;

  const canGoPrev =
    viewYear > today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth > today.getMonth());

  const days: CalendarDay[] = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1);
    const startDayOfWeek = firstDay.getDay(); // 0=Sun
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - startDayOfWeek);

    const selected = selectedDate ? new Date(selectedDate + "T00:00:00") : null;
    const cells: CalendarDay[] = [];

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      date.setHours(0, 0, 0, 0);

      const isCurrentMonth = date.getMonth() === viewMonth;
      const isPast = date < today;
      const isToday = isSameDay(date, today);
      const isSelected = selected ? isSameDay(date, selected) : false;

      cells.push({
        date,
        dateString: formatDateString(date),
        day: date.getDate(),
        isCurrentMonth,
        isToday,
        isPast,
        isSelected,
        isDisabled: isPast || !isCurrentMonth,
      });
    }

    return cells;
  }, [viewYear, viewMonth, selectedDate, today]);

  function goToPrevMonth() {
    if (!canGoPrev) return;
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function goToNextMonth() {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  return {
    days,
    monthLabel,
    canGoPrev,
    goToPrevMonth,
    goToNextMonth,
  };
}
