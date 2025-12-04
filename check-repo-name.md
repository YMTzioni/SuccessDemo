# בדיקת שם ה-Repository

אם האתר לא נראה טוב ב-GitHub Pages, זה כנראה בגלל ש-basePath לא מוגדר.

## איך לבדוק:

1. לך ל-GitHub repository שלך
2. בדוק את ה-URL - אם זה `username.github.io/repository-name` (לא רק `username.github.io`), אז צריך basePath

## פתרון:

עדכן את `next.config.js` עם שם ה-repository שלך:

```javascript
basePath: '/repository-name',  // החלף repository-name בשם האמיתי
trailingSlash: true,
```

ואז:
1. בנה מחדש: `npm run build`
2. Push ל-GitHub
3. GitHub Actions יפרסם מחדש

