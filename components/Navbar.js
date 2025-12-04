// components/Navbar.js
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const links = [
    { name: "דף הבית", path: "/" },
    { name: "המסלולים שלנו", path: "/programs" },
    { name: "למה Success College?", path: "/why-us" },
    { name: "בלוג ותוכן חינמי", path: "/articles" },
    { name: "על המכללה", path: "/about" },
    { name: "צור קשר", path: "/contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  
  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col" onClick={closeMenu}>
            <span className="text-xl font-bold text-white">Success College</span>
            <span className="text-xs text-gray-400">High-Tech & Business</span>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-4 font-semibold">
            {links.map(link => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  pathname === link.path
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="תפריט"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 pb-4">
            {links.map(link => (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === link.path
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
