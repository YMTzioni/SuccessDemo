import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function ProgramsPage() {
  const programs = [
    {
      id: 'ai-pro',
      title: "AI PRO",
      description: "קורס מקיף לעבודה עם בינה מלאכותית. ChatGPT, Midjourney, Python, Machine Learning ועוד.",
      duration: "12 חודשים",
      whatYouLearn: [
        "עבודה עם כלי AI מובילים",
        "פיתוח מודלים של Machine Learning",
        "אוטומציה עם AI",
        "שילוב AI בעסקים"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      cta: "בדוק אם אתה מתאים למסלול AI PRO"
    },
    {
      id: 'data-analyst',
      title: "Data Analyst",
      description: "הכשרה מקצועית לניתוח נתונים. Power BI, SQL, Python, Excel מתקדם וויזואליזציה של נתונים.",
      duration: "10 חודשים",
      whatYouLearn: [
        "ניתוח נתונים מתקדם",
        "יצירת דוחות ודשבורדים",
        "SQL ו-Query מתקדמים",
        "ויזואליזציה מקצועית"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      cta: "לפרטים נוספים"
    },
    {
      id: 'cyber',
      title: "Cyber Security",
      description: "קורס אבטחת מידע וסייבר מקיף. הגנה על מערכות, אבטחת רשתות, אתיקה בסייבר והסמכות בינלאומיות.",
      duration: "14 חודשים",
      whatYouLearn: [
        "אבטחת רשתות ומערכות",
        "זיהוי והגנה מפני איומים",
        "אתיקה וכללים בסייבר",
        "הסמכות מקצועיות"
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      cta: "לפרטים נוספים"
    },
    {
      id: 'fullstack',
      title: "Fullstack Development",
      description: "לימודי פיתוח תוכנה מלאים. HTML, CSS, JavaScript, React, Node.js, Databases ועוד.",
      duration: "12 חודשים",
      whatYouLearn: [
        "פיתוח Frontend ו-Backend",
        "React ו-Node.js",
        "עבודה עם Databases",
        "Deployment ו-DevOps בסיסי"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85b504d3?w=800&h=600&fit=crop",
      cta: "לפרטים נוספים"
    },
    {
      id: 'digital-marketing',
      title: "Digital Marketing",
      description: "קורס שיווק דיגיטלי מקיף. SEO, SEM, רשתות חברתיות, תוכן שיווקי, ניהול קמפיינים ו-AI בשיווק.",
      duration: "9 חודשים",
      whatYouLearn: [
        "SEO ו-SEM",
        "ניהול קמפיינים דיגיטליים",
        "תוכן שיווקי עם AI",
        "ניתוח ביצועים ומדידות"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      cta: "לפרטים נוספים"
    },
    {
      id: 'devops',
      title: "DevOps",
      description: "הכשרה מקצועית ב-DevOps. Docker, Kubernetes, CI/CD, Cloud Services, אוטומציה וניהול תשתיות.",
      duration: "11 חודשים",
      whatYouLearn: [
        "Docker ו-Kubernetes",
        "CI/CD Pipelines",
        "Cloud Services (AWS/Azure)",
        "אוטומציה וניהול תשתיות"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      cta: "לפרטים נוספים"
    }
  ]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 dark:from-gray-900 dark:via-blue-900 dark:to-teal-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">המסלולים שלנו</h1>
          <p className="text-lg md:text-xl text-blue-100 dark:text-gray-200 max-w-3xl mx-auto px-4">
            בחרו את התחום שמעניין אתכם והתחילו ללמוד מקצוע אמיתי.
            כל המסלולים כוללים שיעורים בלייב, תמיכה אישית ושילוב בינה מלאכותית בלמידה.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
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
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
                  {program.description}
                </p>
                <div className="mb-3 md:mb-4">
                  <span className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">משך הקורס: </span>
                  <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{program.duration}</span>
                </div>
                <div className="mb-4 md:mb-6">
                  <p className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">מה לומדים בפועל:</p>
                  <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {program.whatYouLearn.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/programs/${program.id}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-center transition-colors dark:bg-blue-500 dark:hover:bg-blue-600 text-sm md:text-base"
                >
                  {program.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-white text-center mx-4 md:mx-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 px-4">לא בטוח איזה מסלול מתאים לך?</h3>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100 dark:text-gray-200 px-4">
            השאר פרטים וקבל ייעוץ אישי חינם מהמומחים שלנו
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 text-sm md:text-base"
          >
            לחץ כאן לשיחת ייעוץ עם נציג
          </Link>
        </div>
      </div>
    </Layout>
  )
}

