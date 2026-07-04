const testimonials = [
  {
    quote:
      "Emre sadece kod yazmadı; ekibimizin mühendislik kültürünü yeniden şekillendirdi. Release korkumuz geçti.",
    author: "Mert Yılmaz",
    role: "CTO, FitCo",
    initials: "MY",
  },
  {
    quote:
      "8 haftada destek ekibimize bir kişilik yük çıkardı — ama müşteri deneyimini insan kimliğini kaybetmeden iyileştirdi.",
    author: "Selin Kara",
    role: "Operations Lead, Modalab",
    initials: "SK",
  },
  {
    quote:
      "Kısa bir freelance işi olarak başladı; şimdi her büyük özelliği Emre'ye danışıyoruz. En çok güvendiğimiz dış geliştiricimiz.",
    author: "Deniz Arslan",
    role: "Founder, Kitap Kulübü",
    initials: "DA",
  },
];

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <h2
        id="testimonials-heading"
        className="mb-10 text-balance text-3xl font-bold tracking-tight text-[var(--yeni-fg)] md:text-4xl"
      >
        Birlikte çalıştığım insanlar ne diyor?
      </h2>

      <ul className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <li
            key={t.author}
            className="flex flex-col rounded-2xl border border-[var(--yeni-border)] bg-[var(--yeni-bg)] p-6 transition-shadow duration-300 hover:shadow-md"
          >
            <svg
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="mb-3 text-[var(--yeni-accent)]"
            >
              <path
                d="M8 10H5C5 6 7 4 10 4V6C8 6 7 7.5 7 9H8C9.105 9 10 9.895 10 11V14C10 15.105 9.105 16 8 16H5C3.895 16 3 15.105 3 14V11C3 10.448 3.448 10 4 10H8ZM18 10H15C15 6 17 4 20 4V6C18 6 17 7.5 17 9H18C19.105 9 20 9.895 20 11V14C20 15.105 19.105 16 18 16H15C13.895 16 13 15.105 13 14V11C13 10.448 13.448 10 14 10H18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote className="flex-1 text-[15px] leading-relaxed text-[var(--yeni-fg)]">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-[var(--yeni-border)] pt-5">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--yeni-accent)] to-[var(--yeni-accent-2)] text-sm font-bold text-white"
              >
                {t.initials}
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-[var(--yeni-fg)]">
                  {t.author}
                </span>
                <span className="text-xs text-[var(--yeni-muted)]">
                  {t.role}
                </span>
              </span>
            </figcaption>
          </li>
        ))}
      </ul>
    </section>
  );
}
