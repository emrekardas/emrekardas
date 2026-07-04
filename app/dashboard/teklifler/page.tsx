import Link from "next/link";
import { getProposals } from "@/app/lib/data";

export default async function ProposalsPage() {
  const proposals = await getProposals();

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Teklifler
          </p>
          <h1 className="text-3xl font-display font-semibold">Teklif Listesi</h1>
        </div>
        <Link
          href="/dashboard/teklifler/yeni"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
        >
          Yeni Teklif
        </Link>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5">
        <div className="grid grid-cols-[1.3fr_1fr_0.6fr_0.5fr] gap-4 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white/40">
          <span>Müşteri</span>
          <span>Proje</span>
          <span>Toplam</span>
          <span>Link</span>
        </div>
        <div className="divide-y divide-white/5">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              className="grid grid-cols-[1.3fr_1fr_0.6fr_0.5fr] gap-4 px-6 py-5 text-sm"
            >
              <div>
                <p className="font-semibold">{proposal.clientName}</p>
                <p className="text-xs text-white/40">{proposal.proposalId}</p>
              </div>
              <p className="text-white/80">{proposal.projectTitle}</p>
              <p className="font-mono text-white/70">{proposal.total}</p>
              <div className="flex flex-col gap-2 text-xs">
                <Link
                  href={`/dashboard/teklifler/${proposal.id}`}
                  className="text-emerald-300 hover:text-emerald-200"
                >
                  Detay
                </Link>
                <Link
                  href={`/dashboard/teklifler/${proposal.id}/duzenle`}
                  className="text-white/70 hover:text-white"
                >
                  Düzenle
                </Link>
                <Link
                  href={`/teklif/${proposal.id}`}
                  className="text-white/60 hover:text-white"
                  target="_blank"
                >
                  Aç
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
