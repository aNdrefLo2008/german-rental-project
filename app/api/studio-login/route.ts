import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { password } = await req.json()

  if (password === process.env.STUDIO_PASSWORD) {
    const res = NextResponse.json({ success: true })
    // Cookie nur für /studio setzen, httpOnly
    res.cookies.set({
      name: "studio-auth",
      value: password,
      path: "/studio",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    })
    return res
  }

  return NextResponse.json({ success: false }, { status: 401 })
}
