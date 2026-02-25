"use client";

import useWizard from "./_hooks/useWizard";
import { STEPS } from "./_lib/constants";
import StepIndicator from "./_components/StepIndicator";
import ReservationSummary from "./_components/ReservationSummary";
import StepPartySize from "./_steps/StepPartySize";
import StepDateTime from "./_steps/StepDateTime";
import StepDetails from "./_steps/StepDetails";
import Button from "../_components/Button";

export default function ReservationForm() {
  const wizard = useWizard();

  if (wizard.submitted) {
    return (
      <div className="animate-slide-down">
        <div className="border border-stone-200 bg-ivory-50 p-8 md:p-12 text-center">
          <div className="mb-6 text-stone-400">
            <svg
              className="mx-auto"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl text-charcoal-700 mb-6">
            예약 요청이 접수되었습니다
          </h2>

          <div className="max-w-xs mx-auto mb-8">
            <ReservationSummary data={wizard.data} />
          </div>

          <p className="text-sm text-stone-500 mb-2">
            {wizard.data.name}님, 감사합니다.
          </p>
          <p className="text-sm text-stone-400 mb-8">
            24시간 이내에 확정 안내를 드리겠습니다.
          </p>

          <Button variant="secondary" onClick={wizard.reset}>
            새 예약하기
          </Button>
        </div>
      </div>
    );
  }

  const stepConfig = STEPS[wizard.currentStep - 1];

  return (
    <div>
      {/* Step indicator */}
      <StepIndicator currentStep={wizard.currentStep} />

      {/* Step header */}
      <div className="mt-10 md:mt-12 text-center mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-light text-charcoal-700 mb-3">
          {stepConfig.subtitle}
        </h2>
        <div className="w-8 h-px bg-stone-300 mx-auto" />
      </div>

      {/* Step content */}
      <div
        key={`step-${wizard.currentStep}`}
        className={
          wizard.direction === "forward"
            ? "animate-slide-in-right"
            : "animate-slide-in-left"
        }
      >
        {wizard.currentStep === 1 && (
          <StepPartySize
            value={wizard.data.partySize}
            onChange={wizard.selectPartySize}
            error={wizard.errors.partySize}
          />
        )}
        {wizard.currentStep === 2 && (
          <StepDateTime
            date={wizard.data.date}
            time={wizard.data.time}
            onDateChange={(date) => wizard.updateField("date", date)}
            onTimeChange={(time) => wizard.updateField("time", time)}
            dateError={wizard.errors.date}
            timeError={wizard.errors.time}
          />
        )}
        {wizard.currentStep === 3 && (
          <StepDetails
            data={wizard.data}
            errors={wizard.errors}
            onChange={(field, value) => wizard.updateField(field, value as never)}
          />
        )}
      </div>

      {/* Navigation */}
      <div className="mt-10 md:mt-12 flex items-center justify-between">
        {wizard.currentStep > 1 ? (
          <Button variant="ghost" onClick={wizard.goBack}>
            이전
          </Button>
        ) : (
          <div />
        )}

        {wizard.currentStep < 3 ? (
          <Button onClick={wizard.goNext}>다음</Button>
        ) : (
          <Button onClick={wizard.handleSubmit}>예약 요청하기</Button>
        )}
      </div>
    </div>
  );
}
