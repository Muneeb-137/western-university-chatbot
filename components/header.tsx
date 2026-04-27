"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-western-purple text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/thumbnails/uwo-chatbot-icon.png"
            alt="UWO Chatbot"
            width={48}
            height={48}
            className="h-12 w-12 rounded-lg"
          />
          <div>
            <p className="text-lg font-bold leading-tight">Western University</p>
            <p className="text-sm text-white/80">Office of the Registrar</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm text-white/90 transition-colors hover:text-white">
            Home
          </Link>

          <Link href="/#topics" className="text-sm text-white/90 transition-colors hover:text-white">
            Services
          </Link>

          <Link href="/#faculties" className="text-sm text-white/90 transition-colors hover:text-white">
            Faculties
          </Link>

          <Link href="/help" className="text-sm text-white/90 transition-colors hover:text-white">
            Help
          </Link>

          <Link
            href="https://registrar.uwo.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/25"
          >
            Registrar Website
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-lg p-2 transition-colors hover:bg-white/15 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 transition-all duration-200 md:hidden",
          mobileOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/#topics"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            Services
          </Link>

          <Link
            href="/#faculties"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            Faculties
          </Link>

          <Link
            href="/help"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            Help
          </Link>

          <Link
            href="https://registrar.uwo.ca"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="rounded-md px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            Registrar Website
          </Link>
        </nav>
      </div>
    </header>
  )
}