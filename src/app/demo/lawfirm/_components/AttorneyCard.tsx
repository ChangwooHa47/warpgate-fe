import type { Attorney } from "../_data/types";

export default function AttorneyCard({ attorney }: { attorney: Attorney }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm">
      {/* Photo placeholder */}
      <div className="flex h-64 items-center justify-center bg-navy-100">
        {attorney.photo_url ? (
          <img
            src={attorney.photo_url}
            alt={attorney.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-navy-200">
            <span className="font-serif text-3xl font-bold text-navy-600">
              {attorney.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="p-8">
        <div className="mb-1 text-sm font-medium text-gold-500 uppercase">
          {attorney.title}
        </div>
        <h3 className="mb-3 font-serif text-2xl font-bold text-navy-900">
          {attorney.name}
        </h3>

        {/* Specialties */}
        <div className="mb-4 flex flex-wrap gap-2">
          {attorney.specialties.map((s) => (
            <span
              key={s}
              className="rounded-full bg-navy-50 px-3 py-1.5 text-sm font-medium text-navy-700"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Career highlights */}
        <ul className="flex flex-col gap-2">
          {attorney.career.slice(0, 3).map((c) => (
            <li key={c} className="text-base text-slate-600">
              · {c}
            </li>
          ))}
        </ul>

        {attorney.bio && (
          <p className="mt-4 border-t border-slate-100 pt-4 text-base leading-relaxed text-slate-600">
            {attorney.bio}
          </p>
        )}
      </div>
    </div>
  );
}
