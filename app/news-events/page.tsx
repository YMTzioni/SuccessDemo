import Layout from '@/components/Layout'
import Image from 'next/image'

export default function NewsEventsPage() {
  const news = [
    {
      title: "יום פתוח במכללה",
      content: "יום פתוח מיוחד עם הרצאות, סיורים ופגישות עם המרצים. הזדמנות להכיר את המכללה מקרוב.",
      icon: "🎉",
      date: "15.03.2025",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
    },
    {
      title: "כנס טכנולוגיה 2025",
      content: "כנס שנתי בנושא טכנולוגיות מתקדמות עם מרצים מובילים מהתעשייה. פתוח לקהל הרחב.",
      icon: "🚀",
      date: "20.04.2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "תוכנית מלגות חדשה",
      content: "פתיחת תוכנית מלגות חדשה לסטודנטים מצטיינים. פרטים נוספים בקישור למטה.",
      icon: "💰",
      date: "01.05.2025",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85b504d3?w=800&h=600&fit=crop"
    },
    {
      title: "סדנת קריירה",
      content: "סדנה מעשית לבניית קריירה בהיי-טק. כלים פרקטיים למציאת עבודה והתפתחות מקצועית.",
      icon: "💼",
      date: "10.05.2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    }
  ]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-600 to-teal-600 dark:from-gray-900 dark:to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">חדשות ואירועים</h1>
          <p className="text-xl text-blue-100 dark:text-gray-200">
            הישארו מעודכנים עם כל מה שקורה במכללה
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute top-4 right-4 text-4xl bg-white/90 dark:bg-gray-900/90 rounded-full p-3">
                  {item.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            רוצים לקבל עדכונים?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            הירשמו לניוזלטר שלנו וקבלו עדכונים שוטפים על אירועים וחדשות
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors dark:bg-blue-500 dark:hover:bg-blue-600">
            הירשם לניוזלטר
          </button>
        </div>
      </div>
    </Layout>
  )
}

