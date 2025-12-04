import Layout from '@/components/Layout'
import Image from 'next/image'

export default function LocalCouncilsPage() {
  const councils = [
    {
      name: "תל אביב-יפו",
      description: "שיתוף פעולה עם עיריית תל אביב. תוכניות מיוחדות לתושבי העיר.",
      benefits: ["הנחה של 15%", "מלגות מיוחדות", "שירותי ייעוץ"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      name: "ירושלים",
      description: "תוכנית מיוחדת לתושבי ירושלים. מגוון מסלולים והטבות.",
      benefits: ["הנחה של 20%", "תחבורה מסובסדת", "מרכז לימודים בעיר"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      name: "חיפה",
      description: "שיתוף פעולה עם עיריית חיפה. תוכניות לימודים מותאמות.",
      benefits: ["הנחה של 10%", "מלגות אזוריות", "פעילויות חברתיות"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85b504d3?w=600&h=400&fit=crop"
    },
    {
      name: "באר שבע",
      description: "תוכנית פיתוח דרום. הזדמנויות לימודים לתושבי הדרום.",
      benefits: ["הנחה של 25%", "מלגות נדיבות", "מרכז לימודים מקומי"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    }
  ]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 dark:from-gray-900 dark:to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">מועצות מקומיות</h1>
          <p className="text-xl text-purple-100 dark:text-gray-200">
            שיתופי פעולה עם מועצות מקומיות ברחבי הארץ
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {councils.map((council, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={council.image}
                  alt={council.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {council.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {council.description}
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                    הטבות מיוחדות:
                  </h4>
                  <ul className="space-y-2">
                    {council.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <span className="text-green-500">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors dark:bg-purple-500 dark:hover:bg-purple-600">
                  למידע נוסף
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">מועצה שלכם לא ברשימה?</h3>
          <p className="text-xl mb-8 text-purple-100 dark:text-gray-200">
            צרו איתנו קשר ואנו נשמח לבדוק אפשרויות לשיתוף פעולה
          </p>
          <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
            צור קשר
          </button>
        </div>
      </div>
    </Layout>
  )
}

