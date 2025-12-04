import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-auto border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-white.png"
                alt="Success College Logo"
                width={80}
                height={80}
                sizes="80px"
                className="rounded-lg"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              מכללה מובילה ללימודי היי-טק ועסקים. 
              אנו מציעים תוכניות לימודים מתקדמות וחדשניות.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  עלינו
                </Link>
              </li>
              <li>
                <Link href="/digital-studies" className="hover:text-white transition-colors">
                  לימודים דיגיטליים
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">מידע נוסף</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/scholarships" className="hover:text-white transition-colors">
                  מלגות והגשות
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-white transition-colors">
                  חדשות ואירועים
                </Link>
              </li>
              <li>
                <Link href="/local-councils" className="hover:text-white transition-colors">
                  מועצות מקומיות
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">יצירת קשר</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>טלפון: 03-1234567</li>
              <li>אימייל: info@success-college.ac.il</li>
              <li>כתובת: תל אביב, ישראל</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Success College. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}

