import Link from "next/link";
import { requireAuth } from "@/app/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAuth();

  return (
    <div className="min-h-screen bg-[#0b0d10] text-white">
      <div className="border-b border-white/10 bg-black/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-emerald-500/80" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Umbrella Panel
              </p>
              <p className="text-base font-semibold">Teklif Yönetimi</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <Link className="rounded-full border border-white/10 px-4 py-2 hover:border-white/30" href="/dashboard/teklifler">
              Teklifler
            </Link>
            <Link className="rounded-full border border-white/10 px-4 py-2 hover:border-white/30" href="/dashboard/musteriler">
              Müşteriler
            </Link>
            <Link className="rounded-full border border-white/10 px-4 py-2 hover:border-white/30" href="/teklif/umb-2026-hc">
              Örnek
            </Link>
          </div>
        </div>
      </div>
      <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
