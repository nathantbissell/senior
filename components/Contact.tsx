import { personalInfo } from "@/data/resume";

export default function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      label: "Location",
      value: personalInfo.location,
    },
    personalInfo.linkedin
      ? {
          label: "LinkedIn",
          value: "Connect on LinkedIn",
          href: personalInfo.linkedin,
        }
      : null,
    personalInfo.github
      ? {
          label: "GitHub",
          value: "View profile",
          href: personalInfo.github,
        }
      : null,
  ].filter(Boolean) as { label: string; value: string; href?: string }[];

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-6 py-16 sm:py-20"
    >
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--page-meta)]">
          Contact
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--page-heading)] sm:text-4xl">
          Let&rsquo;s build something impactful together
        </h2>
        <p className="indented-paragraph text-sm leading-7 text-[var(--page-muted)]">
          I&rsquo;m open to senior engineering roles, short-term consulting, and
          collaboration on automation and AI initiatives. Reach out and we&rsquo;ll find a
          time to connect.
        </p>
      </header>

      <div className="space-y-6">
        {contactItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-2 border-b border-[var(--page-border)] pb-6 last:border-none last:pb-0"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--page-meta)]">
              {item.label}
            </span>
            {item.href ? (
              <a
                href={item.href}
                className="text-lg font-medium text-[var(--page-muted)] transition-colors hover:text-[var(--page-heading)]"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-lg font-medium text-[var(--page-muted)]">
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
