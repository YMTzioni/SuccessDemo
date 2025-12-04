import Layout from '@/components/Layout'
import Image from 'next/image'

export default function ScholarshipsPage() {
  const scholarships = [
    {
      title: "מלגת הצטיינות",
      content: "מלגה לסטודנטים מצטיינים עם ממוצע גבוה. סכום המלגה: עד 10,000 ש\"ח לשנה.",
      icon: "⭐",
      requirements: "ממוצע 85 ומעלה",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85b504d3?w=600&h=400&fit=crop"
    },
    {
      title: "מלגת סיוע כלכלי",
      content: "מלגה לסטודנטים הזקוקים לסיוע כלכלי. נבחן לפי קריטריונים סוציו-אקונומיים.",
      icon: "💝",
      requirements: "בדיקת זכאות",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "מלגת חיילים משוחררים",
      content: "מלגה מיוחדת לחיילים משוחררים. הטבות משמעותיות לזכאים.",
      icon: "🎖️",
      requirements: "תעודת שחרור",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {
      title: "מלגת אזור",
      content: "מלגות מיוחדות לתושבי אזורים מסוימים. בדקו את הזכאות שלכם.",
      icon: "🏘️",
      requirements: "תושבות באזור מוכר",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    }
  ]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-green-600 to-teal-600 dark:from-gray-900 dark:to-green-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">מלגות והגשות</h1>
          <p className="text-xl text-green-100 dark:text-gray-200">
            מגוון מלגות והטבות למימון הלימודים
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {scholarships.map((scholarship, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={scholarship.image}
                  alt={scholarship.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute top-4 right-4 text-4xl bg-white/90 dark:bg-gray-900/90 rounded-full p-3">
                  {scholarship.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {scholarship.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {scholarship.content}
                </p>
                <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">
                    דרישות: {scholarship.requirements}
                  </p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors dark:bg-blue-500 dark:hover:bg-blue-600">
                  הגש בקשה
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-teal-600 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4 text-center">תהליך הגשת הבקשה</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h4 className="font-semibold mb-2">מילוי טופס</h4>
              <p className="text-sm text-green-100 dark:text-gray-200">
                מלאו את טופס הבקשה עם כל הפרטים הנדרשים
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h4 className="font-semibold mb-2">אימות מסמכים</h4>
              <p className="text-sm text-green-100 dark:text-gray-200">
                נבדקים המסמכים והזכאות למלגה
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h4 className="font-semibold mb-2">אישור</h4>
              <p className="text-sm text-green-100 dark:text-gray-200">
                קבלת אישור והעברת המלגה
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

