import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const team = [
    {
      name: "ישראל ישראלי",
      role: "מייסד ומנכ\"ל",
      description: "מייסד Success College, מומחה בהייטק ובחינוך דיגיטלי עם ניסיון של מעל 15 שנים.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    {
      name: "ד\"ר שרה כהן",
      role: "מנהלת אקדמית",
      description: "דוקטורט בחינוך דיגיטלי, מומחית בלמידה מבוססת טכנולוגיה.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
    },
    {
      name: "יוסי לוי",
      role: "מנהל פדגוגי",
      description: "מומחה בפיתוח תוכנה ובהכשרת מפתחים, עם ניסיון בתעשיית ההייטק.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
    }
  ]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 dark:from-gray-900 dark:via-blue-900 dark:to-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">על המכללה</h1>
          <p className="text-xl text-blue-100 dark:text-gray-200 max-w-3xl mx-auto">
            המכללה הראשונה בישראל שמשלבת AI בכל תחום לימוד
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            סיפור המכללה
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Success College נולדה מתוך חזון: לאפשר לכל אחד להפוך את הסקרנות שלו לקריירה אמיתית.
              הקמנו את המכללה כדי לשבור את המחסומים שמפרידים בין אנשים לבין עולם ההייטק.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              אנחנו מאמינים שלמידה צריכה להיות נגישה, מעשית ומחוברת לעולם האמיתי.
              לכן כל תוכנית לימודים שלנו משלבת כלים מהתעשייה, פרויקטים אמיתיים ותמיכה אישית לאורך כל הדרך.
            </p>
            <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 my-8 border-r-4 border-blue-600">
              <p className="text-xl text-gray-800 dark:text-gray-200 italic mb-2">
                "הקמנו את Success College כדי לאפשר לכל אחד להפוך את הסקרנות שלו לקריירה אמיתית."
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-semibold">
                — יניב ציוני, מייסד ומנכ"ל
              </p>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-400 rounded-3xl transform rotate-6 opacity-20"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
                alt="Success College Team"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 600px"
                className="rounded-2xl w-full h-auto"
                loading="lazy"
                unoptimized
              />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-teal-400 rounded-3xl transform -rotate-6 opacity-20"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Success College Students"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 600px"
                className="rounded-2xl w-full h-auto"
                loading="lazy"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            הצוות שלנו
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">מוכנים להתחיל את המסע שלכם?</h3>
          <p className="text-xl mb-8 text-blue-100 dark:text-gray-200">
            השאר פרטים וקבל ייעוץ אישי חינם מהמומחים שלנו
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
            >
              השאר פרטים וקבל ייעוץ לימודים חינם
            </Link>
            <Link
              href="/programs"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              הצטרף למסלול שיכניס אותך להייטק
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
