'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'

const ADMIN_PASSWORD = '123456'

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('dashboard')
  
  // States for different tabs
  const [showArticleForm, setShowArticleForm] = useState(false)
  const [showDiscountForm, setShowDiscountForm] = useState(false)
  const [showCampaignForm, setShowCampaignForm] = useState(false)
  const [editingArticle, setEditingArticle] = useState(null)
  const [editingDiscount, setEditingDiscount] = useState(null)
  const [editingCampaign, setEditingCampaign] = useState(null)

  // Form states
  const [articleForm, setArticleForm] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    category: 'טכנולוגיה',
    image: '',
    readTime: '5 דקות'
  })

  const [discountForm, setDiscountForm] = useState({
    title: '',
    code: '',
    discount: '',
    type: 'percentage', // percentage or fixed
    validFrom: '',
    validTo: '',
    description: '',
    maxUses: ''
  })

  const [campaignForm, setCampaignForm] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    budget: '',
    status: 'active',
    targetAudience: '',
    channels: []
  })

  useEffect(() => {
    const authStatus = sessionStorage.getItem('adminAuth')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: any) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('adminAuth', 'true')
      setError('')
    } else {
      setError('סיסמה שגויה')
      setTimeout(() => {
        router.push('/')
      }, 1500)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth')
    setIsAuthenticated(false)
    router.push('/')
  }

  // Article handlers
  const handleArticleSubmit = (e: any) => {
    e.preventDefault()
    // כאן תהיה לוגיקה לשמירת כתבה
    alert('כתבה נשמרה בהצלחה!')
    setShowArticleForm(false)
    setArticleForm({
      title: '',
      content: '',
      excerpt: '',
      author: '',
      category: 'טכנולוגיה',
      image: '',
      readTime: '5 דקות'
    })
    setEditingArticle(null)
  }

  const handleEditArticle = (article: any) => {
    setEditingArticle(article)
    setArticleForm({
      title: article.title,
      content: article.content || '',
      excerpt: article.excerpt,
      author: article.author,
      category: article.category,
      image: article.image || '',
      readTime: article.readTime || '5 דקות'
    })
    setShowArticleForm(true)
  }

  // Discount handlers
  const handleDiscountSubmit = (e: any) => {
    e.preventDefault()
    alert('הנחה נוצרה בהצלחה!')
    setShowDiscountForm(false)
    setDiscountForm({
      title: '',
      code: '',
      discount: '',
      type: 'percentage',
      validFrom: '',
      validTo: '',
      description: '',
      maxUses: ''
    })
    setEditingDiscount(null)
  }

  // Campaign handlers
  const handleCampaignSubmit = (e: any) => {
    e.preventDefault()
    alert('קמפיין נוצר בהצלחה!')
    setShowCampaignForm(false)
    setCampaignForm({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      budget: '',
      status: 'active',
      targetAudience: '',
      channels: []
    })
    setEditingCampaign(null)
  }

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-blue-600 rounded-full mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">פאנל ניהול</h1>
              <p className="text-gray-400">הזן סיסמה כדי להמשיך</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  סיסמה
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="הזן סיסמה"
                  autoFocus
                />
              </div>

              {error && (
                <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg text-sm">
                  {error}
                  <p className="mt-1 text-xs">מעביר לדף הבית...</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                התחבר
              </button>
            </form>
          </div>
        </div>
      </Layout>
    )
  }

  // נתונים לדוגמה
  const stats = {
    leads: 1247,
    articles: 18,
    discounts: 12,
    campaigns: 8,
    conversions: 156
  }

  const leads = [
    { id: 1, name: "יוסי כהן", email: "yossi@example.com", phone: "050-1234567", source: "גוגל", interest: "פיתוח תוכנה", status: "חדש", date: "15.03.2024" },
    { id: 2, name: "שרה לוי", email: "sara@example.com", phone: "052-2345678", source: "פייסבוק", interest: "ניהול עסקי", status: "בטיפול", date: "14.03.2024" },
    { id: 3, name: "דוד ישראלי", email: "david@example.com", phone: "054-3456789", source: "אתר", interest: "אבטחת מידע", status: "חדש", date: "16.03.2024" },
    { id: 4, name: "מיכל אברהם", email: "michal@example.com", phone: "050-4567890", source: "אינסטגרם", interest: "עיצוב גרפי", status: "מומר", date: "12.03.2024" },
    { id: 5, name: "רונן כהן", email: "ronen@example.com", phone: "052-5678901", source: "גוגל", interest: "ניתוח נתונים", status: "בטיפול", date: "13.03.2024" },
    { id: 6, name: "ענת דוד", email: "anat@example.com", phone: "054-6789012", source: "פייסבוק", interest: "שיווק דיגיטלי", status: "חדש", date: "17.03.2024" },
  ]

  const articles = [
    { id: 1, title: "המהפכה הטכנולוגית בחינוך: איך AI משנה את פני הלמידה", author: "ד\"ר שרה כהן", date: "15.03.2024", views: 1245, status: "פורסם", category: "טכנולוגיה" },
    { id: 2, title: "10 הטיפים המובילים להצלחה בקריירה בהיי-טק", author: "יוסי לוי", date: "12.03.2024", views: 892, status: "פורסם", category: "קריירה" },
    { id: 3, title: "מלגות חדשות לסטודנטים: הזדמנות שלא כדאי להחמיץ", author: "רונית דוד", date: "10.03.2024", views: 1567, status: "פורסם", category: "מלגות" },
    { id: 4, title: "סייבר ואבטחת מידע: המקצוע המבוקש ביותר ב-2024", author: "אמיר כהן", date: "08.03.2024", views: 734, status: "טיוטה", category: "אבטחה" },
  ]

  const discounts = [
    { id: 1, title: "הנחה 20% לרישום מוקדם", code: "EARLY20", discount: "20%", type: "percentage", validFrom: "01.03.2024", validTo: "31.03.2024", uses: 45, maxUses: 100, status: "פעיל" },
    { id: 2, title: "1,000 ש\"ח הנחה לחיילים משוחררים", code: "VETERAN1000", discount: "1,000 ש\"ח", type: "fixed", validFrom: "01.01.2024", validTo: "31.12.2024", uses: 23, maxUses: 50, status: "פעיל" },
    { id: 3, title: "הנחה 15% לקורסים דיגיטליים", code: "DIGITAL15", discount: "15%", type: "percentage", validFrom: "15.02.2024", validTo: "15.05.2024", uses: 78, maxUses: 200, status: "פעיל" },
    { id: 4, title: "הנחה 10% לסטודנטים", code: "STUDENT10", discount: "10%", type: "percentage", validFrom: "01.01.2024", validTo: "30.06.2024", uses: 156, maxUses: 500, status: "פעיל" },
  ]

  const campaigns = [
    { id: 1, name: "קמפיין רישום אביב 2024", description: "קמפיין לקידום רישום לקורסי אביב", startDate: "01.03.2024", endDate: "31.03.2024", budget: "50,000 ש\"ח", spent: "32,500 ש\"ח", status: "פעיל", leads: 245, conversions: 45 },
    { id: 2, name: "קמפיין פייסבוק - לימודים דיגיטליים", description: "קידום תוכניות לימודים דיגיטליות", startDate: "10.02.2024", endDate: "10.05.2024", budget: "30,000 ש\"ח", spent: "18,200 ש\"ח", status: "פעיל", leads: 189, conversions: 32 },
    { id: 3, name: "קמפיין גוגל - מלגות", description: "קידום תוכנית המלגות החדשה", startDate: "15.01.2024", endDate: "15.04.2024", budget: "25,000 ש\"ח", spent: "25,000 ש\"ח", status: "הושלם", leads: 312, conversions: 67 },
  ]

  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">פאנל ניהול שיווקי</h1>
              <p className="text-gray-300">ניהול תוכן, הנחות, קמפיינים ולידים</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <p className="text-sm text-gray-300">מנהל שיווק</p>
                <p className="font-semibold">Marketing Admin</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
              >
                התנתק
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-700 overflow-x-auto">
          {[
            { id: 'dashboard', name: 'לוח בקרה', icon: '📊' },
            { id: 'leads', name: 'לידים', icon: '👥' },
            { id: 'articles', name: 'כתבות', icon: '📰' },
            { id: 'discounts', name: 'הנחות', icon: '🎟️' },
            { id: 'campaigns', name: 'קמפיינים', icon: '📢' },
            { id: 'analytics', name: 'אנליטיקה', icon: '📈' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400 font-semibold">לידים</h3>
                  <span className="text-3xl">👥</span>
                </div>
                <p className="text-3xl font-bold text-white">{stats.leads}</p>
                <p className="text-sm text-green-400 mt-2">+24% מהחודש שעבר</p>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400 font-semibold">כתבות</h3>
                  <span className="text-3xl">📰</span>
                </div>
                <p className="text-3xl font-bold text-white">{stats.articles}</p>
                <p className="text-sm text-blue-400 mt-2">3 כתבות חדשות</p>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400 font-semibold">הנחות פעילות</h3>
                  <span className="text-3xl">🎟️</span>
                </div>
                <p className="text-3xl font-bold text-white">{stats.discounts}</p>
                <p className="text-sm text-purple-400 mt-2">4 הנחות חדשות</p>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400 font-semibold">קמפיינים</h3>
                  <span className="text-3xl">📢</span>
                </div>
                <p className="text-3xl font-bold text-white">{stats.campaigns}</p>
                <p className="text-sm text-orange-400 mt-2">2 קמפיינים פעילים</p>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400 font-semibold">המרות</h3>
                  <span className="text-3xl">✅</span>
                </div>
                <p className="text-3xl font-bold text-white">{stats.conversions}</p>
                <p className="text-sm text-green-400 mt-2">שיעור המרה: 12.5%</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">לידים אחרונים</h3>
                <div className="space-y-4">
                  {leads.slice(0, 5).map((lead) => (
                    <div key={lead.id} className="flex items-center gap-4 pb-4 border-b border-gray-700 last:border-0">
                      <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                        <span className="text-xl">👤</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white">{lead.name}</p>
                        <p className="text-sm text-gray-400">{lead.interest} • {lead.source}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        lead.status === 'חדש' ? 'bg-green-900 text-green-200' :
                        lead.status === 'בטיפול' ? 'bg-yellow-900 text-yellow-200' :
                        'bg-blue-900 text-blue-200'
                      }`}>
                        {lead.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">ביצועי קמפיינים</h3>
                <div className="space-y-4">
                  {campaigns.map((campaign) => (
                    <div key={campaign.id} className="pb-4 border-b border-gray-700 last:border-0">
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-semibold">{campaign.name}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          campaign.status === 'פעיל' ? 'bg-green-900 text-green-200' : 'bg-gray-600 text-gray-300'
                        }`}>
                          {campaign.status}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>תקציב: {campaign.budget}</span>
                        <span>הוצא: {campaign.spent}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(parseInt(campaign.spent.replace(/,/g, '')) / parseInt(campaign.budget.replace(/,/g, ''))) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>לידים: {campaign.leads}</span>
                        <span>המרות: {campaign.conversions}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === 'leads' && (
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">ניהול לידים</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-semibold transition-colors">
                  ייצא ל-Excel
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-semibold transition-colors">
                  סינון
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">שם</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">אימייל</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">טלפון</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">מקור</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">עניין</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">תאריך</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">סטטוס</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">פעולות</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-white font-medium">{lead.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{lead.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{lead.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{lead.source}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{lead.interest}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-300">{lead.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          lead.status === 'חדש' ? 'bg-green-900 text-green-200' :
                          lead.status === 'בטיפול' ? 'bg-yellow-900 text-yellow-200' :
                          'bg-blue-900 text-blue-200'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <button className="text-blue-400 hover:underline">צפה</button>
                          <button className="text-green-400 hover:underline">עדכן</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <div>
            <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">כתבות</h3>
                <button
                  onClick={() => {
                    setShowArticleForm(true)
                    setEditingArticle(null)
                    setArticleForm({
                      title: '',
                      content: '',
                      excerpt: '',
                      author: '',
                      category: 'טכנולוגיה',
                      image: '',
                      readTime: '5 דקות'
                    })
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  + כתבה חדשה
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900">
                    <tr>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">כותרת</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">מחבר</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">קטגוריה</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">תאריך</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">צפיות</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">סטטוס</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">פעולות</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {articles.map((article) => (
                      <tr key={article.id} className="hover:bg-gray-700">
                        <td className="px-6 py-4 text-white font-medium">{article.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">{article.author}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">{article.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">{article.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">{article.views}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            article.status === 'פורסם' 
                              ? 'bg-green-900 text-green-200'
                              : 'bg-yellow-900 text-yellow-200'
                          }`}>
                            {article.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex gap-2">
                            <button onClick={() => handleEditArticle(article)} className="text-blue-400 hover:underline">ערוך</button>
                            <button className="text-green-400 hover:underline">פרסם</button>
                            <button className="text-red-400 hover:underline">מחק</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Article Form Modal */}
            {showArticleForm && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-700">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">{editingArticle ? 'ערוך כתבה' : 'כתבה חדשה'}</h3>
                    <button
                      onClick={() => {
                        setShowArticleForm(false)
                        setEditingArticle(null)
                      }}
                      className="text-gray-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  <form onSubmit={handleArticleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">כותרת</label>
                      <input
                        type="text"
                        value={articleForm.title}
                        onChange={(e) => setArticleForm({...articleForm, title: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">תקציר</label>
                      <textarea
                        value={articleForm.excerpt}
                        onChange={(e) => setArticleForm({...articleForm, excerpt: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">תוכן מלא</label>
                      <textarea
                        value={articleForm.content}
                        onChange={(e) => setArticleForm({...articleForm, content: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={10}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">מחבר</label>
                        <input
                          type="text"
                          value={articleForm.author}
                          onChange={(e) => setArticleForm({...articleForm, author: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">קטגוריה</label>
                        <select
                          value={articleForm.category}
                          onChange={(e) => setArticleForm({...articleForm, category: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="טכנולוגיה">טכנולוגיה</option>
                          <option value="קריירה">קריירה</option>
                          <option value="מלגות">מלגות</option>
                          <option value="אבטחה">אבטחה</option>
                          <option value="למידה">למידה</option>
                          <option value="הצלחות">הצלחות</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">קישור לתמונה</label>
                        <input
                          type="url"
                          value={articleForm.image}
                          onChange={(e) => setArticleForm({...articleForm, image: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="https://images.unsplash.com/..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">זמן קריאה</label>
                        <input
                          type="text"
                          value={articleForm.readTime}
                          onChange={(e) => setArticleForm({...articleForm, readTime: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="5 דקות"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        {editingArticle ? 'עדכן כתבה' : 'צור כתבה'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowArticleForm(false)
                          setEditingArticle(null)
                        }}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        ביטול
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Discounts Tab */}
        {activeTab === 'discounts' && (
          <div>
            <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">הנחות וקופונים</h3>
                <button
                  onClick={() => {
                    setShowDiscountForm(true)
                    setEditingDiscount(null)
                    setDiscountForm({
                      title: '',
                      code: '',
                      discount: '',
                      type: 'percentage',
                      validFrom: '',
                      validTo: '',
                      description: '',
                      maxUses: ''
                    })
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  + הנחה חדשה
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {discounts.map((discount) => (
                  <div key={discount.id} className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-bold text-white">{discount.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        discount.status === 'פעיל' ? 'bg-green-900 text-green-200' : 'bg-gray-600 text-gray-300'
                      }`}>
                        {discount.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-300 mb-4">
                      <p className="text-2xl font-bold text-blue-400">{discount.code}</p>
                      <p className="text-xl font-semibold text-white">הנחה: {discount.discount}</p>
                      <p>תוקף: {discount.validFrom} - {discount.validTo}</p>
                      <p>שימושים: {discount.uses} / {discount.maxUses}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        ערוך
                      </button>
                      <button className="flex-1 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        העתק קוד
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Discount Form Modal */}
            {showDiscountForm && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">{editingDiscount ? 'ערוך הנחה' : 'הנחה חדשה'}</h3>
                    <button
                      onClick={() => {
                        setShowDiscountForm(false)
                        setEditingDiscount(null)
                      }}
                      className="text-gray-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  <form onSubmit={handleDiscountSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">כותרת ההנחה</label>
                      <input
                        type="text"
                        value={discountForm.title}
                        onChange={(e) => setDiscountForm({...discountForm, title: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">קוד הנחה</label>
                        <input
                          type="text"
                          value={discountForm.code}
                          onChange={(e) => setDiscountForm({...discountForm, code: e.target.value.toUpperCase()})}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">סוג הנחה</label>
                        <select
                          value={discountForm.type}
                          onChange={(e) => setDiscountForm({...discountForm, type: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="percentage">אחוזים (%)</option>
                          <option value="fixed">סכום קבוע (ש\"ח)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {discountForm.type === 'percentage' ? 'אחוז הנחה' : 'סכום הנחה (ש\"ח)'}
                      </label>
                      <input
                        type="text"
                        value={discountForm.discount}
                        onChange={(e) => setDiscountForm({...discountForm, discount: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={discountForm.type === 'percentage' ? '20' : '1000'}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">תוקף מ-</label>
                        <input
                          type="date"
                          value={discountForm.validFrom}
                          onChange={(e) => setDiscountForm({...discountForm, validFrom: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">תוקף עד</label>
                        <input
                          type="date"
                          value={discountForm.validTo}
                          onChange={(e) => setDiscountForm({...discountForm, validTo: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">מספר שימושים מקסימלי</label>
                      <input
                        type="number"
                        value={discountForm.maxUses}
                        onChange={(e) => setDiscountForm({...discountForm, maxUses: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">תיאור</label>
                      <textarea
                        value={discountForm.description}
                        onChange={(e) => setDiscountForm({...discountForm, description: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                      />
                    </div>
                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        {editingDiscount ? 'עדכן הנחה' : 'צור הנחה'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowDiscountForm(false)
                          setEditingDiscount(null)
                        }}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        ביטול
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div>
            <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">קמפיינים שיווקיים</h3>
                <button
                  onClick={() => {
                    setShowCampaignForm(true)
                    setEditingCampaign(null)
                    setCampaignForm({
                      name: '',
                      description: '',
                      startDate: '',
                      endDate: '',
                      budget: '',
                      status: 'active',
                      targetAudience: '',
                      channels: []
                    })
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  + קמפיין חדש
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-white">{campaign.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        campaign.status === 'פעיל' ? 'bg-green-900 text-green-200' : 'bg-gray-600 text-gray-300'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{campaign.description}</p>
                    <div className="space-y-2 text-sm text-gray-300 mb-4">
                      <p>תאריכים: {campaign.startDate} - {campaign.endDate}</p>
                      <p>תקציב: {campaign.budget} | הוצא: {campaign.spent}</p>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(parseInt(campaign.spent.replace(/,/g, '')) / parseInt(campaign.budget.replace(/,/g, ''))) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>לידים: {campaign.leads}</span>
                        <span>המרות: {campaign.conversions}</span>
                        <span>שיעור המרה: {((campaign.conversions / campaign.leads) * 100).toFixed(1)}%</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        ערוך
                      </button>
                      <button className="flex-1 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        דוחות
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Form Modal */}
            {showCampaignForm && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">{editingCampaign ? 'ערוך קמפיין' : 'קמפיין חדש'}</h3>
                    <button
                      onClick={() => {
                        setShowCampaignForm(false)
                        setEditingCampaign(null)
                      }}
                      className="text-gray-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  <form onSubmit={handleCampaignSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">שם הקמפיין</label>
                      <input
                        type="text"
                        value={campaignForm.name}
                        onChange={(e) => setCampaignForm({...campaignForm, name: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">תיאור</label>
                      <textarea
                        value={campaignForm.description}
                        onChange={(e) => setCampaignForm({...campaignForm, description: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">תאריך התחלה</label>
                        <input
                          type="date"
                          value={campaignForm.startDate}
                          onChange={(e) => setCampaignForm({...campaignForm, startDate: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">תאריך סיום</label>
                        <input
                          type="date"
                          value={campaignForm.endDate}
                          onChange={(e) => setCampaignForm({...campaignForm, endDate: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">תקציב (ש\"ח)</label>
                      <input
                        type="text"
                        value={campaignForm.budget}
                        onChange={(e) => setCampaignForm({...campaignForm, budget: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="50000"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">קהל יעד</label>
                      <input
                        type="text"
                        value={campaignForm.targetAudience}
                        onChange={(e) => setCampaignForm({...campaignForm, targetAudience: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="סטודנטים, חיילים משוחררים, וכו'"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">ערוצי שיווק</label>
                      <div className="space-y-2">
                        {['גוגל', 'פייסבוק', 'אינסטגרם', 'לינקדאין', 'אתר'].map((channel) => (
                          <label key={channel} className="flex items-center gap-2 text-gray-300">
                            <input
                              type="checkbox"
                              checked={campaignForm.channels.includes(channel)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setCampaignForm({...campaignForm, channels: [...campaignForm.channels, channel]})
                                } else {
                                  setCampaignForm({...campaignForm, channels: campaignForm.channels.filter(c => c !== channel)})
                                }
                              }}
                              className="rounded"
                            />
                            {channel}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        {editingCampaign ? 'עדכן קמפיין' : 'צור קמפיין'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowCampaignForm(false)
                          setEditingCampaign(null)
                        }}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        ביטול
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">מקורות לידים</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">גוגל</span>
                    <span className="text-white font-semibold">45%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">פייסבוק</span>
                    <span className="text-white font-semibold">30%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">אתר</span>
                    <span className="text-white font-semibold">15%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">אחרים</span>
                    <span className="text-white font-semibold">10%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">ביצועי כתבות</h3>
                <div className="space-y-3">
                  {articles.slice(0, 3).map((article) => (
                    <div key={article.id} className="pb-3 border-b border-gray-700 last:border-0">
                      <p className="text-sm text-gray-300 mb-1 line-clamp-1">{article.title}</p>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">{article.views} צפיות</span>
                        <span className="text-blue-400">{article.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">המרות לפי חודש</h3>
                <div className="space-y-3">
                  {['מרץ 2024', 'פברואר 2024', 'ינואר 2024'].map((month, index) => (
                    <div key={month} className="flex justify-between items-center">
                      <span className="text-gray-300">{month}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${(3 - index) * 30}%` }}
                          ></div>
                        </div>
                        <span className="text-white font-semibold text-sm">{(3 - index) * 25}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">טרנדים ושינויים</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">עלייה בלידים</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">פיתוח תוכנה</span>
                      <span className="text-green-400">+35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">אבטחת מידע</span>
                      <span className="text-green-400">+28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">ניתוח נתונים</span>
                      <span className="text-green-400">+22%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">ירידה בלידים</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">עיצוב גרפי</span>
                      <span className="text-red-400">-12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">שיווק דיגיטלי</span>
                      <span className="text-red-400">-8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
