import Layout from '@/components/Layout'
import Image from 'next/image'

export default function DigitalStudiesPage() {
  const programs = [
    {
      title: "פיתוח תוכנה",
      content: "לימודי פיתוח תוכנה מלאים. HTML, CSS, JavaScript, React, Node.js ועוד. מסלול מקיף להכשרת מפתחים מקצועיים.",
      icon: "💻",
      duration: "12 חודשים",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "ניהול עסקי",
      content: "תוכנית ניהול עסקי מתקדמת. ניהול פרויקטים, שיווק דיגיטלי, ניהול כספים ופיתוח עסקי.",
      icon: "📊",
      duration: "10 חודשים",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    },
    {
      title: "אבטחת מידע",
      content: "קורס אבטחת מידע וסייבר. הגנה על מערכות, אבטחת רשתות, אתיקה בסייבר והסמכות מקצועיות.",
      icon: "🔒",
      duration: "14 חודשים",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
    },
    {
      title: "עיצוב גרפי",
      content: "לימודי עיצוב גרפי דיגיטלי. Photoshop, Illustrator, Figma, עיצוב UI/UX ועוד כלים מקצועיים.",
      icon: "🎨",
      duration: "8 חודשים",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85b504d3?w=600&h=400&fit=crop"
    },
    {
      title: "ניתוח נתונים",
      content: "תוכנית ניתוח נתונים וביג דאטה. Python, SQL, Machine Learning, ויזואליזציה של נתונים.",
      icon: "📈",
      duration: "11 חודשים",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    },
    {
      title: "שיווק דיגיטלי",
      content: "קורס שיווק דיגיטלי מקיף. SEO, SEM, רשתות חברתיות, תוכן שיווקי וניהול קמפיינים.",
      icon: "📱",
      duration: "9 חודשים",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    }
  ]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-gray-900 dark:to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">לימודים דיגיטליים</h1>
          <p className="text-xl text-indigo-100 dark:text-gray-200">
            תוכניות לימודים מתקדמות ומקצועיות
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute top-4 right-4 text-4xl bg-white/90 dark:bg-gray-900/90 rounded-full p-3">
                  {program.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {program.content}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    ⏱️ {program.duration}
                  </span>
                  <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    פרטים נוספים →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">למה לבחור בנו?</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>מרצים מקצועיים מהתעשייה</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>תוכניות לימודים מעודכנות</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>ליווי אישי וסיוע</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>הכנה לקריירה מעשית</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-500 to-blue-600 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">איך זה עובד?</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>1.</span>
                <span>הרשמה ותהליך קבלה</span>
              </li>
              <li className="flex items-center gap-2">
                <span>2.</span>
                <span>לימודים גמישים אונליין</span>
              </li>
              <li className="flex items-center gap-2">
                <span>3.</span>
                <span>פרויקטים מעשיים</span>
              </li>
              <li className="flex items-center gap-2">
                <span>4.</span>
                <span>תעודת סיום והשמה</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

