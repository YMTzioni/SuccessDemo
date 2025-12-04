import Layout from '@/components/Layout'
import Link from 'next/link'

export default function WhyUsPage() {
  const values = [
    {
      icon: "📚",
      title: "למידה מעשית עם כלים מהעולם האמיתי",
      content: "אנחנו לא מלמדים רק תיאוריה. כל שיעור כולל תרגול מעשי, פרויקטים אמיתיים וכלים שמשתמשים בהם בתעשייה."
    },
    {
      icon: "💬",
      title: "תמיכה טכנית ואקדמית לאורך כל הדרך",
      content: "אתה אף פעם לא לבד. צוות התמיכה שלנו זמין בוואטסאפ ובטלפון לענות על כל שאלה ולעזור בכל שלב."
    },
    {
      icon: "🌐",
      title: "שיעורים בלייב ומוקלטים",
      content: "שיעורים בלייב עם מרצים מובילים, וגם גישה להקלטות כדי לצפות שוב בזמנך החופשי, מכל מקום."
    },
    {
      icon: "🧭",
      title: "ייעוץ קריירה והכוונה לשוק העבודה",
      content: "לא רק לומדים — גם מתכוננים לקריירה. ייעוץ קריירה, הכנה לראיונות עבודה וסיוע בהשמה."
    }
  ]

  const stats = [
    { number: "12,000+", label: "בוגרים" },
    { number: "95%", label: "שביעות רצון" },
    { number: "60%", label: "השמה בתעשייה" }
  ]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 dark:from-gray-900 dark:via-blue-900 dark:to-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">למה Success College?</h1>
          <p className="text-xl text-blue-100 dark:text-gray-200 max-w-3xl mx-auto">
            המכללה הראשונה בישראל שמשלבת AI בכל תחום לימוד.
            למידה חווייתית עם תרגול מעשי, פרויקטים אמיתיים וכלים מעולם העבודה.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            הערכים שלנו
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-900 to-teal-900 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">המספרים מדברים</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-2xl text-blue-100 dark:text-gray-300">{stat.label}</div>
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

