// components/Navbar.js
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
  const links = [
    { name: "דף הבית", path: "/" },
    { name: "המסלולים שלנו", path: "/programs" },
    { name: "למה Success College?", path: "/why-us" },
    { name: "בלוג ותוכן חינמי", path: "/articles" },
    { name: "על המכללה", path: "/about" },
    { name: "צור קשר", path: "/contact" },
  ]
  
  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-bold text-white">Success College</span>
            <span className="text-xs text-gray-400">High-Tech & Business</span>
          </Link>
          
          <div className="flex items-center gap-6">
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
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden mt-4 flex flex-wrap gap-2">
          {links.map(link => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-2 rounded-lg text-sm transition-colors ${
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
    </nav>
  )
}
