"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProposalAction } from "./server";

export default function NewProposalPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await createProposalAction(formData);
    if (result?.error) {
      setError(result.error);
      return;
    }
    router.push("/dashboard/teklifler");
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          Teklif Oluştur
        </p>
        <h1 className="text-3xl font-display font-semibold">Yeni Teklif</h1>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6 max-w-2xl">
        <label className="block text-sm text-white/70">
          Müşteri Adı
          <input
            name="clientName"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Proje Başlığı
          <input
            name="projectTitle"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Teklif ID
          <input
            name="proposalId"
            type="text"
            required
            placeholder="UMB-2026-XX"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Toplam Tutar
          <input
            name="total"
            type="text"
            required
            placeholder="60.000 TRY"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Geçerlilik
          <input
            name="validity"
            type="text"
            required
            placeholder="14 gün"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Kısa Açıklama
          <textarea
            name="subtitle"
            rows={3}
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>

        {error ? <p className="text-sm text-red-400">{error}</p> : null}
        <button
          type="submit"
          className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
        >
          Teklifi Oluştur
        </button>
      </form>
    </div>
  );
}
