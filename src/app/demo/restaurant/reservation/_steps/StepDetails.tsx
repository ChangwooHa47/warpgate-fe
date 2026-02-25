import type { ReservationData, StepErrors } from "../_lib/types";
import { SEATING_OPTIONS } from "../_lib/constants";
import Input from "../../_components/form/Input";
import Select from "../../_components/form/Select";
import Textarea from "../../_components/form/Textarea";
import ReservationSummary from "../_components/ReservationSummary";

interface StepDetailsProps {
  data: ReservationData;
  errors: StepErrors;
  onChange: (field: keyof ReservationData, value: string) => void;
}

export default function StepDetails({ data, errors, onChange }: StepDetailsProps) {
  const filteredSeating =
    data.partySize && data.partySize < 4
      ? SEATING_OPTIONS.filter((o) => o.value !== "room")
      : SEATING_OPTIONS;

  return (
    <div className="space-y-8">
      <ReservationSummary data={data} />

      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="이름"
            name="name"
            type="text"
            placeholder="홍길동"
            value={data.name}
            onChange={(e) => onChange("name", e.target.value)}
            error={errors.name}
            required
            autoComplete="name"
          />
          <Input
            label="연락처"
            name="contact"
            type="tel"
            placeholder="010-0000-0000"
            value={data.contact}
            onChange={(e) => onChange("contact", e.target.value)}
            error={errors.contact}
            required
            autoComplete="tel"
          />
        </div>

        <Select
          label="좌석"
          name="seating"
          options={filteredSeating}
          placeholder="좌석을 선택해 주세요"
          value={data.seating}
          onChange={(e) => onChange("seating", e.target.value)}
          error={errors.seating}
          required
        />

        {data.partySize && data.partySize >= 4 && (
          <p className="text-xs text-stone-400 -mt-3">
            룸은 최소 4인 이상부터 이용 가능합니다.
          </p>
        )}

        <Textarea
          label="요청사항"
          name="notes"
          placeholder="식이 제한, 기념일, 기타 요청사항을 적어주세요"
          value={data.notes}
          onChange={(e) => onChange("notes", e.target.value)}
        />
      </div>
    </div>
  );
}
