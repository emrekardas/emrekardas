# Portfolio Yenileme Planı

Mevcut `app/page.tsx` (dark mode + Three.js beams + GSAP) yanında yeni bir minimal/clean route kuracağız. Eski sayfa dokunulmadan kalacak; beğenirsek swap'larız, beğenmezsek eski kalır.

## Amaç

Portfolyo freelance iş almak ve şirketlere geçmiş işleri göstermek için kullanılacak. Case study'ler "neler yapabiliyorum" sorusunu cevaplayacak. Tasarım kararları güven, netlik ve proof-of-work odaklı — "wow" efekti değil.

## Referans

`ornek.html` (Enes Eray sitesi). Omurgasını alıyoruz, içerik ve ince detaylar Emre'ye özel olacak — birebir kopya değil.

## Route Yapısı

```
app/yeni/
  page.tsx                     # ana sayfa — hero + projeler + CTA + imza
  layout.tsx                   # kendi light-mode layout'u (root dark'ı override)
  components/
    hero.tsx                   # sol metin + sağ foto + konuşma balonları
    projects-grid.tsx          # 2x2 proje kartları → detay linkli
    collaboration-cta.tsx      # gradient "let's build together" kartı
    signature.tsx              # Caveat imza
    social-footer.tsx          # üst sosyal linkler
  proje/
    [slug]/
      page.tsx                 # case study detay şablonu
  data/
    projects.ts                # proje listesi (slug, title, summary, stack, role, result)
```

## Tasarım Kararları

- **Renk:** Beyaz zemin `#ffffff`, ana metin `#0a0a0a`, muted `#6b7280`, tek accent rengi (gradient CTA'da kullanılacak — ornek'teki mor-mavi yerine Emre'ye özgü bir ton seçilecek)
- **Font:** `DM Sans` (heading + body) + `Caveat` (imza) — `next/font/google` ile yüklenecek, `globals.css`'e dokunmadan
- **Layout:** `/yeni/layout.tsx` içinde CSS değişkenleri override edilecek, böylece root dark theme bozulmayacak
- **Efekt:** Three.js / GSAP yok. Sadece: CSS transitions (150-300ms ease-out), subtle hover, `prefers-reduced-motion` respect
- **Kişisel dokunuşlar:** El sallama emojisi (ornek'teki gibi), konuşma balonları, Caveat el yazısı imza — "samimi ama profesyonel" ton

## Case Study Data Şeması

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;           // bir cümle
  cover: string;             // görsel
  problem: string;           // müşteri neyle geldi
  role: string;              // tek başına / ekipte / hangi kısım
  process: string[];         // 3-5 adım
  stack: string[];           // Next.js, Postgres, vs.
  result: {
    metric?: string;         // "%X hızlanma", "$Y MRR"
    outcome: string;
  };
  links: {
    live?: string;
    github?: string;
  };
};
```

## İçerik Tonu

- Dil: **onay bekleniyor** (TR veya EN)
- Başlık örneği (EN): "Freelance full-stack developer. I ship products companies trust."
- CTA: "Email Me" + "Book a Call" (Cal.com)
- Availability badge: "Q2 2026 için müsait" gibi somut bir ifade

## İlk İterasyon Kapsamı

1. `/yeni` ana sayfa — hero + 2-3 placeholder proje + CTA + imza
2. `/yeni/proje/[slug]` case-study şablonu
3. Mobile responsive (375, 768, 1024, 1440)
4. Accessibility: 4.5:1 kontrast, focus states, alt text, aria-label
5. `prefers-reduced-motion` respect

## Kapsam Dışı (Sonraya)

- Testimonial bölümü
- Logo wall (çalışılan şirketler)
- Blog
- Selective GSAP motion katmanı (önce temiz minimal gör, sonra karar)
- Three.js efektleri (muhtemelen tamamen kaldırılacak)

## Netleştirme Bekleyen Kararlar

1. **Route ismi:** `/yeni` (önerilen) vs `/v2` vs başka
2. **İçerik dili:** Türkçe vs İngilizce (hedef kitle yurtiçi mi global mi)
3. **Accent rengi:** ornek.html mor-mavi kullanıyor — Emre'ye özgü bir ton seçilecek

## Checklist (teslim öncesi)

- [ ] No emojis as icons (el sallama hariç — samimi dokunuş)
- [ ] cursor-pointer tüm clickable elemanlarda
- [ ] Hover transitions 150-300ms ease-out
- [ ] Light mode kontrast 4.5:1+
- [ ] Focus states görünür (klavye nav)
- [ ] prefers-reduced-motion respect
- [ ] 375 / 768 / 1024 / 1440 responsive
- [ ] Alt text tüm görsellerde
- [ ] Form/CTA'larda aria-label
