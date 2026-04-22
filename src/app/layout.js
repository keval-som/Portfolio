import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-sans-var",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kevalsompura.dev"),
  title: "Keval Sompura — Software Engineer | Fintech & Backend",
  description:
    "Software Engineer specializing in high-throughput fintech systems, distributed backend architecture, and microservices. Ex-Lentra. M.S. Computer Science, Stevens Institute of Technology.",
  keywords: [
    "Keval Sompura",
    "Software Engineer",
    "Fintech",
    "Backend",
    "Distributed Systems",
    "Java",
    "Spring Boot",
    "AWS",
    "Lentra",
  ],
  authors: [{ name: "Keval Sompura" }],
  openGraph: {
    title: "Keval Sompura — Software Engineer",
    description:
      "Building high-throughput lending systems and secure data architectures.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keval Sompura — Software Engineer",
    description:
      "Building high-throughput lending systems and secure data architectures.",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07101f" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-3 focus:py-2 focus:rounded-md focus:bg-[color:var(--accent)] focus:text-[color:var(--accent-ink)] focus:mono focus:text-sm"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
