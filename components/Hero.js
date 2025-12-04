import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 dark:from-gray-900 dark:via-blue-900 dark:to-teal-900 text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              העתיד שלך בהייטק
              <span className="block text-teal-300">מתחיל כאן</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100 dark:text-gray-200 font-semibold">
              לומדים חכם. מתקדמים רחוק.
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-100 dark:text-gray-300">
              המכללה הראשונה בישראל שמשלבת AI בכל תחום לימוד.
              שיעורים אונליין בלייב ובזמנך החופשי, מכל מקום.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 shadow-lg"
              >
                השאר פרטים וקבל ייעוץ אישי בחינם
              </Link>
              <Link
                href="/programs"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors text-center"
              >
                הצטרף למסלול שיכניס אותך להייטק
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Success College - Technology"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

