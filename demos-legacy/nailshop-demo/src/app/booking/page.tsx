"use client";

import { useState } from "react";

const services = [
  { id: "gel-one", name: "원컬러 젤", price: "45,000", duration: "60min" },
  { id: "gel-grad", name: "그라데이션 젤", price: "55,000", duration: "70min" },
  { id: "gel-french", name: "프렌치 젤", price: "55,000", duration: "70min" },
  { id: "gel-glitter", name: "글리터 젤", price: "50,000", duration: "60min" },
  { id: "art-paint", name: "핸드페인팅 아트", price: "별도", duration: "90min" },
  { id: "art-stone", name: "스톤 & 파츠", price: "별도", duration: "80min" },
  { id: "art-3d", name: "3D 아트", price: "별도", duration: "100min" },
  { id: "care-basic", name: "기본 케어", price: "20,000", duration: "30min" },
  { id: "care-spa", name: "스파 케어", price: "35,000", duration: "50min" },
  { id: "pedi-gel", name: "젤 페디큐어", price: "50,000", duration: "60min" },
  { id: "pedi-spa", name: "스파 페디큐어", price: "45,000", duration: "70min" },
];

const artists = [
  { id: "kim", name: "OOO", role: "Creative Director" },
  { id: "lee", name: "OOO", role: "Senior Artist" },
  { id: "park", name: "OOO", role: "Artist" },
  { id: "jung", name: "OOO", role: "Artist" },
];

const times = [
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00",
];

const stepLabels = ["SERVICE", "ARTIST", "SCHEDULE", "DETAILS"];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState("");
  const [artistId, setArtistId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [memo, setMemo] = useState("");
  const [done, setDone] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const canNext = () => {
    if (step === 1) return serviceId !== "";
    if (step === 2) return artistId !== "";
    if (step === 3) return date !== "" && time !== "";
    if (step === 4) return name.trim() !== "" && phone.trim() !== "";
    return false;
  };

  if (done) {
    const svc = services.find((s) => s.id === serviceId);
    const art = artists.find((a) => a.id === artistId);
    return (
      <div className="max-w-2xl mx-auto px-6 py-24">
        <div className="border border-border p-10 md:p-14 text-center">
          <p className="text-xs tracking-[0.4em] text-primary mb-6">CONFIRMED</p>
          <h1 className="text-2xl font-extralight tracking-wide mb-10">예약이 완료되었습니다</h1>

          <div className="border-t border-border pt-8 space-y-4 text-left max-w-sm mx-auto">
            {[
              ["SERVICE", svc?.name],
              ["ARTIST", art?.name],
              ["DATE", date],
              ["TIME", time],
              ["NAME", name],
              ["TEL", phone],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between text-xs">
                <span className="text-muted tracking-wider">{label}</span>
                <span className="font-light">{val}</span>
              </div>
            ))}
            {memo && (
              <div className="flex justify-between text-xs">
                <span className="text-muted tracking-wider">NOTE</span>
                <span className="font-light">{memo}</span>
              </div>
            )}
          </div>

          <p className="text-xs text-muted mt-10 leading-loose tracking-wide">
            확인 문자가 발송됩니다.
            <br />
            변경/취소: 02-1234-5678
          </p>

          <button
            onClick={() => {
              setDone(false);
              setStep(1);
              setServiceId("");
              setArtistId("");
              setDate("");
              setTime("");
              setName("");
              setPhone("");
              setMemo("");
            }}
            className="mt-10 px-8 py-3 rounded border border-border text-xs tracking-[0.2em] text-muted hover:text-foreground hover:border-foreground transition-all duration-500"
          >
            NEW BOOKING
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] text-primary mb-4">RESERVATION</p>
        <h1 className="text-3xl md:text-4xl font-extralight tracking-[0.08em]">예약</h1>
      </div>

      {/* Step indicator */}
      <div className="flex items-center justify-center gap-1 mb-14">
        {stepLabels.map((label, i) => (
          <div key={label} className="flex items-center gap-1">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-6 h-6 flex items-center justify-center text-xs transition-colors duration-300 ${
                  step === i + 1
                    ? "border border-primary text-primary"
                    : step > i + 1
                    ? "bg-primary text-background"
                    : "border border-border text-muted"
                }`}
              >
                {step > i + 1 ? "✓" : i + 1}
              </div>
              <span className="text-[10px] tracking-[0.15em] text-muted hidden sm:block">{label}</span>
            </div>
            {i < 3 && <div className={`w-10 h-px mb-4 sm:mb-0 ${step > i + 1 ? "bg-primary" : "bg-border"}`} />}
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="border border-border bg-card-bg rounded p-8 md:p-12">
        {step === 1 && (
          <div>
            <p className="text-xs tracking-[0.3em] text-primary mb-6">SELECT SERVICE</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setServiceId(s.id)}
                  className={`p-5 text-left rounded border transition-all duration-300 ${
                    serviceId === s.id
                      ? "bg-primary/10 border-primary/40"
                      : "bg-surface border-border hover:bg-card-hover hover:border-primary/20"
                  }`}
                >
                  <p className="text-sm font-light">{s.name}</p>
                  <p className="text-xs text-muted mt-1">
                    {s.price !== "별도" ? `₩${s.price}` : "상담"} &middot; {s.duration}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-xs tracking-[0.3em] text-primary mb-6">SELECT ARTIST</p>
            <div className="space-y-3">
              {artists.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setArtistId(a.id)}
                  className={`w-full p-6 text-left flex items-center justify-between rounded border transition-all duration-300 ${
                    artistId === a.id
                      ? "bg-primary/10 border-primary/40"
                      : "bg-surface border-border hover:bg-card-hover hover:border-primary/20"
                  }`}
                >
                  <div>
                    <p className="text-sm font-light">{a.name}</p>
                    <p className="text-xs tracking-[0.15em] text-muted mt-1">{a.role}</p>
                  </div>
                  {artistId === a.id && <span className="text-primary text-xs">●</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="text-xs tracking-[0.3em] text-primary mb-6">SELECT DATE & TIME</p>
            <div className="mb-8">
              <label className="block text-xs tracking-[0.2em] text-muted mb-3">DATE</label>
              <input
                type="date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded bg-surface border border-border text-sm font-light text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            {date && (
              <div>
                <label className="block text-xs tracking-[0.2em] text-muted mb-3">TIME</label>
                <div className="grid grid-cols-5 sm:grid-cols-7 gap-px bg-border">
                  {times.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`py-3 text-xs font-light transition-all duration-300 ${
                        time === t
                          ? "bg-primary text-background"
                          : "bg-card-bg hover:bg-card-hover text-muted hover:text-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="text-xs tracking-[0.3em] text-primary mb-6">YOUR DETAILS</p>
            <div className="space-y-6">
              <div>
                <label className="block text-xs tracking-[0.2em] text-muted mb-3">NAME *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-surface border border-border text-sm font-light text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] text-muted mb-3">PHONE *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-3 bg-surface border border-border text-sm font-light text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-border"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] text-muted mb-3">NOTE</label>
                <textarea
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded bg-surface border border-border text-sm font-light text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Nav */}
        <div className="flex justify-between mt-10 pt-8 border-t border-border">
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className={`text-xs tracking-[0.2em] transition-colors ${
              step === 1 ? "text-border cursor-not-allowed" : "text-muted hover:text-foreground"
            }`}
          >
            &larr; BACK
          </button>
          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={!canNext()}
              className={`text-xs tracking-[0.2em] transition-all duration-500 ${
                canNext()
                  ? "text-primary hover:text-foreground"
                  : "text-border cursor-not-allowed"
              }`}
            >
              NEXT &rarr;
            </button>
          ) : (
            <button
              onClick={() => setDone(true)}
              disabled={!canNext()}
              className={`px-8 py-3 rounded text-xs tracking-[0.25em] transition-all duration-500 ${
                canNext()
                  ? "border border-primary text-primary hover:bg-primary hover:text-background"
                  : "border border-border text-border cursor-not-allowed"
              }`}
            >
              CONFIRM
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
