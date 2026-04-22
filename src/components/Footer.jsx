import { profile } from "@/lib/data";
import { IconGitHub, IconLinkedIn, IconMail } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] mt-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12.5px] text-[color:var(--muted)]">
        <p className="mono">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; care.
        </p>
        <div className="flex items-center gap-2">
          <FooterIcon href={`mailto:${profile.email}`} label="Email">
            <IconMail width={16} height={16} />
          </FooterIcon>
          <FooterIcon href={profile.socials.github} label="GitHub">
            <IconGitHub width={16} height={16} />
          </FooterIcon>
          <FooterIcon href={profile.socials.linkedin} label="LinkedIn">
            <IconLinkedIn width={16} height={16} />
          </FooterIcon>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ href, label, children }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[color:var(--muted)] hover:text-[color:var(--accent)] hover:bg-[color:rgba(var(--accent-rgb),0.08)] transition-colors"
    >
      {children}
    </a>
  );
}
