import { NextResponse } from "next/server";

// Paths to skip — static assets, internal Next.js routes, analytics pings
const SKIP_PREFIXES = ["/_next", "/favicon", "/api/_vercel", "/robots", "/sitemap"];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (SKIP_PREFIXES.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const ua = request.headers.get("user-agent") ?? "unknown";
  const referer = request.headers.get("referer") ?? "direct";
  const country = request.geo?.country ?? "unknown";
  const city = request.geo?.city ?? "unknown";
  const region = request.geo?.region ?? "unknown";

  console.log(
    JSON.stringify({
      event: "page_visit",
      ts: new Date().toISOString(),
      path: pathname,
      ip,
      country,
      city,
      region,
      referer,
      ua,
    })
  );

  return NextResponse.next();
}

export const config = {
  // Run on all routes except static files
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
