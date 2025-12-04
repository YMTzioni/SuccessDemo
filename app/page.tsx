import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import SectionCard from '@/components/SectionCard'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const advantages = [
    {
      title: "לומדים אונליין מכל מקום",
      content: "שיעורים בלייב ומוקלטים שאפשר לצפות בהם בזמנך החופשי, מכל מקום בעולם.",
      icon: "🌐"
    },
    {
      title: "תמיכה אישית בוואטסאפ",
      content: "אתה אף פעם לא לבד — תמיכה טכנית ואקדמית לאורך כל הדרך בוואטסאפ ובטלפון.",
      icon: "💬"
    },
    {
      title: "שילוב בינה מלאכותית בלמידה",
      content: "המכללה הראשונה בישראל שמשלבת AI בכל תחום לימוד. למידה חווייתית עם כלים מהעולם האמיתי.",
      icon: "🤖"
    }
  ]

  const testimonials = [
    {
      name: "יוסי כהן",
      role: "בוגר מסלול AI PRO",
      text: "הקורס שינה לי את הקריירה. היום אני עובד בחברת הייטק מובילה בזכות הכלים שלמדתי כאן.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "שרה לוי",
      role: "בוגרת מסלול Data Analyst",
      text: "התמיכה האישית והשיעורים המעשיים עזרו לי להשתלב מהר בתעשייה. ממליצה בחום!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "דוד ישראלי",
      role: "בוגר מסלול Fullstack",
      text: "המרצים מקצועיים, החומר מעודכן והתמיכה מעולה. בדיוק מה שחיפשתי כדי להיכנס להייטק.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    }
  ]

  const stats = [
    { number: "12,000+", label: "בוגרים" },
    { number: "95%", label: "שביעות רצון" },
    { number: "60%", label: "השמה בתעשייה" }
  ]

  return (
    <Layout>
      <Hero />
      <div className="container mx-auto px-4 py-16">
        {/* Advantages Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 px-4">
            למה Success College?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 px-4">
            שלושה יתרונות מרכזיים שמבדילים אותנו
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{advantage.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
                  {advantage.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  {advantage.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-900 to-teal-900 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-white text-center mb-12 md:mb-16 mx-4 md:mx-0">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg md:text-xl text-blue-100 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-12 md:mb-16 px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              מה אומרים הבוגרים שלנו
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 px-4">
              המלצות מסטודנטים שהגיעו להישגים מרשימים
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 md:p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full mr-3 md:mr-4"
                  />
                  <div>
                    <div className="font-bold text-sm md:text-base text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Articles Section */}
        <div className="mb-12 md:mb-16 px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                כתבות מומלצות
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                עדכונים וטיפים מקצועיים מהמכללה
              </p>
            </div>
            <Link
              href="/articles"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline text-sm md:text-base"
            >
              כל הכתבות →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "המהפכה הטכנולוגית בחינוך: איך AI משנה את פני הלמידה",
                excerpt: "מחקר חדש חושף את ההשפעה של בינה מלאכותית על שיטות הלמידה המודרניות.",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
                date: "15.03.2025",
                id: 1
              },
              {
                title: "10 הטיפים המובילים להצלחה בקריירה בהיי-טק",
                excerpt: "מומחי המכללה חושפים את הסודות להצלחה בתעשיית ההיי-טק.",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
                date: "12.03.2025",
                id: 2
              },
              {
                title: "מלגות חדשות לסטודנטים: הזדמנות שלא כדאי להחמיץ",
                excerpt: "מכללת Success College משיקה תוכנית מלגות חדשה בסך 2 מיליון ש\"ח.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
                date: "10.03.2025",
                id: 3
              }
            ].map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-white text-center mx-4 md:mx-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 px-4">מוכנים להתחיל?</h3>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 dark:text-gray-200 px-4">
            הצטרפו אלינו עוד היום והתחילו את המסע שלכם לעבר קריירה מוצלחת
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link
              href="/about"
              className="inline-block bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 text-sm md:text-base"
            >
              למידע נוסף על המכללה
            </Link>
            <Link
              href="/digital-studies"
              className="inline-block bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors text-sm md:text-base"
            >
              התחל ללמוד
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
