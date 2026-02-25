export interface ReservationData {
  partySize: number | null;
  date: string | null; // "YYYY-MM-DD"
  time: string | null; // "HH:mm"
  name: string;
  contact: string;
  seating: string;
  notes: string;
}

export interface StepErrors {
  partySize?: string;
  date?: string;
  time?: string;
  name?: string;
  contact?: string;
  seating?: string;
}

export type WizardStep = 1 | 2 | 3;

export interface StepConfig {
  step: WizardStep;
  title: string;
  subtitle: string;
}

export interface CalendarDay {
  date: Date;
  dateString: string;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isPast: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}
