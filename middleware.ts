import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const cookie = req.cookies.get("studio-auth")?.value

  // Nur /studio schützen
  if (url.pathname.startsWith("/studio") && cookie !== process.env.STUDIO_PASSWORD) {
    return NextResponse.redirect(new URL("/studio-login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/studio/:path*"],
}
