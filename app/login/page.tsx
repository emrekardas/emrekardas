"use client";

import { useState } from "react";
import { loginAction } from "./server";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = await loginAction(formData);
    if (result?.error) {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0d10] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(16,185,129,0.15)]">
        <h1 className="text-3xl font-display font-semibold mb-2">Giriş Yap</h1>
        <p className="text-sm text-white/60 mb-6">
          Umbrella teklif paneline erişmek için giriş yapın.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm text-white/70">
            Kullanıcı Adı
            <input
              name="username"
              type="text"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
            />
          </label>
          <label className="block text-sm text-white/70">
            Şifre
            <input
              name="password"
              type="password"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
            />
          </label>
          {error ? <p className="text-sm text-red-400">{error}</p> : null}
          <button
            type="submit"
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}
