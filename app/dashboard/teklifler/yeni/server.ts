"use server";

import { addProposal, Proposal } from "@/app/lib/data";

const template = {
  highlights: [
    { label: "Teslim Süresi", value: "14-18 Gün" },
    { label: "Teknoloji", value: "Next.js + Tailwind" },
    { label: "Bakım", value: "12 Ay" },
    { label: "Revizyon", value: "2 Tur" },
  ],
  scopeItems: [
    {
      title: "Stratejik Mimari",
      desc: "Kurumsal hedeflerinize uygun sayfa hiyerarşisi, içerik akışı ve bilgi mimarisi.",
      icon: "layers",
    },
    {
      title: "UI/UX Tasarımı",
      desc: "Dijital prestiji artıran, markaya özel tipografi ve görsel dil.",
      icon: "spark",
    },
    {
      title: "Performans + SEO",
      desc: "Teknik SEO, hız optimizasyonu ve arama motoru uyumlu yapı.",
      icon: "shield",
    },
    {
      title: "CMS Entegrasyonu",
      desc: "Blog, haber ve içerik yönetimi için kolay düzenlenebilir panel.",
      icon: "code",
    },
    {
      title: "İletişim Akışı",
      desc: "Formlar, harita, e-posta yönlendirmeleri ve CRM uyumu.",
      icon: "globe",
    },
    {
      title: "Mobil Uyum",
      desc: "Mobil, tablet ve masaüstünde kusursuz deneyim.",
      icon: "device",
    },
  ],
  timeline: [
    {
      title: "Keşif & Planlama",
      time: "Gün 1-3",
      desc: "İhtiyaç analizi, içerik planı ve tasarım yönlendirmeleri.",
    },
    {
      title: "Tasarım & UI/UX",
      time: "Gün 4-7",
      desc: "Ana sayfa ve kritik sayfaların tasarım onayı.",
    },
    {
      title: "Geliştirme",
      time: "Gün 8-14",
      desc: "Frontend geliştirme, CMS kurulumu ve veri girişleri.",
    },
    {
      title: "Test & Yayın",
      time: "Gün 15-18",
      desc: "Performans testleri, SEO taramaları ve canlıya alma.",
    },
  ],
  pricing: [
    { label: "Next.js Web Sitesi", code: "MODÜL 01", price: "30.000 TRY" },
    { label: "CMS & İçerik Yönetimi", code: "MODÜL 02", price: "10.000 TRY" },
    { label: "Tasarım & UX", code: "MODÜL 03", price: "5.000 TRY" },
    { label: "1 Yıl Bakım + Hosting", code: "MODÜL 04", price: "5.000 TRY" },
  ],
  faqs: [
    {
      q: "Revizyon sayısı kaç?",
      a: "Tasarım sürecinde 2 tur revizyon dahil. Ek ihtiyaçlar opsiyonel.",
    },
    {
      q: "Domain ve hosting dahil mi?",
      a: "Hosting 12 ay dahil. Domain mevcutsa yönlendirme yapılır, yoksa birlikte alınır.",
    },
    {
      q: "İçerikleri kim giriyor?",
      a: "İlk içerik girişi tarafımızdan yapılır, sonrasında panel sizde olur.",
    },
  ],
};

export async function createProposalAction(formData: FormData) {
  const clientName = String(formData.get("clientName") ?? "").trim();
  const projectTitle = String(formData.get("projectTitle") ?? "").trim();
  const proposalId = String(formData.get("proposalId") ?? "").trim();
  const total = String(formData.get("total") ?? "").trim();
  const validity = String(formData.get("validity") ?? "").trim();
  const subtitle = String(formData.get("subtitle") ?? "").trim();

  if (!clientName || !projectTitle || !proposalId || !total || !validity || !subtitle) {
    return { error: "Lütfen tüm alanları doldurun." };
  }

  const id = proposalId.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const nextProposal: Proposal = {
    id,
    clientId: "client-unknown",
    clientName,
    projectTitle,
    proposalId,
    validity,
    total,
    subtitle,
    createdAt: new Date().toISOString(),
    highlights: template.highlights,
    scopeItems: template.scopeItems,
    timeline: template.timeline,
    pricing: template.pricing,
    faqs: template.faqs,
  };

  await addProposal(nextProposal);
  return { ok: true };
}
