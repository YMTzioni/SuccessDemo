import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "איך להשתמש ב-ChatGPT בלמידה ובקריירה",
      excerpt: "מדריך מקיף לשימוש ב-ChatGPT ללמידה, עבודה ופיתוח קריירה. טיפים מעשיים ודוגמאות מהעולם האמיתי.",
      content: "ChatGPT הפך לכלי חיוני בעולם הלמידה והעבודה. במדריך זה תלמדו איך להשתמש ב-ChatGPT בצורה מקצועית ללמידה, כתיבת קוד, הכנה לראיונות ועוד.",
      author: "ד\"ר שרה כהן",
      date: "15.03.2025",
      category: "AI וטכנולוגיה",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      readTime: "8 דקות"
    },
    {
      id: 2,
      title: "5 דרכים להפוך כל עסק לעסק דיגיטלי עם AI",
      excerpt: "כיצד להשתמש בבינה מלאכותית כדי להפוך כל עסק לעסק דיגיטלי מודרני. כלים מעשיים ודוגמאות מהשטח.",
      content: "בינה מלאכותית משנה את הדרך שבה עסקים עובדים. במאמר זה נחשוף 5 דרכים מעשיות להפוך כל עסק לעסק דיגיטלי עם AI: אוטומציה, שירות לקוחות, שיווק ועוד.",
      author: "יניב ציוני",
      date: "12.03.2025",
      category: "עסקים ו-AI",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      readTime: "10 דקות"
    },
    {
      id: 3,
      title: "מדריך למתחילים ב-Power BI",
      excerpt: "מדריך מקיף למתחילים ב-Power BI. איך להתחיל, מה ללמוד ואיך ליצור דוחות ודשבורדים מקצועיים.",
      content: "Power BI הוא כלי מוביל לניתוח נתונים וויזואליזציה. במדריך זה תלמדו את היסודות: חיבור לנתונים, יצירת דוחות, בניית דשבורדים ועוד.",
      author: "יוסי לוי",
      date: "10.03.2025",
      category: "ניתוח נתונים",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      readTime: "12 דקות"
    },
    {
      id: 4,
      title: "סייבר ואבטחת מידע: המקצוע המבוקש ביותר ב-2025",
      excerpt: "מומחי אבטחת מידע נדרשים יותר מתמיד. מה צריך לדעת כדי להשתלב בתחום הסייבר?",
      content: "עם העלייה בכמות התקפות הסייבר, הביקוש למומחי אבטחת מידע גדל משמעותית. במכללה אנו מציעים תוכנית מקיפה הכוללת הסמכות בינלאומיות והכשרה מעשית.",
      author: "אמיר כהן",
      date: "08.03.2025",
      category: "אבטחה",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      readTime: "6 דקות"
    },
    {
      id: 5,
      title: "למידה מרחוק: המדריך המלא להצלחה בלימודים אונליין",
      excerpt: "איך להצליח בלימודים דיגיטליים? כל הטיפים והכלים שצריך לדעת כדי למקסם את הלמידה מרחוק.",
      content: "למידה מרחוק דורשת משמעת עצמית וכלים נכונים. במאמר זה נסקור את כל מה שצריך לדעת: איך לארגן את סביבת הלמידה, כלים דיגיטליים מומלצים, טכניקות למידה יעילות ועוד.",
      author: "מיכל אברהם",
      date: "05.03.2025",
      category: "למידה",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85b504d3?w=800&h=600&fit=crop",
      readTime: "8 דקות"
    },
    {
      id: 6,
      title: "סטודנטים מצטיינים: סיפורי הצלחה מהמכללה",
      excerpt: "פגשו את הסטודנטים שלנו שהגיעו להישגים מרשימים. סיפורי השראה והצלחה מהשטח.",
      content: "אנו גאים בסטודנטים שלנו שמגיעים להישגים מרשימים. במאמר זה נפגוש כמה מהבוגרים המצטיינים שלנו, נשמע על המסלול שלהם ונבין מה עזר להם להצליח.",
      author: "עדי ישראלי",
      date: "03.03.2025",
      category: "הצלחות",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      readTime: "5 דקות"
    }
  ]

  const categories = ["הכל", "AI וטכנולוגיה", "עסקים ו-AI", "ניתוח נתונים", "קריירה", "למידה"]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-gray-900 dark:to-indigo-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">כתבות ומאמרים</h1>
          <p className="text-lg md:text-xl text-indigo-100 dark:text-gray-200 px-4">
            עדכונים, טיפים ומידע מקצועי מהמכללה
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 text-white text-center mx-4 md:mx-0">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 px-4">קבלו מדריך חינמי למקצועות ההייטק של 2026</h3>
          <p className="text-base md:text-lg mb-4 md:mb-6 text-blue-100 dark:text-gray-200 px-4">
            הירשמו לניוזלטר שלנו וקבלו תוכן מקצועי, טיפים ומדריכים ישירות למייל
          </p>
          <form className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto px-4">
            <input
              type="email"
              placeholder="הכנס כתובת אימייל"
              className="flex-1 px-4 py-2.5 md:py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white text-sm md:text-base"
            />
            <button
              type="submit"
              className="bg-white text-blue-700 px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm md:text-base"
            >
              הירשם
            </button>
          </form>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12 justify-center px-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors font-semibold text-sm md:text-base"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
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
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2 md:mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    {article.author}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline text-xs md:text-sm">
                    קרא עוד →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

