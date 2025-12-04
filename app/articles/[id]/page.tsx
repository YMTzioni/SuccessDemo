import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const articles = {
  1: {
    id: 1,
    title: "המהפכה הטכנולוגית בחינוך: איך AI משנה את פני הלמידה",
    content: `בינה מלאכותית הופכת להיות חלק בלתי נפרד מעולם החינוך. מחקרים מראים ששימוש ב-AI יכול לשפר את תוצאות הלמידה ב-40%. במכללת Success College אנו משלבים טכנולוגיות מתקדמות בכל תוכניות הלימודים שלנו.

## מהי המהפכה הטכנולוגית בחינוך?

המהפכה הטכנולוגית בחינוך היא תהליך מתמשך שמשנה את האופן שבו אנו לומדים ומלמדים. בינה מלאכותית, למידת מכונה וטכנולוגיות חדשות אחרות מאפשרות לנו ליצור חוויות למידה מותאמות אישית ויעילות יותר.

## היתרונות של AI בחינוך

1. **למידה מותאמת אישית**: AI יכול להתאים את קצב הלמידה והתוכן לכל סטודנט באופן אישי
2. **משוב מיידי**: מערכות AI יכולות לספק משוב מיידי על ביצועים
3. **חיסכון בזמן**: אוטומציה של משימות אדמיניסטרטיביות מאפשרת למרצים להתמקד בהוראה
4. **ניתוח נתונים**: AI יכול לנתח נתונים ולזהות דפוסים שיכולים לעזור בשיפור הלמידה

## האתגרים

לצד היתרונות, יש גם אתגרים:
- חששות פרטיות ואבטחת מידע
- צורך בהכשרת מרצים
- עלויות יישום
- שמירה על הקשר האנושי בחינוך

## המסקנה

העתיד של החינוך הוא דיגיטלי, והבינה המלאכותית היא חלק בלתי נפרד ממנו. במכללת Success College אנו מחויבים להישאר בחזית הטכנולוגיה ולהציע לסטודנטים שלנו את הכלים הטובים ביותר להצלחה.`,
    author: "ד\"ר שרה כהן",
    date: "15.03.2025",
    category: "טכנולוגיה",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
    readTime: "5 דקות"
  },
  2: {
    id: 2,
    title: "10 הטיפים המובילים להצלחה בקריירה בהיי-טק",
    content: `תעשיית ההיי-טק מציעה הזדמנויות רבות, אבל גם תחרות קשה. במאמר זה נחשוף את 10 הטיפים החשובים ביותר להצלחה.

## 1. למידה מתמדת

הטכנולוגיה משתנה כל הזמן. חשוב להישאר מעודכן עם הטרנדים החדשים והטכנולוגיות המתפתחות.

## 2. בניית פורטפוליו

פורטפוליו חזק הוא המפתח להצלחה. שתפו את הפרויקטים שלכם ב-GitHub, צרו אתר אישי והציגו את העבודה שלכם.

## 3. רשת קשרים מקצועית

השתתפו בכנסים, מפגשים מקצועיים וקהילות אונליין. רשת קשרים טובה יכולה לפתוח דלתות רבות.

## 4. התמחות בתחום ספציפי

בחרו תחום התמחות והתמקצעו בו. עדיף להיות מומחה בתחום אחד מאשר ממוצע בהרבה תחומים.

## 5. פיתוח כישורים רכים

כישורים רכים כמו תקשורת, עבודה בצוות וניהול זמן חשובים לא פחות מכישורים טכניים.

## 6. תרגול מעשי

בנו פרויקטים, תרגלו קוד, פתרו בעיות. התרגול המעשי הוא המפתח להצלחה.

## 7. קבלת משוב

בקשו משוב על העבודה שלכם. זה יעזור לכם להשתפר ולהתפתח.

## 8. סבלנות והתמדה

הצלחה בהיי-טק דורשת סבלנות והתמדה. אל תתייאשו מהאתגרים.

## 9. עבודה על פרויקטים אישיים

פרויקטים אישיים מראים את התשוקה והמוטיבציה שלכם. הם גם הזדמנות ללמוד טכנולוגיות חדשות.

## 10. שמירה על איזון

חשוב לשמור על איזון בין עבודה לחיים אישיים. זה יעזור לכם להישאר פרודוקטיביים ויצירתיים.`,
    author: "יוסי לוי",
    date: "12.03.2025",
    category: "קריירה",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    readTime: "7 דקות"
  },
  3: {
    id: 3,
    title: "מלגות חדשות לסטודנטים: הזדמנות שלא כדאי להחמיץ",
    content: `אנו גאים להכריז על תוכנית מלגות חדשה ומרחיבה. התוכנית כוללת מלגות הצטיינות, מלגות סיוע כלכלי ומלגות מיוחדות לסטודנטים מאזורים שונים.

## סוגי המלגות

### מלגת הצטיינות
מלגה לסטודנטים מצטיינים עם ממוצע גבוה. סכום המלגה: עד 10,000 ש\"ח לשנה.

### מלגת סיוע כלכלי
מלגה לסטודנטים הזקוקים לסיוע כלכלי. נבחן לפי קריטריונים סוציו-אקונומיים.

### מלגת חיילים משוחררים
מלגה מיוחדת לחיילים משוחררים. הטבות משמעותיות לזכאים.

### מלגת אזור
מלגות מיוחדות לתושבי אזורים מסוימים. בדקו את הזכאות שלכם.

## איך להגיש בקשה?

1. מלאו את טופס הבקשה באתר
2. צרפו את כל המסמכים הנדרשים
3. נבדקים המסמכים והזכאות
4. קבלת אישור והעברת המלגה

## מועדי הגשה

מועדי הגשה לשנת 2025:
- סבב ראשון: עד 30.04.2025
- סבב שני: עד 31.08.2025
- סבב שלישי: עד 31.12.2025

## שאלות נפוצות

**מי זכאי למלגה?**
כל סטודנט שנרשם למכללה יכול להגיש בקשה למלגה.

**כמה זמן לוקח לקבל תשובה?**
תהליך הבדיקה לוקח עד 3 שבועות.

**האם אפשר לקבל יותר ממלגה אחת?**
כן, בהתאם לקריטריונים.`,
    author: "רונית דוד",
    date: "10.03.2025",
    category: "מלגות",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
    readTime: "4 דקות"
  }
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles[params.id as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <Layout>
      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          ← חזרה לכתבות
        </Link>

        <div className="mb-8">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {article.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <div className="relative h-96 mb-12 rounded-2xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">נכתב על ידי</p>
              <p className="font-semibold text-gray-900 dark:text-white">{article.author}</p>
            </div>
            <div className="flex gap-4">
              <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="text-xl">👍</span>
              </button>
              <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="text-xl">💬</span>
              </button>
              <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="text-xl">🔗</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

