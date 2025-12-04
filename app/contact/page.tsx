'use client'

// Note: This page uses client-side features. For static export, 
// you may need to handle form submission differently or use a service like Formspree

import Layout from '@/components/Layout'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // כאן תהיה שליחה לשרת
    alert('תודה! נציג שלנו יצור איתך קשר בהקדם.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 dark:from-gray-900 dark:via-blue-900 dark:to-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">צור קשר</h1>
          <p className="text-xl text-blue-100 dark:text-gray-200">
            השאר פרטים וקבל ייעוץ אישי חינם מהמומחים שלנו
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              השאר פרטים ונחזור אליך
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  טלפון *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  אימייל *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  תחום עניין *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">בחר תחום</option>
                  <option value="ai-pro">AI PRO</option>
                  <option value="data-analyst">Data Analyst</option>
                  <option value="cyber">Cyber Security</option>
                  <option value="fullstack">Fullstack Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="devops">DevOps</option>
                  <option value="other">אחר</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                שלח פרטים וקבל ייעוץ חינם
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                פרטי יצירת קשר
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <div className="font-semibold mb-1">טלפון:</div>
                  <a href="tel:03-1234567" className="text-blue-600 dark:text-blue-400 hover:underline">
                    03-1234567
                  </a>
                </div>
                <div>
                  <div className="font-semibold mb-1">אימייל:</div>
                  <a href="mailto:info@success-college.ac.il" className="text-blue-600 dark:text-blue-400 hover:underline">
                    info@success-college.ac.il
                  </a>
                </div>
                <div>
                  <div className="font-semibold mb-1">כתובת:</div>
                  <div>תל אביב, ישראל</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                שעות פעילות
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <div>ראשון - חמישי: 09:00 - 18:00</div>
                <div>שישי: 09:00 - 13:00</div>
                <div>שבת: סגור</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">תקשורת דרך WhatsApp</h3>
              <p className="mb-6 text-blue-100 dark:text-gray-200">
                אפשר גם ליצור קשר ישירות דרך WhatsApp Business שלנו
              </p>
              <a
                href="https://wa.me/97231234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
              >
                פתח שיחה ב-WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

