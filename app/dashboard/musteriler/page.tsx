import { getClients } from "@/app/lib/data";

export default async function ClientsPage() {
  const clients = await getClients();

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Müşteriler
          </p>
          <h1 className="text-3xl font-display font-semibold">Müşteri Listesi</h1>
        </div>
        <a
          href="/dashboard/musteriler/yeni"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
        >
          Yeni Müşteri
        </a>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5">
        <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-4 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white/40">
          <span>Müşteri</span>
          <span>İletişim</span>
          <span>Not</span>
        </div>
        <div className="divide-y divide-white/5">
          {clients.map((client) => (
            <div
              key={client.id}
              className="grid grid-cols-[1.1fr_1fr_1fr] gap-4 px-6 py-5 text-sm"
            >
              <div>
                <p className="font-semibold">{client.name}</p>
                <p className="text-xs text-white/40">{client.company}</p>
              </div>
              <div className="text-white/70">
                <p>{client.email}</p>
                <p>{client.phone}</p>
              </div>
              <p className="text-white/60">{client.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
