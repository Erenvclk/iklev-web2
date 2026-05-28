import Link from "next/link";

const footerLinks = [
  { label: "Vakıf Senedi", href: "/vakif-senedi" },
  { label: "Gizlilik", href: "/gizlilik" },
  { label: "Üyelik", href: "/uyelik" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-border bg-background"
      role="contentinfo"
      aria-label="Site alt bilgisi"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          İKLEV Vakfı © {new Date().getFullYear()}
        </p>

        <nav aria-label="Alt sayfa navigasyonu">
          <ul className="flex items-center gap-6" role="list">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
