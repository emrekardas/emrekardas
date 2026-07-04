import Link from "next/link";
import { notFound } from "next/navigation";
import { getProposalById } from "@/app/lib/data";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProposalDetailPage({ params }: PageProps) {
  const { id } = await params;
  const proposal = await getProposalById(id);

  if (!proposal) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Teklif Detayı
          </p>
          <h1 className="text-3xl font-display font-semibold">{proposal.projectTitle}</h1>
          <p className="text-sm text-white/60">{proposal.clientName}</p>
        </div>
        <Link
          href={`/teklif/${proposal.id}`}
          target="_blank"
          className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80 hover:border-white/40"
        >
          Teklifi Aç
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Özet</p>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-white/60">Teklif ID</span>
              <span className="font-mono">{proposal.proposalId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Toplam</span>
              <span className="font-mono">{proposal.total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Geçerlilik</span>
              <span>{proposal.validity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Oluşturma</span>
              <span>{new Date(proposal.createdAt).toLocaleDateString("tr-TR")}</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Açıklama</p>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">{proposal.subtitle}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Paylaşım</p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-white/70">
            Link: <span className="font-mono">/teklif/{proposal.id}</span>
          </p>
          <Link
            href={`/teklif/${proposal.id}`}
            target="_blank"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            Yeni Sekmede Aç
          </Link>
        </div>
      </div>
    </div>
  );
}
