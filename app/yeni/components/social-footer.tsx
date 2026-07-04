const links = [
  { label: "GitHub", href: "https://github.com/emrekardas" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emrekardas" },
  { label: "Twitter", href: "https://twitter.com/emrekardas" },
  { label: "Instagram", href: "https://www.instagram.com/emrekardas" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/emrekardas" },
];

export function SocialFooter() {
  return (
    <nav
      aria-label="Sosyal bağlantılar"
      className="mx-auto max-w-6xl px-6 pt-8"
    >
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[var(--yeni-fg)]">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group relative pb-1 transition-colors duration-200 hover:text-[var(--yeni-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)] focus-visible:rounded"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-3 bg-[var(--yeni-fg)] transition-all duration-300 ease-out group-hover:w-full group-hover:bg-[var(--yeni-accent)]"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
