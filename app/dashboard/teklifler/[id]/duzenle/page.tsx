import { notFound } from "next/navigation";
import { getProposalById } from "@/app/lib/data";
import { updateProposalAction } from "./server";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProposalEditPage({ params }: PageProps) {
  const { id } = await params;
  const proposal = await getProposalById(id);

  if (!proposal) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          Teklif Düzenle
        </p>
        <h1 className="text-3xl font-display font-semibold">{proposal.projectTitle}</h1>
      </div>

      <form action={updateProposalAction} className="grid gap-6 max-w-2xl">
        <input type="hidden" name="id" value={proposal.id} />
        <label className="block text-sm text-white/70">
          Müşteri Adı
          <input
            name="clientName"
            type="text"
            required
            defaultValue={proposal.clientName}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Proje Başlığı
          <input
            name="projectTitle"
            type="text"
            required
            defaultValue={proposal.projectTitle}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Teklif ID
          <input
            name="proposalId"
            type="text"
            required
            defaultValue={proposal.proposalId}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Toplam Tutar
          <input
            name="total"
            type="text"
            required
            defaultValue={proposal.total}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Geçerlilik
          <input
            name="validity"
            type="text"
            required
            defaultValue={proposal.validity}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>
        <label className="block text-sm text-white/70">
          Kısa Açıklama
          <textarea
            name="subtitle"
            rows={4}
            required
            defaultValue={proposal.subtitle}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/60"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
        >
          Kaydet
        </button>
      </form>
    </div>
  );
}
