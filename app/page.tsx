"use client"
import { Terminal } from "@/components/terminal"
import { CrtEffect } from "@/components/crt-effect"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <CrtEffect>
        <Terminal machineName="d34th" initialDirectory="~" portfolioDirectory="kyo" />
      </CrtEffect>
    </main>
  )
}
