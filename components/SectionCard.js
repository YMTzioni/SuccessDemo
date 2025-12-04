import Link from 'next/link'

export default function SectionCard({ title, content, icon, link, linkText }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
      {icon && (
        <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {content}
      </p>
      {link && (
        <Link
          href={link}
          className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          {linkText || 'קרא עוד →'}
        </Link>
      )}
    </div>
  )
}

