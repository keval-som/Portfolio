import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

// Display — variable width axis for the expanded, industrial-signage look.
const archivo = Archivo({
  variable: "--font-display-var",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kevalsompura.vercel.app"),
  title: "Keval Sompura — Software Engineer",
  description:
    "Keval Sompura — Software Engineer specializing in distributed systems, full-stack development, and production backend engineering. M.S. Computer Science, Stevens Institute of Technology.",
  keywords: [
    "Keval Sompura",
    "Software Engineer",
    "Full Stack",
    "Distributed Systems",
    "Java",
    "Spring Boot",
    "AWS",
    "React",
    "FastAPI",
    "Fintech",
    "Backend Engineer",
  ],
  authors: [{ name: "Keval Sompura" }],
  openGraph: {
    title: "Keval Sompura — Software Engineer",
    description:
      "Full-stack engineer with production fintech experience in distributed systems, async architectures, and end-to-end feature delivery.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keval Sompura — Software Engineer",
    description:
      "Full-stack engineer with production fintech experience in distributed systems, async architectures, and end-to-end feature delivery.",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0b09" },
    { media: "(prefers-color-scheme: light)", color: "#f5f4f0" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevents theme flash on initial load */}
        <script
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
      </head>
      <body
        className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
      >
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-3 focus:py-2 focus:rounded-md focus:bg-[color:var(--accent)] focus:text-[color:var(--accent-ink)] focus:mono focus:text-sm"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
