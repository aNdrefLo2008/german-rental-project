/** @format */

"use client"

import {useState} from "react"
import {useRouter} from "next/navigation"

export default function StudioLogin() {
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Serverseitig prüfen über API
    const res = await fetch("/api/studio-login", {
      method: "POST",
      body: JSON.stringify({password}),
      headers: {"Content-Type": "application/json"}
    })

    if (res.ok) {
      router.push("/studio")
    } else {
      alert("Falsches Passwort")
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center mt-20'>
      <input
        type='password'
        placeholder='Passwort'
        className='border p-2 rounded mb-4'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded'>
        Einloggen
      </button>
    </form>
  )
}
