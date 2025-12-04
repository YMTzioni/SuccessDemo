module.exports = function imageLoader({ src, width, quality }) {
  // אם זה תמונה מקומית, נחזיר את ה-URL המקורי
  if (src.startsWith('/')) {
    return src
  }
  
  // אם זה תמונה מ-Unsplash, נחזיר את ה-URL המקורי ללא שינויים
  // Unsplash כבר מטפל באופטימיזציה של התמונות דרך הפרמטרים הקיימים ב-URL
  if (src.includes('images.unsplash.com')) {
    return src
  }
  
  // אחרת, נחזיר את ה-URL המקורי
  return src
}

