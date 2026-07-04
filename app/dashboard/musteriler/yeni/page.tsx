import { addClientAction } from "./server";

export default function NewClientPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          Müşteri Oluştur
        </p>
        <h1 className="text-3xl font-display font-semibold">Yeni Müşteri</h1>
      </div>

      <form action={addClientAction} className="grid gap-6 max-w-2xl">
        <label className="block text-sm text-white/70">
          Müşteri Adı
          <input
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Firma
          <input
            name="company"
            type="text"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          E-posta
          <input
            name="email"
            type="email"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Telefon
          <input
            name="phone"
            type="text"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Not
          <textarea
            name="notes"
            rows={3}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
        >
          Müşteriyi Kaydet
        </button>
      </form>
    </div>
  );
}
