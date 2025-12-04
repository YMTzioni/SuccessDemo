import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const programs = {
  'ai-pro': {
    id: 'ai-pro',
    title: "AI PRO",
    description: "קורס מקיף לעבודה עם בינה מלאכותית. ChatGPT, Midjourney, Python, Machine Learning ועוד.",
    duration: "12 חודשים",
    content: `קורס AI PRO הוא המסלול המקיף ביותר בישראל לעבודה עם בינה מלאכותית. במהלך הקורס תלמדו לעבוד עם כלי AI מובילים, לפתח מודלים משלכם ולשלב AI בעסקים ובקריירה.

## מבנה המסלול

### יחידה 1: מבוא לבינה מלאכותית
- מהי בינה מלאכותית ואיך היא עובדת
- היסטוריה והתפתחות AI
- סוגי AI שונים (Narrow AI, General AI)

### יחידה 2: כלי AI מעשיים
- עבודה עם ChatGPT למטרות מקצועיות
- יצירת תמונות עם Midjourney ו-DALL-E
- אוטומציה עם AI

### יחידה 3: Machine Learning עם Python
- יסודות Python
- בניית מודלים של Machine Learning
- ניתוח נתונים עם AI

### יחידה 4: שילוב AI בעסקים
- איך להשתמש ב-AI לשיפור עסק
- אוטומציה של תהליכים עסקיים
- בניית פתרונות AI מותאמים

## למי זה מתאים?

- יזמים ובעלי עסקים שרוצים לשלב AI בעסק
- עובדים בהייטק שרוצים להתמקצע ב-AI
- אנשים בשינוי קריירה שמחפשים מקצוע עם עתיד
- צעירים אחרי צבא שמחפשים מסלול ממוקד

## מה תקבלו?

- שיעורים בלייב עם מרצים מובילים
- תמיכה אישית בוואטסאפ
- פרויקטים מעשיים מהעולם האמיתי
- גישה לכלי AI מתקדמים
- תעודת סיום מוכרת`,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
    videoUrl: "#"
  },
  'data-analyst': {
    id: 'data-analyst',
    title: "Data Analyst",
    description: "הכשרה מקצועית לניתוח נתונים. Power BI, SQL, Python, Excel מתקדם וויזואליזציה של נתונים.",
    duration: "10 חודשים",
    content: `מסלול Data Analyst מכשיר אתכם להיות אנליסטי נתונים מקצועיים. תלמדו לעבוד עם כלים מובילים בתעשייה ולנתח נתונים בצורה מקצועית.`,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    videoUrl: "#"
  },
  'cyber': {
    id: 'cyber',
    title: "Cyber Security",
    description: "קורס אבטחת מידע וסייבר מקיף. הגנה על מערכות, אבטחת רשתות, אתיקה בסייבר והסמכות בינלאומיות.",
    duration: "14 חודשים",
    content: `מסלול Cyber Security מכשיר אתכם להיות מומחי אבטחת מידע. תלמדו להגן על מערכות, לזהות איומים ולעבוד עם כלים מקצועיים.`,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
    videoUrl: "#"
  },
  'fullstack': {
    id: 'fullstack',
    title: "Fullstack Development",
    description: "לימודי פיתוח תוכנה מלאים. HTML, CSS, JavaScript, React, Node.js, Databases ועוד.",
    duration: "12 חודשים",
    content: `מסלול Fullstack Development מכשיר אתכם להיות מפתחים מקצועיים. תלמדו לפתח אפליקציות מלאות מקצה לקצה.`,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85b504d3?w=1200&h=600&fit=crop",
    videoUrl: "#"
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: "Digital Marketing",
    description: "קורס שיווק דיגיטלי מקיף. SEO, SEM, רשתות חברתיות, תוכן שיווקי, ניהול קמפיינים ו-AI בשיווק.",
    duration: "9 חודשים",
    content: `מסלול Digital Marketing מכשיר אתכם להיות מומחי שיווק דיגיטלי. תלמדו לנהל קמפיינים, ליצור תוכן ולמדוד ביצועים.`,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
    videoUrl: "#"
  },
  'devops': {
    id: 'devops',
    title: "DevOps",
    description: "הכשרה מקצועית ב-DevOps. Docker, Kubernetes, CI/CD, Cloud Services, אוטומציה וניהול תשתיות.",
    duration: "11 חודשים",
    content: `מסלול DevOps מכשיר אתכם להיות מומחי תשתיות ופיתוח. תלמדו לעבוד עם כלים מובילים בתעשייה ולנהל תשתיות מורכבות.`,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    videoUrl: "#"
  }
}

export default function ProgramPage({ params }: { params: { id: string } }) {
  const program = programs[params.id as keyof typeof programs]

  if (!program) {
    notFound()
  }

  return (
    <Layout>
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          ← חזרה למסלולים
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {program.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            {program.description}
          </p>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span>משך הקורס: {program.duration}</span>
          </div>
        </div>

        <div className="relative h-96 mb-12 rounded-2xl overflow-hidden">
          <Image
            src={program.image}
            alt={program.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {program.content}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">רוצה ללמוד {program.title}?</h3>
          <p className="text-lg mb-6 text-blue-100 dark:text-gray-200">
            השאר פרטים וקבל ייעוץ אישי חינם
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
          >
            השאר פרטים וקבל ייעוץ לימודים חינם
          </Link>
        </div>
      </article>
    </Layout>
  )
}

