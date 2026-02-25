import { useState, useCallback } from "react";
import type { ReservationData, StepErrors, WizardStep } from "../types";
import { INITIAL_DATA } from "../constants";

function validateStep(step: WizardStep, data: ReservationData): StepErrors {
  const errors: StepErrors = {};

  switch (step) {
    case 1:
      if (!data.partySize) errors.partySize = "인원을 선택해 주세요.";
      break;
    case 2:
      if (!data.date) errors.date = "날짜를 선택해 주세요.";
      if (!data.time) errors.time = "시간을 선택해 주세요.";
      break;
    case 3:
      if (!data.name.trim()) errors.name = "이름을 입력해 주세요.";
      if (!data.contact.trim()) {
        errors.contact = "연락처를 입력해 주세요.";
      } else if (!/^[\d\s\-+()]{9,}$/.test(data.contact)) {
        errors.contact = "올바른 전화번호를 입력해 주세요.";
      }
      if (!data.seating) errors.seating = "좌석을 선택해 주세요.";
      break;
  }

  return errors;
}

export default function useWizard() {
  const [currentStep, setCurrentStep] = useState<WizardStep>(1);
  const [data, setData] = useState<ReservationData>({ ...INITIAL_DATA });
  const [errors, setErrors] = useState<StepErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const updateField = useCallback(
    <K extends keyof ReservationData>(key: K, value: ReservationData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
      if (errors[key as keyof StepErrors]) {
        setErrors((prev) => ({ ...prev, [key]: undefined }));
      }
    },
    [errors]
  );

  /** Select party size and auto-advance to step 2 */
  const selectPartySize = useCallback((size: number) => {
    setData((prev) => ({ ...prev, partySize: size }));
    setErrors({});
    setTimeout(() => {
      setDirection("forward");
      setCurrentStep(2);
    }, 250);
  }, []);

  const goNext = useCallback(() => {
    const stepErrors = validateStep(currentStep, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setDirection("forward");
    setCurrentStep((s) => Math.min(s + 1, 3) as WizardStep);
  }, [currentStep, data]);

  const goBack = useCallback(() => {
    setErrors({});
    setDirection("backward");
    setCurrentStep((s) => Math.max(s - 1, 1) as WizardStep);
  }, []);

  const handleSubmit = useCallback(() => {
    const stepErrors = validateStep(3, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }, [data]);

  const reset = useCallback(() => {
    setCurrentStep(1);
    setData({ ...INITIAL_DATA });
    setErrors({});
    setSubmitted(false);
    setDirection("forward");
  }, []);

  return {
    currentStep,
    data,
    errors,
    submitted,
    direction,
    updateField,
    selectPartySize,
    goNext,
    goBack,
    handleSubmit,
    reset,
  };
}
