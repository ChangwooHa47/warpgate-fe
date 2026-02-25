import type { Attorney } from "../_data/types";

export default function LeadAttorneyProfile({
  attorney,
}: {
  attorney: Attorney;
}) {
  return (
    <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
      {/* Photo */}
      <div className="w-full shrink-0 md:w-80 lg:w-96">
        <div className="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg bg-navy-100">
          {attorney.photo_url ? (
            <img
              src={attorney.photo_url}
              alt={attorney.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-navy-200">
              <span className="font-serif text-6xl font-bold text-navy-600">
                {attorney.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <div className="mb-1 text-sm font-medium text-gold-500 uppercase">
          {attorney.title}
        </div>
        <h3 className="mb-5 font-serif text-4xl font-bold text-navy-900">
          {attorney.name}
        </h3>

        {/* Specialties */}
        <div className="mb-6 flex flex-wrap gap-2">
          {attorney.specialties.map((s) => (
            <span
              key={s}
              className="rounded-full bg-navy-50 px-4 py-1.5 text-sm font-medium text-navy-700"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Career */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-bold tracking-wider text-navy-800 uppercase">
            주요 경력
          </h4>
          <ul className="flex flex-col gap-2">
            {attorney.career.map((c) => (
              <li key={c} className="text-base text-slate-600">
                · {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        {attorney.education.length > 0 && (
          <div className="mb-6">
            <h4 className="mb-3 text-sm font-bold tracking-wider text-navy-800 uppercase">
              학력
            </h4>
            <ul className="flex flex-col gap-2">
              {attorney.education.map((e) => (
                <li key={e} className="text-base text-slate-600">
                  · {e}
                </li>
              ))}
            </ul>
          </div>
        )}

        {attorney.bio && (
          <p className="border-t border-slate-100 pt-5 text-base leading-relaxed text-slate-600">
            {attorney.bio}
          </p>
        )}
      </div>
    </div>
  );
}
