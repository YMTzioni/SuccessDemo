'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const videoRef = useRef(null)
  const [videoSrc, setVideoSrc] = useState('/videos/hero.mp4')

  useEffect(() => {
    // Check if we're on GitHub Pages (with basePath)
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      if (currentPath.startsWith('/SuccessDemo')) {
        setVideoSrc('/SuccessDemo/videos/hero.mp4')
      }
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 dark:from-gray-900 dark:via-blue-900 dark:to-teal-900 text-white py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              העתיד שלך בהייטק
              <span className="block text-teal-300">מתחיל כאן</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-blue-100 dark:text-gray-200 font-semibold">
              לומדים חכם. מתקדמים רחוק.
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-blue-100 dark:text-gray-300">
              המכללה הראשונה בישראל שמשלבת AI בכל תחום לימוד.
              שיעורים אונליין בלייב ובזמנך החופשי, מכל מקום.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 shadow-lg text-sm md:text-base"
              >
                השאר פרטים וקבל ייעוץ אישי בחינם
              </Link>
              <Link
                href="/programs"
                className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors text-center text-sm md:text-base"
              >
                הצטרף למסלול שיכניס אותך להייטק
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 dark:bg-blue-300 rounded-3xl transform rotate-6 opacity-30"></div>
              <div className="relative bg-blue-50 dark:bg-blue-100 rounded-3xl p-8 shadow-2xl">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-2xl w-full h-auto"
                  key={videoSrc}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

