import { mockCases } from "../../_data/mock-cases";

export default function ProgressTracker() {
  return (
    <div className="space-y-6">
      {mockCases.map((caseItem) => (
        <div
          key={caseItem.id}
          className="rounded-lg border border-slate-200 bg-white p-8 transition-all hover:shadow-md"
        >
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-medium text-slate-400">
                {caseItem.trackingNumber}
              </p>
              <h3 className="text-lg font-bold text-navy-900">{caseItem.title}</h3>
              <p className="text-sm text-slate-500">{caseItem.clientName}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-accent-500">
                {caseItem.assignedAccountant}
              </p>
              <p className="text-xs text-slate-400">
                최종 업데이트: {caseItem.lastUpdated}
              </p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="mb-6">
            <div className="flex items-center">
              {caseItem.steps.map((step, idx) => (
                <div key={step.label} className="flex flex-1 items-center">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                        step.completed
                          ? "bg-accent-400 text-white"
                          : idx === caseItem.currentStep
                            ? "border-2 border-accent-400 bg-white text-accent-400"
                            : "border-2 border-slate-200 bg-white text-slate-400"
                      }`}
                    >
                      {step.completed ? "✓" : idx + 1}
                    </div>
                    <p
                      className={`mt-2 text-xs font-medium ${
                        step.completed
                          ? "text-accent-500"
                          : idx === caseItem.currentStep
                            ? "text-navy-900"
                            : "text-slate-400"
                      }`}
                    >
                      {step.label}
                    </p>
                    {step.date && (
                      <p className="text-xs text-slate-400">{step.date}</p>
                    )}
                  </div>

                  {/* Connector Line */}
                  {idx < caseItem.steps.length - 1 && (
                    <div
                      className={`mx-2 h-0.5 flex-1 ${
                        step.completed ? "bg-accent-400" : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          {caseItem.notes && (
            <div className="rounded-lg bg-slate-50 px-4 py-3">
              <p className="text-sm text-slate-600">
                <span className="font-medium text-slate-700">메모:</span>{" "}
                {caseItem.notes}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
