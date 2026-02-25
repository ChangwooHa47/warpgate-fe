import { TimelineEvent } from "../../_lib/types";
import { cn } from "../../_lib/utils";

interface OrderTimelineProps {
  events: TimelineEvent[];
}

export default function OrderTimeline({ events }: OrderTimelineProps) {
  // Find the index of the current (last completed) step
  const currentIndex = events.reduce(
    (last, event, i) => (event.completed ? i : last),
    -1
  );

  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-line" />

      {events.map((event, i) => {
        const isCurrent = i === currentIndex;
        const isPast = event.completed && !isCurrent;
        const isPending = !event.completed;

        return (
          <div
            key={event.status}
            className={cn("relative", i < events.length - 1 ? "pb-8" : "")}
          >
            {/* Dot */}
            <div
              className={cn(
                "absolute top-[3px] rounded-full z-10",
                isCurrent
                  ? "-left-[35px] w-[13px] h-[13px] bg-accent border-[3px] border-accent/30"
                  : "-left-8 w-[11px] h-[11px] border-2",
                isPast && "bg-primary border-primary",
                isPending && "bg-base border-line"
              )}
            />

            {/* Completed line overlay */}
            {event.completed && i < events.length - 1 && (
              <div className="absolute -left-[27px] top-[16px] w-px h-[calc(100%-8px)] bg-primary z-[5]" />
            )}

            {/* Content */}
            <p
              className={cn(
                "text-[15px] font-medium leading-none mb-1.5",
                isCurrent && "text-primary",
                isPast && "text-primary",
                isPending && "text-muted"
              )}
            >
              {event.label}
              {isCurrent && (
                <span className="ml-2 text-[11px] font-normal text-accent">
                  현재
                </span>
              )}
            </p>
            <p className="text-[13px] text-muted leading-relaxed">
              {event.description}
            </p>
            <p className="text-[12px] text-accent mt-1">{event.date}</p>
          </div>
        );
      })}
    </div>
  );
}
